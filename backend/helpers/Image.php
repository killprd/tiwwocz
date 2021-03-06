<?php
namespace backend\helpers;

use Yii;
use yii\web\UploadedFile;
use yii\web\HttpException;
use \yii\helpers\FileHelper;
use \yii\helpers\Url;
use \backend\helpers\GD;


class Image
{
    public static function upload(UploadedFile $fileInstance, $dir = '', $resizeWidth = null, $resizeHeight = null, $resizeCrop = false)
    {
        $fileName = 'uploads/'.$dir . DIRECTORY_SEPARATOR . Upload::getFileName($fileInstance);
        //print_r($fileName);exit;
        $uploaded = $resizeWidth
            ? self::copyResizedImage($fileInstance->tempName, $fileName, $resizeWidth, $resizeHeight, $resizeCrop)
            : $fileInstance->saveAs(Yii::getAlias('@frontend').'/web/'.$fileName);

        if(!$uploaded){
            throw new HttpException(500, 'Cannot upload file "'.$fileName.'". Please check write permissions.');
        }

        return Upload::getLink($fileName);
    }

    static function thumb($filename, $width = null, $height = null, $crop = true)
    {
        //echo Yii::getAlias('@webroot') . $filename;exit;
        if($filename && file_exists(($filename = Yii::getAlias('@frontend') .'/web/'. $filename)))
        {

            $info = pathinfo($filename);
            $thumbName = $info['filename'] . '-' . md5( filemtime($filename) . (int)$width . (int)$height . (int)$crop ) . '.' . $info['extension'];
            $thumbFile = Yii::getAlias('@frontend').'/web/' .  Upload::$UPLOADS_DIR . DIRECTORY_SEPARATOR . 'thumbs' . DIRECTORY_SEPARATOR . $thumbName;
           
            $thumbWebFile =  '../../frontend/web/' .  Upload::$UPLOADS_DIR . DIRECTORY_SEPARATOR . 'thumbs' . DIRECTORY_SEPARATOR . $thumbName;
            if(file_exists($thumbFile)){
                return $thumbWebFile;
            }
            elseif(FileHelper::createDirectory(dirname($thumbFile), 0777) && self::copyResizedImage($filename, $thumbFile, $width, $height, $crop)){
                return $thumbWebFile;
            }
        }

        return '';
    }

    static function copyResizedImage($inputFile, $outputFile, $width, $height = null, $crop = true)
    {
        if (extension_loaded('gd'))
        {
            $image = new GD($inputFile);

            if($height) {
                if($width && $crop){
                    $image->cropThumbnail($width, $height);
                } else {
                    $image->resize($width, $height);
                }
            } else {
                $image->resize($width);
            }
            return $image->save($outputFile);
        }
        elseif(extension_loaded('imagick'))
        {
            $image = new \Imagick($inputFile);

            if($height && !$crop) {
                $image->resizeImage($width, $height, \Imagick::FILTER_LANCZOS, 1, true);
            }
            else{
                $image->resizeImage($width, null, \Imagick::FILTER_LANCZOS, 1);
            }

            if($height && $crop){
                $image->cropThumbnailImage($width, $height);
            }

            return $image->writeImage($outputFile);
        }
        else {
            throw new HttpException(500, 'Please install GD or Imagick extension');
        }
    }
}
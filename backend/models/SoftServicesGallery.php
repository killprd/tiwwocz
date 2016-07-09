<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "soft_services_gallery".
 *
 * @property integer $id
 * @property string $file_name
 * @property string $title
 * @property integer $service_id
 */
class SoftServicesGallery extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'soft_services_gallery';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['file_name'], 'required'],
            [['title', 'service_id', 'user_id'],'safe'],
            [['service_id'], 'integer'],
            [['file_name'], 'file', 'skipOnEmpty' => true, 'extensions' => 'png, jpg', 'maxFiles' => 13],            
            [['title'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'file_name' => Yii::t('app', 'File Name'),
            'title' => Yii::t('app', 'Title'),
            'service_id' => Yii::t('app', 'Service ID'),
        ];
    }
}

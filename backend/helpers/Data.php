<?php
namespace app\helpers;

use Yii;
use app\helpers\Inflector;
use app\helpers\StringHelper;

class Data
{
    public static function cache($key, $duration, $callable)
    {
        $cache = Yii::$app->cache;
        if($cache->exists($key)){
            $data = $cache->get($key);
        }
        else{
            $data = $callable();

            if($data) {
                $cache->set($key, $data, $duration);
            }
        }
        return $data;
    }

    public static function getLocale()
    {
        return strtolower(substr(Yii::$app->language, 0, 2));
    }
}
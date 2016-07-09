<?php
namespace backend\helpers;

use Yii;

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


    public static function getKind(){
        $kind = [
            ['id'=>1,'name'=>Yii::t('app','From')],
            ['id'=>2,'name'=>Yii::t('app','Fixed price')],[
            'id'=>3,'name'=>Yii::t('app','Near offer')]
            ];
        return $kind;
    }


    public static function getTypePrice(){
        $kind = [['id'=>1,'name'=>Yii::t('app','Per person')],['id'=>2,'name'=>Yii::t('app','Per group')]];
        return $kind;
    }




    public static function getCurrency(){
        $kind = [['id'=>'CZK','name'=>'CZK'],['id'=>'EUR','name'=>'EUR'],['id'=>'USD','name'=>'USD'],['id'=>'RUB','name'=>'RUB'],['id'=>'CAD','name'=>'CAD'],['id'=>'AUD','name'=>'AUD'],['id'=>'GBP','name'=>'GBP'],['id'=>'JPY','name'=>'JPY']];
        return $kind;
    }


    public static function getServiceType(){
        $kind = [
            ['id'=>'1','name'=>Yii::t('app','Excursions for 1 day')],
            ['id'=>'2','name'=>Yii::t('app','Excursions for 2+ days')],
            ['id'=>'3','name'=>Yii::t('app','Private Tours')],
            ['id'=>'4','name'=>Yii::t('app','Private Transfers')],
            ['id'=>'5','name'=>Yii::t('app','Active Tourism')],
            ['id'=>'6','name'=>Yii::t('app','Health Tourism')],
            ['id'=>'7','name'=>Yii::t('app','Other services')],

        ];
        return $kind;
    }



}
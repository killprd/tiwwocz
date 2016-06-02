<?php
namespace frontend\models;

use Yii;
use yii\db\Query;
use yii\behaviors\SluggableBehavior;

class Country extends \yii\db\ActiveRecord
{
   
   
    const CACHE_KEY = 'soft_countries_table';
    
    public static function tableName()
    {
        return 'soft_country';
    }

    public function rules()
    {
        return [
            [['name','lang','flag'],'required'],
        ];
    }

    public function attributeLabels()
    {
        return [
        ];    
    }

     public function behaviors()
    {
        return [
            [
                'class' => SluggableBehavior::className(),
                'attribute' => 'slug',
                'slugAttribute' => 'slug',
            ],
        ];
    }

    
    public static function createdata(){
        foreach(Yii::$app->db->createCommand("select * FROM countries")->queryAll() as $item){
            $model = new self;
            $model->name = $item['name_cs'];
            $model->flag = 'cs_CZ';
            $model->slug = $item['name_cs'];
            $model->lang = 'cs_CZ';
            $model->old_name = $item['id'];
            $model->save();

            $model = new self;
            $model->name = $item['name_ru'];
            $model->flag = 'ru_RU';
            $model->slug = $item['name_ru'];
            $model->lang = 'ru_RU';
            $model->old_name = $item['id'];
            $model->save();

            $model = new self;
            $model->name = $item['name_en'];
            $model->flag = 'en_EN';
            $model->slug = $item['name_en'];
            $model->lang = 'en_EN';
            $model->old_name = $item['id'];
            $model->save();

            $model = new self;
            $model->name = $item['name_fr'];
            $model->flag = 'fr_FR';
            $model->slug = $item['name_fr'];
            $model->lang = 'fr_FR';
            $model->old_name = $item['id'];
            $model->save();

            $model = new self;
            $model->name = $item['name_de'];
            $model->flag = 'de_DE';
            $model->slug = $item['name_de'];
            $model->lang = 'de_DE';
            $model->old_name = $item['id'];
            $model->save();


            $model = new self;
            $model->name = $item['name_es'];
            $model->flag = 'es_ES';
            $model->slug = $item['name_es'];
            $model->lang = 'es_ES';
            $model->old_name = $item['id'];
            $model->save();

        }
    }


    public static function get($lang){

        if(\Yii::$app->cache->get('menu_countries_'.$lang)==Null){
            \Yii::$app->cache->set('menu_countries_'.$lang,self::find()->where(['lang'=>$lang])->all(), 3600);
            $menu_items = \Yii::$app->cache->get('menu_countries_'.$lang);
        }else{
            $menu_items = \Yii::$app->cache->get('menu_countries_'.$lang);
        }
        return $menu_items;
    }
}
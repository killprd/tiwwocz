<?php
namespace frontend\models;

use Yii;
use yii\db\Query;
use yii\behaviors\SluggableBehavior;

class Cities extends \yii\db\ActiveRecord
{
   
   
    const CACHE_KEY = 'soft_cities_table';
    
    public static function tableName()
    {
        return 'soft_cities';
    }

    public function rules()
    {
        return [
            [['name','lang','parent_id','status','slug'],'required'],
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
        foreach(Yii::$app->db->createCommand("select * FROM cities")->queryAll() as $item){
            $model = new self;
            $model->name = $item['name_cs'];
            $model->parent_id = '0';
            $model->status = 1;
            $model->slug = $item['name_cs'];
            $model->lang = 'cs_CZ';
            $model->save();

            $model = new self;
            $model->name = $item['name_ru'];
            $model->parent_id = '0';
            $model->status = 1;
            $model->slug = $item['name_ru'];
            $model->lang = 'ru_RU';
            $model->save();

            $model = new self;
            $model->name = $item['name_en'];
            $model->parent_id = '0';
            $model->status = 1;
            $model->slug = $item['name_en'];
            $model->lang = 'en_EN';
            $model->save();

            $model = new self;
            $model->name = $item['name_fr'];
            $model->parent_id = '0';
            $model->status = 1;
            $model->slug = $item['name_fr'];
            $model->lang = 'fr_FR';
            $model->save();

            $model = new self;
            $model->name = $item['name_de'];
            $model->parent_id = '0';
            $model->status = 1;
            $model->slug = $item['name_de'];
            $model->lang = 'de_DE';
            $model->save();


            $model = new self;
            $model->name = $item['name_es'];
            $model->parent_id = '0';
            $model->status = 1;
            $model->slug = $item['name_es'];
            $model->lang = 'es_ES';
            $model->save();

        }
    }


    public static function get($lang,$parent_id){

        if(\Yii::$app->cache->get('menu_cities_'.$lang.''.$parent_id)==Null){
            \Yii::$app->cache->set('menu_cities_'.$lang.''.$parent_id,self::find()->where(['lang'=>$lang,'parent_id'=>$parent_id])->all(), 3600);
            $menu_items = \Yii::$app->cache->get('menu_cities_'.$lang.''.$parent_id);
        }else{
            $menu_items = \Yii::$app->cache->get('menu_cities_'.$lang.''.$parent_id);
        }
        return $menu_items;
    }
}
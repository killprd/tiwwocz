<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "soft_pages".
 *
 * @property integer $page_id
 * @property integer $status
 * @property string $name
 * @property string $text
 * @property string $title
 * @property string $keywords
 * @property string $description
 * @property string $map_lat
 * @property string $map_long
 * @property integer $user_id
 * @property string $lang
 */
class SoftPages extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'soft_pages';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [[ 'text'], 'required'],
            [['status', 'user_id'], 'integer'],
            [['name', 'status','map_lat', 'map_long', 'user_id','title', 'keywords', 'description', 'lang'],'safe'],
            [['text'], 'string'],
            [['name', 'title', 'keywords', 'description'], 'string', 'max' => 255],
            [['map_lat', 'map_long', 'lang'], 'string', 'max' => 128],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'page_id' => Yii::t('app', 'Page ID'),
            'status' => Yii::t('app', 'Status'),
            'name' => Yii::t('app', 'Name'),
            'text' => Yii::t('app', 'Description page'),
            'title' => Yii::t('app', 'Title'),
            'keywords' => Yii::t('app', 'Keywords'),
            'description' => Yii::t('app', 'Description'),
            'map_lat' => Yii::t('app', 'Map Lat'),
            'map_long' => Yii::t('app', 'Map Long'),
            'user_id' => Yii::t('app', 'User ID'),
            'lang' => Yii::t('app', 'Lang'),
        ];
    }
}

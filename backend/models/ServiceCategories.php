<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "service_categories".
 *
 * @property integer $id
 * @property string $service_type
 * @property string $name
 * @property string $lang
 */
class ServiceCategories extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'service_categories';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['service_type', 'name', 'lang'], 'required'],
            [['service_type', 'name'], 'string', 'max' => 255],
            [['lang'], 'string', 'max' => 2],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'service_type' => Yii::t('app', 'Service Type'),
            'name' => Yii::t('app', 'Name'),
            'lang' => Yii::t('app', 'Lang'),
        ];
    }
}

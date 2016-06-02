<?php

namespace frontend\models;

use Yii;

/**
 * This is the model class for table "soft_users_data".
 *
 * @property integer $data_id
 * @property integer $parent_id
 * @property string $name
 * @property string $value
 */
class UsersData extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'soft_users_data';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['data_id', 'parent_id', 'name', 'value'], 'safe'],
            [['data_id', 'parent_id'], 'integer'],
            [['name'], 'string', 'max' => 128],
            [['value'], 'string', 'max' => 355],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'data_id' => Yii::t('app', 'Data ID'),
            'parent_id' => Yii::t('app', 'Parent ID'),
            'name' => Yii::t('app', 'Name'),
            'value' => Yii::t('app', 'Value'),
        ];
    }
}

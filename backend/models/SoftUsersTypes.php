<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "soft_users_types".
 *
 * @property integer $type_id
 * @property string $name
 * @property integer $roles
 * @property integer $visible
 */
class SoftUsersTypes extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'soft_users_types';
    }


    public static function getAll(){
        $result = self::getDb()->cache(function ($db) {
            return self::find()->all();
        });
        return $result;
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name'], 'required'],
            [['roles', 'visible'], 'integer'],
            [['name'], 'string', 'max' => 128],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'type_id' => Yii::t('app', 'Type ID'),
            'name' => Yii::t('app', 'Contact type'),
            'roles' => Yii::t('app', 'Roles'),
            'visible' => Yii::t('app', 'Visible'),
        ];
    }
}

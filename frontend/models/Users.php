<?php

namespace frontend\models;

use Yii;
use yii\db\Query;
use yii\behaviors\SluggableBehavior;
use frontend\models\UsersData;

/**
 * This is the model class for table "soft_users".
 *
 * @property integer $user_id
 * @property integer $status
 * @property string $lang
 * @property string $username
 * @property string $password
 * @property string $salt
 * @property string $name
 * @property string $surname
 * @property string $email
 * @property integer $role
 * @property string $adress
 * @property string $telephone
 * @property integer $zip
 * @property string $ic
 * @property string $dic
 * @property integer $licence
 * @property string $company_name
 * @property string $image
 * @property integer $method_activate
 */
class Users extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'soft_users';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['status'], 'required'],
            [['status'], 'integer'],
            [['lang'], 'string', 'max' => 64],
            [['username', 'password', 'salt', 'name', 'surname', 'email', 'adress', 'dic', 'company_name', 'image'], 'string', 'max' => 255],
            [['telephone', 'ic'], 'string', 'max' => 128],
            [[ 'lang', 'username', 'password', 'salt', 'name', 'surname', 'email', 'role', 'adress', 'telephone', 'zip', 'ic', 'dic', 'company_name', 'image','old_id'],'safe']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'user_id' => Yii::t('app', 'User ID'),
            'status' => Yii::t('app', 'Status'),
            'lang' => Yii::t('app', 'Lang'),
            'username' => Yii::t('app', 'Username'),
            'password' => Yii::t('app', 'Password'),
            'salt' => Yii::t('app', 'Salt'),
            'name' => Yii::t('app', 'Name'),
            'surname' => Yii::t('app', 'Surname'),
            'email' => Yii::t('app', 'Email'),
            'role' => Yii::t('app', 'Role'),
            'adress' => Yii::t('app', 'Adress'),
            'telephone' => Yii::t('app', 'Telephone'),
            'zip' => Yii::t('app', 'Zip'),
            'ic' => Yii::t('app', 'Ic'),
            'dic' => Yii::t('app', 'Dic'),
            'licence' => Yii::t('app', 'Licence'),
            'company_name' => Yii::t('app', 'Company Name'),
            'image' => Yii::t('app', 'Image'),
            'method_activate' => Yii::t('app', 'Method Activate'),
        ];
    }

    public static function createdata(){

        foreach(Yii::$app->db->createCommand("select * FROM users")->queryAll() as $item){
            $model = new self;
            $salt = self::randSalt(6);    

            $model->status = 1;
            $model->old_id = $item['id'];
            $model->lang = $item['nativ_lang'];
            $model->username = $item['email'];
            $model->password = $item['password']; 
            $model->salt = $salt; 
            $model->name = $item['name']; 
            $model->surname = $item['surname']; 
            $model->email = $item['email']; 
            $model->role = $item['role']; 
            $model->adress = $item['city'].','.$item['street'].','.$item['zip']; 
            $model->telephone = $item['phone']; 
            $model->zip = $item['zip']; 
            $model->ic = $item['ic']; 
            $model->dic = $item['dic']; 
            $model->licence = $item['licensed_guide']; 
            $model->company_name = $item['company_name']; 
            $model->image = $item['avatar']; 
            $model->method_activate = $item['method_activated']; 
                if($model->save()){
                    foreach(Yii::$app->db->createCommand("select usr_rate_avg,
                                                          usr_rate_sum_points,
                                                          usr_rate_count_vote,
                                                          odnoklassniki,
                                                          vkontakte,
                                                          pinterest,
                                                          linkedin,
                                                          google_plus,
                                                          twitter,
                                                          instagram,
                                                          facebook,
                                                          newsletter,
                                                          guide_type,
                                                          birth_year,
                                                          birth_month,
                                                          birth_day,
                                                          country,
                                                          city,
                                                          street,
                                                          web,
                                                          fax,
                                                          skype,
                                                          reg_date,
                                                          contract_date

                                                          FROM users WHERE id = '".$item['id']."' ")->queryOne() as $key => $value){
                        $md = new UsersData;
                        $md->parent_id = $model->user_id;
                        $md->name = $key;
                        $md->value = $value;
                        
                        if($md->save()){
                        
                        }else{
                            print_r($md->errors);exit;
                        }

                    }
                }else{
                    print_r($model->errors);exit;
                }

            

        }

    }



     private function createPassword($data,$salt){

        return MD5($salt.$data.$salt);
    }
    public static function randSalt($lenght){
        $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        $pass= substr(str_shuffle($chars),0,$lenght);    
        return MD5($pass);
    }




}

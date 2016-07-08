<?php

namespace backend\models;

use Yii;
use yii\db\Query;
use yii\behaviors\SluggableBehavior;
use backend\models\UsersData;
use common\models\User;
use yii\base\NotSupportedException;
use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;
use yii\web\IdentityInterface;
use yii\helpers\FileHelper;
use yii\imagine\Image;
use yii\helpers\Json;
use Imagine\Image\Box;
use Imagine\Image\Point;
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
class Users extends \yii\db\ActiveRecord implements IdentityInterface

{

    const STATUS_DELETED = 0;
    const STATUS_ACTIVE = 10;
    /**
     * @inheritdoc
     */
    public $data = [];   
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
            
           
            [['status'], 'integer'],           
            ['status', 'default', 'value' => self::STATUS_ACTIVE],
            ['role', 'default', 'value' => 'guide'],
            ['lang', 'default', 'value' => Yii::$app->language],
            [['lang'], 'string', 'max' => 64],
            [
                'image', 
                'image', 
                'extensions' => ['jpg', 'jpeg', 'png', 'gif'],
                'mimeTypes' => ['image/jpeg', 'image/pjpeg', 'image/png', 'image/gif'],
            ],
            ['image','image','skipOnEmpty' => true],
            [['username','name', 'surname', 'email','telephone','adress'],'safe','on'=>'insert'],
            [['username','name', 'surname', 'email','telephone','adress'], 'required', 'on' => 'update'],
            [['username', 'password', 'salt', 'name', 'surname', 'email', 'adress', 'dic', 'company_name'], 'string', 'max' => 255],
            [['telephone', 'ic'], 'string', 'max' => 128],
            [['password','lang', 'salt', 'role', 'adress', 'zip', 'ic', 'dic', 'company_name','old_id','datebirth', 'crop_info','short_text'],'safe']
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
            'short_text' => Yii::t('app', 'Short description'),
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


   



    public function checkUser($attribute, $params)
    {

        if($this->scenar==0){
            $row = \Yii::$app->db->createCommand("SELECT email FROM users WHERE email = '".$this->email."'")->queryAll();
            if(!isset(\Yii::$app->session['user']) OR \Yii::$app->session['user']==''){
                if(count($row)!=0){
                    $this->addError('email',Yii::t('app','This email {{$this->email}} already exist'));
                }
            }
        }
        return true;
    }






     public static function findIdentity($id)
    {
        return static::findOne(['user_id' => $id, 'status' => self::STATUS_ACTIVE]);
    }

    /**
     * @inheritdoc
     */
    public static function findIdentityByAccessToken($token, $type = null)
    {
        throw new NotSupportedException('"findIdentityByAccessToken" is not implemented.');
    }

    /**
     * Finds user by username
     *
     * @param string $username
     * @return static|null
     */
    public static function findByUsername($username)
    {
        return self::findOne(['username' => $username, 'status' => self::STATUS_ACTIVE]);
    }

    /**
     * Finds user by password reset token
     *
     * @param string $token password reset token
     * @return static|null
     */
    public static function findByPasswordResetToken($token)
    {
        if (!self::isPasswordResetTokenValid($token)) {
            return null;
        }

        return static::findOne([
            'password_reset_token' => $token,
            'status' => self::STATUS_ACTIVE,
        ]);
    }

    /**
     * Finds out if password reset token is valid
     *
     * @param string $token password reset token
     * @return boolean
     */
    public static function isPasswordResetTokenValid($token)
    {
        if (empty($token)) {
            return false;
        }

        $timestamp = (int) substr($token, strrpos($token, '_') + 1);
        $expire = Yii::$app->params['users.passwordResetTokenExpire'];
        return $timestamp + $expire >= time();
    }

    /**
     * @inheritdoc
     */
    public function getId()
    {
        return $this->getPrimaryKey();
    }

    /**
     * @inheritdoc
     */
    public function getAuthKey()
    {
        return $this->auth_key;
    }

    /**
     * @inheritdoc
     */
    public function validateAuthKey($authKey)
    {
        return $this->getAuthKey() === $authKey;
    }

    /**
     * Validates password
     *
     * @param string $password password to validate
     * @return boolean if password provided is valid for current user
     */
    public function validatePassword($password)
    {
        return Yii::$app->security->validatePassword($password, $this->password);
    }

    /**
     * Generates password hash from password and sets it to the model
     *
     * @param string $password
     */
    public function setPassword($password)
    {
        $this->password = Yii::$app->security->generatePasswordHash($password);
    }

    /**
     * Generates "remember me" authentication key
     */
    public function generateAuthKey()
    {
        $this->auth_key = Yii::$app->security->generateRandomString();
    }

    /**
     * Generates new password reset token
     */
    public function generatePasswordResetToken()
    {
        $this->password_reset_token = Yii::$app->security->generateRandomString() . '_' . time();
    }

    /**
     * Removes password reset token
     */
    public function removePasswordResetToken()
    {
        $this->password_reset_token = null;
    }








    public function beforeSave($insert)
    {
        
        if (parent::beforeSave($insert)) {
           
            if($this->password!=''){
                //print_r($this->password);exit;
                $user = new User();
                $hash = Yii::$app->security->generatePasswordHash($this->password);
                if (Yii::$app->getSecurity()->validatePassword($this->password, $hash)) {
                    $this->password = Yii::$app->security->generatePasswordHash($this->password); 
                } else {
                    echo 'chyba';exit;  
                }
                           
            }
            return true;
        } else {
            return false;
        }
    }



    public function afterSave($insert, $changedAttributes)
    {
            
            
            if(isset($this->image->tempName) && $this->image->tempName!=''){
                $image = Image::getImagine()->open($this->image->tempName);

                // rendering information about crop of ONE option 
                $cropInfo = Json::decode($this->crop_info)[0];
                $cropInfo['dWidth'] = (int)$cropInfo['dWidth']; //new width image
                $cropInfo['dHeight'] = (int)$cropInfo['dHeight']; //new height image
                $cropInfo['x'] = $cropInfo['x']; 
                $cropInfo['y'] = $cropInfo['y'];

                //delete old images
                $oldImages = FileHelper::findFiles(Yii::getAlias('@frontend/web/uploads/profile/thumbs'), [
                    'only' => [
                        $this->id . '.*',
                        'thumb_' . $this->id . '.*',
                    ], 
                ]);
                for ($i = 0; $i != count($oldImages); $i++) {
                    @unlink($oldImages[$i]);
                }

                //saving thumbnail
                $newSizeThumb = new Box($cropInfo['dWidth'], $cropInfo['dHeight']);
                $cropSizeThumb = new Box(200, 200); //frame size of crop
                $cropPointThumb = new Point($cropInfo['x'], $cropInfo['y']);
                
                $pathThumbImage = Yii::getAlias('@frontend/web/uploads/profile/thumbs') 
                    . '/thumb_' 
                    . $this->id 
                    . '.' 
                    . $this->image->getExtension();  

                $image->resize($newSizeThumb)
                    ->crop($cropPointThumb, $cropSizeThumb)
                    ->save($pathThumbImage, ['quality' => 100]);

                //saving original
                $image ='uploads/profile/' 
                    . $this->id 
                    . '.' 
                    . $this->image->getExtension();  

                $crop_info ='uploads/profile/thumbs/thumb_' 
                    . $this->id 
                    . '.' 
                    . $this->image->getExtension();
                


                 self::updatedata($image, $crop_info,$this->id);
                     
                

                


                $this->image->saveAs(
                    Yii::getAlias('@frontend/web/uploads/profile') 
                    . '/' 
                    . $this->id 
                    . '.' 
                    . $this->image->getExtension()
                );



               
            }
        
    }




    private static function updatedata($image,$thumb,$id){
        if($image!=''){
            \Yii::$app->db->createCommand("UPDATE soft_users SET image = '".$image."', crop_info = '".$thumb."' WHERE user_id = '".$id."'")->query();
        }
    }   














}

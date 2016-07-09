<?php
namespace backend\controllers;

use Yii;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use backend\models\Users;
use backend\models\UsersContacts;
use backend\models\UsersContactType;
use backend\helpers\Image;
use yii\web\UploadedFile;
use yii\helpers\ArrayHelper;
use yii\widgets\ActiveForm;



/**
 * Site controller
 */
class ProfileController extends Controller
{
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'rules' => [
                    [
                        'actions' => ['edit','update', 'delete','index','logout','clearImage','clear-image','image','createcontact','deletecontact'],
                        'allow' => true,
                    ],
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
        ];
    }

    public function actionIndex()
    {
        if(Yii::$app->user->isGuest){
            return $this->redirect('../../../../../');
        }
        

        $user_id = Yii::$app->user->identity->user_id;
        
        if(!$model = Users::findIdentity($user_id)){
            return $this->redirect('../../../../../');
        }
        //print_r($model);exit;

        $image = $model->image;
        $model->scenario = 'update';

        if($model->load(Yii::$app->request->post()) && $model->validate()) {

           




            $data = Yii::$app->request->post();

            if($data['Users']['password']==""){
                $model->password = $model->password;
            }

            
            if (isset($_FILES)) {
                               
               
                 $model->image = UploadedFile::getInstance($model, 'image');

                if ($model->image && $model->validate(['image'])) {
                    $model->image = \yii\web\UploadedFile::getInstance($model, 'image');

                 } else {                   
                    $model->image = $image;
                }
                                 
                
            }
            
           if($model->save()){
                Yii::$app->session->setFlash('success', Yii::t('app','Done'));
                if(Yii::$app->request->isAjax){

                    Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
                    Yii::$app->assetManager->bundles = [
                        'yii\bootstrap\BootstrapPluginAsset' => false,
                        'yii\bootstrap\BootstrapAsset' => false,
                        'yii\web\JqueryAsset' => false,
                        ];
                     return $this->renderAjax('_profileForm',['model'=>$model]);
                    Yii::$app->end();
                   
                    
                }
               
           }

        }



        $modelContacts = new UsersContactType();
        $modelsContacts = [new UsersContacts];
        return $this->render('index',[
            'model'=>$model,
            'modelContacts' => $modelContacts,
            'modelsContacts' => (empty($modelsContacts)) ? [new Address] : $modelsContacts
            ]);
         Yii::$app->end();
    }

    public function actionLogin()
    {
        if (!Yii::$app->user->isGuest) {
            return $this->goHome();
        }

        $model = new LoginForm();
        if ($model->load(Yii::$app->request->post()) && $model->login()) {
            return $this->goBack();
        } else {
            return $this->render('login', [
                'model' => $model,
            ]);
        }
    }

    public function actionLogout()
    {
        Yii::$app->user->logout();

        return $this->goHome();
    }





    public function actionClearImage($id)
    {
        $model = Users::findOne($id);

        if($model === null){
            $this->flash('error', Yii::t('easyii', 'Not found'));
        }
        elseif($model->image){
            $img1 = $model->image;
            $img2 = $model->crop_info;
            $model->image = '';
            $model->crop_info = '';
            if($model->update()){
                @unlink(Yii::getAlias('@frontend').'/web/'.$img1);
                @unlink(Yii::getAlias('@frontend').'/web/'.$img2);
                Yii::$app->session->setFlash('success', Yii::t('easyii', 'Image cleared'));
            } else {
                Yii::$app->session->setFlash('error', Yii::t('easyii', 'Update error. {0}', $model->formatErrors()));
            }
        }
        return $this->redirect(Yii::$app->request->referrer);
    }






    public function actionImage(){
        $user_id = Yii::$app->user->identity->user_id;  
        if(!$model = Users::findIdentity($user_id)){
            return $this->redirect('../../../../../');
        }


        Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        return $this->renderAjax('_profileImage',['model'=>$model]);
        Yii::$app->end();


    }









        public function actionCreatecontact()
    {   
       
        $data = Yii::$app->request->post();
        if(isset($data['UsersContactType'])){
            if(!($model = UsersContactType::find()->where(['name'=>$data['UsersContactType']['name'],'parent_id'=>$data['UsersContactType']['parent_id']])->one())){
                $model = new UsersContactType;
            }
        }else{
            $model = new UsersContactType;
        }

        $modelCustomer = $model;
        $modelsAddress = [new UsersContacts];
        if ($modelCustomer->load(Yii::$app->request->post())) {

            $modelsAddress = UsersContacts::createMultiple(UsersContacts::classname());
            UsersContacts::loadMultiple($modelsAddress, Yii::$app->request->post());

           
            // ajax validation
            /*if (Yii::$app->request->isAjax) {
                Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
                return ArrayHelper::merge(
                    ActiveForm::validateMultiple($modelsAddress),
                    ActiveForm::validate($modelCustomer)
                );
            }*/

            // validate all models
            $valid = $modelCustomer->validate();
            $valid = UsersContacts::validateMultiple($modelsAddress) && $valid;

            if ($valid) {
                $transaction = \Yii::$app->db->beginTransaction();
                try {
                    if ($flag = $modelCustomer->save(false)) {
                        foreach ($modelsAddress as $modelAddress) {
                            $modelAddress->parent_id = $modelCustomer->id;
                            if (! ($flag = $modelAddress->save(false))) {
                                $transaction->rollBack();
                                break;
                            }
                        }
                    }
                    if ($flag) {
                        $transaction->commit();
                       
                    }
                } catch (Exception $e) {
                    $transaction->rollBack();
                }
            }
        }
         if (Yii::$app->request->isAjax) {
                  // Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
                  // print_r($modelCustomer);exit;
                Yii::$app->assetManager->bundles = [
                'yii\bootstrap\BootstrapPluginAsset' => false,
                'yii\bootstrap\BootstrapAsset' => false,
                'yii\web\JqueryAsset' => false,
                ];
                    return $this->renderAjax('_contact',
                                            ['modelContacts' => new UsersContactType ,
                                            'modelsContacts' => [new UsersContacts] 
                                             ],false);
                    Yii::$app->end();
            }

        return $this->render('_contact', [
            'modelContacts' => $modelCustomer,
            'modelsContacts' => (empty($modelsAddress)) ? [new UsersContacts] : $modelsAddress
        ]);
    }



    public function actionDeletecontact($id){
        
        if(!($model = UsersContacts::findOne($id))){

        }else{
            $model->delete();
        }


        $modelCustomer = new UsersContactType;
        $modelsAddress = [new UsersContacts];
        return $this->renderAjax('_contact', [
            'modelContacts' => $modelCustomer,
            'modelsContacts' => (empty($modelsAddress)) ? [new UsersContacts] : $modelsAddress
        ]);

       



    }










}

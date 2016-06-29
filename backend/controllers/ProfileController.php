<?php
namespace backend\controllers;

use Yii;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use backend\models\Users;
use backend\helpers\Image;
use yii\web\UploadedFile;




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
                        'actions' => ['edit','update', 'delete','index','logout','clearImage','clear-image'],
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
                    $model->image = Image::upload($model->image, 'profile');
                } else {                   
                    $model->image = $image;
                }
            }
            
           if($model->save()){
                Yii::$app->session->setFlash('success', Yii::t('app','Done'));
           }

        } else {
           print_r($model->getErrors());

        }






        return $this->render('index',['model'=>$model]);
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
            $model->image = '';
            if($model->update()){
                @unlink(Yii::getAlias('@frontend').'/web'.$model->image);
                Yii::$app->session->setFlash('success', Yii::t('easyii', 'Image cleared'));
            } else {
                Yii::$app->session->setFlash('error', Yii::t('easyii', 'Update error. {0}', $model->formatErrors()));
            }
        }
        return $this->redirect(Yii::$app->request->referrer);
    }









}

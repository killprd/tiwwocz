<?php
namespace backend\controllers;

use Yii;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use common\models\LoginForm;
use backend\models\SoftPages as Pages;

/**
 * Site controller
 */
class PagesController extends Controller
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
                        'actions' => ['index', 'edit','delete','create','about','contact'],
                        'allow' => true,
                    ],
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
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
            return $this->redirect('../../../site/login');
        }

        return $this->render('index');
    }



    public function actionAbout()
    {
        
        if(Yii::$app->user->isGuest){
            return $this->redirect('../../../site/login');
        }
        $user_id = Yii::$app->user->identity->user_id;
        $model = new Pages;
        
        $model->name = 'about';
        if(Yii::$app->request->post()) {
           
            $data = Yii::$app->request->post();
            $lang = $data['SoftPages']['lang'];
           
           
            if(!($model = Pages::find()->where(['user_id'=>$user_id,'name'=>'about','lang'=>$lang])->one())){
                $model = new Pages;
            }
           

            if($model->load(Yii::$app->request->post()) && $model->validate()) {
                $model->save();
            }
        } 


        return $this->render('_edit',['model'=>$model,'page'=>'about','title'=>Yii::t('app','About page')]);
    }




    public function actionContact()
    {
        
        if(Yii::$app->user->isGuest){
            return $this->redirect('../../../site/login');
        }
        $user_id = Yii::$app->user->identity->user_id;
        $model = new Pages;
        
        $model->name = 'contact';
        if(Yii::$app->request->post()) {
           
            $data = Yii::$app->request->post();
            $lang = $data['SoftPages']['lang'];
           
           
            if(!($model = Pages::find()->where(['user_id'=>$user_id,'name'=>'contact','lang'=>$lang])->one())){
                $model = new Pages;
            }
           

            if($model->load(Yii::$app->request->post()) && $model->validate()) {
                $model->save();
            }
        } 


        return $this->render('_edit',['model'=>$model,'page'=>'contact','title'=>Yii::t('app','About page')]);
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
}

<?php
namespace backend\controllers;

use Yii;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use common\models\LoginForm;
use backend\models\SoftServices as Services;

/**
 * Site controller
 */
class ServicesController extends Controller
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
    public function init() {
        if(Yii::$app->user->isGuest){
            return $this->redirect('../../../site/login');
        }
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

         if(Yii::$app->request->get()){
            $searchModel = new Services();
            $dataProvider = $searchModel->search(Yii::$app->request->get());
        }else{
            $searchModel = new Services();
            $dataProvider = $searchModel->search([]);
        }
        

        return $this->render('index',[
            'dataProvider' => $dataProvider,
            'searchModel' => $searchModel,
            ]);
    }



    public function actionCreate()
    {        
       
        $model = new Services;

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['edit', 'id' => $model->id]);
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }



    public function actionEdit($id)
    {        
       
        if(!($model=Services::findOne($id))){
            return $this->redirect(['create']);
        }
        

        return $this->render('edit',['model'=>$model,'title'=>Yii::t('app','Service edit')]);
    }





    public function actionDelete($id)
    {        
       
        if(!($model = Services::findOne($id))){
            return $this->redirect(Yii::$app->request->referrer);
        }else{
            $model->delete();
        }
        return $this->redirect(Yii::$app->request->referrer);
        

    }





}

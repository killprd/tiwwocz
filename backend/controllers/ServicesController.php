<?php
namespace backend\controllers;

use Yii;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use common\models\LoginForm;
use yii\web\UploadedFile;
use backend\helpers\Image;
use backend\models\SoftServices as Services;
use backend\models\SoftServicesGallery;

/**
 * Site controller
 */
class ServicesController extends Controller
{
    /**
     * @inheritdoc
     */
    
    /**
     * @inheritdoc
     */
     public $enableCsrfValidation = false;
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

        if($model->load(Yii::$app->request->post()) && $model->validate()) {

           




            $data = Yii::$app->request->post();

                       
            if (isset($_FILES)) {
                       //echo Yii::getAlias('@frontend').'/web/'.Yii::$app->user->identity->user_id.'/services';exit;        
                if(!is_dir(Yii::getAlias('@frontend').'/web/uploads/'.Yii::$app->user->identity->user_id.'/services')){
                    mkdir(Yii::getAlias('@frontend').'/web/uploads/'.Yii::$app->user->identity->user_id.'/services', 0755,true);
                }
                
                $model->image = UploadedFile::getInstance($model, 'image');
                if ($model->image && $model->validate(['image'])) {
                    $model->image = Image::upload($model->image, Yii::$app->user->identity->user_id.'/services');
                } else {
                    $model->image = '';
                }
                                 
                //echo $model->image;exit;
            }
            
           if($model->save()){
               // Yii::$app->session->setFlash('success', Yii::t('app','Done'));
                return $this->redirect(['edit', 'id' => $model->service_id]);
               
           }

        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }



    public function actionEdit($id)
    {        
        if(Yii::$app->user->isGuest){
            return $this->redirect('../../../site/login');
        }

        $image = '';
        if(!($model=Services::find()->where(['service_id'=>$id,'user_id'=>Yii::$app->user->identity->user_id])->one())){
            return $this->redirect(['create']);
        }else{
            $image = $model->image;
        }


        if($model->load(Yii::$app->request->post()) && $model->validate()) {

            $data = Yii::$app->request->post();
                       
            if (isset($_FILES)) {
                       //echo Yii::getAlias('@frontend').'/web/'.Yii::$app->user->identity->user_id.'/services';exit;        
                if(!is_dir(Yii::getAlias('@frontend').'/web/uploads/'.Yii::$app->user->identity->user_id.'/services')){
                    mkdir(Yii::getAlias('@frontend').'/web/uploads/'.Yii::$app->user->identity->user_id.'/services', 0755,true);
                }
                
                $model->image = UploadedFile::getInstance($model, 'image');
                if ($model->image && $model->validate(['image'])) {

                    if($model->image->name!=''){
                        $model->image = Image::upload($model->image, Yii::$app->user->identity->user_id.'/services');
                    }else{
                        $model->image = $image;
                    }
                } else {
                    $model->image = $image;
                }
                                 
                
            }
            
           if($model->save()){
               
           }

        }




        

        return $this->render('edit',
            [
            'model'=>$model,
            'title'=>Yii::t('app','Service edit'),
            'model_gallery'=>new SoftServicesGallery,
            'gallery'=>SoftServicesGallery::find()->where(['service_id'=>$id])->all()
            ]);
    }


    public function actionGallery(){
       $data = Yii::$app->request->post();
       $model = new SoftServicesGallery;

            if (isset($_FILES)) {
           //print_r($_FILES);exit;
                       //echo Yii::getAlias('@frontend').'/web/'.Yii::$app->user->identity->user_id.'/services';exit;        
                if(!is_dir(Yii::getAlias('@frontend').'/web/uploads/'.Yii::$app->user->identity->user_id.'/services/gallery')){
                    mkdir(Yii::getAlias('@frontend').'/web/uploads/'.Yii::$app->user->identity->user_id.'/services/gallery', 0755,true);
                }
                
                $model->user_id = Yii::$app->user->identity->user_id;
                $model->service_id = $data['service_id'];
                $model->file_name = UploadedFile::getInstance($model, 'file_name');
                
              //print_r($model->file_name);exit;

                    $model->file_name = Image::upload($model->file_name, Yii::$app->user->identity->user_id.'/services/gallery');
                    if($model->save()){
                         return true;
                    }else{
                        print_r($model->getErrors());
                    } 
                
               

                    
                    
                     
                
            }





    }


     public function actionGalleryRefresh(){
       
        if(Yii::$app->user->isGuest){
            return $this->redirect('../../../site/login');
        }

        $id = Yii::$app->request->post('item');
        $model = SoftServicesGallery::find()->where(['service_id'=>$id,'user_id'=>Yii::$app->user->identity->user_id])->all();
        Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        Yii::$app->assetManager->bundles = [
            'yii\bootstrap\BootstrapPluginAsset' => false,
            'yii\bootstrap\BootstrapAsset' => false,
            'yii\web\JqueryAsset' => false,
            ];
        return $this->renderAjax('_gallery_ajax',['data'=>$model],false);
        Yii::$app->end;
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





    public function actionClearImage($id)
    {
        $model = Services::findOne($id);

        if($model === null){
            $this->flash('error', Yii::t('easyii', 'Not found'));
        }
        elseif($model->image){
            $img1 = $model->image;
            $model->image = '';
            if($model->update()){
                @unlink(Yii::getAlias('@frontend').'/web/'.$img1);
                Yii::$app->session->setFlash('success', Yii::t('easyii', 'Image cleared'));
            } else {
                Yii::$app->session->setFlash('error', Yii::t('easyii', 'Update error. {0}', $model->formatErrors()));
            }
        }
        return $this->redirect(Yii::$app->request->referrer);
    }











}

<?php

/* @var $this yii\web\View */

use yii\widgets\Breadcrumbs;
use backend\assets\AppAsset;
use common\widgets\Alert;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\helpers\ArrayHelper;
use yii\widgets\ActiveForm;
use backend\models\SoftPages as Pages;
use dosamigos\ckeditor\CKEditor;;
use backend\helpers\Languages;
use backend\helpers\Data;
use kartik\time\TimePicker;
use kartik\file\FileInput;
use backend\helpers\Image;
use yii\widgets\Pjax;
$user_id = Yii::$app->user->identity->user_id;

$asset = AppAsset::register($this);

$this->title = 'tiwwo';
?>

  <!-- Page -->
  <div class="page animsition">
    <div class="page-header">
      <h1 class="page-title"><?= Yii::t('app','Create service')?></h1>
    </div>
    <div class="page-content">
      <div class="panel">        
        
           <div class="panel">
                <div class=" panel-body nav-tabs-animate nav-tabs-horizontal">
                    


                    <ul role="tablist" data-plugin="nav-tabs" class="nav nav-tabs nav-tabs-line">
                        
                        <li role="presentation" class="active"><a role="tab" aria-controls="edit" href="#edit" data-toggle="tab"><?=Yii::t('app','Edit service')?></a></li>
                        <li role="presentation" class=""><a role="tab" aria-controls="gallery" href="#gallery" data-toggle="tab"><?=Yii::t('app','Gallery service')?></a></li>                                 
                    </ul>
                    



                    <div class="tab-content">
                        <div role="tabpanel" id="edit" class="tab-pane active  animation-slide-left"> 
                        <br/>               
           

                          <?php
                           $langs = Languages::getLanguage_flat();                         
                           $langs = $langs[Languages::get(Yii::$app->language)];
                           $kind = Data::getKind();
                           $type = Data::getTypePrice();
                           $currency = Data::getCurrency();
                           $service_type = Data::getServiceType();
                            $form = ActiveForm::begin([
                                      'enableAjaxValidation' => false,
                                      'enableClientValidation' => true,
                                      'id'=>'service-form-create',
                                      'options' => ['class' => '','data-pjax' => false, 'enctype' => 'multipart/form-data'],
                                  ]) 
                            ?>
                            <div class="row">
                                <div class="col-sm-6">
                                     <?= $form->field($model, 'service_type')->dropDownList(
                                        ArrayHelper::map($service_type, 'id', 'name'))->label(Yii::t('app','Choice service type'))
                                     ?>
                                    <?= $form->field($model, 'lang')->dropDownList(
                                        ArrayHelper::map($langs, 'lang', 'name'))->label(Yii::t('app','Choice language servies')) ?>
                                    <?= $form->field($model, 'title')->textInput() ?>
                                </div>
                                <div class="col-sm-6">

                                  <?php if($model->image!='') : ?>
                                       
                                            <img src="<?= '../../../../../'.$model->image?>" class="img-responsive img-thumbnail"/>
                                     
                                       <div class="clearfix"></div>
                                            <a href="<?= Url::to(['services/clear-image', 'id' => $model->primaryKey]) ?>" class="" data-pjax="0" title="<?= Yii::t('app', 'Clear image')?>">
                                                <i class="icon wb-trash"></i><?= Yii::t('app', 'Clear image')?>
                                            </a>
                                            <div class="clearfix"></div>

                                    <?php else: ?>
                                    
                                    <?=
                                    '<label class="control-label">Add Attachments</label>'.
                                     FileInput::widget([
                                        'model' => $model,
                                        'attribute' => 'image',
                                        'options' => ['multiple' => true,'accept' => 'image/*'],
                                        'pluginOptions' => [
                                            //'uploadUrl' => Url::to(['/site/file-upload']),
                                            'showPreview' => true,
                                            'showCaption' => true,
                                            'showRemove' => true,
                                            'showUpload' => false
                                        ],

                                    ]);
                                    ?>
                                    <?php endif; ?>
                                </div>
                            </div>
                            <hr/>
                            <div class="row">
                                <div class="col-sm-3">
                                    <?= $form->field($model, 'price_kind')->dropDownList(
                                      ArrayHelper::map($kind, 'id', 'name'))->label(Yii::t('app','Kind of price')) ?>
                                  
                                </div>

                                <div class="col-sm-3">
                                    <?= $form->field($model, 'type_price')->dropDownList(
                                      ArrayHelper::map($type, 'id', 'name'))->label(Yii::t('app','Type of price')) ?>
                                  
                                </div>

                                <div class="col-sm-3">
                                    <?= $form->field($model, 'price')->textInput() ?>
                                </div>


                                <div class="col-sm-3">
                                    <?= $form->field($model, 'currency')->dropDownList(
                                      ArrayHelper::map($currency, 'id', 'name'))->label(Yii::t('app','Currency')) ?>
                                  
                                </div>
                            </div>




                            <div class="row">
                                <div class="col-sm-4">
                                    <?= $form->field($model, 'count_members')->textInput()->label(Yii::t('app','Number of participants')) ?>
                                  
                                </div>

                                <div class="col-sm-4">
                                    <?= $form->field($model, 'count_members_from')->textInput()->label(Yii::t('app','Number of participants FROM')) ?>
                                  
                                </div>

                                <div class="col-sm-4">
                                    <?= $form->field($model, 'count_members_to')->textInput()->label(Yii::t('app','Number of participants TO')) ?>
                                </div>


                                
                            </div>

                            <div class="row">
                                <div class="col-sm-4">
                                    <label class="control-label" for="softservices-start_time"><?=Yii::t('app','Start AT')?></label>
                                    <?= TimePicker::widget([
                                        'name' => 'start_time', 
                                        'value' => '11:24',
                                        'pluginOptions' => [
                                            'showSeconds' => false,
                                            'showMeridian' => false,
                                            'minuteStep' => 5,                                        ]
                                    ]); ?>

                                  
                                </div>

                                <div class="col-sm-4">
                                    <label class="control-label" for="softservices-start_time"><?=Yii::t('app','End AT')?></label>
                                    <?= TimePicker::widget([
                                        'name' => 'end_time', 
                                        'value' => '11:24',
                                        'pluginOptions' => [
                                            'showSeconds' => false,
                                            'showMeridian' => false,
                                            'minuteStep' => 5,                                        ]
                                    ]); ?>
                                  
                                </div>

                                <div class="col-sm-4">
                                    <label class="control-label" for="softservices-start_time"><?=Yii::t('app','Duration')?></label>
                                    <?= TimePicker::widget([
                                        'name' => 'end_time', 
                                        'value' => '11:24',
                                        'pluginOptions' => [
                                            'showSeconds' => false,
                                            'showMeridian' => false,
                                            'minuteStep' => 5,                                        ]
                                    ]); ?>
                                </div>
                                <div class="clearfix"></div>
                                <br/>

                                <div class="clearfix"></div>
                                
                            </div>
                            <hr/>

                            <div class="row">
                                <div class="col-sm-6">
                                    <?= $form->field($model, 'included_in_price')->textArea(['rows'=>10])->label(Yii::t('app','What\'s Included?')) ?>
                                </div>
                                <div class="col-sm-6">
                                    <?= $form->field($model, 'noincluded_in_price')->textArea(['rows'=>10])->label(Yii::t('app','What is not included?')) ?>
                                </div>

                                 <div class="col-sm-12">
                                    <?= $form->field($model, 'needs')->textArea(['rows'=>10])->label(Yii::t('app','What to have with you')) ?>
                                </div>

                            </div>

                            <hr/>


                            <div class="row">
                                <div class="col-sm-6">
                                    <?= $form->field($model, 'start_place')->textArea()->label(Yii::t('app','Where to Get Started')) ?>
                                </div>


                                <div class="col-sm-6">
                                    <?= $form->field($model, 'transport')->textArea()->label(Yii::t('app','Transport')) ?>
                                </div>


                               

                            </div>

                            <hr/>

                            <?= $form->field($model, 'user_id')->hiddenInput(['value'=>Yii::$app->user->identity->user_id])->label(false) ?>
                            

                            <div class="row">
                                <div class="col-sm-12">
                                    <?= $form->field($model, 'text')->widget(CKEditor::className(), [
                                        'options' => ['rows' => 25],
                                        'preset' => 'basic',
                                    ])->label(Yii::t('app','Desctiprion')) ?>
                                </div>
                               

                            </div>
                            



                            <?= Html::submitButton(Yii::t('app','Save'), ['class' => 'btn btn-primary']) ?>
                          <?php ActiveForm::end() ?>
                 

                        </div>

                        <div role="tabpanel" id="gallery" class="tab-pane  animation-slide-left">
                        <br>
                        <?php $form1 = ActiveForm::begin([
                                'options'=>['enctype'=>'multipart/form-data','action'=>'../../../admin/services/gallery'] // important
                            ]);
                            ?>
                                    <?=
                                    
                                     $form->field($model_gallery, 'file_name')->widget(FileInput::classname(),[

                                        'name' => 'file_name',
                                        'options' => ['multiple' => true,'accept' => 'image/*','id'=>'file_name',],
                                        'id'=>'file_name',
                                        'pluginOptions' => [
                                            'uploadUrl' => Url::to(['/services/gallery']),
                                            'language'=>'cs',
                                            'id'=>'file_name',
                                            'uploadExtraData' => [
                                                'service_id' => $model->service_id,
                                            ],
                                            'uploadAsync'=> true,
                                           
                                        ],

                                    ]);
                                    ?>
                                    <?= $form->field($model_gallery, 'service_id')->hiddenInput(['value'=>$model->service_id,'id'=>'service_id'])->label(false) ?>
                           <?php ActiveForm::end() ?>


                           <br/>
                           <br/>
                           <br/>
                           <?php  Pjax::begin(['enablePushState' => false,'id'=>'_gallery_ajax','timeout'=>0]); ?> 
                                    <?= $this->render('_gallery_ajax',['data'=>$gallery]);?>
                            <?php Pjax::end(); ?>
                           

                        </div>

                    </div>





                </div>
                







                








            </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Page -->
  <!-- Footer -->
  <?php


 
$this->registerJs("
        function galleryRefresh(){
            var service_id = $('#service_id').val();
            $.ajax({
            url: '/admin/".Yii::$app->language."/services/gallery-refresh',
            type: 'post',
            data: {item:service_id},            
            success: function(data) {
                
                $('#_gallery_ajax').html(data);
                 return false;
            }
        });
        }
        $( document ).ready(function() {
            console.log($('#file_name').val());
            $('#file_name').on('fileuploaded', function(event, data) {
                var formdata = data.form, files = data.files, 
                    extradata = data.extra, responsedata = data.response;
                    galleryRefresh();
            });
        });
   

    "
);?>

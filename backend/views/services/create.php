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
            <div class=" panel-body"> 
                <br/>               
           

                          <?php
                           $langs = Languages::getLanguage_flat();                         
                           $langs = $langs[Languages::get(Yii::$app->language)];
                           $kind = Data::getKind();
                           $type = Data::getTypePrice();
                           $currency = Data::getCurrency();
                            $form = ActiveForm::begin([
                                      'enableAjaxValidation' => true,
                                      'enableClientValidation' => true,
                                      'id'=>'service-form-create',
                                      'options' => ['class' => '','data-pjax' => false, 'enctype' => 'multipart/form-data'],
                                  ]) 
                            ?>
                            <?= $form->field($model, 'lang')->dropDownList(
                                ArrayHelper::map($langs, 'lang', 'name'))->label(Yii::t('app','Choice language servies')) ?>
                            <?= $form->field($model, 'title')->textInput() ?>
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




                            



                            <?= Html::submitButton(Yii::t('app','Save'), ['class' => 'btn btn-primary']) ?>
                          <?php ActiveForm::end() ?>
                 







                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Page -->
  <!-- Footer -->
  

<?php

/* @var $this yii\web\View */

use yii\widgets\Breadcrumbs;
use backend\assets\AppAsset;
use common\widgets\Alert;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\widgets\ActiveForm;
use backend\models\SoftPages as Pages;
use dosamigos\ckeditor\CKEditor;;
$user_id = Yii::$app->user->identity->user_id;

$asset = AppAsset::register($this);

$this->title = 'tiwwo';
?>

  <!-- Page -->
  <div class="page animsition">
    <div class="page-header">
      <h1 class="page-title"><?= Yii::t('app',$title)?></h1>
    </div>
    <div class="page-content">
      <div class="panel">        
        <div class="panel">
            <div class=" panel-body nav-tabs-animate nav-tabs-horizontal">                               


                <ul role="tablist" data-plugin="nav-tabs" class="nav nav-tabs nav-tabs-line">
                    
                    <li role="presentation" class="<?= (Yii::$app->language=='en'?'active':null)?>"><a role="tab" aria-controls="en" href="#en" data-toggle="tab"><?=Yii::t('app','EN')?></a></li>
                    <li role="presentation" class="<?= (Yii::$app->language=='de'?'active':null)?>"><a role="tab" aria-controls="de" href="#de" data-toggle="tab"><?=Yii::t('app','DE')?></a></li>
                    <li role="presentation" class="<?= (Yii::$app->language=='cs'?'active':null)?>"><a role="tab" aria-controls="cz" href="#cz" data-toggle="tab"><?=Yii::t('app','CZ')?></a></li>
                    <li role="presentation" class="<?= (Yii::$app->language=='ru'?'active':null)?>"><a role="tab" aria-controls="ru" href="#ru" data-toggle="tab"><?=Yii::t('app','RU')?></a></li>                                    
                </ul>
                <br/>
                <div class="tab-content">
                    <div role="tabpanel" id="en" class="tab-pane <?= (Yii::$app->language=='en'?'active':null)?> animation-slide-left">
           

                          <?php
                            if(!($model = Pages::find()->where(['user_id'=>$user_id,'name'=>$page,'lang'=>'en_EN'])->one())){
                                $model = new Pages;
                            }
                            $form = ActiveForm::begin([
                                      'enableAjaxValidation' => true,
                                      'enableClientValidation' => true,
                                      'id'=>'page-form',
                                      'options' => ['class' => '','data-pjax' => false, 'enctype' => 'multipart/form-data'],
                                  ]) 
                            ?>
                            


                            <?= $form->field($model, 'text')->widget(CKEditor::className(), [
                                'options' => ['rows' => 25,'id'=>'text-en'],
                                'preset' => 'basic',
                            ]) ?>
                            <?= $form->field($model, 'map_lat')->textInput() ?>
                            <?= $form->field($model, 'map_long')->textInput() ?>

                            <hr/>


                            <?= $form->field($model, 'title')->textInput() ?>
                            <?= $form->field($model, 'keywords')->textInput() ?>
                            <?= $form->field($model, 'description')->textInput() ?>
                            
                            <?= $form->field($model, 'user_id')->hiddenInput(['value'=>Yii::$app->user->identity->user_id])->label(false) ?>
                            <?= $form->field($model, 'lang')->hiddenInput(['value'=>'en_EN'])->label(false) ?>
                            <?= $form->field($model, 'name')->hiddenInput(['value'=>$page])->label(false) ?>



                            <?= Html::submitButton(Yii::t('app','Save'), ['class' => 'btn btn-primary']) ?>
                          <?php ActiveForm::end() ?>
                    </div>



                    <div role="tabpanel" id="de" class="tab-pane <?= (Yii::$app->language=='de'?'active':null)?>  animation-slide-left">
           

                          <?php
                            if(!($model = Pages::find()->where(['user_id'=>$user_id,'name'=>$page,'lang'=>'de_DE'])->one())){
                                $model = new Pages;
                            }
                            $form = ActiveForm::begin([
                                      'enableAjaxValidation' => true,
                                      'enableClientValidation' => true,
                                      'id'=>'page-form',
                                      'options' => ['class' => '','data-pjax' => false, 'enctype' => 'multipart/form-data'],
                                  ]) 
                            ?>
                            


                            <?= $form->field($model, 'text')->widget(CKEditor::className(), [
                                'options' => ['rows' => 25,'id'=>'text-de'],
                                'preset' => 'basic',
                                'id'=>'text-de'
                            ]) ?>
                            <?= $form->field($model, 'map_lat')->textInput() ?>
                            <?= $form->field($model, 'map_long')->textInput() ?>

                            <hr/>


                            <?= $form->field($model, 'title')->textInput() ?>
                            <?= $form->field($model, 'keywords')->textInput() ?>
                            <?= $form->field($model, 'description')->textInput() ?>
                            
                            <?= $form->field($model, 'user_id')->hiddenInput(['value'=>Yii::$app->user->identity->user_id])->label(false) ?>
                            <?= $form->field($model, 'lang')->hiddenInput(['value'=>'de_DE'])->label(false) ?>
                            <?= $form->field($model, 'name')->hiddenInput(['value'=>$page])->label(false) ?>



                            <?= Html::submitButton(Yii::t('app','Save'), ['class' => 'btn btn-primary']) ?>
                          <?php ActiveForm::end() ?>
                    </div>



                    <div role="tabpanel" id="cz" class="tab-pane <?= (Yii::$app->language=='cs'?'active':null)?> animation-slide-left">
           

                          <?php
                            if(!($model = Pages::find()->where(['user_id'=>$user_id,'name'=>$page,'lang'=>'cs_CZ'])->one())){
                                $model = new Pages;
                            }
                            $form = ActiveForm::begin([
                                      'enableAjaxValidation' => true,
                                      'enableClientValidation' => true,
                                      'id'=>'page-form',
                                      'options' => ['class' => '','data-pjax' => false, 'enctype' => 'multipart/form-data'],
                                  ]) 
                            ?>
                            


                            <?= $form->field($model, 'text')->widget(CKEditor::className(), [
                                'options' => ['rows' => 25,'id'=>'text-cs'],
                                'preset' => 'basic',
                                'id'=>'text-cs'
                            ]) ?>
                            <?= $form->field($model, 'map_lat')->textInput() ?>
                            <?= $form->field($model, 'map_long')->textInput() ?>

                            <hr/>


                            <?= $form->field($model, 'title')->textInput() ?>
                            <?= $form->field($model, 'keywords')->textInput() ?>
                            <?= $form->field($model, 'description')->textInput() ?>
                            
                            <?= $form->field($model, 'user_id')->hiddenInput(['value'=>Yii::$app->user->identity->user_id])->label(false) ?>
                            <?= $form->field($model, 'lang')->hiddenInput(['value'=>'cs_CZ'])->label(false) ?>
                            <?= $form->field($model, 'name')->hiddenInput(['value'=>$page])->label(false) ?>



                            <?= Html::submitButton(Yii::t('app','Save'), ['class' => 'btn btn-primary']) ?>
                          <?php ActiveForm::end() ?>
                    </div>



                    <div role="tabpanel" id="ru" class="tab-pane  <?= (Yii::$app->language=='ru'?'active':null)?> animation-slide-left">
           

                          <?php
                            if(!($model = Pages::find()->where(['user_id'=>$user_id,'name'=>$page,'lang'=>'ru_RU'])->one())){
                                $model = new Pages;
                            }
                            $form = ActiveForm::begin([
                                      'enableAjaxValidation' => true,
                                      'enableClientValidation' => true,
                                      'id'=>'page-form',
                                      'options' => ['class' => '','data-pjax' => false, 'enctype' => 'multipart/form-data'],
                                  ]) 
                            ?>
                            


                            <?= $form->field($model, 'text')->widget(CKEditor::className(), [
                                'options' => ['rows' => 25,'id'=>'text-ru'],
                                'preset' => 'basic'
                            ]) ?>
                            <?= $form->field($model, 'map_lat')->textInput() ?>
                            <?= $form->field($model, 'map_long')->textInput() ?>

                            <hr/>


                            <?= $form->field($model, 'title')->textInput() ?>
                            <?= $form->field($model, 'keywords')->textInput() ?>
                            <?= $form->field($model, 'description')->textInput() ?>
                            
                            <?= $form->field($model, 'user_id')->hiddenInput(['value'=>Yii::$app->user->identity->user_id])->label(false) ?>
                            <?= $form->field($model, 'lang')->hiddenInput(['value'=>'ru_RU'])->label(false) ?>
                            <?= $form->field($model, 'name')->hiddenInput(['value'=>$page])->label(false) ?>



                            <?= Html::submitButton(Yii::t('app','Save'), ['class' => 'btn btn-primary']) ?>
                          <?php ActiveForm::end() ?>
                    </div>



                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Page -->
  <!-- Footer -->
  

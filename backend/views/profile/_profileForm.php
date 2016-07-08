<?php

/* @var $this yii\web\View */
use yii\helpers\Html;
use yii\helpers\Url;
use yii\widgets\ActiveForm;
use yii\widgets\Breadcrumbs;
use backend\assets\AppAsset;
use backend\helpers\Image;
use common\widgets\Alert;
use kartik\date\DatePicker;
use bupy7\cropbox\Cropbox;
use yii\helpers\ArrayHelper;
use backend\models\SoftUsersTypes;
use common\models\Helpers;
$asset = AppAsset::register($this);
 

?> 


<?php
          foreach (Yii::$app->session->getAllFlashes() as $key => $message) {
          echo '<div class="alert alert-' . $key . '" role="alert">' . $message . '</div>';
          }
      ?>


<?php
        $form = ActiveForm::begin([
                  'enableAjaxValidation' => true,
                  'enableClientValidation' => true,
                  'id'=>'profile-form',
                  'options' => ['class' => '','data-pjax' => false, 'enctype' => 'multipart/form-data'],
              ]) 
      ?>
      <div class="col-sm-6">
      <?php if($model->image!='') : ?> 
        
          <?php else: ?>
              <?= $form->field($model, 'image')->widget(Cropbox::className(), [
                                                                                  'attributeCropInfo' => 'crop_info',
                                                                              ]); ?>
          <?php endif; ?>

          </div>

      <div class="clearfix"></div>
      <hr>
      <div class="clearfix"></div>




      <div class="col-md-6">
      <?=$form->field($model, 'role')
       ->dropDownList(
              ArrayHelper::map(SoftUsersTypes::find()->where(['visible'=>1])->all(), 'type_id', 'name')
              )?>
      </div>
      <div class="col-sm-6">
        <label><?= Yii::t('app','Your profile is:'). '</label> ' . Helpers::statusUser($model->status)?>
      </div>



      
      <div class="clearfix"></div>
      <hr>
      <div class="clearfix"></div>



      <div class="col-md-12">
          <?= $form->field($model, 'company_name')->textInput() ?>
      </div>


      <div class="col-md-6">
          <?= $form->field($model, 'ic')->textInput() ?>
      </div>



      <div class="col-md-6">
          <?= $form->field($model, 'dic')->textInput() ?>
      </div>


      <div class="col-md-12">
          <?= $form->field($model, 'short_text')->textArea() ?>
      </div>

      <div class="clearfix"></div>
      <hr>
      <div class="clearfix"></div>



      <div class="col-md-6">
          <?= $form->field($model, 'datebirth')->widget(DatePicker::classname(), [
              'options' => ['placeholder' => Yii::t('app','Enter birth date ...')],
              'removeButton'=>false,                                                        
              'pickerButton'=>[
                  'label'=>'<i class="glyphicon glyphicon-calendar"></i>',
              ],
              'pluginOptions' => [
                  'autoclose'=>true,
                  'format' => 'yyyy.mm.dd'
              ]
          ]); ?>
      </div>



      <div class="col-md-6">
          <?= $form->field($model, 'name')->textInput() ?>
      </div>



      <div class="col-md-6">
          <?= $form->field($model, 'surname')->textInput() ?>
      </div>



      <div class="col-md-6">
          <?= $form->field($model, 'email')->textInput(['disabled'=>'false']) ?>
      </div>



      <div class="col-md-6">
          <?= $form->field($model, 'telephone')->textInput() ?>
      </div>




      <div class="clearfix"></div>
      <hr>
      <div class="clearfix"></div>

      <div class="col-md-6">
          <?= $form->field($model, 'adress')->textArea() ?>
      </div>



      <div class="clearfix"></div>
      <hr>
      <div class="clearfix"></div>
      <?= $form->field($model, 'username')->textInput(['disabled'=>true]) ?>
      <?= $form->field($model, 'password')->passwordInput(['value'=>'','placeholder'=>'Vaše heslo','htmlOptions'=>['autocomplete'=>'off']]) ?>
     

      <div class="clearfix"></div>
      <hr>
      <div class="clearfix"></div>

      <?= Html::submitButton(Yii::t('app','Save'), ['class' => 'btn btn-primary']) ?>
  <?php ActiveForm::end() ?>
  <!-- Footer -->
  





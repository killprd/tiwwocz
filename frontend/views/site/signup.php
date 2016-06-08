<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\SignupForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use frontend\assets\AppAsset;
use common\widgets\Alert;
$asset = AppAsset::register($this);

$this->title = 'Signup';
$this->params['breadcrumbs'][] = $this->title;
?>

   
        <div class="page animsition vertical-align text-center" data-animsition-in="fade-in" data-animsition-out="fade-out">
            <div class="page-content vertical-align-middle">
                <div class="brand">
                    TIWWO.CZ
                    <h2 class="brand-text"><?= Html::encode($this->title) ?></h2>
                </div>
                <p>Sign into your pages account</p>
              

                <?php $form = ActiveForm::begin(['id' => 'form-signup']); ?>

                    <?= $form->field($model, 'name')->textInput(['autofocus' => true,'placeholder'=>Yii::t('app','Your name')])->label(false) ?>
                    <?= $form->field($model, 'surname')->textInput(['autofocus' => true,'placeholder'=>Yii::t('app','Your surname')])->label(false) ?>
                    <?= $form->field($model, 'email')->textInput(['autofocus' => true,'placeholder'=>Yii::t('app','E-mail')])->label(false) ?>


                    <?= $form->field($model, 'password')->passwordInput(['placeholder'=>Yii::t('app','Password')])->label(false) ?>

                    
                    <div class="form-group clearfix">
                        <div class="checkbox-custom checkbox-inline checkbox-primary pull-left">
                            <input type="checkbox" id="inputCheckbox" name="remember">
                            <label for="inputCheckbox">Remember me</label>
                        </div>
                        <a class="pull-right" href="forgot-password.html">Forgot password?</a>
                    </div>





                    <div class="form-group">
                        <?= Html::submitButton('Signup', ['class' => 'btn btn-primary', 'name' => 'signup-button']) ?>
                    </div>





                <?php ActiveForm::end(); ?>
             
            </div>
        </div>




<style>
     
    @import url(<?= $asset->baseUrl?>/assets/css/login.css);
    @import url(<?= $asset->baseUrl?>/global/fonts/web-icons/web-icons.css);
</style>
<?php $this->registerJsFile($asset->baseUrl.'/assets/js/jquery-1.11.2.min.js',['depends' => [\yii\web\JqueryAsset::className()]]); ?>


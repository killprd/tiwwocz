<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \common\models\LoginForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use frontend\assets\AppAsset;
use common\widgets\Alert;
$asset = AppAsset::register($this);
$this->title = 'Login';
$this->params['breadcrumbs'][] = $this->title;
?>

   <div class="page animsition vertical-align text-center" data-animsition-in="fade-in" data-animsition-out="fade-out">
            <div class="page-content vertical-align-middle">
                <div class="brand">
                    TIWWO.CZ
                    <h2 class="brand-text"><?= Html::encode($this->title) ?></h2>
                </div>
                <p>Please fill out the following fields to login:</p>


    

   
            <?php $form = ActiveForm::begin(['id' => 'login-form']); ?>

                <?= $form->field($model, 'username')->textInput(['autofocus' => true]) ?>

                <?= $form->field($model, 'password')->passwordInput() ?>

                <?= $form->field($model, 'rememberMe')->checkbox() ?>

                <div style="color:#999;margin:1em 0">
                    If you forgot your password you can <?= Html::a('reset it', ['site/request-password-reset']) ?>.
                </div>

                <div class="form-group">
                    <?= Html::submitButton('Login', ['class' => 'btn btn-primary', 'name' => 'login-button']) ?>
                </div>

            <?php ActiveForm::end(); ?>
     
            </div>
        </div>





<style>
     
    @import url(<?= $asset->baseUrl?>/assets/css/login.css);
    @import url(<?= $asset->baseUrl?>/global/fonts/web-icons/web-icons.css);
</style>
<?php $this->registerJsFile($asset->baseUrl.'/assets/js/jquery-1.11.2.min.js',['depends' => [\yii\web\JqueryAsset::className()]]); ?>



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
   
    <div class="page-content">
      <div class="panel">        
        edit
      </div>
    </div>
  </div>
  <!-- End Page -->
  <!-- Footer -->
  

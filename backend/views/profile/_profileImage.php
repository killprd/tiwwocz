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
 
$this->title = 'tiwwo';
//print_r($model);
?>

<?php if($model->image!='') : ?>
   <div class="avatar avatar-lg">  
        <img src="<?= Image::thumb($model->crop_info, 480) ?>"/>
   </div>
   <div class="clearfix"></div>
        <a href="<?= Url::to(['profile/clear-image', 'id' => $model->primaryKey]) ?>" class="" data-pjax="0" title="<?= Yii::t('app', 'Clear image')?>">
            <i class="icon wb-trash"></i><?= Yii::t('app', 'Clear image')?>
        </a>
        <div class="clearfix"></div>

<?php else: ?>
           <?= Yii::t('app','No profile image')?>
<?php endif; ?>

 <h4 class="profile-user"><?=$model->name?> <?=$model->surname?></h4>
                                        

  <p class="profile-job"><?= Helpers::roleName($model->role)?></p>
  <p><?=$model->short_text?></p>


  <!-- End Page -->
  <!-- Footer -->
  
  

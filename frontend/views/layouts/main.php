<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;

use yii\widgets\Breadcrumbs;
use frontend\assets\AppAsset;
use common\widgets\Alert;
$asset = AppAsset::register($this);

?>


<?php $this->beginContent('@app/views/layouts/base.php'); ?>

<div class="block_hp container-fluid">      
   
   
    <div class="col-sm-4 col-sm-offset-8">

        <?= $this->render('//modules/_langs')?>
    </div>
    


 


        
        <?= Alert::widget() ?>
        <?= $content ?>


                        

                   
        

            
     




    

<?php             
$this->registerJs('$(document).on("pjax:timeout", function(event) {
  // Prevent default timeout redirection behavior
  event.preventDefault()
});');   
?>
<style>
     
    @import url(<?= $asset->baseUrl?>/assets/css/hp.css);
</style>
<?php $this->registerJsFile($asset->baseUrl.'/assets/js/jquery-1.11.2.min.js',['depends' => [\yii\web\JqueryAsset::className()]]); ?>
<?php $this->registerJsFile($asset->baseUrl.'/assets/js/hp.js',['depends' => [\yii\web\JqueryAsset::className()]]); ?>
<?php $this->endContent(); ?>


<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;

use yii\widgets\Breadcrumbs;
use backend\assets\AppAsset;
use common\widgets\Alert;
$asset = AppAsset::register($this);

?>


<?php $this->beginContent('@app/views/layouts/base.php'); ?>
<body class="site-menubar-unfold site-menubar-keep">
<div class="block_admin container-fluid ">      
   
   
    


 


        
        <?= Alert::widget() ?>
        <?= $content ?>


                        

                   
        

            
     




    

<?php             
$this->registerJs('$(document).on("pjax:timeout", function(event) {
  // Prevent default timeout redirection behavior
  event.preventDefault()
});
     Breakpoints();
    (function(document, window, $) {
    "use strict";
    var Site = window.Site;
    $(document).ready(function() {
      Site.run();
    });
  })(document, window, jQuery);
');   
?>
<style>
     
    @import url(<?= $asset->baseUrl?>/global/fonts/web-icons/web-icons.css);
</style>

<?php $this->endContent(); ?>




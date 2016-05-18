<?php
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use frontend\assets\AppAsset;
use common\widgets\Alert;

$assets = AppAsset::register($this);
?>
<?php $this->beginContent('@app/views/layouts/base.php'); ?>

<body class="site-menubar-unfold site-menubar-keep subpage">
      
    
    
 
   
   <?=$content?>
    
                              

                   
        

            
     

    

<?php             
$this->registerJs('$(document).on("pjax:timeout", function(event) {
  // Prevent default timeout redirection behavior
  event.preventDefault()
});');   
?>

<!--[if lt IE 9]>
    <script src="<?=$assets->baseUrl?>/global/vendor/html5shiv/html5shiv.min.js"></script>
    <![endif]-->
  <!--[if lt IE 10]>
    <script src="<?=$assets->baseUrl?>/global/vendor/media-match/media.match.min.js"></script>
    <script src="<?=$assets->baseUrl?>/global/vendor/respond/respond.min.js"></script>
    <![endif]-->
  <!-- Scripts -->


<link rel="stylesheet" href="<?=$assets->baseUrl?>/global/fonts/brand-icons/brand-icons.min.css">
<script src="<?=$assets->baseUrl?>/global/vendor/modernizr/modernizr.js"></script>
<script src="<?=$assets->baseUrl?>/global/vendor/breakpoints/breakpoints.js"></script>
<script>
Breakpoints();
</script>
 <!-- Core  -->
  <script src="<?=$assets->baseUrl?>/global/vendor/jquery/jquery.js"></script>
  <script src="<?=$assets->baseUrl?>/global/vendor/bootstrap/bootstrap.js"></script>
  <script src="<?=$assets->baseUrl?>/global/vendor/animsition/animsition.js"></script>
  <script src="<?=$assets->baseUrl?>/global/vendor/asscroll/jquery-asScroll.js"></script>
  <script src="<?=$assets->baseUrl?>/global/vendor/mousewheel/jquery.mousewheel.js"></script>
  <script src="<?=$assets->baseUrl?>/global/vendor/asscrollable/jquery.asScrollable.all.js"></script>
  <script src="<?=$assets->baseUrl?>/global/vendor/ashoverscroll/jquery-asHoverScroll.js"></script>
 
  <!-- Scripts -->
  <script src="<?=$assets->baseUrl?>/global/js/core.js"></script>
  <script src="<?=$assets->baseUrl?>/assets/js/site.js"></script>
  <script src="<?=$assets->baseUrl?>/assets/js/sections/menu.js"></script>
  <script src="<?=$assets->baseUrl?>/assets/js/sections/menubar.js"></script>
  <script src="<?=$assets->baseUrl?>/assets/js/sections/gridmenu.js"></script>
  <script src="<?=$assets->baseUrl?>/assets/js/sections/sidebar.js"></script>
  <script src="<?=$assets->baseUrl?>/global/js/configs/config-colors.js"></script>
  <script src="<?=$assets->baseUrl?>/assets/js/configs/config-tour.js"></script>
  <script src="<?=$assets->baseUrl?>/global/js/components/asscrollable.js"></script>
  <script src="<?=$assets->baseUrl?>/global/js/components/animsition.js"></script>
  <script src="<?=$assets->baseUrl?>/global/js/components/slidepanel.js"></script>
  <script src="<?=$assets->baseUrl?>/global/js/components/switchery.js"></script>
  <script>
  (function(document, window, $) {
    'use strict';
    var Site = window.Site;
    $(document).ready(function() {
      Site.run();
    });
  })(document, window, jQuery);
  </script>
<?php $this->endContent(); ?>


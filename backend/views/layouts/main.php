<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;

use yii\widgets\Breadcrumbs;
use backend\assets\AppAsset;
use common\widgets\Alert;
use frontend\helpers\Languages as Langmenu;
$asset = AppAsset::register($this);

?>


<?php $this->beginContent('@app/views/layouts/base.php'); ?>
<body class="site-menubar-unfold site-menubar-keep">
<div class="block_admin container-fluid ">      
   
   
    


 


        
        <?= Alert::widget() ?>
      <nav class="site-navbar navbar navbar-default navbar-fixed-top navbar-mega" role="navigation">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle hamburger hamburger-close navbar-toggle-left hided" data-toggle="menubar">
            <span class="sr-only">Toggle navigation</span>
            <span class="hamburger-bar"></span>
        </button>
        <button type="button" class="navbar-toggle collapsed" data-target="#site-navbar-collapse" data-toggle="collapse">
            <i class="icon wb-more-horizontal" aria-hidden="true"></i>
        </button>
        <div class="navbar-brand navbar-brand-center site-gridmenu-toggle" data-toggle="gridmenu">
            
            <span class="navbar-brand-text hidden-xs">Tiwwo</span>
        </div>
        <button type="button" class="navbar-toggle collapsed" data-target="#site-navbar-search" data-toggle="collapse">
            <span class="sr-only">Toggle Search</span>
            <i class="icon wb-search" aria-hidden="true"></i>
        </button>
    </div>
    <div class="navbar-container container-fluid">
        <!-- Navbar Collapse -->
       
        <!-- Navbar Toolbar -->
        

            <?= $this->render('//modules/_topmenu')?>
        

        <!-- End Navbar Toolbar Right -->
     
      <!-- End Navbar Collapse -->
      <!-- Site Navbar Seach -->
      <div class="collapse navbar-search-overlap" id="site-navbar-search">
        <form role="search">
          <div class="form-group">
            <div class="input-search">
              <i class="input-search-icon wb-search" aria-hidden="true"></i>
              <input type="text" class="form-control" name="site-search" placeholder="Search...">
              <button type="button" class="input-search-close icon wb-close" data-target="#site-navbar-search"
              data-toggle="collapse" aria-label="Close"></button>
            </div>
          </div>
        </form>
      </div>
      <!-- End Site Navbar Seach -->
    </div>
  </nav>
  <div class="site-menubar">
    <div class="site-menubar-body">
      <div>
        <div>
          <ul class="site-menu">
            <li class="site-menu-category">General</li>
            <li class="site-menu-item has-sub">
              <a href="javascript:void(0)">
                <i class="site-menu-icon wb-dashboard" aria-hidden="true"></i>
                <span class="site-menu-title">Dashboard</span>
                <div class="site-menu-badge">
                  <span class="badge badge-success">3</span>
                </div>
              </a>
              

            </li>
            


            <li class="site-menu-item has-sub">
                <a href="javascript:void(0)">
                    <i class="site-menu-icon wb-settings" aria-hidden="true"></i>
                    <span class="site-menu-title"><?= Yii::t('app','Account Settings')?></span>
                    <span class="site-menu-arrow"></span>
                </a>
                <ul class="site-menu-sub">
                    
                    <li class="site-menu-item">
                        <a class="animsition-link" href="../pages/index">
                            <span class="site-menu-title"><?= Yii::t('app','Create / Edit your pages')?></span>
                        </a>
                    </li>
                    <li class="site-menu-item">
                        <a class="animsition-link" href="../pages/gallery.html">
                            <span class="site-menu-title"><?= Yii::t('app','Change Password')?></span>
                        </a>
                    </li>
                    <li class="site-menu-item">
                        <a class="animsition-link" href="../pages/gallery-grid.html">
                            <span class="site-menu-title"><?= Yii::t('app','Plans & Billing Settings')?></span>
                        </a>
                    </li> 
                </ul>
            </li>

            <li class="site-menu-item has-sub">
                <a href="javascript:void(0)">
                    <i class="site-menu-icon wb-file" aria-hidden="true"></i>
                    <span class="site-menu-title"><?= Yii::t('app','Pages')?></span>
                    <span class="site-menu-arrow"></span>
                </a>
                    
                <ul class="site-menu-sub">
                    <li class="site-menu-item">                        
                        <?= Html::a('<span class="site-menu-title">'.Yii::t('app','About page').'</span>', ['pages/about','language'=>Langmenu::getBack(Yii::$app->language)], ['class' => 'animsition-link']) ?>
                        
                    </li>
                    <li class="site-menu-item">
                        
                        <?= Html::a('<span class="site-menu-title">'.Yii::t('app','Contact page').'</span>', ['pages/contact','language'=>Langmenu::getBack(Yii::$app->language)], ['class' => 'animsition-link']) ?>
                    </li>
                    
                </ul>
            </li>

            <li class="site-menu-item has-sub">
                <a href="javascript:void(0)">
                    <i class="site-menu-icon wb-hammer" aria-hidden="true"></i>
                    <span class="site-menu-title"><?= Yii::t('app','Add Service')?></span>
                    <span class="site-menu-arrow"></span>
                </a>
                    
                <ul class="site-menu-sub">

                    <li class="site-menu-item">
                        <?= Html::a('<span class="site-menu-title">'.Yii::t('app','List your services').'</span>', ['services/index','language'=>Langmenu::getBack(Yii::$app->language)], ['class' => 'animsition-link']) ?>
                       
                    </li>
                    <li class="site-menu-item">
                        <a class="animsition-link" href="../pages/gallery.html">
                            <span class="site-menu-title"><?= Yii::t('app','Excursions for 2+ day')?></span>
                        </a>
                    </li>

                    <li class="site-menu-item">
                        <a class="animsition-link" href="../pages/gallery.html">
                            <span class="site-menu-title"><?= Yii::t('app','Private Tours')?></span>
                        </a>
                    </li>

                    <li class="site-menu-item">
                        <a class="animsition-link" href="../pages/gallery.html">
                            <span class="site-menu-title"><?= Yii::t('app','Private Transfers')?></span>
                        </a>
                    </li>

                    <li class="site-menu-item">
                        <a class="animsition-link" href="../pages/gallery.html">
                            <span class="site-menu-title"><?= Yii::t('app','Active Tourism')?></span>
                        </a>
                    </li>

                    <li class="site-menu-item">
                        <a class="animsition-link" href="../pages/gallery.html">
                            <span class="site-menu-title"><?= Yii::t('app','Healt Tourism')?></span>
                        </a>
                    </li>

                    <li class="site-menu-item">
                        <a class="animsition-link" href="../pages/gallery.html">
                            <span class="site-menu-title"><?= Yii::t('app','Other services')?></span>
                        </a>
                    </li>


                    
                </ul>
            </li>
            <li class="site-menu-item ">
                <a href="javascript:void(0)">
                    <i class="site-menu-icon wb-copy" aria-hidden="true"></i>
                    <span class="site-menu-title"><?= Yii::t('app','Service Management')?></span>
                   
                </a>
                    
                
            </li>


            
          </ul>
         
        </div>
      </div>
    </div>
    
  </div>
  <div class="site-gridmenu">
    <div>
      <div>
        <ul>
          <li>
            <a href="../apps/mailbox/mailbox.html">
              <i class="icon wb-envelope"></i>
              <span>Mailbox</span>
            </a>
          </li>
          <li>
            <a href="../apps/calendar/calendar.html">
              <i class="icon wb-calendar"></i>
              <span>Calendar</span>
            </a>
          </li>
          <li>
            <a href="../apps/contacts/contacts.html">
              <i class="icon wb-user"></i>
              <span>Contacts</span>
            </a>
          </li>
          <li>
            <a href="../apps/media/overview.html">
              <i class="icon wb-camera"></i>
              <span>Media</span>
            </a>
          </li>
          <li>
            <a href="../apps/documents/categories.html">
              <i class="icon wb-order"></i>
              <span>Documents</span>
            </a>
          </li>
          <li>
            <a href="../apps/projects/projects.html">
              <i class="icon wb-image"></i>
              <span>Project</span>
            </a>
          </li>
          <li>
            <a href="../apps/forum/forum.html">
              <i class="icon wb-chat-group"></i>
              <span>Forum</span>
            </a>
          </li>
          <li>
            <a href="../index.html">
              <i class="icon wb-dashboard"></i>
              <span>Dashboard</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
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




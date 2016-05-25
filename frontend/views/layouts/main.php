<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use frontend\assets\AppAsset;
use common\widgets\Alert;
use yii\widgets\Pjax;
$asset = AppAsset::register($this);
$items_menu = 'England - country';
//echo Yii::$app->language;
?>


<?php $this->beginContent('@app/views/layouts/base.php'); ?>

<div class="block_hp container-fluid">      
   
   
    <div class="col-sm-4 col-sm-offset-8">

        <?php
        NavBar::begin([
            //'brandLabel' => 'Tiwwo',
            //'brandUrl' => Yii::$app->homeUrl,
            'options' => [
                'class' => 'top-nav-right pull-right',
            ],
        ]);
        $menuItems = [
            ['label' => Yii::t('app/menu', 'Home'), 'url' => ['/site/index']],
        ];
        if (Yii::$app->user->isGuest) {
            $menuItems[] = ['label' => Yii::t('app/menu', 'Registration'), 'url' => ['/site/signup']];
            $menuItems[] = ['label' => Yii::t('app/menu', 'Login'), 'url' => ['/site/login']];
            $menuItems[] = [
            'label' => '<img src="'.$asset->baseUrl.'/assets/images/ico_lang/24/Czech-Republic.png"/>',
            'items' => [
                 ['label' => '<img src="'.$asset->baseUrl.'/assets/images/ico_lang/24/United-Kingdom.png"/>&nbsp;English', 'url' => Yii::getAlias('@lang/?language=en_EN')],              
                 ['label' => '<img src="'.$asset->baseUrl.'/assets/images/ico_lang/24/Germany.png"/>&nbsp;Germany', 'url' => Yii::getAlias('@lang/?language=de_DE')],
            ],
        ];
        } else {
            $menuItems[] = '<li>'
                . Html::beginForm(['/site/logout'], 'post')
                . Html::submitButton(
                    'Logout (' . Yii::$app->user->identity->username . ')',
                    ['class' => 'btn btn-link']
                )
                . Html::endForm()
                . '</li>';
        }
        echo Nav::widget([
            'options' => ['class' => 'navbar-nav navbar-right'],
            'encodeLabels' => false,
            'items' => $menuItems,
        ]);
        NavBar::end();
        ?>
    </div>
    <div class="clearfix"></div>
    <div class="col-sm-6 col-sm-offset-3"><h1 class="block_hp--title text-center"><?=Yii::t('app', "Let's  Travel as Simple as Possible")?></h1></div>
    <div class="col-sm-2 col-sm-offset-5"><hr/></div>
    <div class="col-sm-6 col-sm-offset-3 text-center block_hp--subtitle margin-bottom-10"><?=Yii::t('app', "2 easy steps to start explore world")?></div>
    <div class="col-sm-12 text-center">
        <button class="btn btn-direction btn-bottom btn-primary" id="btn-explore" type="button"><?=Yii::t('app', "SELECT YOUR DESTINATION")?></button>
        <div class="clearfix"></div>
        <div class="block_explore col-sm-6 col-sm-offset-3 text-left" id="block_explore">
            <div class="">
                <?php Pjax::begin(['enablePushState' => false,'id'=>'favRefresh']); ?>
                  <?= $this->render('//modules/_menu_hp',['items_menu'=>$items_menu,'type'=>0])?>
                <?php Pjax::end(); ?> 
                
                <div class="clearfix"></div>
            </div>    
        </div>
    </div>


</div>   


    <div class="container">
        
        <?= Alert::widget() ?>
        <?= $content ?>

    </div>

                        

                   
        

            
     




    

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


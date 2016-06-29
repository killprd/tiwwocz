<?php
use frontend\assets\AppAsset;
$assets = AppAsset::register($this);
use frontend\helpers\Languages as Langmenu;
use frontend\helpers\Image;
use yii\bootstrap\Nav;
use yii\helpers\Html;
use yii\bootstrap\NavBar;
$langs_menu = Langmenu::getLanguage($assets);
 Html::csrfMetaTags();
NavBar::begin([
    //'brandLabel' => 'Tiwwo',
    //'brandUrl' => Yii::$app->homeUrl,
    'options' => [
        'class' => ' ','id'=>'site-navbar-collapse'
    ],
]);
$menuItems = [
    ['label' => Yii::t('app/menu', 'Home'), 'url' => ['/','language'=>Langmenu::getBack(Yii::$app->language)]],
];
$menuItems[] = [
                'label' => Yii::t('app/menu', 'Profil'),
                'items'=>[
                            ['label'=>'Edit','url' => ['/profile','language'=>Langmenu::getBack(Yii::$app->language)]],
                            ['label' => '<i class="icon wb-power" aria-hidden="true"></i>Logout',
                            'url' => ['/site/logout','language'=>Yii::$app->language],
                            'linkOptions' => ['data-method' => 'post']]
                        ]

            ];
$menuItems[] = $langs_menu;

$menuItems2[] = 
                    ['label'=>'<i class="icon hamburger hamburger-arrow-left">
                          <span class="sr-only">Toggle menubar</span>
                          <span class="hamburger-bar"></span>
                        </i>','url'=>'#','options'=>['data-toggle'=>'menubar','role'=>'button','class'=>'hidden-float', 'id'=>'toggleMenubar']
                    ];
$menuItems2[] = ['label'=>'<span class="sr-only">Toggle fullscreen</span>
                        ','url'=>'#','options'=>['data-toggle'=>'menubar','role'=>'button','class'=>'hidden-xs', 'id'=>'toggleFullscreen']
                    ];
$menuItems2[] = ['label'=>'<span class="sr-only">Toggle Search</span>
                        ','url'=>'#','options'=>['class'=>'hidden-float']
                        ,'linkOptions'=>['class'=>'icon wb-search','data-target'=>'#site-navbar-search','data-toggle'=>'collapse','role'=>'button']
                    ];
             





echo Nav::widget([
    'options' => ['class' => 'navbar-nav navbar-left'],
    'encodeLabels' => false,
    'items' => $menuItems2,
    
]);

echo Nav::widget([
    'options' => ['class' => 'navbar-nav navbar-right'],
    'encodeLabels' => false,
    'items' => $menuItems,
    
]);





NavBar::end();
?>

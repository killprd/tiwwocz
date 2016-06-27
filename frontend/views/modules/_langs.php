<?php
use frontend\assets\AppAsset;
$assets = AppAsset::register($this);
use frontend\helpers\Languages as Langmenu;
use frontend\helpers\Image;
use yii\bootstrap\Nav;
use yii\helpers\Html;
use yii\bootstrap\NavBar;
$langs_menu = Langmenu::getLanguage($assets);

NavBar::begin([
    //'brandLabel' => 'Tiwwo',
    //'brandUrl' => Yii::$app->homeUrl,
    'options' => [
        'class' => 'top-nav-right pull-right',
    ],
]);
$menuItems = [
    ['label' => Yii::t('app/menu', 'Home'), 'url' => ['/','language'=>Langmenu::getBack(Yii::$app->language)]],
];
if (Yii::$app->user->isGuest) {
    $menuItems[] = ['label' => Yii::t('app/menu', 'Registration'), 'url' => ['/site/signup','language'=>Langmenu::getBack(Yii::$app->language)]];
    $menuItems[] = ['label' => Yii::t('app/menu', 'Login'), 'url' => ['/site/login','language'=>Langmenu::getBack(Yii::$app->language)]];
    $menuItems[] = $langs_menu;

} else {
    $menuItems[] = ['label' => Yii::t('app', 'Profile'), 'url' => ['../../../admin',]];
    $menuItems[] = '<li>'
        . Html::beginForm(['/site/logout'], 'post')
        . Html::submitButton(
            'Logout',
            ['class' => 'btn btn-link']
        )
        . Html::endForm()
        . '</li>';
        $menuItems[] = $langs_menu;
}
echo Nav::widget([
    'options' => ['class' => 'navbar-nav navbar-right'],
    'encodeLabels' => false,
    'items' => $menuItems,
]);
NavBar::end();
?>

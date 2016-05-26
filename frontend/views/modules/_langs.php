<?php
use frontend\assets\AppAsset;
$assets = AppAsset::register($this);
use frontend\helpers\Languages as Langmenu;
use frontend\helpers\Image;
use yii\bootstrap\Nav;
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
    ['label' => Yii::t('app/menu', 'Home'), 'url' => ['/site/index']],
];
if (Yii::$app->user->isGuest) {
    $menuItems[] = ['label' => Yii::t('app/menu', 'Registration'), 'url' => ['/site/signup']];
    $menuItems[] = ['label' => Yii::t('app/menu', 'Login'), 'url' => ['/site/login']];
    $menuItems[] = $langs_menu;

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

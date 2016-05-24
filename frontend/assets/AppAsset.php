<?php

namespace frontend\assets;

use yii\web\AssetBundle;

/**
 * Main frontend application asset bundle.
 */
class AppAsset extends AssetBundle{
   
    public $sourcePath = '@app/media/';  
    public $css = [
        //'assets/css/maine.css',
    ];
    public $js = [
    'assets/js/jquery-1.11.2.min.js',
    'assets/js/bootstrap.min.js',
    ];
    public $depends = [
        //'yii\web\YiiAsset',
        //'yii\bootstrap\BootstrapAsset',
    ];
}

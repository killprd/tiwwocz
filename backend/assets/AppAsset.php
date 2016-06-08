<?php

namespace backend\assets;

use yii\web\AssetBundle;

/**
 * Main backend application asset bundle.
 */
class AppAsset extends AssetBundle
{
    public $sourcePath = '@app/media/';  
    public $basePath = '@webroot';
   // public $baseUrl = '@web';
    public $css = [
        'assets/css/admin.css',
    ];
    public $js = [
        'assets/js/jquery-1.11.2.min.js',
        'assets/js/bootstrap.min.js',
        'global/vendor/modernizr/modernizr.js',
        'global/vendor/breakpoints/breakpoints.js',

        'global/vendor/animsition/animsition.js',
        'global/vendor/mousewheel/jquery.mousewheel.js',
        'global/vendor/asscrollable/jquery.asScrollable.all.js',
        'global/vendor/ashoverscroll/jquery-asHoverScroll.js',

        'global/vendor/switchery/switchery.min.js',
        'global/vendor/intro-js/intro.js',
        'global/vendor/screenfull/screenfull.js',
        'global/vendor/slidepanel/jquery-slidePanel.js',

        'global/js/core.js',
        'assets/js/site.js',
        'assets/js/sections/menu.js',
        'assets/js/sections/menubar.js',
        'assets/js/sections/gridmenu.js',
        'assets/js/sections/sidebar.js',

        'assets/js/configs/config-tour.js',
        'global/js/configs/config-colors.js',
        'global/js/components/asscrollable.js',
        'global/js/components/animsition.js',
        'global/js/components/slidepanel.js',
        'global/js/components/switchery.js',

    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}



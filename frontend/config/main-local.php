<?php

$config = [
    'bootstrap' => [
        [
            'class' => 'frontend\components\LanguageSelector',
            'supportedLanguages' => [ 'cs_CZ','en_US', 'ru_RU'],
        ],
    ],
    'aliases' => [
        '@home' => 'http://tiwwo.dev',
        '@bar' => 'http://www.tiwwo.czm',
        '@lang' => '../../site/getlanguage/',
    ],
    'components' => [
        'request' => [        
            'baseUrl' => '',
            // !!! insert a secret key in the following (if it is empty) - this is required by cookie validation
            'cookieValidationKey' => 'tFcgQxgiDbFi8-Q_gUXC3hj_s32LAAMs',
        ],
        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false, 
            'baseUrl' => '/',
                       
        ],
        

        'urlManagerFrontend' => [ 
        
            'baseUrl' => $baseUrl,  
            'enablePrettyUrl' => true,
            'showScriptName' => false, 
            'class' => 'yii\web\UrlManager',
            'rules' => [             
                '<action:(login|logout|about)>' => 'site/<action>',
                //['class' => 'common\components\CarUrlRule', 'connectionID' => 'db'],
            ],
        ],
        'db' => [
            'class' => 'yii\db\Connection',
            'dsn' => 'mysql:host=localhost;dbname=tiwwo',
            'username' => 'killprd_sport',
            'password' => '123456789',
            'charset' => 'utf8',
        ],
        'mailer' => [
            'class' => 'yiiswiftmailerMailer',
            'viewPath' => '@common/mail',
            // send all mails to a file by default. You have to set
            // 'useFileTransport' to false and configure a transport
            // for the mailer to send real emails.
            'useFileTransport' => true,
        ],
        'assetManager' => [
            // uncomment the following line if you want to auto update your assets (unix hosting only)
            //'linkAssets' => true,
            'bundles' => [
                'yii\web\JqueryAsset' => [
                    'js' => [YII_DEBUG ? 'jquery.js' : 'jquery.min.js'],
                ],
                'yii\bootstrap\BootstrapAsset' => [
                    'css' => [],
                    'cssOptions'=>['async'=>'async']
                ],
                'yii\bootstrap\BootstrapPluginAsset' => [
                    'js' => [],
                    'jsOptions'=>['async'=>'async']
                ],
            ],
        ],
        'i18n' => [
            'translations' => [
                'app*' => [
                    'class' => 'yii\i18n\PhpMessageSource',
                    'basePath' => '@app/messages',
                    'sourceLanguage' => 'cs',
                    'fileMap' => [
                        'app' => 'app.php',
                        'app/menu' => 'menu.php',
                        'app/error' => 'error.php',
                    ],
                ],
            ],
        ],
    ],
];

if (!YII_ENV_TEST) {
    // configuration adjustments for 'dev' environment
    $config['bootstrap'][] = 'debug';
    $config['modules']['debug'] = [
        'class' => 'yii\debug\Module',
    ];
    $config['bootstrap'][] = 'gii';
    $config['modules']['gii'] = [
        'class' => 'yii\gii\Module',
    ];
}

return $config;

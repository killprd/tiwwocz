<?php

$config = [
    /*'bootstrap' => [
        [
            'class' => 'frontend\components\LanguageSelector',
            'supportedLanguages' => [ 'cs_CZ','cs','en_EN','en', 'ru_RU','ru'],
        ],
    ],*/

    'aliases' => [
        '@home' => 'http://tiwwo.dev',
        '@bar' => 'http://www.tiwwo.cz',
        '@lang' => 'site/getlanguage/',
    ],
    'components' => [
        'request' => [        
            'baseUrl' => '',
            // !!! insert a secret key in the following (if it is empty) - this is required by cookie validation
            'cookieValidationKey' => 'tFcgQxgiDbFi8-Q_gUXC3hj_s32LAAMs',
        ],
        
        'user' => [
            'identityClass' => 'common\models\User',
            'enableAutoLogin' => true,
      
        ],
         'urlManager' => [
            'class' => 'codemix\localeurls\UrlManager',
            'languages' => [ 'cs','en','ru', 'fr', 'es'],
            'enableDefaultLanguageUrlCode' => true,
            'enableLanguagePersistence' => false,
            'enablePrettyUrl' => true,
            'showScriptName' => false, 
            'baseUrl' => '/',
            'enableStrictParsing' => false,
            'ignoreLanguageUrlPatterns' => [
                '#^assets/#' => '#^assets/#',
            ],
            'rules' => [       
                '<module:\w+>/<language:\w+>/<controller>/<action>' => 'admin/site/<action>',
                '<language:\w+>/<controller>/<action:(login|logout|about)>' => 'site/<action>',
                '<module:\w+>/<language:\w+>/<controller:\w+>/<action:\w+>' => '<module>/<controller>/<action>',
                
                //['class' => 'common\components\CarUrlRule', 'connectionID' => 'db'],
            ],
        ],

        'urlManagerBackend' => [
           'class' => 'codemix\localeurls\UrlManager',
            'languages' => [ 'cs','en', 'ru','fr','es'],
            'enablePrettyUrl' => true,
            'showScriptName' => false, 
            'baseUrl' => '/admin',
            'rules' => [        
              //  'pattern' => '<lang:\w+>/<controller>/<action>',
               // 'route' => '<controller>/<action>',  
               // 'http://<user:[^www]\w+>.tiwwo.dev/<controller:\w+>/<action:\w+>//' => '<controller>/<action>',
                
               // '<controller>/<action:(login|logout|about)>' => '<module>/site/<action>',
                // '<slug:.+>' => 'site/index',             
                '<language:\w+>/<controller>/<action:(login|logout|about)>' => 'site/<action>',
                '<module:\w+>/<language:\w+>/<controller:\w+>/<action:\w+>' => '<module>/<controller>/<action>',
                
                //['class' => 'common\components\CarUrlRule', 'connectionID' => 'db'],
            ],
            'ignoreLanguageUrlPatterns' => [
                '#^assets/#' => '#^assets/#',
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
            'class' => 'yii\swiftmailer\Mailer',
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

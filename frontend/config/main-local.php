<?php

$config = [
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

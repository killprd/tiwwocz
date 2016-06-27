<?php

namespace frontend\helpers;

use yii\db\ActiveRecord;
use yii;
use Yii\Helpers\Url;
/**
 * @property string $description
 * @property integer $parent_id
 */
class Languages
{

    /**
     * @inheritdoc
     */
    
    public static function getLanguage($asset){
            $lang = Yii::$app->language;
           // echo Yii::$app->language;;exit;
            $lang = self::get($lang);
            Yii::$app->language = $lang;
            $pole = ['cs_CZ'=>[
                               ['lang'=>'es','name'=>'Španělsky'],
                               ['lang'=>'ru','name'=>'Rusky'],
                               ['lang'=>'fr','name'=>'Francousky'],
                               ['lang'=>'en','name'=>'Anglicky']
                               ],
                    'es_ES'=>[['lang'=>'cs', 'name'=>'cecho'],
                               ['lang'=>'ru','name'=>'ruso'],
                               ['lang'=>'fr','name'=>'francés'],
                               ['lang'=>'en','name'=>'Inglés']
                               ],
                    'en_EN'=>[['lang'=>'es','name'=>'Spanish'],
                               ['lang'=>'ru','name'=>'Russian'],
                               ['lang'=>'fr','name'=>'France'],
                               ['lang'=>'cs','name'=>'Czech']
                               ],
                    'ru_RU'=>[['lang'=>'es','name'=>'испанский'],
                               ['lang'=>'fr','name'=>'французский'],
                               ['lang'=>'cs','name'=>'чешский'],
                               ['lang'=>'en','name'=>'английский']
                               ],
                    'fr_FR'=>[['lang'=>'es','name'=>'espagnol'],
                               ['lang'=>'ru','name'=>'russe'],
                               ['lang'=>'cs','name'=>'tchèque'],
                               ['lang'=>'en','name'=>'Anglais']
                               ]
                    ];
            $langs = [];
            foreach ($pole[$lang] as $item) {
              
                    $url = Url::to(['/', 'language'=>$item['lang']]);
                    //print_r($url);exit;
                    $langs[] = ['label' => '<img src="'.$asset->baseUrl.'/assets/images/ico_lang/24/'.self::get($item['lang']).'.png"/>&nbsp;'.$item['name'].'', 
                                'url' => $url
                                ];
                
            }


            $languages =['label' => '<img src="'.$asset->baseUrl.'/assets/images/ico_lang/24/'.self::get($lang).'.png"/>',
                        'items'=>$langs,
            ];
            return $languages;
    }



    public static function get($lang){
       
        switch ($lang) {
                case 'cs':
                   $lang =  "cs_CZ";
                    break;
                case 'en':
                   $lang =  "en_EN";
                    break;
                case 'ru':
                   $lang =  "ru_RU";
                    break;
                 case 'fr':
                   $lang =  "fr_FR";
                    break;
                case 'es':
                   $lang =  "es_ES";
                    break;
               
            }
            return $lang;
    }

    public static function getBack($lang){
       
        switch ($lang) {
                case 'cs_CZ':
                   $lang =  "cs";
                    break;
                case 'en_EN':
                   $lang =  "en";
                    break;
               
            }
            return $lang;
    }






}

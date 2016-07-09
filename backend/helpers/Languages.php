<?php

namespace backend\helpers;

use yii\db\ActiveRecord;
use yii;
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
            $pole = ['cs_CZ'=>[
                               ['lang'=>'es_ES','name'=>'Španělsky'],
                               ['lang'=>'ru_RU','name'=>'Rusky'],
                               ['lang'=>'fr_FR','name'=>'Francousky'],
                               ['lang'=>'en_EN','name'=>'Anglicky']
                               ],
                    'es_ES'=>[['lang'=>'cs_CZ', 'name'=>'cecho'],
                               ['lang'=>'ru_RU','name'=>'ruso'],
                               ['lang'=>'fr_FR','name'=>'francés'],
                               ['lang'=>'en_EN','name'=>'Inglés']
                               ],
                    'en_EN'=>[['lang'=>'es_ES','name'=>'Spanish'],
                               ['lang'=>'ru_RU','name'=>'Russian'],
                               ['lang'=>'fr_FR','name'=>'France'],
                               ['lang'=>'cs_CZ','name'=>'Czech']
                               ],
                    'ru_RU'=>[['lang'=>'es_ES','name'=>'испанский'],
                               ['lang'=>'fr_FR','name'=>'французский'],
                               ['lang'=>'cs_CZ','name'=>'чешский'],
                               ['lang'=>'en_EN','name'=>'английский']
                               ],
                    'fr_FR'=>[['lang'=>'es_ES','name'=>'espagnol'],
                               ['lang'=>'ru_RU','name'=>'russe'],
                               ['lang'=>'cs_CZ','name'=>'tchèque'],
                               ['lang'=>'en_EN','name'=>'Anglais']
                               ]
                    ];
            $langs = [];
            foreach ($pole[$lang] as $item) {
                
                    $langs[] = ['label' => '<img src="'.$asset->baseUrl.'/assets/images/ico_lang/24/'.$item['lang'].'.png"/>&nbsp;'.$item['name'].'', 'url' => Yii::getAlias('@lang/?language='.$item['lang'])];
                
            }


            $languages =['label' => '<img src="'.$asset->baseUrl.'/assets/images/ico_lang/24/'.$lang.'.png"/>',
                        'items'=>$langs,
            ];
            return $languages;
    }




    public static function getLanguage_flat(){            
            $pole = ['cs_CZ'=>[
                               ['lang'=>'cs_CZ', 'name'=>'Česky'],
                               ['lang'=>'es_ES','name'=>'Španělsky'],
                               ['lang'=>'ru_RU','name'=>'Rusky'],
                               ['lang'=>'fr_FR','name'=>'Francousky'],
                               ['lang'=>'en_EN','name'=>'Anglicky']
                               ],
                    'es_ES'=>[['lang'=>'cs_CZ', 'name'=>'cecho'],
                               ['lang'=>'es_ES','name'=>'Espaňol'],
                               ['lang'=>'ru_RU','name'=>'ruso'],
                               ['lang'=>'fr_FR','name'=>'francés'],
                               ['lang'=>'en_EN','name'=>'Inglés']
                               ],
                    'en_EN'=>[['lang'=>'es_ES','name'=>'Spanish'],
                               ['lang'=>'ru_RU','name'=>'Russian'],
                               ['lang'=>'fr_FR','name'=>'France'],
                               ['lang'=>'cs_CZ','name'=>'Czech'],
                               ['lang'=>'en_EN','name'=>'English']
                               ],
                    'ru_RU'=>[['lang'=>'es_ES','name'=>'испанский'],
                               ['lang'=>'fr_FR','name'=>'французский'],
                               ['lang'=>'cs_CZ','name'=>'чешский'],
                               ['lang'=>'en_EN','name'=>'английский'],
                               ['lang'=>'ru_RU','name'=>'Russian'],
                               ],
                    'fr_FR'=>[['lang'=>'es_ES','name'=>'espagnol'],
                               ['lang'=>'ru_RU','name'=>'russe'],
                               ['lang'=>'cs_CZ','name'=>'tchèque'],
                               ['lang'=>'en_EN','name'=>'Anglais'],
                               ['lang'=>'fr_FR','name'=>'France'],
                               ]
                    ];
           
            return $pole;
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

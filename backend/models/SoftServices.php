<?php

namespace backend\models;
use frontend\helpers\Languages as Langmenu;
use Yii;
use yii\helpers\Url;
use yii\helpers\Html;
use kartik\grid\GridView;
use yii\data\ActiveDataProvider;

/**
 * This is the model class for table "soft_services".
 *
 * @property integer $service_id
 * @property integer $status
 * @property string $slug
 * @property integer $user_id
 * @property string $name
 * @property string $service_type
 * @property integer $category
 * @property string $count_members
 * @property string $count_members_from
 * @property string $count_members_to
 * @property string $days
 * @property string $length_time
 * @property string $price
 * @property string $currency
 * @property string $included_in_price
 * @property string $start_place
 * @property string $end_place
 * @property string $start_time
 * @property string $end_time
 * @property string $noincluded_in_price
 */
class SoftServices extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    const STATUS_OFF = 0;
    const STATUS_ON = 10;
    public static function tableName()
    {
        return 'soft_services';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['user_id', 'price_kind', 'type_price', 'service_type', 'price','lang','title'], 'required'],
            [['service_id', 'status', 'slug', 'currency', 'included_in_price', 'start_place', 'end_place', 'start_time', 'end_time', 'noincluded_in_price','image','needs','transport'], 'safe'],
            [['service_id', 'status', 'user_id', 'category'], 'integer'],
            [['length_time', 'start_time', 'end_time','category', 'count_members', 'count_members_from', 'count_members_to', 'days','name','text'], 'safe'],
            [['price'], 'number'],
            [
                'image', 
                'image', 
                'extensions' => ['jpg', 'jpeg', 'png', 'gif'],
                'mimeTypes' => ['image/jpeg', 'image/pjpeg', 'image/png', 'image/gif'],
            ],
            ['image','image','skipOnEmpty' => true],
            [['included_in_price', 'noincluded_in_price'], 'string'],
            [['slug', 'count_members', 'count_members_from', 'count_members_to', 'days', 'currency'], 'string', 'max' => 128],
            [['name', 'service_type', 'start_place', 'end_place'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'service_id' => Yii::t('app', 'Service ID'),
            'status' => Yii::t('app', 'Status'),
            'slug' => Yii::t('app', 'Slug'),
            'user_id' => Yii::t('app', 'User ID'),
            'name' => Yii::t('app', 'Name'),
            'service_type' => Yii::t('app', 'Service Type'),
            'category' => Yii::t('app', 'Category'),
            'count_members' => Yii::t('app', 'Count Members'),
            'count_members_from' => Yii::t('app', 'Count Members From'),
            'count_members_to' => Yii::t('app', 'Count Members To'),
            'days' => Yii::t('app', 'Days'),
            'length_time' => Yii::t('app', 'Length Time'),
            'price' => Yii::t('app', 'Price'),
            'currency' => Yii::t('app', 'Currency'),
            'included_in_price' => Yii::t('app', 'Included In Price'),
            'start_place' => Yii::t('app', 'Start Place'),
            'end_place' => Yii::t('app', 'End Place'),
            'start_time' => Yii::t('app', 'Start Time'),
            'end_time' => Yii::t('app', 'End Time'),
            'noincluded_in_price' => Yii::t('app', 'Noincluded In Price'),
        ];
    }

     



    public static function getDataProvider(){

    
    
    $gridColumns = [
        [
            'class'=>'kartik\grid\ExpandRowColumn',
            'width'=>'50px',
            'value'=>function ($model, $key, $index, $column) {
                return GridView::ROW_COLLAPSED;
            },
            'detail'=>function ($model, $key, $index, $column) {
                
                return Yii::$app->controller->renderPartial('_service_view_ajax', ['service_id'=>$model->service_id],false);
            },
            'detailRowCssClass' => GridView::TYPE_DEFAULT,
            'headerOptions'=>['class'=>'kartik-sheet-style'], 
            'expandOneOnly'=>true
        ],
        
        [
            
            'attribute'=>'title',
            'hAlign'=>'center',
            'vAlign'=>'middle',
            'header'=>Yii::t('app','Name of service'),
            'format'=>'raw',
            'filterInputOptions' => [
                'class'       => 'form-control',
                'placeholder' => Yii::t('app','Search by title')
             ],
            'contentOptions' => function ($model, $key, $index, $widget) { return ['class' => 'text-left '.self::getBg($model->status)];},
            'headerOptions' => ['class' => 'text-left'],
            'value'=>function ($model, $key, $index, $widget) {
                return   Html::a($model->title, ['services/edit','id'=>$model->service_id,'language'=>Langmenu::getBack(Yii::$app->language)], ['class' => 'animsition-link']);
            },
            
            
        ],
        [
            
            'attribute'=>'category',
            'hAlign'=>'center',
            'width'=>'100px',
            'vAlign'=>'middle',
            'header'=>Yii::t('app','Service category'),
            'format'=>'raw',
            'contentOptions' => function ($model, $key, $index, $widget) { return ['class' => 'text-left '.self::getBg($model->status)];},
            'headerOptions' => ['class' => 'text-left'],           
            
            
        ],

        [
            
            'attribute'=>'days',
            'hAlign'=>'center',
            'width'=>'80px',
            'vAlign'=>'middle',
            'header'=>Yii::t('app','Days'),
            'format'=>'raw',
            'contentOptions' => function ($model, $key, $index, $widget) { return ['class' => 'text-left '.self::getBg($model->status)];},
            'headerOptions' => ['class' => 'text-left'],           
            
            
        ],
        [
            
            'attribute'=>'price',
            'hAlign'=>'center',
            'width'=>'100px',
            'vAlign'=>'middle',
            'header'=>Yii::t('app','Price'),
            'format'=>'raw',
            'contentOptions' => function ($model, $key, $index, $widget) { return ['class' => 'text-left '.self::getBg($model->status)];},
            'headerOptions' => ['class' => 'text-left'],           
            
            
        ],
        [
            
            'attribute'=>'currency',
            'hAlign'=>'center',
            'width'=>'50px',
            'vAlign'=>'middle',
            'header'=>Yii::t('app','Currency'),
            'format'=>'raw',
            'contentOptions' => function ($model, $key, $index, $widget) { return ['class' => 'text-left '.self::getBg($model->status)];},
            'headerOptions' => ['class' => 'text-left'],           
            
            
        ],
        [
            
            'attribute'=>'lang',            
            'width'=>'50px',
            'hAlign'=>'center',
            'vAlign'=>'middle',
            'header'=>Yii::t('app','Language'),
            'format'=>'raw',
            'contentOptions' => function ($model, $key, $index, $widget) { return ['class' => 'text-left '.self::getBg($model->status)];},
            'headerOptions' => ['class' => 'text-left'],           
            
            
        ],       

        

        [            
            'attribute'=>'status',
            'hAlign'=>'center',
            'vAlign'=>'middle',
            'header'=>'Status',
            'format'=>'raw',
            'width'=>'80px',
            'contentOptions' => function ($model, $key, $index, $widget) { return ['class' => 'text-left '.self::getBg($model->status)];},
            'headerOptions' => ['class' => 'text-left'],
            'value'=>function ($model, $key, $index, $widget) {
                
                 return Html::checkbox('', $model->status == self::STATUS_ON, [
                        'class' => 'switch',
                        'data-id' => $model->primaryKey,
                        'data-link' => Url::to(['services/status']),
                    ]);
            },
            
            
        ],


        ['class' => 'kartik\grid\ActionColumn',
            'viewOptions'=>['class' => 'hide'],
            'buttons' => [
                'update' => function ($url, $model) {
                    return Html::a('<i class="glyphicon glyphicon-pencil"></i>', ['services/edit','id'=>$model->service_id], [                        
                        'data-pjax' => '0',                        
                    ]) ;
                },
                'delete' => function ($url, $model) {
                    return Html::a('<i class="glyphicon glyphicon-trash"></i>', ['services/delete','id'=>$model->service_id], [  
                         'title' => Yii::t('app', 'delete'),
                         'data-confirm' => Yii::t('app', "Are you sure you want to delete this item?"),
                         'data-method' => 'post',
                         'data-pjax' => 0
                      ]) ;
                }
            ],

        ],
        

        

    ];
    return $gridColumns;
   }


   public static function search($params) {        
        $model = new self;
       
       // $query = Sezony::find()->where(['like','price_1' => $params['price_1']]);      
        $query = self::find()->orderBy('service_id DESC');
       
        $dataProvider = new ActiveDataProvider([
            'query' => $query,
            'pagination' => [
                'defaultPageSize' => 10,
                'pageSizeLimit'=>10
                ],
           

        ]);
     
        /**
         * Setup your sorting attributes
         * Note: This is setup before the $this->load($params) 
         * statement below
         */
        //print_r($params);exit;
               
        
     
        if (!($model->load($params))) {            
            return $dataProvider;
        }
        
        
        if(isset($params['SoftServices']['status']) && $params['SoftServices']['status']!=''){
             $query->andFilterWhere(['status'=> $model->status]);
        }
        if(isset($params['SoftServices']['lang']) && $params['SoftServices']['lang']!=''){
             $query->andFilterWhere(['lang'=> $model->lang]);
        }
        if(isset($params['SoftServices']['currency']) && $params['SoftServices']['currency']!=''){
             $query->andFilterWhere(['currency'=> $model->currency]);
        }
        if(isset($params['SoftServices']['price']) && $params['SoftServices']['price']!=''){
             $query->andFilterWhere(['price'=> $model->price]);
        }
        if(isset($params['SoftServices']['days']) && $params['SoftServices']['days']!=''){
             $query->andFilterWhere(['days'=> $model->days]);
        }
        if(isset($params['SoftServices']['category']) && $params['SoftServices']['category']!=''){
             $query->andFilterWhere(['category'=> $model->category]);
        }
        if(isset($params['SoftServices']['title']) && $params['SoftServices']['title']!=''){
             $query->andFilterWhere(['like','title', $model->title]);
        }

        $query->andFilterWhere(['user_id'=>Yii::$app->user->identity->user_id]);

       
       // $query->andWhere("name LIKE '%".$model->name."%' OR phone LIKE '%".$model->name."%' OR email LIKE '%".$model->name."%'");
        //$query->andWhere("datefrom LIKE '%".$model->datefrom."%' OR dateto LIKE '%".$model->datefrom."%'");
         
        
        return $dataProvider;Yii::$app->end();
    }


    public static function getBg($stat){

    if($stat == 1){ 
            return 'bg-default';
        }elseif($stat == 2){
            return 'bg-primary';
        }elseif($stat == 3){
            return 'bg-info';
        }elseif($stat == 4){
            return 'warning';
        }elseif($stat == 5){
            return 'bg-success';
        }
        elseif($stat == 6){
            return 'bg-danger';
        }
   }




}

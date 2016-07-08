<?php

/* @var $this yii\web\View */
use yii\helpers\Html;
use yii\helpers\Url;
use yii\widgets\ActiveForm;
use yii\widgets\Breadcrumbs;
use backend\assets\AppAsset;
use backend\helpers\Image;
use common\widgets\Alert;
use kartik\date\DatePicker;
use bupy7\cropbox\Cropbox;
use yii\helpers\ArrayHelper;
use backend\models\SoftUsersTypes;

use backend\models\UsersContacts;
use backend\models\UsersContactType;

use common\models\helpers;
use wbraganca\dynamicform\DynamicFormWidget;


$asset = AppAsset::register($this);
 
$this->title = 'tiwwo';
//print_r($model);
$poleIcons = ['1' => '<i class="glyphicon glyphicon-earphone"></i>', '2' => Yii::t('app','Fax'), '3' => Yii::t('app','E-mail'), '4' => Yii::t('app','Skype')];
$poleTitle = ['1' =>  Yii::t('app','Telephone'), '2' => Yii::t('app','Fax'), '3' => Yii::t('app','E-mail'), '4' => Yii::t('app','Skype')];
$datas = UsersContactType::find()->where(['parent_id'=>Yii::$app->user->identity->user_id])->all();
?>

    <div class="col-sm-12">

        <table class="table table-bordered">
            <?php foreach($datas as $items){?>
                <tr>
                    <td class><?=$poleTitle[$items->name]?></td>
                    <td>
                        <table class="table table-striped">

                        <?php foreach( UsersContacts::find()->where(['parent_id'=>$items->id])->all() as $d){?>
                            <tr>
                            <td width="20"><?=$poleIcons[$items->name]?></td><td> <?= $d->name?></td><td width="20"><?=Html::a('<i class="glyphicon glyphicon-trash"></i>',['profile/deletecontact','id'=>$d->id],[] )?></td>
                            </tr>
                        <?php
                        }
                        ?>
                        </table>
                    </td>
                </tr>
                <?php
                }
                ?>
        </table>
    </div>

    <?php $form = ActiveForm::begin(['id' => 'dynamic-form',
                                     'enableAjaxValidation' => false,
                                     'enableClientValidation' => true,
                                     'options'=>['data-pjax'=>false], 'action'=>( $modelContacts->isNewRecord ? '/admin/'.Yii::$app->language.'/profile/createcontact' : '/admin/'.Yii::$app->language.'/profile/updatecontact') ]); ?>
   
        <div class="col-sm-6">
            
            <?= $form->field($modelContacts, 'name')->dropDownList(['1' => Yii::t('app','Telephone'), '2' => Yii::t('app','Fax'), '3' => Yii::t('app','E-mail'), '4' => Yii::t('app','Skype')])->label(Yii::t('app','Contact type')); ?>
            <?= $form->field($modelContacts, "parent_id")->hiddenInput(['value'=>Yii::$app->user->identity->user_id])->label(false) ?>
        </div>
        
   
        <div class="col-sm-6">
            
               
               
                     <?php DynamicFormWidget::begin([
                        'widgetContainer' => 'dynamicform_wrapper', // required: only alphanumeric characters plus "_" [A-Za-z0-9_]
                        'widgetBody' => '.container-items', // required: css class selector
                        'widgetItem' => '.item', // required: css class
                        'limit' => 2, // the maximum times, an element can be cloned (default 999)
                        'min' => 1, // 0 or 1 (default 1)
                        'insertButton' => '.add-item', // css class
                        'deleteButton' => '.remove-item', // css class
                        'model' => $modelsContacts[0],
                        'formId' => 'dynamic-form',
                        'formFields' => [
                            'full_name',
                            'address_line1',
                            'address_line2',
                            'city',
                            'state',
                            'postal_code',
                        ],
                    ]); ?>

                    <div class="container-items"><!-- widgetContainer -->
                    <?php foreach ($modelsContacts as $i => $modelContact): ?>
                        <div class="item"><!-- widgetBody -->
                                                        
                               
                           
                            <div class="col-sm-8">
                                <?php
                                    // necessary for update action.
                                    if (! $modelContact->isNewRecord) {
                                        echo Html::activeHiddenInput($modelContact, "[{$i}]id");
                                    }
                                ?>
                                <?= $form->field($modelContact, "[{$i}]name")->textInput(['maxlength' => true])->label(Yii::t('app','Contact value')) ?>

                                
                               
                            </div>
                            <div class="col-sm-4">
                            
                                
                                <div class="form-group">
                                    <label>&nbsp;</label>
                                    <div class="clearfix"></div>
                                    <button type="button" class="add-item btn btn-success btn-xs"><i class="glyphicon glyphicon-plus"></i></button>
                                    <button type="button" class="remove-item btn btn-danger btn-xs"><i class="glyphicon glyphicon-minus"></i></button>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                    </div>
                    <?php DynamicFormWidget::end(); ?>
                </div>
            <div class="col-sm-12">
                <div class="form-group">
                    <?= Html::submitButton($modelContact->isNewRecord ? Yii::t('app','Create') : Yii::t('app','Update'), ['class' => 'btn btn-primary']) ?>
                </div>
            </div>

            <?php ActiveForm::end(); ?>

        


                                    
<?=
$this->registerJs("
    $('.dynamicform_wrapper').on('beforeInsert', function(e, item) {
     console.log(item);return false;
});

$('.dynamicform_wrapper').on('afterInsert', function(e, item) {
    console.log('afterInsert');
});

$('.dynamicform_wrapper').on('beforeDelete', function(e, item) {
    if (! confirm('Are you sure you want to delete this item?')) {
        return false;
    }
    return true;
});

$('.dynamicform_wrapper').on('afterDelete', function(e) {
    console.log('Deleted item!');
});

$('.dynamicform_wrapper').on('limitReached', function(e, item) {
    alert('Limit reached');
});

")?>


<?php
$this->registerJs("
    
    $(document).on('submit','form#dynamic-form',function(e){
        e.preventDefault();        
        var form = new FormData( this ); 
        var input = $('#userscontacts-0-name').val();      
        
        if(input.length<4){
            $('.form-group.field-userscontacts-0-name').addClass('has-error');
            console.log(input.length)
            return false;
        }
        
        $.ajax({

            url: $(this).attr('action'),
            type: 'post',
            data: form,
            processData: false,
            contentType: false,
            beforeSend: function(data){
                 $('div.spin').toggleClass('active');
                 $('#_advance_ajax').html('');
            },
            success: function(data) {               
                $('div.spin.spin2').toggleClass('active');
                $('#_advance_ajax').html(data);

                 
            }
        });

        return false;
    });


    "
);?>
<?= $this->registerCss("
    .spin{
      display:none;
    }
    .spin.active{
      display:block;
    }
  ")?>


  <!-- End Page -->
  <!-- Footer -->
  
  

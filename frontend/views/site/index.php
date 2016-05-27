<?php
use frontend\assets\AppAsset;
use yii\widgets\Pjax;
$assets = AppAsset::register($this);
$this->title = 'Tiwwo';
?>

<div class="clearfix"></div>
    <div class="col-sm-6 col-sm-offset-3"><h1 class="block_hp--title text-center"><?=Yii::t('app', "Let's  Travel as Simple as Possible")?></h1></div>
    <div class="col-sm-2 col-sm-offset-5"><hr/></div>
    <div class="col-sm-6 col-sm-offset-3 text-center block_hp--subtitle margin-bottom-10"><?=Yii::t('app', "2 easy steps to start explore world")?></div>
    <div class="col-sm-12 text-center">
        <button class="btn btn-direction btn-bottom btn-primary" id="btn-explore" type="button"><?=Yii::t('app', "SELECT YOUR DESTINATION")?></button>
        <div class="clearfix"></div>
        <div class="block_explore col-sm-6 col-sm-offset-3 text-left" id="block_explore">
            <div class="">
                <?php Pjax::begin(['enablePushState' => false,'id'=>'favRefresh']); ?>
                  <?= $this->render('//modules/_menu_hp',['items_menu'=>$items_menu,'type'=>0])?>
                <?php Pjax::end(); ?> 
                
                <div class="clearfix"></div>
            </div>    
        </div>
    </div>

</div><!-- zakončení block_explore-->

<div class="clearfix"></div>
<div class="block_titles container-fluid">  
    <div class="col-sm-12 text-center"><h3><?=Yii::t('app', "We Think You Might Be Interested")?></h3></div>
    <div class="col-sm-12 text-center"><h4><?=Yii::t('app', "hand select your destination")?></h4></div>
    <div class="clearfix"></div>
</div>

<div class="block_hpitems">
     <?= $this->render('//modules/_item_hp',['items_menu'=>$items_menu,'type'=>0])?>
</div>



<div class="clearfix"></div>
<div class="block_titles green container-fluid margin-bottom-25">  
    <div class="col-sm-12 text-center"><h3><?=Yii::t('app', "From travellers blogs")?></h3></div>
        <div class="col-sm-2 col-sm-offset-5"><hr/></div>
    <div class="col-sm-12 text-center"><h4><?=Yii::t('app', "Tips for best travelling")?></h4></div>
    <div class="clearfix"></div>
</div>

<div class="block_hpitems">
     <?= $this->render('//modules/_blog_hp',['items_menu'=>$items_menu,'type'=>0])?>
</div>
<?php
use frontend\assets\AppAsset;
$assets = AppAsset::register($this);

use frontend\helpers\Image;
for($i=0;$i<=7;$i++){
?>

<div class="col-xlg-3 col-lg-3 col-md-4 col-sm-6  block_itemhp <?= ($i % 2) ? "even" : "odd"; ?>">
        <div class="block_bg">
            
            <div class="block_itemhp--image col-sm-12">
                <a href=""><img src="<?= Image::thumb($assets->baseUrl.'/assets/images/'.(($i % 2) ? "city.jpg" : "city2.jpg"),480,320,true);?>" class="img-responsive"/></a>                  
            </div>
            <div class="hover">
                <div class="block_itemhp--nav col-sm-12">
                   Vícedenní výlet  nebo exkurze<br>
                   <a href="">Valašské meziříčí</a>&nbsp;>&nbsp;<a href="">Frankfurt nad Mohanem</a>
                </div>
                <div class="block_itemhp--title col-sm-12">
                    <a href="" >Soukromý průvodce libercem<br/>Vlastimil Hak</a>
                </div>
                <div class="block_itemhp--price col-sm-12 margin-bottom-10">
                  Od 1300 EUR / za skupinu
                </div>

                <div class="clearfix"></div>
                <div class="col-sm-7 block_itemhp--status">
                    <small>Doba trvání: </small>
                    <strong>12 Hod. 45 min.</strong>
                </div>
                <div class="block_itemhp--listday col-sm-5 margin-bottom-10">
                    <small>kdy</small>            
                    <small class="days">Po</small> - <small class="days">Pá</small>
                </div>
                <div class="col-sm-3">Hodnocení:</div>
                <div class="margin-bottom-10 col-sm-9">

                <?= \alfa6661\widgets\Raty::widget([
                    'name' => 'user-vote',
                    'options' => [
                        // the HTML attributes for the widget container
                    ],
                    'pluginOptions' => [
                        // the options for the underlying jQuery Raty plugin
                        // see : https://github.com/wbotelhos/raty#options
                    ]
                ]); ?>


                </div>
            </div>

           
            
            <div class="margin-bottom-10 col-sm-12"></div>
            <div class="clearfix"></div>

        </div>
        <div class="clearfix"></div>
    </div>
<?php
}
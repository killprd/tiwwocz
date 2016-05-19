<?php
use frontend\assets\AppAsset;
$assets = AppAsset::register($this);

use frontend\helpers\Image;
for($i=0;$i<=10;$i++){
?>

<div class="col-xlg-3 col-lg-3 col-md-4 col-sm-6  block_item">
        <div class="block_bg">
            <div class="row">
                <div class="block_item--image col-sm-12">
                    <a href=""><img src="<?= Image::thumb($assets->baseUrl.'/images/man.jpg',480,320,true);?>" class="img-responsive"/></a>
                    <ul class="block_item--priznaky">
                        <li class="pink">novinka</li>
                        <li class="blue right">sleva</li>
                    </ul>
                </div>
            </div>
            <div class="block_item--title col-sm-12">
                <a href="" >Soukromý průvodce liberecem</a>
            </div>
            <div class="block_item--description col-sm-12">
               Vítr skoro nefouká a tak by se na první pohled mohlo zdát, že se balónky snad vůbec nepohybují.
            </div>

            <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>
    </div>
<?php
}
<?php
use frontend\assets\AppAsset;
$assets = AppAsset::register($this);

use frontend\helpers\Image;
for($i=0;$i<=5;$i++){
?>

<div class="col-md-4 col-xs-12 block_bloghp">
          <!-- Widget -->
    <div class="widget widget-article widget-shadow">
        <div class="widget-header cover overlay-hover overlay block_bloghp--img">
            <img alt="..." src="<?= Image::thumb($assets->baseUrl.'/assets/images/'.(($i % 2) ? "city.jpg" : "city2.jpg"),480,320,true);?>" class="cover-image overlay-scale">
        </div>
        <div class="widget-body">
            <p class="widget-metas type-link">
                By
                <a href="javascript:void(0)">Heather Harper</a>
                <a href="javascript:void(0)">05, 2016</a>
                <a href="javascript:void(0)">
                  <span>3</span> Comments</a>
            </p>
            <h3 class="widget-title">Singulos flagitem cupiditatibus</h3>
            <p>Geometria eae servare dicat, amicitiam, dixissem principio coniuncta
                adhibuit quantumcumque placeat easque, fidem gloriatur statuat
                perspecta ferantur greges propemodum quieti, turpius vituperatoribus
                complectitur leguntur vidisse assiduitas insolens audeam urbes
                futuris. Arbitrium dicere multavit. Sola nullas. Animus si orestem
                distinguique geometriaque. </p>
            <div class="widget-body-footer">
                <div class="widget-actions pull-left">
                  <a href="javascript:void(0)">
                    <i class="icon wb-share"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i class="icon wb-heart"></i>
                    <span>253</span>
                  </a>
                  <a href="javascript:void(0)">
                    <i class="icon wb-chat"></i>
                    <span>115</span>
                  </a>
                </div>
                <a href="javascript:void(0)" class="btn btn-default btn-outline pull-right">
                  <i class="icon wb-chevron-right-mini"></i> Read More
                </a>
            </div>
        </div>
    </div>
          <!-- End Widget -->
</div>
<?php
}
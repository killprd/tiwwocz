<?php
use frontend\assets\AppAsset;
use yii\helpers\Html;$asset = AppAsset::register($this);

use frontend\helpers\Image;


echo '<ul class="block_explore--menu col-sm-12">';
echo ($type==1?'<li class="col-sm-12"><a href="#" title="" data="0"><< '.Yii::t('app','Back to explore country').'</a></li>':null);
foreach($items_menu as $item){
?>

    <li class="col-sm-4"><a href="#" title="<?=$item->name?>" data="<?=($type==0?$item->country_id:$item->city_id)?>" type="<?=$type?>"><img src="<?=$asset->baseUrl?>/assets/images/ico_lang/24/United-Kingdom.png"/>&nbsp;<?=$item->name?></a></li>
                    
                
<?php
}

echo '</ul>';


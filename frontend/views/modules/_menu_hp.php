<?php
use frontend\assets\AppAsset;
$asset = AppAsset::register($this);

use frontend\helpers\Image;


echo '<ul class="block_explore--menu col-sm-12">';
echo ($type==1?'<li class="col-sm-12"><a href="#" title="" data="0"><< '.Yii::t('app','Back to explore country').'</a></li>':null);
for($i=0;$i<=30;$i++){
?>

    <li class="col-sm-4"><a href="#" title="" data="1" type="<?=$type?>"><img src="<?=$asset->baseUrl?>/assets/images/ico_lang/24/United-Kingdom.png"/>&nbsp;<?=$items_menu?> (78)</a></li>
                    
                
<?php
}

echo '</ul>';
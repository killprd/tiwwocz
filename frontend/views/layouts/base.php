<?php
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use frontend\assets\AppAsset;
use common\widgets\Alert;
$assets = AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<?php $this->beginBody() ?>




<?= $content?>









<div id="eu-cookies" class="<?=(Yii::$app->session['person_cokies']==Null?'active':null)?>">
    Tento web používá k poskytování služeb, personalizaci reklam a analýze
    návštěvnosti soubory cookie. Používáním tohoto webu s tím souhlasíte.
    <button id="setcokie">V pořádku</button>
    <a href="https://www.google.com/policies/technologies/cookies/">Další informace</a>
</div>


<footer class="site-footer">
    <div class="site-footer-legal">© 2016 <a href="http://themeforest.net/item/remark-responsive-bootstrap-admin-template/11989202">Remark</a></div>
    <div class="site-footer-right">
      <?= Yii::powered() ?>
    </div>
  </footer>


<link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Roboto:300,400,500,300italic'>


<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
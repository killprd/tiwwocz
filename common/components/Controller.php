<?php
namespace common\components;
use Yii;
use app\models\Kategorie;
use backend\models\Bannery;
class Controller extends \yii\web\Controller
{
    public $menuItems = [];
    public $user,$topMenu,$kategorie,$footerBanner;
    public function init(){

        
        //sessions
        \Yii::$app->session['vypis'] = (isset($_GET['vypis'])? \Yii::$app->session['vypis']=$_GET['vypis'] : (\Yii::$app->session['vypis']==''?\Yii::$app->session['vypis']='1':\Yii::$app->session['vypis'] = \Yii::$app->session['vypis']));
		\Yii::$app->session['sorting'] = (isset($_GET['sorting'])? \Yii::$app->session['sorting']=$_GET['sorting'] : (\Yii::$app->session['sorting']==''?\Yii::$app->session['sorting']='p2':\Yii::$app->session['sorting'] = \Yii::$app->session['sorting']));
		\Yii::$app->session['lang'] = (isset($_GET['lang'])? \Yii::$app->session['lang']=$_GET['lang'] : (\Yii::$app->session['lang']==''?\Yii::$app->session['lang']='1':\Yii::$app->session['lang'] = \Yii::$app->session['lang']));
		\Yii::$app->session['hodnoceni'] = (!isset(\Yii::$app->session['hodnoceni'])?array():\Yii::$app->session['hodnoceni']);
		\Yii::$app->session['oblibene'] = (!isset(\Yii::$app->session['oblibene'])?array():\Yii::$app->session['oblibene']);
		\Yii::$app->session['kosik'] = (!isset(\Yii::$app->session['kosik'])?array():\Yii::$app->session['kosik']);

		\Yii::$app->session['doprava'] = (!isset(\Yii::$app->session['doprava'])?array():\Yii::$app->session['doprava']);
		\Yii::$app->session['platba'] = (!isset(\Yii::$app->session['platba'])?array():\Yii::$app->session['platba']);
		\Yii::$app->session['voucher'] = (!isset(\Yii::$app->session['voucher'])?array('status'=>'0'):\Yii::$app->session['voucher']);
		\Yii::$app->session['hledani'] = (!isset(\Yii::$app->session['hledani'])?'':\Yii::$app->session['hledani']);
		\Yii::$app->view->params['footerBanner'] = Bannery::getBanner(1,2);

		/*menu*/
		
			

	      
	        
	       
			


				
			
			

        parent::init();
    }
   
}
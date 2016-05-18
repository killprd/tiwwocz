<?php
namespace common\components;

use yii\web\UrlRule;

class CarUrlRule extends UrlRule
{
    public $connectionID = 'db';

    public function init()
    {
       
        if ($this->name === null) {
            $this->name = __CLASS__;
        }
    }

    public function createUrl($manager, $route, $params)
    {
    
        if ($route === 'car/index') {
            if (isset($params['manufacturer'], $params['model'])) {
                return $params['manufacturer'] . '/' . $params['model'];
            } elseif (isset($params['manufacturer'])) {
                return $params['manufacturer'];
            }
        }
        return false;  // this rule does not apply
    }

    public function parseRequest($manager, $request)
    {
       
        
        $pathInfo = $request->getPathInfo();
        if($pathInfo==''){
            return false;
        }
        $command = \Yii::$app->db->createCommand("SELECT controller,action FROM urls WHERE url = '".$pathInfo."'");
        $post = $command->queryOne();
        $count = \Yii::$app->db->createCommand("SELECT COUNT(id) FROM urls WHERE url = '".$pathInfo."'")->queryScalar();

        
/*
        if (preg_match('%^(\w+)(/(\w+))?$%', $pathInfo, $matches)) {
          //  print_r($matches);
            // check $matches[1] and $matches[3] to see
            // if they match a manufacturer and a model in the database
            // If so, set $params['manufacturer'] and/or $params['model']
            // and return ['car/index', $params]
        }*/
        
        if($count==0){
          
            return false;
        }else{

            return [$post['controller'].'/'.$post['action'],$request->get()];
         }
        return false;  // this rule does not apply
    }
}
<?php
//require_once  'core/init.php';
include "core/init.php";

$myDatabase = DB::getInstance();
//$myDatabase->get('users' , array(
//    'username', '=' , 'dale',
//
//));
    $myDatabase->getSpecific(array(
        'username' , 'password'
    ) , 'users', array(
    'password' , '=' , 'password'
));

//$myDatabase->get('users' , array('username' , '=' , 'Dale'));
//$result = $myDatabase->first();
//echo $result->username;
;
//$myDatabase->update('users' , 1 , array(
//    'password' => 'lekkapassword',
//    'username' => 'liam gordon'
//));
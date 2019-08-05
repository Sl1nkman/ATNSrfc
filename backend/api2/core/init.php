<?php
session_start();
error_reporting(E_ALL);

// set your default time-zone
date_default_timezone_set('Africa/Johannesburg');
$key = "example_key";
$iss = "http://example.org";
$aud = "http://example.com";
$iat = 1356999524;
$nbf = 1357000000;

$GLOBALS['config'] = array(
    'mysql' => array(
        'dns' => 'mysql:host=127.0.0.1;dbname=atnsccrdatabase' ,
        'username' => 'root' ,
        'password' =>  '' ,
    ),
    'remember' => array(
        'cookie_name' => 'hash',
        'cookie_expiry' => '360'
    ),
    'session' => array(
        'session_name' => 'user',
        'token_name' => 'token' ,
        'token_CSRF' => 'CSRF_token',
        'key' => "example_key" ,
        'iss'=> 'http://example.org',
        'alg' => 'SHA-256',
        'aud' => 'http://example.com',
        'iat' => 1356999524,
        'nbf' => 1357000000
    )
);
require_once("functions/sanitize.php");
spl_autoload_register(function($class){
    require_once 'classes/'.$class.'.php';
});



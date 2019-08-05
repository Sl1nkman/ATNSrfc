<?php

require_once 'core/init.php';


header("Access-Control-Allow-Origin: http://localhost");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization,X-Requested-With");
$tokenCSRF = new stdClass();

    $tokenCSRF->tokenValue = Token::generateCSRFToken();

    if (isset($tokenCSRF)) {

        $response = json_encode($tokenCSRF);

        exit ($response);
}
    exit (false) ;

<?php
require_once 'core/init.php';
// required headers
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// database connection will be here
$data = json_decode(file_get_contents("php://input"), true);
$db = DB::getInstance();
if(isset($data) && !empty($data)){
    if (isset($data['token']) && !empty($data['token'])) {
        $username = $data['username'];
        $password = $data['password'];
        $db->get('users' ,array(
        'username' , '=' , $username
        ));
        if($db->count()) {
            $user = $db->first();
            if (password_verify($data['password'], $user->password)) {
            Token::generate($user);
            $response = ["success" => true , "message" => "Welcome ".$user->name." ".$user->surname] ;
            $response = json_encode($response) ;
            exit($response);
            } else {
                $response = ["success" => false , "message" => "Invalid credentials"] ;
                $response = json_encode($response) ;
                exit($response);
            }

        }
        $response = ["success" => false , "message" => "Invalid credentials"] ;
        $response = json_encode($response) ;
        exit($response);
    }

}

<?php
require_once 'core/init.php';
require_once 'php-jwt-master/src/BeforeValidException.php';
require_once 'php-jwt-master/src/ExpiredException.php';
require_once 'php-jwt-master/src/SignatureInvalidException.php';
require_once 'php-jwt-master/src/JWT.php';
use \Firebase\JWT\JWT;
class Token
{



    private $_strong = true ;
    private  $_length = 32 ;
    public static function generate($user) {
        $token = array(
            "iss" => Config::get('session/iss'),
            'alg' => Config::get('session/alg'),
            "aud" => Config::get('session/aud'),
            "iat" => Config::get('session/iat'),
            "nbf" => Config::get('session/nbf'),
            "data" => array(
                "id" => $user->id,
                "firstname" => $user->name,
                "lastname" => $user->surname,
                "username" => $user->username
            )
        );

        // set response code
        http_response_code(200);

        // generate jwt
        $jwt = JWT::encode($token, Config::get('session/key'));
//        echo json_encode(
//            array(
//                "Success" => true ,
//                "message" => "Successful login.",
//                "jwt" => $jwt
//            )
//        );
        return Session::put(Config::get('session/token_name') ,$jwt);
    }

    public static function generateCSRFToken(){
        $token = md5(uniqid(rand(), TRUE));
        $db = DB::getInstance();
        $db->insert('csrf_tokens' , array(
            'token_value' => $token
        ));
//        Session::put(Config::get('session/token_CSRF') , $token = md5(uniqid(rand(), TRUE)));
        return $token ;
    }

    public static function checkCSRF($token) {
        $db = DB::getInstance();
        $db->get('csrf_tokens' , array('token_value' , '=' , $token));
        if ($db->count()){
            $db->delete('csrf_tokens' , array(
                'token_value' , '=' , $token
            ));
            return true ;
        }
//        $tokenName = Config::get('session/token_CSRF');
//        var_dump(Session::get(Config::get('session/token_CSRF')));
//        if (Session::exists($tokenName) && $token === Session::get($tokenName)) {
//            Session::delete($tokenName);
//            return true;
//        }
        return false;
    }
    public static function check($token) {
        $tokenName = Config::get('session/token_name');
        if (Session::exists($tokenName) && $token === Session::get($tokenName)) {
            Session::delete($tokenName);
            return true;
        }
            return false;
    }

}
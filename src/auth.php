<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');

//session_start();
$data = json_decode(file_get_contents("php://input"), true);
class Client {
    var $user;
    var $pass;
    var $success;

    public function __construct($usern , $passn)
    {
        $this->user = $usern;
        $this->pass = $passn;
        $this->success = false;
    }
}
if(isset($data) && !empty($data)){
    $username = $data['username'];
    $password = $data['password'];

    $myObj = new Client($username , $password ) ;

    if($username == 'admin' && $password == '21232f297a57a5a743894a0e4a801fc3'){
        ?>
        {
        "success" : true,
        "message" : "This is the secret only admin know"
        }
        <?php
    }else {


        ?>
        {
        "success" : false,
        "message" : "Invalid credentials",

        }
        <?php



    }
}else {

    ?>
    {
    "success": false,
    "message": "Only POST access accepted"
    }
    <?php
}
?>

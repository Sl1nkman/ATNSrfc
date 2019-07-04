<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST, PUT');

//session_start();
$data = json_decode(file_get_contents("php://input"), true);
if(isset($data) && !empty($data)){
    $username = $data['username'];
    $password = $data['password'];
    if($username == 'admin' && $password == 'admin'){
        ?>
        {
        "success": true,
        "message" : "This is the secret only admin know"
        }
        <?php
    }else {
        ?>
        {
        "success" : false,
        "message" : "Invalid credentials"
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

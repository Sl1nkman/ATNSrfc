<?php
require_once(config.php);
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');

$data = json_decode(file_get_contents("php://input"), true);

if(isset($data) && !empty($data)) {
    $username = $data['email'];
    $password = $data['password'];
    $title = $data['title'];
    $department = $data['department'];
    $name = $data['name'];
    $surname = $data['surname'];
    $employeeId = $data['employeeId'];
    $contactNumber = $data['contactNumber'];
    $permission = $data['permission'];
    $region = $data['region'];

}
?>

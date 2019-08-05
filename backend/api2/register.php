<?php
 require_once 'core/init.php';

// required headers
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Content-Type: application/json, charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$_POST = file_get_contents("php://input");
$conn = DB::getInstance();
$response = ['success' => false , 'message' => 'something is wrong'];
$request = json_decode($_POST , true );
if(isset($request) && !empty($request)) {
    if (Token::checkCSRF($request['CSRF_token'])) {
        $validate = new Validation();
        $validation = $validate->check($request, array(
            'username' => array(
                'required' => true,
                'unique' => 'users'
            ),
            'password' => array(
                'required' => true
            ),
            'title' => array(
                'required' => true
            ),
            'site' => array(
                'required' => true
            ),
            'name' => array(
                'required' => true
            ),
            'surname' => array(
                'required' => true
            ),
            'employeeID' => array(
                'required' => true,
                'unique' => 'users'
            ),
            'contactNum' => array(
                'required' => true,
            ),
        ));
        if ($validate->passed()) {
            $info = new stdClass();
            $info->username = $request['username'];
            $info->password = $request['password'];
            $info->title = $request['title'];
            $info->site = $request['site'];
            $info->name = $request['name'];
            $info->surname = $request['surname'];
            $info->employeeID = $request['employeeID'];
            $info->contactNumber = $request['contactNum'];
            $user = new User();
            try {
                $user->create(array(
                    'username' => $info->username,
                    'password' => $password_hash = password_hash($info->password, PASSWORD_DEFAULT),
                    'title' => $info->title,
                    'site' => $info->site,
                    'name' => $info->name,
                    'surname' => $info->surname,
                    'employeeID' => $info->employeeID,
                    'contactNum' => $info->contactNumber
                ));
            } catch (Exception $e) {

            }

            $response = ['success' => true, 'message' => 'Thank you for registering ' . $info->name . '  ' . $info->surname . '. Please login'];
            $response = json_encode($response);
            exit($response);


        } else {
            $errors = null;
            foreach ($validate->errors() as $error) {
                $errors .= ' ' . $error;
            }
            $response = ['success' => false, 'message' => $errors];
            $response = json_encode($response);
            exit($response);
        }

    } else {
        $response = ['success' => false, 'message' => 'I know what you are doing... Stop being doggy!!!!'];
        $response = json_encode($response);
        exit($response);
    }


}
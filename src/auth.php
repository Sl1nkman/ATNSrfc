<?php

$data = json_decode(file_get_contents("php://input"));
if(isset($data) && !empty($data)){
  $username = $data['username'];
  $password = $data['password'];

    if($username == 'admin' && password == 'admin'){
      ?>
{
"success": true,
"secret" : "This is the secret only admin know"
}
<?php
    }else {
      ?>
{"success" : false,
 "message" : "Invalid credentials"
  }
  <?php
    }
}else {
  //var_dump($_POST)
  ?>
{"success": false,
 "message": "Only POST access accepted"
}
<?php
}
?>

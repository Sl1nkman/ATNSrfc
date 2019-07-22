<?php
/* Database credentials. Assuming you are running MySQL
server with default setting (user 'root' with no password) */

define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'users');
define('PORT','3306');
define('SOCKET','MySQL');



/* Attempt to connect to MySQL database */
/**
 * @return PDO|null
 */
function getUserDatabaseConnection() {
try{
  $userConnection = null ;
  $userConnection = new  PDO('mysql:host='. DB_SERVER .';dbname='. DB_NAME. ';charset=utf8mb4' , DB_USERNAME, DB_PASSWORD );
//  $link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME, PORT, SOCKET);

} catch(PDOException $exception) {
   echo "Connection error: " . $exception->getMessage();
 } finally {
  return $userConnection;
 }
 }

// Check connection
//  if ($link === false) {
//    die("ERROR: Could not connect. " . mysqli_connect_error());
//  }
?>

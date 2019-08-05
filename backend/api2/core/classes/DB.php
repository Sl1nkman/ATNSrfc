<?php
class DB {
    private static $_instance = null ;
    private $_pdo,
        $_query ,
        $_error = false ,
        $_results ,
        $_count = 0 ,
        $_select = false;
    public function __construct(){
        try{
            $this-> _pdo = new PDO(Config::get('mysql/dns'),Config::get('mysql/username'), Config::get('mysql/password'));
            if($this-> _pdo  == null ){

            } else {

            }
            $this->_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }
    }
    public static function getInstance(){
        if (!isset(self::$_instance)){
            self::$_instance = new DB();
        }
        return self::$_instance;
    }
    private function query($sql , $params = array()){
        $this->_error = false ;

            if ($this->_query = $this-> _pdo->prepare($sql)) {
                $x = 1;
                if (count($params)) {
                    foreach ($params as $param) {
                        $this->_query->bindValue($x, $param);
                        $x++;
                    }
                }

                if ($this->_query->execute()) {
                    if ($this->_select) {
                        $this->_results = $this->_query->fetchAll(PDO::FETCH_OBJ);
                        $this->_count = $this->_query->rowCount();
                    }
                } else {
                    $this->_error = true;
                }
            }
        return $this;
    }

    private function action ( $action , $table , $where = array()){
        if(count($where) >= 3){
            $operators = array ('=' , '>' , '<' , '>=' , '<=');
            $field    = $where[0] ;
            $operator = $where[1] ;
            $value    = $where[2] ;
            if(in_array($operator , $operators )){
                $sql = "{$action} FROM {$table} WHERE {$field} {$operator} ?";
                if(!$this->query($sql , array($value))->error()){
                    return $this;
                }
            }
        }
        return false;
    }


    public function get( $table , $where){
        $this->_select = true;
        return $this->action('SELECT *' , $table , $where);
    }

    public function getSpecific($columnNames , $table , $where) {
        $this->_select = true;
        $columnList = null ;
        $x = 1 ;
        foreach ($columnNames as $column){
            $columnList .= "'".$column."'" ;
            if ($x < count($columnNames)) {

                $columnList .= ', ';
            }
            $x++ ;
        }
        return $this->action('SELECT '.$columnList , $table , $where);
    }
    public function delete($table , $where){
        $this->_select = false;
        $this->_results = null;
        return $this->action('DELETE', $table , $where);
    }
    public function insert($table , $fields = array()){
        $this->_select = false;
        $this->_results = null;
        if(isset($fields)){
             $keys = array_keys($fields);
             $values = null;
             $x = 1;
             foreach($fields as $field){
                 $values .= $field ;

                 if ($x < count($fields)) {

                     $values .= "'".', '."'";
                 }
                 $x++ ;
             }
             $sql = "INSERT INTO ".$table."(`".implode('`, `',$keys )."`) VALUES ('{$values}')";
             if (!$this->query($sql , $keys)->error()){
                 return true;
             }
        }
        return false;
    }
    public function update($table , $id , $fields){
        $this->_select = false;
        $this->_results = null;
        $set = '';
        $x = 1 ;
        foreach ($fields as $name => $value){
            $set .= "{$name} = ?";
            if ($x < count($fields)){
                $set .= ', ';
            }
            $x++;
        }
        $sql = "UPDATE {$table} SET {$set} WHERE id = '{$id}'";
        if ($this->query( $sql , $fields)->error()){
            return true;
        } else {
            return false ;
        }
    }
    public function results(){
        return $this->_results;
    }

    public function first() {
        return $this->results()[0];
    }

    public function count(){
        return $this->_count;
    }

    public function error() {
        return $this->_error;
    }
}
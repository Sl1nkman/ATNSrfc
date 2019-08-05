<?php
function escape($string){
    return htmlspecialchars(strip_tags($string));
}
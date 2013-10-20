<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    file_put_contents('data.json', file_get_contents("php://input"));
} 

Header('Content-type: application/json');
echo file_get_contents('data.json');

?>
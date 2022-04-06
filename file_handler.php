<?php
header('Content-Type: application/json; charset=utf-8');

$response = [];
$response['status'] = 'BAD';
$filename = $_FILES['someFile']['tmp_name'];

if (move_uploaded_file($filename, 'upload/' . $_FILES['someFile']['name'])) {
    $response['status'] = "OK";
}

echo json_encode($response);
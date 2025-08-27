<?php
// Permite que o React faça fetch para o PHP
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Lê os dados enviados pelo React
$input = file_get_contents("php://input");

// DEBUG: salva os dados para conferir
// file_put_contents("debug.json", $input);

// Envia para o Webhook.site
$ch = curl_init("https://webhook.site/be52cfa7-9e13-4562-9142-2375d23afa07");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $input);
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
if($response === false) {
    echo 'Erro: ' . curl_error($ch);
} else {
    echo $response;
}
curl_close($ch);

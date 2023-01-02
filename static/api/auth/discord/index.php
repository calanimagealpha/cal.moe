<?php

declare(strict_types=1);
session_start();

const API_ENDPOINT = 'https://discord.com/api/v10';
const REDIRECT_URI = 'http://localhost:5173/api/auth/discord';

function exchange_code($code)
{
    $url = API_ENDPOINT . "/oauth2/token";

    $data = [
        'client_id' => $_ENV['DISCORD_CLIENT_ID'],
        'client_secret' => $_ENV['DISCORD_CLIENT_SECRET'],
        'grant_type' => 'authorization_code',
        'code' => $code,
        'redirect_uri' => REDIRECT_URI
    ];

    $options = [
        CURLOPT_URL => $url,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => http_build_query($data),
        CURLOPT_RETURNTRANSFER => true
    ];

    $handle = curl_init();

    curl_setopt_array($handle, $options);

    $res = curl_exec($handle);

    if (curl_errno($handle)) {
        return;
    }

    curl_close($handle);

    return json_decode($res);
}

if (!isset($_GET['code'])) {
    http_response_code(400);
    return;
}

$code = $_GET['code'];
$token = exchange_code($code);

if (!$token) {
    http_response_code(400);
    return;
}

$_SESSION['discord_token'] = (object) [
    'access_token' => $token->access_token,
    'token_type' => $token->token_type,
    'expires_on' => time() + $token->expires_in,
    'refresh_token' => $token->refresh_token,
    'scope' => $token->scope
];

if (isset($_GET['state'])) {
    $state = json_decode($_GET['state']);
    header('Location: ' . $state->redirect);
} else {
    header('Location: /');
}

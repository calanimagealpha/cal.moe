<?php

declare(strict_types=1);
session_start();

const REVOKE_URL = 'https://discord.com/api/oauth2/token/revoke';

$redirect = $_POST['redirect'] ?: '/';

if (isset($_SESSION['discord_token'])) {
    $data = [
        'client_id' => $_ENV['DISCORD_CLIENT_ID'],
        'client_secret' => $_ENV['DISCORD_CLIENT_SECRET'],
        'token' => $_SESSION['discord_token']->access_token
    ];

    $options = [
        CURLOPT_URL => REVOKE_URL,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => http_build_query($data),
        CURLOPT_RETURNTRANSFER => true
    ];

    $handle = curl_init();

    curl_setopt_array($handle, $options);

    curl_exec($handle);

    unset($_SESSION['discord_token']);
}

Header('Location: ' . $redirect);
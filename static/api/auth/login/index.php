<?php

declare(strict_types=1);
session_start();

const AUTHORIZE_URL = 'https://discord.com/api/oauth2/authorize?';

$redirect = $_POST['redirect'] ?: '/';

if (isset($_SESSION['discord_token']) && $_SESSION['discord_token']->expires_on > time()) {
    Header('Location: ' . $redirect);
} else {
    $data = [
        'client_id' => '1048301653633290340',
        'redirect_uri' => 'http://localhost:5173/api/auth/discord',
        'response_type' => 'code',
        'scope' => 'identify guilds.members.read',
        'state' => json_encode(['redirect' => $redirect])
    ];

    Header('Location: ' . AUTHORIZE_URL . http_build_query($data));
}

<?php

declare(strict_types=1);
session_start();

const API_ENDPOINT = 'https://discord.com/api/v10';
const CDN_ENDPOINT = 'https://cdn.discordapp.com/';

function get_guild_member($token)
{
    $url = API_ENDPOINT . "/users/@me/guilds/424393596465184768/member";

    $options = array(
        'http' => array(
            'method' => 'GET',
            'header' => "authorization: {$token->token_type} {$token->access_token}"
        )
    );

    $context = stream_context_create($options);
    $response = file_get_contents($url, false, $context);

    return json_decode($response);
}

if (!isset($_SESSION['discord_token']) || $_SESSION['discord_token']->expires_on < time()) {
    http_response_code(401);
    return;
}

if (!isset($_SESSION['user_info'])) {
    $member = get_guild_member($_SESSION['discord_token']);

    $avatar = ($member->avatar) ?
        CDN_ENDPOINT . 'guilds/424393596465184768/users/' . $member->user->id . '/avatars/' . $member->avatar . '.png' :
        CDN_ENDPOINT . 'avatars/' . $member->user->id . '/' . $member->user->avatar . '.png';

    $_SESSION['user_info'] = (object) [
        'avatar' => $avatar,
        'nickname' => $member->nick ?: $member->user->username,
        'roles' => $member->roles
    ];
}

echo json_encode($_SESSION['user_info']);

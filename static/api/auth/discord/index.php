<?php declare(strict_types=1);
session_start();

const API_ENDPOINT = 'https://discord.com/api/v10';
const CLIENT_ID = '1048301653633290340';
const CLIENT_SECRET = 'kDa0mhLm1zS7nOBDyZaYS_oEdtM1KpJn';
const REDIRECT_URI = 'http://localhost:5173/api/auth/discord';
function exchange_code($code)
{
    $url = API_ENDPOINT . "/oauth2/token";

    $data = array(
        'client_id' => CLIENT_ID,
        'client_secret' => CLIENT_SECRET,
        'grant_type' => 'authorization_code',
        'code' => $code,
        'redirect_uri' => REDIRECT_URI
    );

    $options = array(
        'http' => array(
            'header' => 'Content-type: application/x-www-form-urlencoded',
            'method' => 'POST',
            'content' => http_build_query($data)
        )
    );

    $context = stream_context_create($options);
    $response = file_get_contents($url, false, $context);

    return json_decode($response);
}

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

$code = $_GET['code'];
$token = exchange_code($code);

$_SESSION['access_token'] = $token->access_token;
$_SESSION['token_type'] = $token->token_type;
$_SESSION['expires_on'] = time() + $token->expires_in;
$_SESSION['refresh_token'] = $token->refresh_token;
$_SESSION['scope'] = $token->scope;

if (isset($_GET['state'])) {
    $state = json_decode($_GET['state']);
    header('Location: ' . $state->redirect_to);
} else {
    header('Location: /');
}

var_dump($_SESSION);

?>
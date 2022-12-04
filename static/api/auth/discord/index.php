<?php declare(strict_types=1);
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

// $token = exchange_code($code);

$mysqli = new mysqli('localhost', getenv('DB_USER'), getenv('DB_PASSWORD'), getenv('DB_USER'));

echo $mysqli->host_info;


// var_dump($token);

?>
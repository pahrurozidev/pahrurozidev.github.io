<?php

// function get_CURL($url)
// {
//     $curl = curl_init();
//     curl_setopt($curl, CURLOPT_URL, $url);
//     curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
//     $result = curl_exec($curl);
//     curl_close($curl);

//     return json_decode($result, true);
// }

// $url = 'https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UCTDyqM6pCkyL-RuH3CpbP9w&key=AIzaSyACa05xLLs42hdE84-napJzVcPDDKcTv3Q';


// $result = get_CURL($url);

// $youtubeProfilePic = $result['items'][0]['snippet']['thumbnails']['medium']['url'];
// $channelName = $result['items'][0]['snippet']['title'];
// $subscribe = $result['items'][0]['statistics']['subscriberCount'];


// $urlLatesVideo = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyACa05xLLs42hdE84-napJzVcPDDKcTv3Q&channelId=UCTDyqM6pCkyL-RuH3CpbP9w&maxResults=10&order=date&part=snippet';
// $result = get_CURL($urlLatesVideo);
// $latesVideo = $result['items'][0]['id']['videoId'];

let responsive = document.querySelector('.toggle');
let view = document.querySelector('.nav ul');
responsive.addEventListener("click" , function () {
    if (view.style.display === "none"){
      view.style.display = 'block'
    } else {
      view.style.display = 'none'
    }
});

$.ajax({
    url: 'https://www.googleapis.com/youtube/v3/channels',
    type: 'GET',
    dateType: 'json',
    data: {
        'part': 'snippet,statistics',
        'id': 'UCTDyqM6pCkyL-RuH3CpbP9w',
        'key': 'AIzaSyACa05xLLs42hdE84-napJzVcPDDKcTv3Q'
    },
    success: function (result) {
        const url = result.items
        $.each(url, function (i, data) {
            const urlProfile = data.snippet.thumbnails.medium.url;
            const urlSubscribe = data.statistics.subscriberCount;
            const titleYt = data.snippet.titleYt;
            console.log(titleYt);
            $('.profile-api').attr('src', urlProfile);
            $('.titleYt').html(`${titleYt} Subscribe`);
            $('.subscribe').html(urlSubscribe);
        });
    }
});

$.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    dataType: 'json',
    data: {
        'key': 'AIzaSyACa05xLLs42hdE84-napJzVcPDDKcTv3Q',
        'channelId': 'UCTDyqM6pCkyL-RuH3CpbP9w',
        'maxResults': 1,
        'order': 'date',
        'part': 'snippet',
    },
    success: function (result) {
        let url = result.items;
      $.each(url, function (i, data) {
          let url = data.id.videoId;
          $('iframe').attr('src', `https://www.youtube.com/embed/${url}`);
        });
    }
});

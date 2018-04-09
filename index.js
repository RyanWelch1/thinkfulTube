const YOUTUBE_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";
const API_KEY = 'AIzaSyCOOxJ6vuXPfsQl4vn52ihFR4k-piEtMZY';
const YOUTUBE_WATCH_URL = "https://www.youtube.com/watch?v=";



$(".js-search-form").on("submit", function(event) {
    event.preventDefault();
    let userInput= $(".js-query").val();
    getDataFromYoutubeAPI(userInput, displayResults);
})

// getDataFromYoutubeAPI as suggests is used to get request from API that returns JSON data
function getDataFromYoutubeAPI(searchTerm, callback) {
    const query = {
      part: 'snippet',
      key: API_KEY,
      q: searchTerm,
      maxResults: 6,
    };
    $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
    console.log('getDataFromYoutubeAPI ran');
} 


function displayResults(data) {
    data.items.forEach((item) => {
        console.log(item);
        $(".js-results").append(`<figure>
                                    <a class="video" href="YOUTUBE_WATCH_URL + ${item.id.videoId}"target="_blank"><img src="${item.snippet.thumbnails.medium.url}" alt="${item.snippet.title}"></a>
                                    <figcaption>
                                    <h3> ${item.snippet.title}</h3>
                                    <p>Check Out More from <a class="channelId" href="https://www.youtube.com/channel/${item.snippet.channelID}" target="_blank">${item.snippet.channelTitle}</a></p>
                                    </figcaption>
                                </figure>`);
    })
    

}


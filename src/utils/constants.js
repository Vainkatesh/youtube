const GOOGLE_API_KEY="AIzaSyCy-B-rbcaTEwjYr6rF8Fa_pbpHuK1KtV4";

const YOUTUBE_VIDEOS_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;

const YOUTUBE_SEARCH_SUGGESTIONS_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export {YOUTUBE_VIDEOS_API,YOUTUBE_SEARCH_SUGGESTIONS_API};
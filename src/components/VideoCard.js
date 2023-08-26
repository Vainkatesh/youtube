const VideoCard=({videoData})=>{

    const {snippet,statistics}=videoData;
    const {channelTitle,title,thumbnails}=snippet;
    return (
        <div className="p-2 m-2 w-72 shadow-lg cursor-pointer">
            <img className="rounded-lg" alt="thumbnail" src={thumbnails?.medium?.url}/>
            <div className="flex">
                {/* <img alt="channel-logo"/> */}
                <div>
                    <div className="font-bold py-4">
                        {title}
                    </div>
                    <div>
                        {channelTitle}
                    </div>
                    <div>
                        {statistics?.viewCount} views
                    </div>
                </div>
            </div>
        </div>
    );

}

export default VideoCard;
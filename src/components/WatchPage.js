import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage=()=>{

    const [searchParams]=useSearchParams();
    const videoId=searchParams.get('v');
    console.log(videoId);

    const dispatch=useDispatch();
    
    useEffect(()=>{
        dispatch(closeSideBar());
    },[]);


    return (
        <div className="flex flex-col w-full">
        <div className="flex px-5 w-full">
            {/* <iframe 
                width="1200" 
                height="600" 
                src={"https://www.youtube.com/embed/"+videoId} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            >
            </iframe> */}

            <div>
                <ReactPlayer
                    url={"https://www.youtube.com/embed/"+videoId}
                    playing={true}
                    width={1200}
                    height={600}
                />
            </div>
            <div className="w-full">
                <LiveChat/>
            </div>
        </div>
        {/* N-LEVEL nested comments */}
        <CommentsContainer/>
        </div>
    );

}

export default WatchPage;
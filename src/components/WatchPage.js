import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";
import CommentsContainer from "./CommentsContainer";

const WatchPage=()=>{

    const [searchParams]=useSearchParams();
    const videoId=searchParams.get('v');
    console.log(videoId);

    const dispatch=useDispatch();
    
    useEffect(()=>{
        dispatch(closeSideBar());
    },[]);


    return (
        <div className="flex flex-col">
        <div className="px-5">
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

            <ReactPlayer
                url={"https://www.youtube.com/embed/"+videoId}
                playing={true}
                width={1200}
                height={600}
            />
        </div>
        {/* N-LEVEL nested comments */}
        <CommentsContainer/>
        </div>
    );

}

export default WatchPage;
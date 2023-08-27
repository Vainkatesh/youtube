import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames } from "../utils/helper";

const LiveChat=()=>{

     const dispatch=useDispatch();
     const chatMessages=useSelector(store=>store.chat.messages);


     const [myMessage,setMyMessage]=useState("");
        // Polling logic 
        useEffect(()=>{
            const interval=setInterval(()=>{
                // console.log("API Calling");
                //Api call and add response to store
                dispatch(addMessage({name:generateRandomNames(),message:"I love javascript !!! "+Math.random(1,10)}));
            },2000)

            return ()=> clearInterval(interval);
        },[])

        const handleAddChat=()=>{
            dispatch(addMessage({name:"Vainkatesh",message:myMessage}));
            setMyMessage("");
        }


    return (
        <>
            <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
                {chatMessages.map((chat,index)=><ChatMessage key={index} name={chat.name} message={chat.message}/>)}
            </div>
            <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=>{
                e.preventDefault();
                handleAddChat()}}>
                <input className="w-96 border border-green-400 px-2 rounded-lg" type="text" value={myMessage} onChange={(e)=>setMyMessage(e.target.value)}/>
                <button 
                    className="px-2 mx-2 bg-green-100 rounded-lg" 
                    // onClick={handleAddChat}
                >
                Send
                </button>
            </form>
        </>
    );
}

export default LiveChat;
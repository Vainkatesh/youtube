import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header=()=>{
    const dispach=useDispatch();

    const [searchQuery,setSearchQuery]=useState("");
    const [searchResults,setSearchResults]=useState([]);
    const [showSuggestions,setShowSuggestions]=useState(false);

    const searchCache=useSelector(store=>store.search);

    useEffect(()=>{
        // getSearchSuggestions();


        //Making an api call after every key press
        //but if the difference between 2 api calls is less than 200ms
        //decline the API calls
        const timer=setTimeout(()=>{
            //if present in cache do not make an api call
            //get it from cache
            if(searchCache[searchQuery]){
                setShowSuggestions(searchCache[searchQuery]);
            }
            else{
            //else make an api call
            getSearchSuggestions()
            }
        },200);
    
        return ()=>{
            clearTimeout(timer);
        };
    },[searchQuery]);

    const getSearchSuggestions= async () =>{
        // console.log("API Call Query - "+searchQuery);
        const data=await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API+searchQuery);
        const json=await data.json();
        setSearchResults(json[1]);
        // console.log(json[1]);
        dispach(cacheResults({[searchQuery]:json[1]}));
    }

    const handleToggle=()=>{
        dispach(toggleSideBar());
    }



    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img className="h-8 cursor-pointer" alt="menu" src="https://www.svgrepo.com/show/312300/hamburger-menu.svg" onClick={handleToggle}/>
                <img className="h-8 mx-2 cursor-pointer" alt="youtube-logo" src="data:image/png;base64,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" />
            </div>
            <div className="col-span-10 px-14">
                <div>
                    <input 
                        className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full" 
                        type="text" 
                        value={searchQuery} 
                        onChange={(e)=>setSearchQuery(e.target.value)}
                        onFocus={()=>setShowSuggestions(true)}
                        onBlur={()=>setShowSuggestions(false)}
                        />
                    <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">🔍</button>
                </div>
                { showSuggestions &&
                <div className="absolute bg-white py-2 px-2 w-[36rem] shadow-lg rounded-lg border border-gray-100">
                    <ul>
                        {searchResults.map(result=><li className="py-2 px-3 shadow-sm hover:bg-gray-100" key={result}>🔍<span className="px-2">{result}</span></li>)}
                    </ul>
                </div>
                }
            </div>
            <div className="col-span-1">
                <img className="h-8" alt="user" src="data:image/png;base64,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"/>
            </div>
        </div>
    );
}

export default Header;
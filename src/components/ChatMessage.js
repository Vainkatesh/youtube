const ChatMessage=({name,message})=>{

    return (
    <div className="flex shadow-sm py-2">
        <img className="h-6 rounded-lg" alt="user" src="https://yt4.ggpht.com/VJJnqxQEuJMn4SEwItAE2WOcU9t-x0m3GoSz7qPI_NXJZ_NU9teW1Id7cqLiYYXZMpCxCFBSrTw=s64-c-k-c0x00ffffff-no-rj" />
        <span className="px-2 font-bold">{name}</span>
        <span>{message}</span>
    </div>
    );
}

export default ChatMessage;
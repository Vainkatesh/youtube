import Button from "./Button";

const ButtonList=()=>{

    const list=["All","Gaming","Songs","Live","Comedy","Cricket","Soccer","Politics","Trending","Reels","News","Cooking","Movies","Study"];

    return (
        <div className="flex">
            {list.map((item)=><Button key={item} buttonName={item}/>)}
        </div>
    );
}

export default ButtonList;
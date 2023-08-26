import Comment from "./Comment";

const CommentsList=({commentList})=>{
    return (
        <div>
            {commentList?.map((comment,index)=>(
                <div key={index}>
                <Comment key={index} commentData={comment}/>
                <div className="pl-5 border border-l-black ml-5">
                    {comment?.replies && <CommentsList commentList={comment?.replies}/>}
                </div>
                </div>
            ))}
        </div>
    );

}

export default CommentsList;
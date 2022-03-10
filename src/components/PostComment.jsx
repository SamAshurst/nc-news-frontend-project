import { useState, useEffect, useContext } from "react"
import UserContext from "../contexts/UserContext";
import * as api from "../utils/api"
import formatDate from "../utils/formatDate";

export default function PostComment ({article_id}) {
    const { loggedInUser } = useContext(UserContext);
    const [comment, setComment] = useState(null)
    const [posted, setPosted] = useState(false)
    const [postedComment, setPostedComment] = useState({})
    

    useEffect(()=> {
        if (comment == null) return;
        api.postCommentByArticleId(article_id, loggedInUser.username, comment).then((comment)=>{
            setPosted(true)
            
            setPostedComment(comment)
        })
    }, [comment])

    function handleClick (e) {
        e.preventDefault() 
        const commentBody = e.target.form[0].value
        setComment(commentBody)
    }

    if(posted){
        return <ul key={postedComment.comment_id} className="comment-list">
        <p className="comment-body">{postedComment.body}</p>
        <dt className="comment-posted">
          Posted by: {postedComment.author} <br></br>at {formatDate(postedComment.created_at)}
        </dt>
        <dt className="comment-votes">Votes: {postedComment.votes}</dt>
      </ul>
    }

    return <form>
        <input type="text"></input>
        <input type="submit" value="Post" onClick={((e)=>{handleClick(e)})}/>
    </form>
}
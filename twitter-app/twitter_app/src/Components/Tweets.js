import React, {useState} from "react";
import '../Css/Tweets.css';
import heart from '../icons/heart-resize.png';
import empty from '../icons/empty-heart.png';
const Tweets = (props) => { 
    const [like, setLike] = useState(0);
    const [liked, setLiked] = useState(false);
    const changeImage = () => {
        !liked ? setLike(like + 1) : setLike(like -1 )
        setLiked(!liked);
        if(like === 0 && liked) {
            setLike(0)
        };
    };
    return( 
        <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <p>{props.author}</p>
            <p>{props.date}</p>
            <p>{props.likes}</p>
            <h1> Likes {like} </h1>
            <p>{liked ? "liked" : "not liked"}</p>
            <div onClick={changeImage}>
            <img id="Not liked" src={liked ? heart: empty} alt="not like"/>
            </div>
            <p>{props.retweets}</p>
        </div>
    )
}

export default Tweets;



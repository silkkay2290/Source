import React, {useState, useEffect} from "react";
import '../Css/Tweets.css';
import heart from '../icons/heart-resize.png';
import empty from '../icons/empty-heart.png';
import axios from 'axios';

const Tweets = (props) => { 
    let [agePrediction, setAgePrediction] = useState("");
    const [like, setLike] = useState(0);
    const [liked, setLiked] = useState(false);
    const changeImage = () => {
        !liked ? setLike(like + 1) : setLike(like -1 )
        setLiked(!liked);
        if(like === 0 && liked) {
            setLike(0)
        };
    }; 
    useEffect(() => {
        if(Math.random() < 0.5){
        setTimeout(() => setLike(like + 1), 5000)
        }
        else {
            console.log("")
        }
    } , []); //need empty array with useEffect
    useEffect(()=> {
        axios.get("https://api.agify.io/?name="+props.author).then(prediction => {
            setAgePrediction(prediction.data.age)
        })
    }, [])
    return( 
        <div id="tweets">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <p>{props.author}</p>
            <p>{props.date}</p>
            <p>{props.likes}</p>
            <p>{props.urlImage}</p> 
            <h1> Likes {like} </h1>
            <p>{liked ? "liked" : "not liked"}</p>
            <div onClick={changeImage}>
            <img id="Not liked" src={liked ? heart: empty} alt="not like"/>
            </div>
            <p>{props.retweets}</p>
            <p>{agePrediction}</p>
        </div>
    )
}

export default Tweets;



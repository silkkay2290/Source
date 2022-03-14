import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Components/Header';
import firestore from './firebase';
import { collection, getDocs,doc, addDoc} from 'firebase/firestore/lite';
import { onSnapshot } from "firebase/firestore";
import Body from './Components/Body';
import Tweets from './Components/Tweets';
import Profile from './Components/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [authorState,setAuthorState] = useState("")
  const [titleState,setTitleState] = useState("")
  const [tweetContentState,setTweetContent] = useState("")
  const [tweet,setTweetArray] = useState([])
  const [searchKeyWord, setKeyWord] = useState("")

  const changeKeyWord = (e)=> {
    setKeyWord(e.target.value);
  }
  const changeAuthor = (e)=> {
    setAuthorState(e.target.value);
  }
  const changeTitle = (e)=> {
    setTitleState(e.target.value);
  }
  const changeTweetContent = (e)=> {
    setTweetContent(e.target.value);
  }
  const handleSubmit = ()=> { //... gets all things in tweet(already in tweet) and add new value 
   // setTweetArray([...tweet,{author: authorState, title: titleState, content: tweetContentState }]); //new object in tweet array on submit
   const unsub = onSnapshot(doc(firestore, "Tweets"), (doc) => {
    console.log("Current data: ", doc.data());
    });
   const docRef =  addDoc(collection(firestore, "Tweets"), {
      author: authorState,
      title:titleState,
      content:tweetContentState
    });
    console.log("Document written with ID: ", docRef.id);
    setTweetContent(""); //reset value
    setAuthorState(""); 
    setTitleState("")
  }




  /*useEffect(()=> {
      let tweets = collection(firestore, "Tweets") //get from firebase
      getDocs(tweets).then(snapshot =>  {
        //Snapshot is an array of all the documents in Tweets
        let tempTweets = []
        snapshot.forEach(document => { //for each document in snapshot push document details to TweetArray
          tempTweets.push(document.data());
        });
        setTweetArray(tempTweets);
      });
  }, [])
  */
  
 

 
  return (
    <Router>
    <div>
      <Header />
        <Switch>
          <Route path= "/profile">
            <Profile />
          </Route>
          <Route path ="/">
            <div id="tweet">
              <p>Home</p>
              <Body />
              <h3>
                search based on content keyword
              </h3>
              <input type="text" value={searchKeyWord} onChange={changeKeyWord}/>
              <h3>
                enter author name
              </h3>
              <input type="text" value={authorState} onChange={changeAuthor} />
              <h3>
                enter title
              </h3>
              <input type="text" value={titleState} onChange={changeTitle} />
              <h3>
               enter content 
              </h3>
              <input type="text" value={tweetContentState} onChange={changeTweetContent} />
              <button onClick={handleSubmit}>submit</button>
              {tweet.filter((indivdualTweet)=>{return indivdualTweet.content.includes(searchKeyWord)})
              .map((tweet,index) => ( //map values to array componenets in tweet array. Need return if use {} if not then you dont need return 
                  <Tweets 
                  author = {tweet.author} 
                  title = {tweet.title}
                  content = {tweet.content}
                  key = {index + 1}
                  />
              ))}
              <Link to="/profile">Go to profile page</Link>
              <button></button>
            </div>
          </Route> 
        </Switch>
    </div>
    </Router>
  );
}

export default App;

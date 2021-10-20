import React,{useState} from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Tweets from './Components/Tweets';


function App() {
  const [authorState,setAuthorState] = useState("")
  const [titleState,setTitleState] = useState("")
  const [tweetContentState,setTweetContent] = useState("")
  const [tweet,setTweetArray] = useState([])

  const changeAuthor = (e)=> {
    setAuthorState(e.target.value);
  }
  const changeTitle = (e)=> {
    setTitleState(e.target.value);
  }
  const changeTweetContent = (e)=> {
    setTweetContent(e.target.value);
  }
  const handleSubmit = ()=> {
    setTweetArray([...tweet,{author: authorState, title: titleState, content: tweetContentState }]); //new object in tweet array on submit
    setTweetContent(""); //reset value
    setAuthorState(""); 
  }
  return (
    <div>
      <Header />
      <Body />
        <input type="text" value={authorState} onChange={changeAuthor} />
        <input type="text" value={titleState} onChange={changeTitle} />
        <input type="text" value={tweetContentState} onChange={changeTweetContent} />
        <button onClick={handleSubmit}>submit</button>
        {tweet.map((tweet,index) => (
            <Tweets 
            author = {tweet.author} 
            title = {tweet.title}
            content = {tweet.content}
            key = {index + 1}
            />
        ))}
    </div>
  );
}

export default App;

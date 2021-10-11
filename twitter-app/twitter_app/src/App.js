import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Tweets from './Components/Tweets';


function App() {
  return (
    <div>
      <Header />
      <Body />
      <Tweets
        title = {"NYC trip"}
        content = {"blog for NYC trip"} //props(parameters)
        author = {"Mckayla Thomas"}
        date ={"12-19-2000"}
        likes={20}
        retweets={20}/> 
      <Tweets
        title = {"SF trip"}
        content = {"blog for SF trip"} //props(parameters)
        author = {"Jeff Robinson"}
        date ={"11-11-2021"}
        likes={20}
        retweets={20}/> 
    </div>
  );
}

export default App;

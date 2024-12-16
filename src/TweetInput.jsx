import React, {useContext, useState} from "react";
import { AppContext } from "./App";


const TweetInput= ({addTweet}) =>{
  const [tweet, setTweet] = useState ('');
  const {user} = useContext(AppContext);




  const handleSubmit = (e) => {
    e.preventDefault();
    addTweet({ content: tweet, author: user.name, date: new Date() });
    setTweet('');
    
  };
  return(
    <form onSubmit={handleSubmit} className="tweetInput">
      <input 
      type="textarea"
      value={tweet}
      onChange={(e) => setTweet(e.target.value)}
      placeholder="What's happening?"/>
      <button type="submit">Tweet</button>
    </form>
  );
};

export default TweetInput; 
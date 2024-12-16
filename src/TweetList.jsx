import React from "react";
import Tweet from "./Tweet";


const TweetList = ({tweets, onReply}) => {

  return(
    <ul className="tweetlist">
      {tweets.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} onReply={onReply} />
      ))}
    </ul>
  );
};

export default TweetList;
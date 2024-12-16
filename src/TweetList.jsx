import React from "react";
import Tweet from "./Tweet";


const TweetList = ({tweets}) => {

  return(
    <ul className="tweetlist">
      {tweets.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} />
      ))}
    </ul>
  );
};

export default TweetList;
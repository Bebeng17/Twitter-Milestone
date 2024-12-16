import React from "react";


const TweetInteractions = ({likes,reTweets,replies,onLike,onRetweet,onReply}) => {





  return (
    <div>
      <button onClick={onLike}>Like {likes} </button>
      <button onClick={onRetweet}>Retweet {reTweets} </button>
      {/* <button onClick={onReply}>Reply {replies} </button> */}
    </div>


  );

};

export default TweetInteractions;
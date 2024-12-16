import React, {useState} from "react";
import TweetInteractions from "./TweetInteractions";


const Tweet = ({tweet}) => {
  const [likes, setLikes] = useState(0);
  const [retweets, setRetweets] = useState(0);
  const [replies, setReplies] = useState(0);
    const handleLike = () => {setLikes(likes + 1);};
    const handleRetweet = () => {setRetweets(retweets + 1);};
    const handleReply = () => {setReplies(replies +1);};


  return (
    <li>
      <p>{tweet.content}</p>
      <small>By {tweet.author} On {tweet.updatedAt} </small>
      <TweetInteractions 
      likes={likes} onLike={handleLike} 
      reTweets={retweets} onRetweet={handleRetweet}
      replies={replies} onReply={handleReply}
      />
    </li>
  );
};


export default Tweet;
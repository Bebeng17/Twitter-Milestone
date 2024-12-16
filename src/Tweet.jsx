import React, {useState} from "react";
import TweetInteractions from "./TweetInteractions";


const Tweet = ({tweet, onReply}) => {
  const [likes, setLikes] = useState(0);
  const [retweets, setRetweets] = useState(0);
  // const [replies, setReplies] = useState(0);
  const [replyText, setReply] = useState('')
    
  
    const handleLike = () => {setLikes(likes + 1);};
    const handleRetweet = () => {setRetweets(retweets + 1);};
    // const handleReply = () => {setReplies(replies +1);};
    const handleReplySubmit = (e) => {
      e.preventDefault()
      if (replyText.trim() !== '') {
        onReply(tweet.id, replyText);
        setReply('');
        
      }
    }


  return (
    <li>
      <p>{tweet.content}</p>
      <small>By {tweet.author} On {tweet.updatedAt} </small>
      <TweetInteractions 
      likes={likes} onLike={handleLike} 
      reTweets={retweets} onRetweet={handleRetweet}
      // replies={replies} onReply={handleReply}
      />
      <form onSubmit={handleReplySubmit}>
        <input
        type="text"
        value={replyText}
        onChange={(e) => setReply(e.target.value)}
        placeholder="Write a reply..."
        />
        <button type="submit">Reply</button>
      </form>
      <ul>
        {Array.isArray(tweet.replies) && tweet.replies.map((reply, index) => (
          <li key={index}>{reply}</li>
        ))}
      </ul>

    </li>
  );
};


export default Tweet;
import React,{ useEffect, useState, createContext } from 'react';
import TweetInput from './TweetInput';
import TweetList from './TweetList';
import Profile from './Profile';
import Sidebar from './Sidebar';
import Header from './Header';
import './app.css';


export const AppContext = createContext();


function App() {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState({name:"user", profilePicture: "user.jpg"});
  const [theme, setTheme] = useState('light'); 


//   useEffect(() => {
//   fetch('https://jsonplaceholder.org/posts')
//     .then((response) => response.json())
//     .then((data) => setTweets(data))
//     .catch((error) => console.error('Error fetching tweets:', error));
// }, []);



useEffect(() => {
  fetch('https://jsonplaceholder.org/posts')
    .then((response) => response.json())
    .then((data) => {
      const tweetsWithReplies = data.map((tweet) => ({
        ...tweet,
        content: tweet.content, 
        author: tweet.userId, 
        updatedAt: new Date().toLocaleString(),
        replies: [] 
      }));
      setTweets(tweetsWithReplies);
    })
    .catch((error) => console.error('Error fetching tweets:', error));
}, []);

  
//   useEffect(() => {
//     fetch('https://jsonplaceholder.org/posts')
//     .then((response) => response.json())
//     .then((data) => {
//       // Adding a liked property to each tweet
//       const tweetsWithLikes = data.map((tweet) => ({
//         ...tweet,
//         liked: false // Add the liked property with an initial value of false
//       }));
//       setTweets(tweetsWithLikes); // Store the modified data
//     })
//     .catch((error) => console.error('Error fetching tweets:', error));
// }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.org/users/1')
      .then((response) => response.json())
      .then((data) => setUser({name:data.login.username, profilePicture:data.profilePicture || 'user.jpg'}))
      .catch((error) => console.error('Error fetching user:', error));
  }, []);

  const addTweet = (tweet) => {
    setTweets([{...tweet, replies: []  },...tweets]);
  };

  const handleReply = (tweetId, replyText) => {
    setTweets (
      tweets.map((tweet) => 
      tweet.id === tweetId
      ? { ...tweet, replies: [...(tweet.replies || []), replyText]}
      : tweet
    )
    );
  };

  // const likeTweet = (tweetId) => {
  //   setTweets(
  //     tweets.map((tweet) =>
  //       tweet.id === tweetId ? { ...tweet, liked: !tweet.liked } : tweet
  //     )
  //   );
  // };

  return (
    <AppContext.Provider value={{user, setUser, theme, setTheme}}>
    <div className={`app ${theme}`}>
      <Header />
      <div className='content'>
      <Sidebar />
      <main>
        <div className='main-sub'>
      <TweetInput addTweet= {addTweet} />
      <Profile />
      </div>
      <TweetList 
      tweets ={tweets}
      onReply = {handleReply}
      // likeTweet={likeTweet}
       />
      </main>
      </div>
    </div>
    </AppContext.Provider>

  );
      
}

export default App;

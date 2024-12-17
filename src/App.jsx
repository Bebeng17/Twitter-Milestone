import React, { useState, useEffect, createContext } from "react";
import TweetInput from "./TweetInput";
import TweetList from "./TweetList";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./app.css";

export const AppContext = createContext();

function App() {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState({ name: "user", profilePicture: "user.jpg" });
  const [theme, setTheme] = useState("light");

  // Fetch tweets and user data
  useEffect(() => {
    fetch("https://jsonplaceholder.org/posts")
      .then((response) => response.json())
      .then((data) => {
        const tweetsWithReplies = data.map((tweet) => ({
          ...tweet,
          content: tweet.content,
          author: tweet.userId,
          updatedAt: new Date().toLocaleString(),
          replies: [],
        }));
        setTweets(tweetsWithReplies);
      })
      .catch((error) => console.error("Error fetching tweets:", error));
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.org/users/1")
      .then((response) => response.json())
      .then((data) =>
        setUser({ name: data.login.username, profilePicture: data.profilePicture || "user.jpg" })
      )
      .catch((error) => console.error("Error fetching user:", error));
  }, []);

  const addTweet = (tweet) => {
    setTweets([{ ...tweet, replies: [] }, ...tweets]);
  };

  const handleReply = (tweetId, replyText) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === tweetId
          ? { ...tweet, replies: [...(tweet.replies || []), replyText] }
          : tweet
      )
    );
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <AppContext.Provider value={{ user, setUser, theme, setTheme }}>
      <div className={`app ${theme}`}>
        <Header toggleTheme={toggleTheme} />
        <div className="content">
          <Sidebar />
          <main className="main-content">
            <TweetInput addTweet={addTweet} />
            <Profile />
            <TweetList tweets={tweets} onReply={handleReply} />
          </main>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;

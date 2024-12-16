import React, { useContext } from "react";
import { AppContext } from "./App";
import profilePic from "./assets/asso-myron.jpg"



const Profile = () => {
  const {user} = useContext(AppContext); 




  return (
    <div className="profile">
      <img src={profilePic} width={86} height={106} alt={user.name}></img>
      <h2>{user.name}</h2>
    </div>
  );
};

export default Profile;
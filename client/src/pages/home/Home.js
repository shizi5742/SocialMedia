import React from "react";
import Post from "../../components/Post/Post";
import Profile from "../../components/profile/Profile";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <Profile />
      <Post/>
      <div className="rightSide">RightSide</div>
    </div>
  );
};

export default Home;

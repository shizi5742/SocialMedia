import React from "react";
import Post from "../../components/Post/Post";
import Profile from "../../components/profile/Profile";
import RightSide from "../../components/RightSide/RightSide";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <Profile />
      <Post/>
      <RightSide/>
    </div>
  );
};

export default Home;

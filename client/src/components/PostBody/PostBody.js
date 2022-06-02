import React from "react";
import "./PostBody.css";
import PostData from "../../Data/postData";
import IndivisualPost from "../IndivisualPost/IndivisualPost";

const PostBody = () => {
  return (
    <div className="postBody">
      {PostData.map((post, id) => {
        return <IndivisualPost data={post} id={id}/>;
      })}
    </div>
  );
};

export default PostBody;

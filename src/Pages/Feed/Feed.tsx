import React from "react";
import SideBar from "../../Components/SideBar";
import "./Feed.css";
import FeedNav from "../../Components/FeedNav";
import FeedPost from "../../Components/FeedPost";

const Feed: React.FC = () => {
  return (
    <main className="flex">
      <SideBar />
      <div className="flex-grow">
        <FeedNav />
        <FeedPost />
      </div>
    </main>
  );
};

export default Feed;

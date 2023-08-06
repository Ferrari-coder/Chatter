import React from "react";
import userPic from "/images/userPic.png";
import postImage from "/images/postImage.png";
import { VscBook } from "react-icons/vsc";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";

const FeedPost: React.FC = () => {
  return (
    <main className="bg-[#EDF2F7] w-full px-3 border-t-[1px] ">
      <div className="flex gap-4 py-4 px-2 border-b-[1px]">
        <button>Latest</button>
        <button>For you</button>
        <button>Top</button>
      </div>
      <div className="py-5">
        <div className="flex items-center gap-3">
          <img src={userPic}  className="rounded-[50%]"/>
          <div>
          <h3 className="text-l ">Grace Ikpang</h3>
          <p className="text-base">May 25th, 2023</p>
          </div>
        </div>
        <div>
          <h1 className="text-l font-medium">Starting out as a Product designer</h1>
          <p className="flex items-center gap-2">
            <VscBook className="text-[#3182CE]" /> 1 min read
          </p>
          <p className="w-[60%]">
            Embarking on a journey as a product designer can be an exhilarating
            and fulfilling experience. As a profession that bridges the realms
            of art, technology, and problem-solving, product design offers an
            opportunity to shape the way people interact with the world around
            them.
          </p>
          <img src={postImage}  className="py-4"/>
          <div className="flex gap-5">
            <p className="flex items-center gap-2">
              <AiOutlineHeart /> 0 Likes
            </p>
            <p className="flex items-center gap-2">
              <FaRegCommentDots  /> 0 Comments
            </p>
          </div>
        </div>
      </div>
      <div className="border-b-2"></div>
    {/* next post */}
      <div className="py-5">
        <div className="flex items-center gap-3">
          <img src={userPic}  className="rounded-[50%]"/>
          <div>
          <h3 className="text-l ">Grace Ikpang</h3>
          <p className="text-base">May 25th, 2023</p>
          </div>
        </div>
        <div>
          <h1 className="text-l font-medium">Starting out as a Product designer</h1>
          <p className="flex items-center gap-2">
            <VscBook className="text-[#3182CE]" /> 1 min read
          </p>
          <p className="w-[60%]">
            Embarking on a journey as a product designer can be an exhilarating
            and fulfilling experience. As a profession that bridges the realms
            of art, technology, and problem-solving, product design offers an
            opportunity to shape the way people interact with the world around
            them.
          </p>
          <img src={postImage}  className="py-4"/>
          <div className="flex gap-5">
            <p className="flex items-center gap-2">
              <AiOutlineHeart /> 0 Likes
            </p>
            <p className="flex items-center gap-2">
              <FaRegCommentDots  /> 0 Comments
            </p>
          </div>
        </div>
      </div>
      <div className="border-b-2"></div>
      {/* next post */}
      <div className="py-5">
        <div className="flex items-center gap-3">
          <img src={userPic}  className="rounded-[50%]"/>
          <div>
          <h3 className="text-l ">Grace Ikpang</h3>
          <p className="text-base">May 25th, 2023</p>
          </div>
        </div>
        <div>
          <h1 className="text-l font-medium">Starting out as a Product designer</h1>
          <p className="flex items-center gap-2">
            <VscBook className="text-[#3182CE]" /> 1 min read
          </p>
          <p className="w-[60%]">
            Embarking on a journey as a product designer can be an exhilarating
            and fulfilling experience. As a profession that bridges the realms
            of art, technology, and problem-solving, product design offers an
            opportunity to shape the way people interact with the world around
            them.
          </p>
          <img src={postImage}  className="py-4"/>
          <div className="flex gap-5">
            <p className="flex items-center gap-2">
              <AiOutlineHeart /> 0 Likes
            </p>
            <p className="flex items-center gap-2">
              <FaRegCommentDots  /> 0 Comments
            </p>
          </div>
        </div>
      </div>
      <div className="border-b-2"></div>
    </main>
  );
};

export default FeedPost;

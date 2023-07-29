import React from "react";
import { AiOutlineCompass, AiOutlineHome } from "react-icons/ai";
import { MdOutlineBookmarkBorder, MdTrendingUp } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { SiSimpleanalytics } from "react-icons/si";

const SideBar: React.FC = () => {
  return (
    <div className="flex-1 w-[15%]">
      <div className="text-regal-blue text-[30px] font-medium px-4 py-5">
        <a href="#">CHATTER</a>
      </div>
      <div  className="">
        <div className="flex gap-5 text-base items-center px-4 py-3 hover:bg-[#3182CE] rounded-[8px] hover:text-white">
          <AiOutlineHome className="text-l" /> <span>Home</span>
        </div>
        <div className="flex gap-5 text-base items-center px-4 py-3 hover:bg-[#3182CE] rounded-[8px] hover:text-white">
          <AiOutlineCompass className="text-l" /> <span>Explore</span>
        </div>
        <div className="flex gap-5 text-base items-center px-4 py-3 hover:bg-[#3182CE] rounded-[8px] hover:text-white">
          <MdOutlineBookmarkBorder className="text-l" /> <span>Bookmarks</span>
        </div>
        <div className="flex gap-5 text-base items-center px-4 py-3 hover:bg-[#3182CE] rounded-[8px] hover:text-white">
          <BiEdit className="text-l" /> <span>Drafts</span>
        </div>
        <div className="flex gap-5 text-base items-center px-4 py-3 hover:bg-[#3182CE] rounded-[8px] hover:text-white">
          <SiSimpleanalytics className="text-l" /> <span>Analytics</span>
        </div>
      </div>

      <div className="flex gap-5 mt-5 mb-2 text-base items-center">
        <MdTrendingUp className="text-l" /> <span>Trending Tags</span>
      </div>
      <div>
        <div className="text-base items-center px-4 py-3 hover:bg-[#3182CE] rounded-[8px] hover:text-white">
          <h3>Development <span className="ml-[3px] px-2 py-1 rounded-[5px] bg-[#EDF2F7]">+5</span></h3>
        </div>
        <div className="text-base px-4 py-3 hover:bg-[#3182CE] rounded-[8px] hover:text-white">
          <h3>Technology <span className="ml-[3px] px-2 py-1 rounded-[5px] bg-[#EDF2F7]">+4</span></h3>
        </div>
        <div className="text-base px-4 py-3 hover:bg-[#3182CE] rounded-[8px] hover:text-white">
          <h3>Politics <span className="ml-[3px] px-2 py-1 rounded-[5px] bg-[#EDF2F7]">+4</span></h3>
        </div>
        <div className="text-base px-4 py-3 hover:bg-[#3182CE] rounded-[8px] hover:text-white">
          <h3>Music <span className="ml-[3px] px-2 py-1 rounded-[5px] bg-[#EDF2F7]">+1</span></h3>
        </div>
        <a href="#" className="text-[#3182CE]">See all</a>
      </div>
    </div>
  );
};

export default SideBar;

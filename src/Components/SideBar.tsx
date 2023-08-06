import React from "react";
import { AiOutlineCompass, AiOutlineHome } from "react-icons/ai";
import { MdOutlineBookmarkBorder, MdTrendingUp } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { SiSimpleanalytics } from "react-icons/si";

const SideBar: React.FC = () => {
  return (
    <section className="border-r-[1px] border-[#D0D0D0] h-[100vh] p-4">
      <div className="text-regal-blue text-[30px] font-medium  ">
        <a href="#">CHATTER</a>
      </div>
      <div  className="">
        <div className="flex gap-5 text-base items-center px-4 pt-5 pb-3 hover:bg-[#3182CE] rounded-[8px] hover:text-white">
          <AiOutlineHome  /> <span>Home</span>
        </div>
        <div className="flex gap-5 text-base items-center px-4 py-3 hover:bg-[#3182CE] rounded-[8px] hover:text-white">
          <AiOutlineCompass  /> <span>Explore</span>
        </div>
        <div className="flex gap-5 text-base items-center px-4 py-3 hover:bg-[#3182CE] rounded-[8px] hover:text-white">
          <MdOutlineBookmarkBorder  /> <span>Bookmarks</span>
        </div>
        <div className="flex gap-5 text-base items-center px-4 py-3 hover:bg-[#3182CE] rounded-[8px] hover:text-white">
          <BiEdit  /> <span>Drafts</span>
        </div>
        <div className="flex gap-5 text-base items-center px-4 py-3 hover:bg-[#3182CE] rounded-[8px] hover:text-white">
          <SiSimpleanalytics /> <span>Analytics</span>
        </div>
      </div>

      <div className="flex gap-5 mt-5 mb-2 text-base items-center">
        <MdTrendingUp  /> <span>Trending Tags</span>
      </div>
      <div>
        <div className="text-base  px-4 py-3 hover:bg-[#3182CE] rounded-[8px] hover:text-white">
          <h3>Development</h3>
        </div>
        <div className="text-base px-4 py-3 hover:bg-[#3182CE] rounded-[8px] hover:text-white">
          <h3>Technology</h3>
        </div>
        <div className="text-base px-4 py-3 hover:bg-[#3182CE] rounded-[8px] hover:text-white">
          <h3>Politics</h3>
        </div>
        <div className="text-base px-4 py-3 hover:bg-[#3182CE] rounded-[8px] hover:text-white">
          <h3>Music</h3>
        </div>
        <a href="#" className="text-[#3182CE]">See all</a>
      </div>
    </section>
  );
};

export default SideBar;
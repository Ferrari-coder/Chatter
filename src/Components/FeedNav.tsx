import React from "react";
import { BiSolidMoon, BiSearch } from "react-icons/bi";
import userImage from "/images/userProfile.png"

const FeedNav: React.FC = () => {
  //if you have problem remember to look into the h-full and fixed thingy
  return (
     <nav className="py-3 flex items-center justify-end gap-5 "> 
      <div className=" relative ">
        <input
          type="search"
          placeholder="Search..."
          className=" border-[1px] border-[#D0D0D0] rounded-[5px] w-[100%] p-[10px]  placeholder:text-[#D0D0D0]"
        />
        <BiSearch  className="absolute top-1/3 right-2 transform-translate-y-1/2 text-[#D0D0D0] text-base cursor-pointer"/>
      </div>
        <button className="border-regal-blue border-[1px] px-3 py-2 rounded-[6px]">Create Post</button>
        <BiSolidMoon className="text-base"/>
        <img src={userImage} className="rounded-[50%]" />

      
    </nav>
  );
};

export default FeedNav;

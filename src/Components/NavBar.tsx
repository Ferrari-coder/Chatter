import React from "react";

const NavBar: React.FC = () => {
  return (
    <div className="py-[25px]">
      <div className="flex justify-between items-center w-[1200px] mx-auto px-37">
        <div>
          <h1 className="text-[40px] font-bold text-regal-blue">CHATTER</h1>
        </div>
        <div className="space-x-6 font-medium">
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Contact</a>
          <a href="#">Blogs</a>
        </div>
        <div className="space-x-6">
          <button className="border-solid border-[1px] border-regal-blue rounded-lg py-4 px-12">
            Log in
          </button>
          <button className="py-4 px-12 text-white bg-regal-blue rounded-lg">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

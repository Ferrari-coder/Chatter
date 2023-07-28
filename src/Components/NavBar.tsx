import React from "react";
import Button from "./Elements/Button";

const NavBar: React.FC = () => {
  return (
    <div className="py-[25px]">
      <div className="flex justify-between items-center w-[65%] mx-auto px-37">
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
          <Button text="Sign up"/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

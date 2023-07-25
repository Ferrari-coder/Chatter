import React from "react";
import Heroimg from "/images/heroimg.png";

const Hero: React.FC = () => {
  return (
    <div className="relative">
      <img src={Heroimg} className="w-[100%] h-[80vh] object-cover" />
      <div className=" absolute top-0 left-0 w-[100%] h-[80vh] bg-black opacity-50"></div>
      <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <h2 className="text-[48px] font-medium text-white ">
          Welcome to Chatter: A Haven for Text-Based Content
        </h2>
        <p className="text-white text-[24px] leading-10">
          Unleash the Power of Words, Connect with Like-minded Readers and
          Writers
        </p>
        <button className="bg-regal-blue py-4 px-12 text-white rounded-lg my-10">Get started</button>
      </div>
    </div>
  );
};

export default Hero;

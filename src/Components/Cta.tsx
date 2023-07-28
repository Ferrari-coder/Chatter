import React from "react";
import Person1 from "/images/Person1.png";
import Persons from "/images/Peoplesss.png";
import Button from "./Elements/Button";

const Cta: React.FC = () => {
  return (
    <section>
      <section className="my-16 bg-[#FFEDCC80]">
        <div className=" flex flex-col gap-10 justify-center items-center md:flex-row py-[5rem] w-[65%] mx-auto ">
          <div>
            <img
              src={Person1}
              width={600}
              height={700}
              className="rounded-[50%]"
            />
          </div>
          <div>
            <p className="text-base ">
              "Chatter has become an integral part of my online experience. As a
              user of this incredible blogging platform, I have discovered a
              vibrant community of individuals who are passionate about sharing
              their ideas and engaging in thoughtful discussions.”
            </p>
            <p className="py-10">
              <span className="font-medium text-l">Adebobola Muhydeen, </span>{" "}
              Software developer at Apple
            </p>
            <Button text="Join chatter" />
          </div>
        </div>
      </section>
      <section>
        <div className=" flex gap-24 justify-center items-center md:flex-row py-[5rem] w-[65%] mx-auto ">
          <div>
            <img src={Persons} />
          </div>
          <div>
            <h1 className="font-medium text-xl">
              Write, read and connect <br />
              with great minds on chatter
            </h1>
            <p className="py-10 text-base">
              Share people your great ideas, and also read write-ups based on
              your <br />
              interests. Connect with people of same interests and goals{" "}
            </p>
            <Button text="Get started" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Cta;

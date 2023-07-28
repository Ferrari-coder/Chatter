import React from "react";
import Aboutimg from "/images/Aboutimg.png";
import Analytics from "/images/Analytics.png";
import People from "/images/people.png";
import Vector from "/images/Vector.png";

const About: React.FC = () => {
  return (
    <section className="w-[65%] mx-auto mb-8">
      <section className="flex flex-col gap-10 justify-center items-center md:flex-row py-[5rem] ">
        <div>
          <h2 className="text-xl font-medium my-[30px]">
            About <span className="text-primary">Chatter</span>
          </h2>
          <p className="text-base leading-8">
            Chatter is a multi-functional platform where authors and readers can
            have access to their own content. It aims to be a traditional
            bookworm’s heaven and a blog to get access to more text based
            content. Our vision is to foster an inclusive and vibrant community
            where diversity is celebrated. We encourage open-mindedness and
            respect for all individuals, regardless of their backgrounds or
            beliefs. By promoting dialogue and understanding.
          </p>
        </div>
        <img src={Aboutimg} alt="people" width={500} height={700} />
      </section>
      <section>
        <h1 className="text-xl font-medium text-center mb-8">Why you should join chatter</h1>
        <p className="text-base whitespace-wrap">
          Our goal is to make writers and readers see our platform as their next
          heaven for blogging, ensuring ease in interactions, connecting with
          like-minded peers, have access to favorite content based on interests
          and able to communicate your great ideas with people
        </p>
        <div className="my-8 flex gap-10 justify-center">
          <div className="flex-1 border-[#D0D0D0] border-[1px] rounded-[8px] pt-7 pl-7 pr-10 pb-10">
            <img src={Analytics} className="rounded-[50%] bg-[#D6D1F833] p-5 mb-6" />
            <h3 className="text-l font-medium mb-2">Analytics</h3>
            <p className="leading-7">
              Analytics to track the number of views, likes and comment and also
              analyze the performance of your articles over a period of time
            </p>
          </div>
          <div className="flex-1 border-[#D0D0D0] border-[1px] rounded-[8px] pt-7 pl-7 pr-10 pb-10">
            <img src={People} className="rounded-[50%] bg-[#D6D1F833] p-5 mb-6"/>
            <h3 className="text-l font-medium mb-2">Social interactions</h3>
            <p className="leading-7">
              Users on the platform can interact with posts they like, comment
              and engage in discussions
            </p>
          </div>
          <div className="flex-1 border-[#D0D0D0] border-[1px] rounded-[8px] pt-7 pl-7 pr-10 pb-10">
            <img src={Vector} className="rounded-[50%] bg-[#D6D1F833] p-5 mb-6"/>
            <h3 className="text-l font-medium mb-2">Content creation</h3>
            <p className="leading-7">
            Write nice and appealing with our in-built markdown, a rich text editor
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;

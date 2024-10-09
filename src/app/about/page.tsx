import Cont from "@/components/common/Cont";
import React from "react";
import Image from "next/image";
import LineBreak from "@/components/LineBreak/LineBreak";
import "./about.css";

const About = () => {
  return (
    <Cont>
      <section className="flex flex-col-reverse items-center rubik sm:flex-row">
        <div className="w-12/12 sm:w-6/12">
          <div className="">
            <h1 className="main_name">WEI CHERNG</h1>
            <h2 className="sub_name">TANG</h2>
            {/* <div className="w-[10px] h-[25px] bg-fuchsia-200 -z-2 absolute"></div> */}
          </div>
          <p className="text-justify pr-5">
            I&apos;m a <b>Software Engineer</b> that is on a learning journey about
            coding. The journey seems endless but theres only one way to find
            out. Time to time I like to create some other stuff too!
          </p>
        </div>
        <div className="w-12/12 sm:w-6/12">
          <Image src="avatar.svg" alt="avatar" width={300} height={400} />
        </div>
      </section>
      <section className="mt-5">
        <h2 className="sub_title text-xl">Project</h2>
        <p className="text-justify">
          I coded some very silly and small project that I think that are quite
          nice. Usually my tech stack of choice is centered around React but
          these day am looking forward to trying out new technologies. Checkout
          the Work Tab to view some of my applicatons!
        </p>
      </section>
      <LineBreak color="#ADE792" />
      <section>
        <h2 className="sub_title_second text-xl mb-3">
          About <span className="sub_title_underline">Me</span>
        </h2>
        <p className="text-justify">
          Here&apos;s some quick fun fact from me! RDR2 is one of the greatest game ive played. Well at
          least for now, there is still alot of genre that I would like to try
          in the future. I like to doodle but never was a
          realistic drawings kind of guy. Favourite Album right now is Blue
          (Weezer). Lego Minecraft is the
          coolest thing ever. What could go wrong, LEGO + Minecraft? Excluding the movie...
        </p>
      </section>
    </Cont>
  );
};

export default About;

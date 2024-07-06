import Cont from "@/components/common/Cont";
import React from "react";
import Image from "next/image";
import LineBreak from "@/components/LineBreak/LineBreak";
import "./page.css";

const About = () => {
  return (
    <Cont>
      <section className="flex items-center">
        <div className="w-6/12">
          <div className="main_text">
            <h1 >WEI CHERNG</h1>
            {/* <div className="w-[10px] h-[25px] bg-fuchsia-200 -z-2 absolute"></div> */}
          </div>
          <h2>TANG</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            tortor id aliquet lectus proin. Et leo duis ut diam quam nulla
            porttitor.
          </p>
        </div>
        <div className="w-6/12">
          <Image src="avatar.svg" alt="avatar" width={300} height={400} />
        </div>
      </section>
      <section>
        <h2>Stuff this taht</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          tortor id aliquet lectus proin. Et leo duis ut diam quam nulla
          porttitor. Sed egestas egestas fringilla phasellus faucibus. Praesent
          elementum facilisis leo vel. Laoreet id donec ultrices tincidunt arcu.
          Morbi tristique senectus et netus et malesuada fames ac. Orci dapibus
          ultrices in iaculis nunc sed.
        </p>
      </section>
      <LineBreak color="#ADE792" />
      <section>
        <h2>Yada Proda</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          tortor id aliquet lectus proin. Et leo duis ut diam quam nulla
          porttitor. Sed egestas egestas fringilla phasellus faucibus. Praesent
          elementum facilisis leo vel. Laoreet id donec ultrices tincidunt arcu.
          Morbi tristique senectus et netus et malesuada fames ac. Orci dapibus
          ultrices in iaculis nunc sed.
        </p>
      </section>
    </Cont>
  );
};

export default About;

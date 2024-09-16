import Cont from "@/components/common/Cont";
import React from "react";
import Link from "next/link";

import "./work.css";

const Work = () => {
  return (
    <Cont>
      <section className="flex flex-col items-center my-5">
        <h1 className="project-hero my-5">PROJECTS</h1>
        <p className="text-justify mt-5 max-w-md">
          Here are some stuff that Ive coded along the way. Its always been
          quite exciting to able create these application, feel free to take a look at
          some of these. Try it out yourself, Have fun!
        </p>
      </section>
      <section className="mt-5">
        <div className="my-5">
          <span className="project-year t4">2024</span>
          <Link
            href="https://dreweducation.netlify.app/demo/login"
            target="_blank"
          >
            <div className="project">
              <h3 className="project-title">
                Drew - Education Management System
              </h3>
              <span className="project-desc">
                An Central Hub For Students & Educators with Analytic Module
              </span>
            </div>
          </Link>
        </div>
        <div className="my-5">
          <span className="project-year t3">2023</span>
          <div className="project">
            <h3 className="project-title">Lagoon Theme Park App</h3>
            <span className="project-desc">
              An React Native App for a theme park to showcase their attractions
            </span>
          </div>
        </div>
        <div className="my-5">
          <span className="project-year t2">2022</span>
          <Link href="https://sentence-weicherng.netlify.app/" target="_blank">
            <div className="project">
              <h3 className="project-title">Sentence Generator</h3>
              <span className="project-desc">
                You get a random sentence, everybody gets a random sentence ,
                who wants a random sentence?
              </span>
            </div>
          </Link>
          <Link
            href="https://expense-tracker-wei-cherng.netlify.app/"
            target="_blank"
          >
            <div className="project">
              <h3 className="project-title">Expense Tracker</h3>
              <span className="project-desc">
                A Static React Expense Tracker
              </span>
            </div>
          </Link>
          <Link href="https://weicherng.github.io/TodoList/" target="_blank">
            <div className="project">
              <h3 className="project-title">Todo List</h3>
              <span className="project-desc">
                TODO? Yes, Add A TODO. A Static Todo List
              </span>
            </div>
          </Link>
        </div>
        <div className="my-5">
          <span className="project-year t1">2021</span>
          <Link href="https://weicherng.github.io/Calculator/" target="_blank">
            <div className="project">
              <h3 className="project-title">Calculator</h3>
              <span className="project-desc">A Mini JavaScript Calculator</span>
            </div>
          </Link>
          <Link
            href="https://weicherng.github.io/Rock-Paper-Scissor/"
            target="_blank"
          >
            <div className="project">
              <h3 className="project-title">Rock Paper Or Scissors?</h3>
              <span className="project-desc">Classic Game with Random Bot</span>
            </div>
          </Link>
          <Link
            href="https://weicherng.github.io/Countdown-Timer/"
            target="_blank"
          >
            <div className="project">
              <h3 className="project-title">New Year Countdown Timer</h3>
              <span className="project-desc">
                New Year New Me! But when is the new year tho? Hm
              </span>
            </div>
          </Link>
        </div>
      </section>
    </Cont>
  );
};

export default Work;

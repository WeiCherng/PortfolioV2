import Cont from "@/components/common/Cont";
import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import "./contact.css";



const Contact = () => {
  return (
    <Cont>
      <section className="flex flex-col items-center">
        <div className="contact_cont my-5 p-5 bg-white">
        <Image className="contact-plane" src="Plane.svg" alt="logo" width={64} height={64}/>

          <p>Drop A Message!</p>
          <p>
            Any <span className="contact-feedback">Feedback</span> or Questions
            are welcomed and appreciated
          </p>
        </div>
      </section>
      <div className="mt-5 flex flex-col justify-center">
        <a href="mailto:weicherng0719@gmail.com">
          <span className="flex my-3 text-xl">
            <IconMail className="mr-3" /> Email
          </span>
        </a>
        <Link href="https://github.com/WeiCherng" target="_blank">
          <span className="flex my-3 text-xl">
            <IconBrandGithub className="mr-3" />
            Github
          </span>
        </Link>
        <Link href="https://www.linkedin.com/in/tangweicherng/" target="_blank">
          <span className="flex my-3 text-xl">
            <IconBrandLinkedin className="mr-3" />
            Linkedin
          </span>
        </Link>
      </div>
    </Cont>
  );
};

export default Contact;

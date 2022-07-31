import React, { useEffect } from "react";
import Bikal from "../../assets/bikal.png";
import Buttons from "./Buttons";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="text-center mt-10">
      <header className="grid justify-center">
        <h5 className="text-sm">Hello, I'm</h5>
        <h2 className="text-3xl my-2 animate-pulse text-sky-300 hover:text-white">
          Bikal Dhimal
        </h2>
        <h5 className="text-sm">FullStack Developer</h5>
        <div className="grid place-items-center w-[20rem] my-10 ">
          <Buttons />
        </div>
      </header>
      <div className="flex flex-col w-[100%] gap-9 items-center mb-40">
        {/* Photo Section */}
        <div>
          <img
            src={Bikal}
            alt="Bikal Dhimal"
            data-aos="zoom-in"
            data-aos-duration="1500"
          />
        </div>

        {/* Icon Section */}
        <div className="flex flex-row gap-6 text-cyan-500">
          <a
            href="https://www.linkedin.com/in/bikal-dhimal-705957154/"
            rel="noreferrer"
            target="_blank"
            className="hover:text-white ease-in duration-200"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/bikaldhimal"
            rel="noreferrer"
            target="_blank"
            className="hover:text-white ease-in duration-200"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.facebook.com/Simaldonge"
            rel="noreferrer"
            target="_blank"
            className="hover:text-white ease-in duraiton-200"
          >
            <BsFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

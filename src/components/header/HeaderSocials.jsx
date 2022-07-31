import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="flex flex-col w-[20px] gap-6 mx-10 text-cyan-500">
      <a
        href="https://www.linkedin.com/in/bikal-dhimal-705957154/"
        target="_blank"
        className="hover:text-white"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/bikaldhimal"
        target="_blank"
        className="hover:text-white"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.facebook.com/Simaldonge"
        target="_blank"
        className="hover:text-white"
      >
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;

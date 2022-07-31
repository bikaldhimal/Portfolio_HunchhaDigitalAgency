import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-[100%] bg-slate-800">
        <p className="py-1 text-center text-gray-400 text-sm lg:py-3">
          Copyright &copy; bikaldhimal 2022,{" "}
          <a
            href="https://hunchhadigitalagency.com/"
            rel="noreferrer"
            target="_blank"
            className="text-blue-400 text-[0.8rem] hover:text-white"
          >
            Hunchha Digital Agency
          </a>
          , All Rights Reserved.{" "}
          <a
            href="http://localhost:3000/"
            className="text-blue-400 text-[0.8rem] hover:text-white"
          >
            Terms and Conditions
          </a>
          <br />
          <p className="text-[0.6rem]">
            Designed by{" "}
            <a
              href="http://bikaldhimal.com.np/"
              rel="noreferrer"
              target="_blank"
              className="text-red-400 text-[0.6rem] hover:text-white animate-pulse hover:underline"
            >
              Bikal Dhimal
            </a>
          </p>
        </p>
      </footer>
    </>
  );
};

export default Footer;

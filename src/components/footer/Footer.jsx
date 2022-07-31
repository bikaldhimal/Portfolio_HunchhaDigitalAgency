import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-[100%] h-12 bg-gray-800">
        <p className="mt-4 py-1 text-center text-gray-400 text-sm lg:py-3">
          Copyright &copy; bikaldhimal 2022, Hunchha Digital Agency, All Rights
          Reserved.{" "}
          <a
            href="http://bikaldhimal.com.np/"
            target="_blank"
            className="text-blue-400 text-[0.8rem] hover:text-white"
          >
            Terms and Conditions
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;

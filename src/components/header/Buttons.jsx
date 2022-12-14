import React from "react";
import CV from "../../assets/Bikal_Dhimal_CV.pdf";

const Buttons = () => {
  return (
    <>
      <div className="flex flex-row">
        <a
          href={CV}
          download
          className="mx-5 px-3 py-[4px] h-10 text-center bg-white text-sky-700 hover:bg-sky-700 hover:text-white rounded-xl border-solid border-2 border-sky-500 ease-in duration-300"
        >
          Download CV
        </a>
        <a
          href="mailto:bikaldhimal2016@gmail.com"
          rel="noreferrer"
          target="_blank"
          className="mx-5 px-3 py-[4px] h-10 text-center  bg-sky-600 hover:bg-sky-700 rounded-xl border-solid border-2 border-sky-500 ease-in duration-300"
        >
          Let's Talk
        </a>
      </div>
    </>
  );
};

export default Buttons;

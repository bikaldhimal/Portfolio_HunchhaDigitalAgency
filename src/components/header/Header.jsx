import React, { useEffect } from "react";
import Bikal from "../../assets/bikal.png";
import Buttons from "./Buttons";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="flex flex-col text-center mt-10">
      <header className="grid justify-center">
        <h5 className="text-sm">Hello, I'm</h5>
        <h2 className="text-3xl my-2">Bikal Dhimal</h2>
        <h5 className="text-sm">FullStack Developer</h5>
        <div className="grid place-items-center w-[20rem] h-[25rem] ">
          <Buttons />
        </div>
      </header>
      <HeaderSocials />
      <img
        src={Bikal}
        alt="The image of Bikal"
        data-aos="fade-up"
        className="mt-20 rounded-tr-[48%] rounded-tl-[48%] bg-opacity-80 bg-gradient-to-r from-cyan-500 to-blue-500"
      />
      <h5 className="flex flex-col rotate-90 w-60 text-center right-56">
        Scroll Down
      </h5>
    </div>
  );
};

export default Header;

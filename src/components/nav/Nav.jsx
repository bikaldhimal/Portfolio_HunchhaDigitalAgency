import React from "react";
import Bikal from "../../assets/pp.png";

const Nav = () => {
  return (
    <nav className=" bg-slate-800 flex justify-between">
      <img
        src={Bikal}
        alt="Random"
        className="h-12 pt-3 px-3 rounded-2xl cursor-pointer"
      />
      <ul className="px-16 py-4 flex space-x-11 text-sm justify-end">
        <li className="cursor-pointer hover:text-sky-500 ease-in duration-100">
          Home
        </li>
        <li className="cursor-pointer hover:text-sky-500 ease-in duration-100">
          Chart
        </li>
        <li className="cursor-pointer hover:text-sky-500 ease-in duration-100">
          Map
        </li>
        <li className="cursor-pointer hover:text-sky-500 ease-in duration-100">
          Testimonials
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

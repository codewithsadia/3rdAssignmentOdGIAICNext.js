import Link from "next/link";
import React from "react";
import { CgMenuRound } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="gradient bg-gradient-to-b to-pink-700 from-yellow-300 h-9  text-black">
      <div className=" text-black-900  flex justify-between items-center">
        <h1 className="text-xl m-2 cursor-pointer hover:text-blue-900">
          Web Developer
        </h1>

        <ul className="flex gap-4 mr-4 cursor-pointer">
          <li className=" menuLink hover:text-blue-900">
            <a href="/">Home </a>{" "}
          </li>
          <li className="hover:text-blue-900">
            {" "}
            <a href="#about"> About </a>{" "}
          </li>
          <li className="hover:text-blue-900">
            {" "}
            <a href="#projects"> Projects </a>{" "}
          </li>
          <li className="hover:text-blue-900">
            {" "}
            <a href="#contact/"> Contact </a>{" "}
          </li>
          <li className="hover:text-blue-900">
            {" "}
            <a href="#skills/">Skills </a>
          </li>
        </ul>
        <CgMenuRound className="md:hidden" size={30} />
      </div>
    </div>
  );
};
export default Navbar;

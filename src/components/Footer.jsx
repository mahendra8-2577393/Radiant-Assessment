import React from "react";
import Same from "./Same";
import Same1 from "./Same1";
import logo5 from "../images/logo5.png"

const Footer = () => {
  return (
    <div className="w-full bg-gray-800 h-[452px] relative">
      <div className="flex flex-wrap justify-baseline items-start absolute top-[54px] left-[280px]">
        <div className="flex flex-col flex-wrap gap-5">
          <span className="text-base font-normal w-[102px] h-[24px] text-gray-50 flex-wrap">
            CATEGORIES
          </span>
          <p className="w-[124px] h-[20px]">
            {" "}
            <Same text="Web Builder" />
          </p>
          <p className="w-[124px] h-[20px]">
            {" "}
            <Same text="Hoisting" />
          </p>
          <p className="w-[116px] h-[20px]">
            {" "}
            <Same1 text="Data Center" />
          </p>
          <p className="w-[134px] h-[20px]">
            {" "}
            <Same text="Robotic-Automation" />
          </p>
        </div>
        <div className="flex flex-col flex-wrap gap-5 ml-[239px]">
          <span className="text-base font-normal w-[102px] h-[24px] text-gray-50">
            CONTACT
          </span>
          <p className="w-[124px] h-[20px]">
            
            <Same text="Contact" />
          </p>
          <p className="w-[124px] h-[20px]">
            {" "}
            <Same text="Privacy Policy" />
          </p>
          <p className="w-[116px] h-[20px]">
            {" "}
            <Same1 text="Terms Of Service" />
          </p>
          <p className="w-[134px] h-[20px]">
            {" "}
            <Same text="Categories" />
          </p>
          <p className="w-[116px] h-[20px]">
            {" "}
            <Same1 text="About" />
          </p>
        </div>
        <div className="mt-[119px] ml-[308px]">
          <p className="flex justify-center items-center gap-1">
            <Same text="United States" />
            <img src={logo5} alt="image"/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

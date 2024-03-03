import React from "react";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import logo from "../images/logo.png";
import logo3 from "../images/logo3.png";
import pc from "../images/pc.png";
import fivestar from "../images/5star.png";
import fourstar from "../images/4star.png";
import halffour from "../images/4.5star.png";
import Main2 from "./Main2.jsx";

import Main from "../components/Main.jsx";

const Landing = () => {
  const data = [
    {
      data1: "1",
      data2: "builder1",
      data3:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      data4: "Main highlights",
      data5:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      data6: "9.8",
      data7: "Exceptional",
      data8: pc,
      data9: fivestar,
      data10: "WixPro 72-Inch Responsive Website Builder-",
    },
    {
      data1: "2",
      data2: "builder",
      data3:
        "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      data4: "Main highlights",
      data5:
        "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      data6: "9.5",
      data7: "Excellent",
      data8: pc,
      data9: halffour,
      data10: "SiteCraft 68-Inch Ultimate Web Design Studio-",
    },
    {
      data1: "3",
      data2: "builder1",
      data3:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      data4: "Main highlights",
      data5:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      data6: "9.3",
      data7: "Exceptional",
      data8: pc,
      data9: fivestar,
      data10: "WixPro 72-Inch Responsive Website Builder-",
    },
    {
      data1: "4",
      data2: "CDK",
      data3:
        "An extensive library of widgets and apps, and detailed step-by-step guides",
      data4: "26% Off",
      data5: "Main highlights",
      data6: "9.1",
      data7: "Very Good",
      data8: pc,
      data9: fourstar,
      data10: "CDK Responsive Builder:",
    },
  ];

  return (
    <div className="w-[1024px] mt-[30px] ml-[384px]">
      <div>
        <div className="w-[1006px] h-[60px] text-5xl font-normal">
          Best Website builders in the US
        </div>
        <div className="w-[1021] border-2 mt-[11px] bg-gray-light"></div>
        <div className="mt-[17px] flex justify-between">
          <div className="flex flex-wrap justify-center items-center gap-[26px]">
            <div className="flex flex-wrap justify-center items-center gap-[10px]">
              <img src={logo1} width={20} height={20} alt="logo1" />
              <p className="upper">
                Last Updated -{" "}
                <span className="text-[13px] font-normal">
                  Febuary 22, 2020
                </span>
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-[10px]">
              <img src={logo2} width={20} height={20} alt="logo1" />
              <p className="text-[14px] leading-5 font-normal upper">Advertising Disclosure</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center font-normal text-[14px] leading-5">
            <p>Top Relevant</p>
            <img src={logo} />
          </div>
        </div>
        <div className="w-[1021] border-2 mt-[20px] bg-gray-light"></div>
      </div>
      <div className="flex flex-wrap justify-start items-center mt-[15px] ml-[20px]">
        <p className="text-[14px] bg-gray-light font-normal w-[105px] h-[36px] upper">
          Tools
        </p>
        <p className="text-[13px] leading-5 bg-gray-light font-normal w-[138px] h-[36px] upper">
          AWS Builder
        </p>
        <p className="text-[13px] leading-5 bg-gray-light font-normal w-[105px] h-[36px] upper">
          Start Build
        </p>
        <p className="text-[13px] leading-5 bg-gray-light font-normal w-[132px] h-[36px] upper">
          Build Supplies
        </p>
        <p className="text-[14px] leading-5 bg-gray-light font-normal w-[126px] h-[36px] upper">
          Tooling
        </p>
        <p className="text-[13px] leading-5 bg-gray-light font-normal w-[140px] h-[36px] upper">
          BlueHosting
        </p>
      </div>

      <div className="flex flex-wrap justify-start items-baseline gap-[20px]  mt-[15px] ">
        <span className="text-[13px] bg-gray-light font-normal h-[20px] w-[40px] upper1">
          Home
        </span>
        <img src={logo3} width={10} height={9} />

        <span className="text-[13px] bg-gray-light font-normal h-[20px] w-[96px] upper1">
          Hosting for all
        </span>
        <img src={logo3} width={10} height={9} />
        <span className="text-[13px] bg-gray-light font-normal h-[20px] w-[56px] upper1">
          Hosting
        </span>
        <img src={logo3} width={10} height={9} />
        <span className="text-[13px] bg-gray-light font-normal h-[20px] w-[64px] upper1">
          Hosting6
        </span>
        <img src={logo3} width={10} height={9} />
        <span className="text-[13px] bg-gray-light font-normal h-[20px] w-[63px] upper1">
          Hosting5
        </span>
      </div>
      <div>
        <div>
          {data.map((item, index) => {
            return <Main key={item.data1} item={item} itemIndex={index} />;
          })}
        </div>
        <p className="font-normal leading-10 text-3xl top-[80px]">
          Related deals you might like for
        </p>
        <div className="flex flex-wrap justify-between gap-3">
          <Main2 />
          <Main2 />
          <Main2 />
        </div>
        <div className="mt-[57px] flex justify-between items-center w-[1024px] h-[171px]">
          <p className="font-normal ml-[10px] text-[32px] leading-10 w-[393px] h-[88px] text-gray-500">Sign up and get exclusive special deals</p>
          <button className="text-white font-normal text-sm text-center bg-blue-600 btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;

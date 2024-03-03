import React from "react";
import down from "../images/down.png";
import logo4 from "../images/logo4.png";
import First from "./First";
import Second from "./Second";

const Main = ({ item }) => {
  return (
    <div className="relative">
      {(item.data1 == 1 || item.data1 == 2 || item.data1 == 3) && (
        <>
          <div>
            {
             (item.data1 == 1 || item.data1 == 2) &&
             (
              (item.data1 == 1) ? <First/> : <Second/>
             )
            }
          </div>

          <div className="flex flex-wrap mt-[60px] xl:w-[1024px] lg:w-[340px] md:w-[200px] h-[255px] gap-[36px] relative">
            <div className="flex gap-[58px]">
              <div className="flex gap-[60px]">
                <span className="w-[45px] -ml-6 h-[44px] border border-solid rounded-full border-gray-500 mt-[11px]  flex justify-center items-center">
                  {item.data1}
                </span>
                <figure className="mt-[30px] flex flex-col items-center">
                  <img
                    src={item.data8}
                    width={141}
                    height={103}
                    alt="pc-scenario"
                  />
                  <figcaption className="mt-[10px] fig">{item.data2}</figcaption>
                </figure>
              </div>
              <div>
                <div className="w-[490px] h-[72px]">
                  <span className="font-bold color">{item.data10}</span>
                  <span className="font-normal text-base color">
                    {item.data3}
                  </span>
                </div>
                <div className="w-[153px] h-[24px] font-bold mt-[4px] color">
                  {item.data4}
                </div>
                <div className="text-base w-[483px] h-[72px] mt-[20px] ml-[10px] color">
                  {item.data5}
                </div>
                <div className="flex flex-wrap justify-start items-baseline gap-2">
                  <p className="mt-[22px] text-blue-500">Show More</p>
                  {(item.data1 == 2 || item.data1 == 1) && (
                    <img
                      className=""
                      src={down}
                      width={16}
                      height={16}
                      alt="down-arrow"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="w-[200px] flex flex-wrap flex-col items-center gap-[72px]">
              <div className="w-[135px] h-[118px] custom flex flex-col justify-center items-center gap-2">
                <div className="w-[50px] h-[40px] text-3xl">{item.data6}</div>
                <p className="text-base">{item.data7}</p>
                <img src={item.data9} width={66} height={11} alt="pics" />
              </div>
              <button className="bg-blue-500 w-full h-[48px] rounded-xl transition-transform hover:scale-80 text-white">
                View
              </button>
            </div>
          </div>
        </>
      )}

      {item.data1 == 4 && (
        <div className="flex mt-[60px] w-[1024px] h-[436px] gap-[36px]">
          <div className="flex gap-[58px]">
            <div className="flex gap-[60px]">
              <span className="w-[55px] h-[44px] -ml-6 border border-solid rounded-full border-gray-500 mt-[11px] mr-[22px] flex justify-center items-center">
                {item.data1}
              </span>
              <figure className="mt-[30px] flex flex-col items-center gap-10">
                <img
                  src={item.data8}
                  width={141}
                  height={103}
                  alt="pc-scenario"
                />
                <figcaption className="mt-[10px] fig">{item.data2}</figcaption>
              </figure>
            </div>
            <div>
              <div className="flex flex-col gap-1">
                <div className="w-[503px] h-[48px]">
                  <span className="font-bold">{item.data10}</span>
                  <span className="font-normal text-base">{item.data3}</span>
                </div>
                <div className="w-[61px] h-[26px] mt-[9px] bg-gray-200 flex justify-center border rounded-sm">
                  <span className="w-[60px] h-[20px] font normal text-sm color">
                    {item.data4}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 -mt-4">
                <div className="text-base w-[153px] h-[24px] mt-[24px] font-bold">
                  {item.data5}
                </div>
                <div className="w-[505px] h-[116px] bg-orange-100 flex flex-col justify-around items-start rounded-s-xl ml-4">
                  <div className="flex justify-center items-center gap-[12px] ml-7">
                    <span className="w-[40px] h-[28px] text-[16px] bg-white border rounded text-blue-600 text-center">
                      9.9
                    </span>
                    <span>Buiding Responsive</span>
                  </div>
                  <div className="flex justify-center items-center gap-[12px] ml-7">
                    <span className="w-[40px] h-[28px] text-[16px] bg-white border rounded text-blue-600 text-center">
                      8.9
                    </span>
                    <span>Cool</span>
                  </div>
                  <div className="flex justify-center items-center gap-[12px] ml-7">
                    <span className="w-[40px] h-[28px] text-[16px] bg-white border rounded text-blue-600 text-center">
                      8.9
                    </span>
                    <span>Docs</span>
                  </div>
                </div>
              </div>
              <div className="font-normal text-base w-[112px] h-24px] relative top-4">
                Why we love it
              </div>
              <div className="flex gap-2 relative top-4">
                <img src={logo4} alt="tic" />
                <span className="font-nomal text-base text-gray-500">
                  Documentation
                </span>
              </div>
              <div className="flex gap-2 relative top-4">
                <img src={logo4} alt="tic" />
                <span className="font-nomal text-base text-gray-500">
                  Easy Use
                </span>
              </div>
              <div className="flex gap-2 relative top-4">
                <img src={logo4} alt="tic" />
                <span className="font-nomal text-base text-gray-500">
                  Out Of Box
                </span>
              </div>

              <div className="flex justify-start items-baseline gap-2">
                <p className="mt-[22px] text-blue-500">Show More</p>
                {(item.data1 == 2 || item.data1 == 1) && (
                  <img
                    className=""
                    src={down}
                    width={16}
                    height={16}
                    alt="down-arrow"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="w-[200px] flex flex-col items-center gap-[225px]">
            <div className="w-[135px] h-[118px] custom flex flex-col justify-center items-center gap-2">
              <div className="w-[50px] h-[40px] text-3xl">{item.data6}</div>
              <p className="text-base">{item.data7}</p>
              <img src={item.data9} width={66} height={11} alt="pics" />
            </div>
            <button className="bg-blue-500 w-full h-[48px] rounded-xl transition-transform hover:scale-80 text-white">
              View
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;

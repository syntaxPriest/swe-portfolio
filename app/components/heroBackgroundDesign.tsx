import React from 'react';

export default function HeroBackgroundDesign () {

    return (
        <>
            <div className="sm:hidden absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <div className="z-[1] w-[1300px] h-[1300px] rounded-[100rem] bg-[#00000010] border border-[#80808020] flex items-center justify-center">
                <div className="w-[1100px] h-[1100px] rounded-[100rem] bg-[#00000010] border border-[#80808020] flex items-center justify-center circle-wave">
                  <div className="w-[900px] h-[900px] rounded-[100rem] bg-[#00000010] border border-[#80808020] flex items-center justify-center circle-wave">
                    <div className="w-[700px] h-[700px] rounded-[100rem] bg-[#00000010] border border-[#80808020] border-b-[0] flex items-center justify-center circle-wave"></div>
                  </div>
                </div>
              </div>
              <img
                src="/bg/stars.png"
                alt=""
                className="w-[3rem] absolute top-[30%] left-[10%]"
              />
              <img
                src="/bg/startup.png"
                alt=""
                className="w-[5rem] absolute top-[60%] left-[12%]"
              />
              <img
                src="/bg/full-moon.png"
                alt=""
                className="w-[3.5rem] absolute top-[60%] left-[83%] opacity-[0.7]"
              />
              <img
                src="/bg/lightning.png"
                alt=""
                className="w-[5rem] absolute top-[30%] left-[85%]"
              />
              <div className="absolute top-[35%] left-[72%] w-[12px] h-[12px] rounded-[100px] bg-[#77f799]"></div>
              <div className="absolute top-[45%] left-[76.2%] w-[7px] h-[7px] rounded-[100px] bg-[#77f799]"></div>
              <div className="absolute top-[35%] left-[30%] w-[5px] h-[5px] rounded-[100px] bg-[#57f799]"></div>
            </div>
        </>
    )
}
import { SparklesIcon } from '@heroicons/react/20/solid';
import React from 'react';



const myEmail = "adewaled03@gmail.com";

export default function LocationDisplay () {

    return (
        <>
            <div className="relative border border-[#ffffff20] bg-[#000000020] rounded-[20px]">
              <img
                src="/user/map.png"
                alt=""
                className="w-full h-full object-cover rounded-[20px]"
              />
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[70px] h-[70px] bg-[#00000060] rounded-[100px] flex items-center justify-center">
                <img
                  src="/user/avatar.png"
                  alt=""
                  className="w-[50px] rounded-[50%]"
                />
              </div>
              <div className="absolute bottom-[10px] text-[12px] left-[10px] bg-[#00000090] rounded-[40px] py-[8px] px-[10px]">
                Lagos, Nigeria
              </div>
            </div>
        </>
    )
}
import { SparklesIcon } from '@heroicons/react/20/solid';
import React from 'react';

export default function BookSection () {
    return (
        <>
            <div className="border border-[#ffffff20] bg-[#000000020] rounded-[20px] p-[20px] box-grad">
              <p className="flex items-center gap-[10px]">
                <SparklesIcon className="w-5 h-5" color="#C6FCA6" />
                Favorite Book
              </p>
              <p className="text-[#ffffff80] text-[14px]">
                Psychology of Intelligence Analysis - Richards . J. Heuer Jr
              </p>
              <img
                src="/user/Pyschology-of-Intelligence-Analysis-1.jpg"
                alt=""
                className="w-[5rem] block mx-auto mt-[3rem]"
              />
            </div>
        </>
    )
}
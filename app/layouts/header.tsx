'use client';

import React, { useState } from "react";
import Button from "../components/button";
import { navItemsProps } from "../page";

interface HeaderProps {
 navScroller: (refId: navItemsProps) => void;
}

export default function Header ({
    navScroller
}: HeaderProps){

    const [bulbOn, setBulbOn] = useState(true);
    return(
        <>
            <header 
                className="flex justify-center z-[10]"
            >
                {/* {

                    bulbOn &&
                        <img 
                            src="/bg/light-source.png" 
                            alt="" 
                            className="absolute h-[50rem] top-0 left-[50%] opacity-[0.6] z-[10] sm:hidden"
                            style={{
                                transform: 'translate(-50%, 0)',
                                transition: '2s'
                            }}
                        />
                } */}
                
                <div className="sm:hidden relative mt-5 border border-[silver] rounded-[200px] flex items-center justify-center bg-[#ffffff40] z-[100]">
                    <div className="flex py-[16px] text-[14px] px-[40px] items-center gap-[50px]">
                        {
                            navs.map((item, index) => (
                                <p 
                                    key={index}
                                    onClick={() => navScroller(item.id)}
                                    className="cursor-pointer hover:opacity-[0.6] hover:scale-[.95]"
                                >{item.name}</p>
                            ))
                        }
                    </div>
                </div>
                <div className="hidden absolute top-0 right-[5rem] flex flex-col items-center z-[1000]">
                    <div className="h-[200px] w-[5px] bg-[#ffffff40]"></div>
                    <img 
                        src={bulbOn ? "/bg/idea.png" : "/bg/lamp.png"}
                        alt="" 
                        className="w-[4rem] relative top-[-2rem] rotate-[180deg] z-[100000] cursor-pointer hover:scale-[1.1]"
                        onClick={() => setBulbOn(!bulbOn)} 
                    />
                </div>
            </header>
        </>
    )
}

interface navProps {
    name: string;
    id: navItemsProps
}

const navs: navProps[] = [
    {
        name: 'Home',
        id: 'home'
    },
    {
        name: 'About',
        id: 'about'
    },

    {
        name: 'Works',
        id: 'works'
    },
    {
        name: 'Projects',
        id: 'projects'
    },
    {
        name: 'Articles',
        id: 'articles'
    },
]
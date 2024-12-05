import { SparklesIcon } from '@heroicons/react/20/solid';
import React from 'react';
import Marquee from 'react-fast-marquee';

export default function TechStackSection () {
    return (
        <>
            <div className="border border-[#ffffff20] bg-[#000000020] rounded-[20px] p-[20px]">
              <p className="flex items-center gap-[10px]">
                <SparklesIcon className="w-5 h-5" color="#C6FCA6" />
                My Tech Stack
              </p>
              <p className="text-[#ffffff80] text-[14px]">
                Core stacks, Languages, Tech Tools and Techniques
              </p>
              <Marquee
                className="!max-w-[260px] sm:max-w-[320px] mt-[2rem] !flex !gap-[10px] justify-between"
                style={{
                  display: "flex",
                  gap: "30px",
                }}
                pauseOnHover
              >
                {TechList.map((item, index) => (
                  <span 
                    key={index}
                    className=""
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="mr-[30px] h-[4rem] sm:h-[3rem]"
                    />
                  </span>
                ))}
              </Marquee>
            </div>
        </>
    )
}

export const TechList = [
    {
      id: "1",
      name: "HTML",
      icon: "/stack/html.png",
      nameDisplay: true,
      proficiency: 5,
    },
    {
      id: "2",
      name: "CSS",
      icon: "/stack/css.png",
      nameDisplay: true,
      proficiency: 5,
    },
    {
      id: "3",
      name: "Javascript",
      icon: "/stack/js.png",
      nameDisplay: true,
      proficiency: 5,
    },
    {
      id: "12",
      name: "Typescript",
      icon: "/stack/ts.png",
      nameDisplay: true,
      proficiency: 5,
    },
    {
      id: "13",
      name: "NextJs",
      icon: "/stack/next.png",
      nameDisplay: true,
      proficiency: 4,
    },
    {
      id: "4",
      name: "React",
      icon: "/stack/react.png",
      nameDisplay: true,
      proficiency: 5,
    },
    {
      id: "5",
      name: "Redux",
      icon: "/stack/redux.png",
      nameDisplay: true,
      proficiency: 5,
    },
    {
      id: "6",
      name: "Tailwind",
      icon: "/stack/tailwind.png",
      nameDisplay: true,
      proficiency: 4,
    },
    {
      id: "7",
      name: "Figma",
      icon: "/stack/figma.png",
      nameDisplay: true,
      proficiency: 3,
    },
    {
      id: "8",
      name: "Native",
      icon: "/stack/Reactnative.png",
      nameDisplay: true,
      proficiency: 3,
    },
    {
      id: "9",
      name: "NodeJs",
      icon: "/stack/nodejs.png",
      nameDisplay: true,
      proficiency: 3,
    },
    {
      id: "15",
      name: "GraphQL",
      icon: "/stack/GraphQL.png",
      nameDisplay: true,
      proficiency: 5,
    },
    {
      id: "16",
      name: "Firebase",
      icon: "/stack/firebase.png",
      nameDisplay: true,
      proficiency: 4,
    },
    {
      id: "20",
      name: "Jest",
      icon: "/stack/jest.png",
      nameDisplay: true,
      proficiency: 4,
    },
    {
      id: "21",
      name: "Chakra UI",
      icon: "/stack/chakra.png",
      nameDisplay: true,
      proficiency: 4,
    },
    {
      id: "10",
      name: "SASS",
      icon: "/stack/sass.png",
      nameDisplay: true,
      proficiency: 4,
    },
    {
      id: "11",
      name: "Git & CICD",
      icon: "/stack/git.png",
      nameDisplay: true,
      proficiency: 5,
    },
    {
      id: "14",
      name: "React Query",
      icon: "/stack/Reactquery.png",
      nameDisplay: true,
      proficiency: 5,
    },
    {
      id: "15",
      name: "DSA",
      icon: "/stack/dsa.png",
      nameDisplay: true,
      proficiency: 5,
    },
  ];
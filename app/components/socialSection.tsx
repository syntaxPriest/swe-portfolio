import { SparklesIcon } from '@heroicons/react/20/solid';
import React from 'react';



const myEmail = "adewaled03@gmail.com";

export default function SocialSection () {

    return (
        <>
            <div className="border border-[#ffffff20] bg-[#000000020] rounded-[20px] p-[20px]">
              <p className="flex items-center gap-[10px]">
                <SparklesIcon className="w-5 h-5" color="#C6FCA6" />
                Socials/Links
              </p>
              <p className="text-[#ffffff80] text-[14px]">
                Links to my social outlets
              </p>
              <div className="flex items-center gap-[20px] mt-[1rem]">
                {social.map((item, index) => (
                  <a href={item.link} key={index} target="_blank">
                    <img
                      src={item.icon}
                      alt=""
                      style={{
                        height: item.size || "2.5rem",
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
        </>
    )
}

export const social = [
    {
      id: "1",
      name: "Github",
      icon: "/stack/git.png",
      link: "https://github.com/syntaxPriest",
      nameDisplay: true,
    },
    {
      id: "2",
      name: "Linkedin",
      icon: "/social/linkedin.png",
      link: "https://www.linkedin.com/in/syntaxpriest/",
      nameDisplay: true,
    },
    {
      id: "3",
      name: "Twitter",
      icon: "/social/x.webp",
      link: "https://twitter.com/syntaxPriest",
      nameDisplay: true,
      size: "5rem",
    },
    {
      id: "4",
      name: "Email",
      icon: "/social/gmail.png",
      link: `mailto:${myEmail}`,
      nameDisplay: true,
    },
    // {
    //     id: '5',
    //     name: 'Phone',
    //     icon: LocalPhone,
    //     link: 'tel:08188869197',
    //     nameDisplay: true
    // },
  ];
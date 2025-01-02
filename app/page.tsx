'use client';

import Image from "next/image";
import SimpleLayout from "./layouts/simpleLayout";
import Button from "./components/button";
import { ArrowUpRightIcon, SparklesIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon, ArrowRightIcon, CheckCircleIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import Marquee from "react-fast-marquee";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import { projectResponsive } from "./helpers/carouselResponsives";
import React from "react";
import BookSection from "./components/bookSection";
import TechStackSection from "./components/techStackSection";
import SocialSection from "./components/socialSection";
import HeroBackgroundDesign from "./components/heroBackgroundDesign";
import LocationDisplay from "./components/mapDisplay";
import Card from "./components/project-card";
import { Fade, Slide } from "react-awesome-reveal";

const myEmail = "adewaled03@gmail.com"
export type navItemsProps = "home" | "about" | "works" | "projects" | "articles";

export default function Home() {

  const navScroller = (refId: navItemsProps) => {
    const element = document.getElementById(refId)
    // Scroll into the target RefId
    element?.scrollIntoView();
  }
  
  return (
    <SimpleLayout
      navScroller={navScroller}
    >
      {/* Hero Section */}
      <div className="h-[40rem]" id='home'>
        <div
          style={{
            background: "#000000",
          }}
          className="absolute top-0 left-0 w-full sm:h-[110vh] blurred-div"
        >
          <div
            className="relative w-[80%] h-[40rem] max-w-[900px] mx-auto text-center mt-[8rem] sm:mt-[4rem] z-[10]"
            //
          >
            <HeroBackgroundDesign />
            <div></div>
            <div className="relative pt-[4rem] sm:pt-[2rem] sm:w-[100%]">
              <img
                src="/user/avatar.png"
                alt=""
                className="block mx-auto w-[90px] rounded-[100px]"
              />
              <div className="sm:w-[240px] py-[8px] px-[20px] rounded-[10px] bg-[#161616] absolute left-[50%] translate-x-[-50%] bottom-[-1rem] flex gap-[10px] justify-center items-center">
                <div className="w-[10px] h-[10px] rounded-[100px] bg-[green]"></div>
                <p className="text-[12px]">Available for opportunities</p>
              </div>
            </div>
            <Fade>
              <h3 className="text-[40px] sm:text-[36px] text-[#fff] font-[900]  leading-[125%] mt-[3rem]">
                Software Engineer <br />
                Frontend Developer{" "}
              </h3>
              <p className="text-[18px] sm:text-[16px] text-[#ffffff99] mt-4">
                I'm Daniel Adewale, Software Engineer and Senior Frontend
                Developer.
              </p>
              <p className="text-[18px] sm:text-[16px] text-[#ffffff99] mt-1">
                Over 6 years of experience developing quality softwares and
                products.
              </p>
            </Fade>
            <div className="flex gap-[10px] justify-center mt-[3rem] sm:mt-[5rem] sm:flex-col">
              <a href={`mailto:${myEmail}`}>
                <Button
                  text="👋   Let's talk "
                  bg="#fff"
                  color="#161616"
                  className="py-[12px] w-[180px] sm:w-[100%]"
                />
              </a>
              <a 
                href="https://docs.google.com/document/d/1sCQ_9keryAYoOxwaVqu05fWl3DgkAjroKQPTLqtVFQ4/edit?tab=t.0"
                target="_blank"
              >
                <Button
                  text="View Resume"
                  bg="transparent"
                  border="1px solid #ffffff60"
                  color="#fff"
                  className="py-[12px] w-[200px] sm:w-[100%]"
                  icon={DocumentTextIcon}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id='about' className="w-full max-w-[1000px] mx-auto mt-[3rem] pt-[6rem] sm:px-[20px] z-[100000000]">
        <div className="grid grid-cols-12 sm:mt-[4rem] sm:grid-cols-1 gap-[30px] w-full">
          <div className="col-span-4 sm:col-span-12 grid gap-[20px]">
            <div className="w-full">
              <p className="text-[20px] text-[#C6FCA6] uppercase">
                Beyond Portfolio
              </p>
              <h3 className="text-[40px] font-[900] leading-[125%] ">
                Let's know more about me
              </h3>
            </div>
            <BookSection />
          </div>
          <div className="col-span-4 sm:col-span-12 grid gap-[30px]">
            <TechStackSection />
            <SocialSection />
          </div>
          <div className="col-span-4 sm:col-span-12 grid gap-[30px]">
            <LocationDisplay />
            <div className="border border-[#ffffff20] bg-[#000000020] rounded-[20px] p-[20px]">
              <p className="flex items-center gap-[10px]">
                <SparklesIcon className="w-5 h-5" color="#C6FCA6" />
                My Persona
              </p>
              <p className="text-[#ffffff80] text-[14px]">
                Hobbie, Key Attributes
              </p>
              <div className="flex flex-wrap gap-[5px] mt-[1rem]">
                {persona.map((item, index) => (
                  <div
                    key={index}
                    className="py-[8px] px-[20px] persona-card border border-[#ffffff40] rounded-[100px]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[url(/bg/ellipse.png)] w-full mt-[10rem] sm:mt-[6rem] pb-[4rem] sm:px-[20px]"
        style={{
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      >
        <div id='works' className="w-full max-w-[750px] mx-auto py-[7rem]">
          <p className="text-center text-[#C6FCA6] uppercase text-[18px]">
            My Experiences
          </p>
          <h3
            className="text-[28px]  text-center font-[800]"
            style={{
              fontStyle: "normal",
            }}
          >
            Where I've Been Employed
          </h3>
          <div className="mt-[4rem]">
            {experienceArray.map((item, index) => (
              <div
                key={index}
                className="py-[3rem] flex sm:flex-col gap-[40px] sm:gap-[30px] justify-between border-b border-[#ffffff16]"
              >
                <Slide 
                  direction="left"
                  className="flex-1"
                >
                  <div className="flex-1">
                    <h1>
                      {item.role}{" "}
                      <span className="text-[#C6FCA6]">{item.company}</span>
                    </h1>
                    <p className="text-[14px] mt-2 text-[#ffffff80]">
                      {item.timeline} | {item.location}
                    </p>
                  </div>
                </Slide>
                <Slide 
                  direction='right'
                  className="flex-1"
                >
                  <p className="flex-1 text-[14px] text-[#ffffff80]">
                    {item.narration}
                  </p>
                </Slide>
              </div>
            ))}
          </div>
        </div>
        <div id='projects' className="w-full max-w-[1150px] mx-auto py-[4rem] sm:py-[0rem]">
          <p className="text-center text-[#C6FCA6] uppercase text-[18px]">
            Curated work
          </p>
          <h3
            className="text-[28px]  text-center font-[800]"
            style={{
              fontStyle: "normal",
            }}
          >
            Featured Projects
          </h3>
          <div className="flex flex-wrap gap-6 p-10 sm:p-[0] sm:py-[20px] justify-center">
          {
            projectList.map((item, index) => (
              <Card
                index={index}
                key={index}
                img={item.img}
                title={item.name}
                description={item.desc}
                stars={3}
                link={item.link}
              />
            ))
          }
          </div>
          {/* </Carousel> */}
        </div>
        <div id='articles' className="w-full max-w-[1150px] mx-auto py-[4rem]">
          <p className="text-center text-[#C6FCA6] uppercase text-[18px]">
            Thoughts and Articles
          </p>
          <h3
            className="text-[28px]  text-center font-[800]"
            style={{
              fontStyle: "normal",
            }}
          >
            Read My Narrative
          </h3>
          <p className="text-center text-[16px] mt-2">
            Tech related Lessons, trends, thoughts and articles. 
          </p>
          <div className="mt-[4rem] flex sm:flex-col gap-[30px] justify-center">
            {
              publications.map((item, index) => (
                <a 
                  key={index}
                  href={item.link} 
                  target="_blank"
                >
                  <div 
                    key={index}
                    className="relative w-[100%] max-w-[350px] h-[350px] bg-[#00000020] rounded-[20px] border border-[#ffffff40] p-[30px] narration-item-card"
                  >
                    <p className="text-[24px] font-[700] leading-[200%]">
                      {item.name}
                    </p>
                    <ArrowRightIcon className="w-8 h-8 absolute bottom-[2rem] left-[30px]" />
                  </div>
                </a>
              ))
            }
          </div>
        </div>
        <div className="w-[100%] max-w-[1000px] my-[5rem] sm:my-[0rem] mb-[0rem] mx-auto p-[40px] rounded-[35px] flex sm:flex-col sm:gap-[30px] items-center sm:items-start justify-between banner-card">
            <div>
              <h3 className="text-[25px] font-[800] ">Let's connect and create something amazing</h3>
              <p className="mt-1 text-[14px] font-[300]">Reach out to me for collaborations, inquiries, or to just say hello</p>
            </div>
            <a href={`mailto:${myEmail}`}>
              <Button 
                color='#fff'
                bg='#161616'
                text='Contact Me'
                forwardIcon={ArrowLongRightIcon}
                className="w-[210px] sm:w-[100%] rounded-[35px] py-[12px]"
              />
            </a>
        </div>
      </div>
    </SimpleLayout>
  );
}

const CustomHeroDot = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;
  const carouselItems = ["", "", ""];
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.

  return (
    <button
      className={active ? "hero-dot hero-dot-active" : "hero-dot"}
      onClick={() => onClick()}
    >
      {React.Children.toArray(carouselItems)[index]}
    </button>
  );
};

const persona = ["Honest", "Introvert", "Music Art", "Hardworking", "Collaboration"];

const publications = [
  {
    name: "Understanding basic styled components with React, Next and Vue.",
    link: "https://dev.to/syntaxpriest/understanding-styled-components-a-basic-guide-on-styled-components-usage-with-reactnextvue-45a4"
  },
  {
    name: "Image Upload And File Preview With ReactJs.",
    link: "https://dev.to/syntaxpriest/image-file-previewing-with-reactjs-883"
  }
]

const experienceArray = [
  {
    role: "Snr Frontend Engineer",
    company: "Qshelter NG",
    location: "Lagos, Nigeria",
    timeline: "Sept 2023 - Present",
    narration: "At Qshelter Limited, I contributed alongside other Engineers to the development of innovative housing platforms like the Renewed Hope Housing Platform, contributing to 50,000+ user registrations and NGN 1Billion+ in sales. I also delivered full applications like Contribuild, MREIF Platform, showcasing expertise in React, NextJs and TypeScript."
  },
  {
    role: "Frontend Developer",
    company: "Mage Inc",
    location: "Lagos, Nigeria",
    timeline: "Dec 2021 - Oct 2023",
    narration: "At Mage Inc, I developed user-centric platforms like the Creator Store, attracting 6,000+ users with an 80% retention rate. I built payment infrastructures, including virtual wallets and secure checkouts, enabling seamless monetization. My work on the Creator Dashboard empowered data-driven insights, enhancing business growth."
  },
  {
    role: "Platform Engineer (Contract)",
    company: "Tryortho",
    location: "FCT Abuja, Nigeria",
    timeline: "Apr 2022 - Aug 2022",
    narration: "At TryOrtho, I developed robust payment SDKs to streamline integration for client platforms. Additionally, I designed and built the company's landing page, ensuring a responsive and user-friendly experience to effectively showcase their offerings."
  },
  {
    role: "Frontend Developer",
    company: "Kpie Technologies",
    location: "Lagos, Nigeria",
    timeline: "Nov 2019 - Oct 2021",
    narration: "At Kpie Technologies, I built user-focused platforms like SellMega, a UX-driven e-commerce solution, and delivered the PPMI website ahead of schedule. My contributions included enhancing websites like MultiGrid Limited with improved UX and collaborating on projects like the Hua Ou Brick platform to create seamless digital experiences."
  },
];

const projectList = [
  {
      id:"90",
      name:"Ministry of Finance Incorporated Housing Website",
      desc:"A website for the ministry of finance, Nigeria in purpose of the housing projects for over 1 million Nigerians.",
      img:"/works/mofi2.png",
      link:"https://mreif.qshelter.ng",
      stacks: ["NextJs", "Tailwind", "Typescript", "Redux", "Styled-component", "REST API"]
  },
  {
      id:"1",
      name:"RenewedHope Housing Platform",
      desc:"An application built to make the dream of owning a home a reality for Nigerians. Users can select units and pay with different methods",
      img:"/works/rh.png",
      link:"https://renewedhopehomes.fmhud.gov.ng/properties/search",
      stacks: ["NextJs", "Typescript", "Redux", "REST API", "Tailwind CSS", "GraphQL", "Styled Component",]
  },
  {
      id:"1",
      name:"Mage",
      desc:"Mage is a platform for creative businesses to manage payments, expenses, and access funding for their projects.",
      img:"/works/mage.png",
      link:"https://trymage.com",
      stacks: ["React", "NextJs", "Typescript", "Redux", "Styled Component", "REST API", "WebSocket", "Firebase"]
  },
  {
      id:"1",
      name:"Contribuild",
      desc:"A platform to find the property of your dreams and start saving towards owning it!",
      img:"/works/contribuild.png",
      link:"https://contribuild.ng",
      stacks: ["React", "Typescript", "Redux", "Styled Component", "REST API", "Tailwind"]
  },
  {
      id:"20",
      name:"Video Streaming App",
      desc:"Front end design implementation for a video stream website.",
      img:"/works/video.png",
      link:"https://vid-react.netlify.app",
      stacks: ["React", "Tailwind", "Javascript", "CSS"]
  },
  {
      id:"90",
      name:"Multigrid Limited",
      desc:"A platform for an organization with a primary dedication in serving with architechture, contruction and engineering services.",
      img:"/works/multigrid.png",
      link:"https://multigridlimited.com",
      stacks: ["HTML", "Javascript", "CSS", "REST API"]
  },
  {
      id:"92",
      name:"The Metropolian Club Management System",
      desc:"A back-office management system for The Metropolian Club, ",
      img:"/works/tmc.png",
      link:"",
      stacks: ["React", "Javascript", "Typescript", "Tailwind CSS", "React Query"]
  },
  {
      id:"90",
      name:"Otayemi Law Firm Website",
      desc:"A website for Otayemi Law firm, a team of dedicated lawyers with expertise in different fields of legal practice, working together to give timeless advice and solutions to your legal worries.",
      img:"/works/law.jpg",
      link:"https://otaillaw.netlify.app",
      stacks: ["HTML", "CSS", "Javascript"]
  },
  {
      id:"90",
      name:"Hua Ou Clay Bricks",
      desc:"A platform for a construction company that evaluate and sells bricks to clients for their construction needs in Nigeria.",
      img:"/works/huaoy.png",
      link:"https://huaouclaybricks.com/",
      stacks: ["HTML", "Javascript", "CSS", "REST API"]
  },
  {
      id:"5",
      name:"Arata BlockChain Application (UI)",
      desc:"A blockchain interface for a blockchain and Web3 company",
      img:"/works/art.jpg",
      link:"https://aarata.netlify.app",
      stacks: ["React", "Tailwind", "Javascript", "CSS"]
  },
]

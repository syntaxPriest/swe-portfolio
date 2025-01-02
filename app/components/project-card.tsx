'use client';

import React from 'react';
import { Slide } from 'react-awesome-reveal';
import Button from './button';

interface CardProps {
  index: number,
  date?: string;
  title: string;
  description: string;
  stars: number;
  link: string;
}

const Card: React.FC<CardProps> = ({ index, date, link, title, description, stars }) => {

  const handleRouteTransition = () => {
    window.open(link, "_blank", 'noopener,noreferrer');
  }

  return (
      <div
        onClick={handleRouteTransition}
        className="relative"
      >
      <Slide
        delay={(index + 1) * 20}
        direction='right'
        className="bg-gray-900 h-full text-white p-6 rounded-lg shadow-lg hover:scale-[.95] cursor-pointer hover:opacity-[0.6] w-80 sm:w-[100%]"
      >
        <div
          className="bg-gray-900 text-white rounded-lg shadow-lg hover:scale-[.95] cursor-pointer hover:opacity-[0.6]"
        >
          <p className="text-gray-400 text-sm">{date}</p>
          <h2 className="text-2xl font-bold mt-2">{title}</h2>
          <p className="text-gray-300 mt-4 text-sm text-[#ffffff90]">{description}</p>
          <div className="flex items-center justify-between mt-6">
            {/* <div className="flex items-center">
              <span className="text-yellow-400 font-bold">{stars}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.909c.969 0 1.371 1.24.588 1.81l-3.978 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.978-2.89a1 1 0 00-1.175 0l-3.978 2.89c-.785.57-1.84-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.342 9.101c-.783-.57-.381-1.81.588-1.81h4.91a1 1 0 00.95-.69l1.518-4.674z" />
              </svg>
            </div> */}
          </div>
        </div>
      </Slide>
      </div>
  );
};

export default Card;

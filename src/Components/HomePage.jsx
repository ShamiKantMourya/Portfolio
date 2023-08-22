import React from "react";
import Lottie from "react-lottie";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

import portfolio from "../assests/portfolio/portfolio.json";

const HomePage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: portfolio,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl font-bold text-white mt-28">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            Experienced Front-end Developer with knowledge of React, Redux, Node
            js and Express js. Proven ability to develop efficient and scalable
            web applications. Applying for the position of full-stack web
            developer. Currently part of NeogCamp.
          </p>
          <div>
            <Link
              to="project"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardDoubleArrowRight size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="z-0">
          <Lottie options={defaultOptions} height={400} width={350} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

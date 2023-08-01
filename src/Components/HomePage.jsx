import React from 'react';
import Lottie from 'react-lottie';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import portfolio from "../assests/portfolio/portfolio.json";

const HomePage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: portfolio,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Full Stack Developer</h2>
                    <p className="text-gray-400 py-4 max-w-md">
                        The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.

                        The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.
                    </p>
                    <div>
                        <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardDoubleArrowRight size={20} className='ml-1'/>
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <Lottie
                        options={defaultOptions}
                        height={400}
                        width={350}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomePage;
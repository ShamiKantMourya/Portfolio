import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false);
    const links = [
        {
            id: 1,
            link: "home"
        },
        {
            id: 2,
            link: "about"
        },
        {
            id: 3,
            link: "project"
        },
        {
            id: 4,
            link: "skills"
        },
        {
            id: 5,
            link: "contact"
        },
    ]
    return (
        <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 z-100'>
            <div>
                <h1 className='text-4xl ml-2'>Shami</h1>
            </div>
            <ul className="hidden md:flex">
                {
                    links && links.map(item => (
                        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200" key={item.id}>
                            <Link to={item.link} smooth duration={500}>{item.link}</Link>
                        </li>
                    ))
                }
            </ul>
            <div onClick={() => setToggleNav(!toggleNav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {
                    toggleNav ? <FaTimes size={30} /> : <FaBars size={30} />
                }
            </div>
            {
                toggleNav && (
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500 text-gray-500">
                        {
                            links && links.map(item => (
                                <li className="px-4 cursor-pointer capitalize py-6 text-4xl" key={item.id}>
                                    <Link to={item.link} smooth duration={500} onClick={() => setToggleNav(!toggleNav)}>{item.link}</Link>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default Navbar;
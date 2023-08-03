import React from 'react';
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";

const SocialIcons = () => {
    const socialIcons = [
        {
            id: 1,
            child:(
                <>
                  LinkedIn <FaLinkedin size={25} />
                </>
            ),
            href: "https://linkedin.com",
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child:(
                <>
                  Twitter <FaTwitter size={25} />
                </>
            ),
            href: "https://twitter.com",
           
        },
        {
            id: 3,
            child:(
                <>
                  Github <FaGithub size={25} />
                </>
            ),
            href: "https://github.com",
            
        },
        {
            id: 4,
            child:(
                <>
                  Mail <HiOutlineMail size={25} />
                </>
            ),
            href: "mailto:shamimourya9852@gmail.com",
            
        },
        {
            id: 5,
            child:(
                <>
                  Resume <BsFillPersonLinesFill size={25} />
                </>
            ),
            href: "/resume.pdf",
            style: "rounded-br-md",
            download: true,
        },
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {
               socialIcons.map((icon) => (
                <li  key={icon.id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-110px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300'+ " "+icon.style}>
                <a href={icon.href} className='flex justify-between items-center w-full text-white' 
                download={icon.download}
                target='_blank'
                rel='noreferrer'
                >  
                   {icon.child}
                </a>
            </li>
               )) 
            }
        </ul>
    </div>
  )
}

export default SocialIcons;
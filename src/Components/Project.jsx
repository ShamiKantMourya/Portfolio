import React from 'react';
import ProjectImage from '../assests/portfolio/ProjectImage';

const Project = () => {

    const projects = [
        {
            id:1,
            src: ProjectImage.eCommerce,
            alt: "E-Commerce Website",
        },
        {
            id:2,
            src: ProjectImage.socialMedia,
            alt: "Social Media Website"
        },
        {
            id:3,
            src: ProjectImage.videoLibrary,
            alt: "Video Library Website"
        },
        {
            id:4,
            src: ProjectImage.recipeSite,
            alt: "Recipe Website"
        },
        {
            id:5,
            src: ProjectImage.habitTracker,
            alt: "Habit Tracker Website"
        },
        
    ]
  return (
    <div name="portfolio"
    className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8' >
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className='py-6'>Check out some of my works</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
           {
            projects.map((project) => (
               
                <div className='shadow-md shadow-gray-600 rounded-lg' key={project.id}>
                    <img src= {project.src} alt= {project.alt} className='rounded-md duration-200 px-2 py-1 hover:scale-105' />
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-100 hover:scale-105'>Live</button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-100 hover:scale-105'>Code</button>
                    </div>
                </div>
            ))
           }
           </div>
        </div>
    </div>
  )
}

export default Project;
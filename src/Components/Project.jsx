import React from 'react';
import ProjectImage from '../assests/portfolio/ProjectImage';

const Project = () => {

    const projects = [
        {
            id:1,
            src: ProjectImage.eCommerce,
            alt: "E-Commerce Website",
            live: "https://mycurlingtails.netlify.app/",
            code: "https://github.com/ShamiKantMourya/E-Commerce"
        },
        {
            id:2,
            src: ProjectImage.socialMedia,
            alt: "Social Media Website",
            live: "https://harmony-of-words-6xn6.onrender.com",
            code: "https://github.com/ShamiKantMourya/Harmony_Of_Word"
        },
        {
            id:3,
            src: ProjectImage.videoLibrary,
            alt: "Video Library Website",
            live: "https://vidbookshelf.netlify.app/",
            code: "https://github.com/ShamiKantMourya/machine_coding_round_9"
        },
        {
            id:4,
            src: ProjectImage.recipeSite,
            alt: "Recipe Website",
            live: "https://onlinerecipebook.netlify.app/",
            code: "https://github.com/ShamiKantMourya/machine_coding_round_5"
        },
        {
            id:5,
            src: ProjectImage.habitTracker,
            alt: "Habit Tracker Website",
            live: "",
            code: "https://github.com/ShamiKantMourya/habit_tracker"
        },
        
    ]
  return (
    <div name="project"
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
               
                <div className='shadow-md shadow-gray-600 rounded-lg overflow-hidden' key={project.id}>
                   <div className='w-11/12 h-3/4 m-auto overflow-hidden rounded-md duration-200 '>
                   <img src= {project.src} alt= {project.alt} className='w-full h-full object-cover hover:scale-105 transition-all ease-in' />
                   </div>
                    <div className='flex items-center justify-center h-1/4'>
                        <button className=' px-6 py-3 duration-100 hover:scale-105'>Live</button>
                        <button className=' px-6 py-3 duration-100 hover:scale-105'>Code</button>
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
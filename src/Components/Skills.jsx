import React from 'react';
import Skill from '../assests/Skills';

const Skills = () => {
  const mySkill = [
    {
      id: 1,
      src: Skill.html,
      alt: "HTML",
      style: "shadow-orange-500"
    },
    {
      id: 2,
      src: Skill.css,
      alt: "CSS",
      style: "shadow-blue-500"
    },
    {
      id: 3,
      src: Skill.javascript,
      alt: "JavaScript",
      style: "shadow-yellow-500"
    },
    {
      id: 4,
      src: Skill.react,
      alt: "React",
      style: "shadow-blue-600"
    },
    {
      id: 5,
      src: Skill.tailwind,
      alt: "Tailwind",
      style: "shadow-sky-500"
    },
    {
      id: 6,
      src: Skill.node,
      alt: "Node",
      style: "shadow-green-500"
    },
    {
      id: 1,
      src: Skill.express,
      alt: "Express",
      style: "shadow-white-500"
    },
  ]
  return (
    <div name="skills" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
          <p className='py-6'>I have worked using these technologies</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {
            mySkill.map((skill) =>
              <div className={`shadow-md hover:scalae-105 duration-500 py-2 rounded-lg ${skill.style}`} key={skill.id}>
                <img src={skill.src} alt={skill.alt} className='w-20 mx-auto' />
                <p className='mt-4'>{skill.alt}</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Skills;
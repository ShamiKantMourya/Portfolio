import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white' >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusantium totam fugit dolores animi voluptatum aut. Accusantium cupiditate, illum recusandae exercitationem molestias repudiandae dolore, consequatur repellendus esse asperiores, maxime doloribus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusantium totam fugit dolores animi voluptatum aut.
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quaerat aliquid temporibus praesentium magnam officiis vitae voluptas optio totam fugit pariatur corporis doloribus, natus numquam libero nemo laudantium. Quod blanditiis perspiciatis iusto, ipsum consequuntur illum, possimus labore qui sapiente excepturi id repellendus quibusdam eaque neque suscipit libero incidunt ullam a?
            </p>
        </div>
    </div>
  )
}

export default About;
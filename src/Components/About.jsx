import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I'm Shami Kant Mourya, a passionate web developer on a mission to
          craft meaningful online experiences. With a B.Tech degree in computer
          science engineering under my belt, I've honed my skills in a range of
          technologies, including React, Redux, Node, and Express. I want to be
          a flexible web developer, and I enjoy the challenges that come with
          turning concepts into useful, user-friendly websites. Clean code,
          effective solutions, and ongoing learning are the cornerstones of my
          strategy. I'm committed to delivering results that beyond
          expectations, whether I'm developing a vibrant front-end or designing
          a solid back-end.
        </p>
        <br />
        <p className="text-xl">
          When I'm not immersed in code, you might find me exploring the
          outdoors or experimenting with new recipes. I believe in the power of
          technology to shape the future and make a positive impact. If you're
          seeking a dedicated developer with a knack for innovation and a
          passion for pushing boundaries, let's connect and bring your web
          projects to life!
        </p>
      </div>
    </div>
  );
};

export default About;

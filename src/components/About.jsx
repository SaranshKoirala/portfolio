import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-5">
          Currently pursuing a degree in Computer Science with a focus on
          software development.
        </p>
        <br /> <br />
        <p className="text-xl ">
          I like to code matters from scratch and love the idea of bringing
          thoughts to life. Connect with me to get your project done. <br />{" "}
          <br /> <br />
          I value minimalistic designs, thoughtful branding of the content, and
          customer relatable experience. Let’s discover together how we can make
          your project convert better!
          <br /> <br />I am passionate about working on both frontend and
          backend development using the MERN stack, striving to build seamless,
          scalable, and user-friendly web applications that solve real-world
          problems.
          <br /> <br />
        </p>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import HeroImage from "../assets/heroImage.png";
import SaranshResume from "../assets/SaranshResume.pdf";
import SaranshCV from "../assets/CV.pdf";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black  to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="small-screen hidden">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Mern Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Passionate about building robust web applications using Node.js and
            React. Actively seeking internships to gain practical experience and
            further enhance skills.
          </p>

          <div className="portfolio-btn">
            <a
              href={SaranshCV}
              download="SaranshResume"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="big-screen">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div name="" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 font-bold text-2xl my-2">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-blod text-[#ccd6f6]">
          Raghad Almalla
        </h1>
        <h2 className="text-4xl sm:text-7xl font-blod text-[#8892b0]">
          I'm a Frontend Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          A front-end web developer sepecializing in implementing visual and
          interactive elements that users engage with through their web browser
          when using a web application.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
import React from "react";
import hero from "../../assets/home/hero1.jpg";
import Carousal from "../Home/Carousal";
import About from "../Home/Us";
import Reasons from "../Home/Reasons";

import VRModel from "./VRModel";
const Home = () => {
  return (
    <> 
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-12">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
    {/* Left: Text Content */}
    <div className="flex-1 text-center md:text-left">
      <h1
        className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold text-red-600 mb-4 sm:mb-6"
        style={{ fontFamily: '"Noto Sans Mono", monospace' }}
      >
        KRONOSPECT
      </h1>
      <p
        className="text-base sm:text-lg md:text-xl leading-relaxed max-w-xxl mx-auto sm:mx-0"
        style={{ textAlign: 'justify', fontFamily: '"Roboto-condensed", sans-serif' }}
      >
        Kronospect invites you to reimagine the fabric of time—where the past informs, the
        present engages, and the future unfolds through innovation. As a theme, it challenges
        conventional timelines and encourages a visionary approach to progress, creativity,
        and discovery. Step into a space where ideas transcend moments, and time becomes a
        canvas for transformation.
      </p>
    </div>

    {/* Right: Placeholder for 3D/VR Model */}
    <div className="flex-1 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-xl flex items-center justify-center mt-8 sm:mt-0 overflow-hidden">
      <VRModel />
    </div>
  </div>
</section>

      
  
   
      
      <Carousal />
      <About />
      <Reasons />
    </>
  );
};

export default Home;

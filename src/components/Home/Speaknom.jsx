import React from 'react';
import { useNavigate } from "react-router-dom";
const Speaknom = () => {
  const navigate = useNavigate();
  return (
    
    <div className="relative  flex flex-col md:flex-row items-center justify-around p-8 bg-black text-white min-h-screen">
      {/* Left Column */}
      <div className=" min-w-20 md:w-1/2  md:space-y-8 text-center md:text-left ml-44">
        {/* Title */}
        <div className="text-4xl md:text-5xl font-bold z-30">
          Speaking at TEDx SiddagangaInstituteOfTechnology
        </div>

        {/* Main Description */}
        <div className="text-lg md:text-xl">
          If you know someone who belongs on our roster, or if you belong there yourself, we want to hear from you! Please use our
          <a href="#" className="text-blue-400 hover:underline ml-1">speaker nomination form</a>,
          and tell us why this person would be well-matched to the TED stage.
        </div>

        {/* Italic Text */}
        <div className="italic text-sm md:text-base">
          Multiple nominations for the same person won't influence the speaker selection team in any way. We review every nomination that comes in, and it only takes one.
        </div>
      </div>

      {/* Right Column */}
      <div className="md:w-1/2 flex flex-col items-start md:items-center justify-start space-y-6 relative z-10">
        {/* Nomination Button */}
        <div onClick={() => navigate("/Nform")} className="bg-red-600 text-white text-2xl px-6 py-2 rounded-full inline-flex item-center mr-52 hover:bg-red-800 transition relative z-20">
          <span>NOMINATION FORM</span>
          <img src="https://assets.website-files.com/640f47772aaf7f35956f7cf6/640f47772aaf7f8ee06f7d33_sky-arrow.svg" alt="Arrow" className="w-4 h-4 items-center m-2 " />
        </div>
      </div>

      {/* Microphone Image */}
      <img
        src="https://assets.website-files.com/640f47772aaf7f35956f7cf6/640f47772aaf7f0a026f7d69_Microphone.svg"
        alt="Microphone"
        className="absolute right-0 bottom-0 w-[50%] h-screen z-0 items-start"
      />
    </div>
  );
};

export default Speaknom;

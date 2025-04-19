import React, { useState } from 'react';
import '../../styles/card.css';  
const Cards = ({ frontContent, backContent, bgImage }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    if (!isFlipped) {
      setIsFlipped(true);  
    }
  };

  const handleMouseLeave = () => {
    if (isFlipped) {
      setIsFlipped(false); 
    }
  };

   const Archivo = {
    fontFamily: 'Archivo black, sans-serif',
   };

   return (
    <div
      className="relative w-96 h-96 m-4 perspective"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative w-full h-full card transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full card-front bg-cover bg-center flex justify-center items-center text-white" 
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <div className="bg-slate-900 bg-opacity-50 rounded-lg text-3xl text-center text-pretty font-bold" style={Archivo}>
            {frontContent}
          </div>
        </div>
        
        {/* Back Side */}
        <div
          className="absolute w-full h-full card-back bg-red-600 flex justify-center items-center text-center text-2xl text-white"
          style={Archivo}
        >
          <div className="p-4">
            {backContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

import React, { useState } from 'react';

const Us = () => {
  // State to hold the currently selected text
  const [selectedText, setSelectedText] = useState("TED (Technology, Entertainment, and Design) has grown into a global symbol of creativity and intellect, initially focusing on topics like compact disks, e-books, and fractal mapping of coastlines. Over time, it expanded to include business leaders, scientists, and philosophers. TED's influence now spans initiatives like TED-Ed, which educates through engaging animations, TEDGlobal, a traveling conference, and the TED Prize, which supports transformative ideas. Embracing inclusivity, TED continues to inspire progress and welcomes diverse voices from around the world.");

  // Text content based on button selection
  const textContent = {
    button1: "TED (Technology, Entertainment, and Design) has grown into a global symbol of creativity and intellect, initially focusing on topics like compact disks, e-books, and fractal mapping of coastlines. Over time, it expanded to include business leaders, scientists, and philosophers. TED's influence now spans initiatives like TED-Ed, which educates through engaging animations, TEDGlobal, a traveling conference, and the TED Prize, which supports transformative ideas. Embracing inclusivity, TED continues to inspire progress and welcomes diverse voices from around the world.",
    button2: "TEDx is an initiative to promote 'ideas worth spreading' in local communities across the world. Steered by passionate individuals, TEDx events aim to infuse the spirit of TED at the grassroot level through a series of independently organised events. These events are aimed at bringing new ideas and stories to the society so as to inspire and spark meaningful conversations. These events, under the umbrella of TED, adhere to set of prescribed guidelines provided alongwith the license. More than 3000 events are held as part of TEDx each year.",
    button3: "TEDxSIT is an initiative to bring the spirit of TED to the community of SIT. This event provides a gateway for some of the talented individuals at this institution to get inspired and motivated to push their limits and polish coal to synthesize dazzling diamonds. TEDxSIT, founded in 2015, has since been one of SIT's most awaited and excited annual events.",
  };

  const lexend={
    fontFamily:'Lexend Giga, sans-serif',
  };
  const Outfit={
    fontFamily:'Outfit, sans-serif',
  };
  return (
    <div className="flex justify-center items-center bg-black py-0">
    <div className="flex flex-row justify-between items-start w-8/12 max-w-6xl">
      {/* Left side text section */}
      <div className="w-3/4 p-4">
        <h1 className="text-4xl font-bold mb-4"style={lexend}>ABOUT US</h1>
        <p className="text-2xl font-extralight"style={Outfit}>{selectedText}</p>
      </div>
  
      {/* Right side buttons section */}
      <div className="w-4/12 p-4 flex flex-col items-start justify-around mt-16">
        <button
          className="mb-8 px-9 py-2 bg-red-600 text-center text-white rounded text-2xl  hover:bg-red-800"
          onClick={() => setSelectedText(textContent.button1)}
          style={Outfit}
        >
          About TED
        </button>
        <button
          className="mb-8 px-8 py-2 bg-red-600 text-center text-white rounded text-2xl  hover:bg-red-800"
          onClick={() => setSelectedText(textContent.button2)}
          style={Outfit}
        >
          About TEDx
        </button>
        <button
          className="px-4 py-0 bg-red-600 text-white  text-center rounded text-2xl  hover:bg-red-800"
          onClick={() => setSelectedText(textContent.button3)}
          style={Outfit}
        >
          About TEDxSIT
        </button>
      </div>
    </div>
  </div>
  );
};  

export default Us;

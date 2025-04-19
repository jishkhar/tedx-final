import React from 'react';
import Card from '../Home/Cards'; // Import the Card component
import c1 from "../../assets/home/c1.webp";
import c2 from "../../assets/home/c2.webp";
import c3 from "../../assets/home/c22.jpg";
import c4 from "../../assets/home/c4.jpg";

function Reasons() {
  const lexend = {
    fontFamily: 'Lexend Giga, sans-serif',
  };

  return (
    <>
    <div className="bg-black py-0">
      <h1
        className="text-center text-2xl md:text-4xl font-bold mt-4 md:mt-8 mb-4 md:mb-8 bg-black"
        style={lexend}
      >
        Why You Can't Miss This?
      </h1>
      <div className="flex justify-center items-center px-4 md:px-8 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8">
          <Card
            frontContent="A Day of Inspiring Voices and Unforgettable Stories"
            backContent="Step into a world where every story opens a window into extraordinary lives. Meet trailblazers from diverse walks of life, each one leaving a unique mark on the world. Let their journeys ignite your imagination and inspire you to carve your own path."
            bgImage={c1}
          />
          <Card
            frontContent="Connect, Collaborate, Create"
            backContent="Networking Like Never Before:
More than just mingling! Engage in meaningful dialogue, exchange bold ideas, and forge lasting connections with a community of diverse thinkers and doers. You never know what collaboration could spark the next big idea."
            bgImage={c2}
          />
          <Card
            frontContent="Performances That Dazzle"
            backContent="At TEDx, the 'E' for Entertainment takes center stage! Enjoy a day bursting with creativity—from soul-stirring art to electrifying music and side-splitting stand-up comedy. Every performance is crafted to elevate your spirit."
            bgImage={c3}
          />
          <Card
            frontContent="An Experience You'll Treasure"
            backContent="Heroes Without Capes, Stories Without Limits:
This isn't just another event. It's a day of stories that move you, inspire you, and challenge your way of thinking. Real-life heroes will share their powers—no capes needed. Prepare for a journey that touches your heart, not just your mind."
            bgImage={c4}
          />
        </div>
      </div>
      </div>
    </>
  );
}

export default Reasons;

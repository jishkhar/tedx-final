import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';

const Card = ({ test, name, position, linkedin }) => {
  return (
    <>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="imgg bg-[rgb(18,18,18)] w-[250px] rounded-md border hover:shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
          <img
            src={test}
            alt="Laptop"
            className="h-[250px] w-full rounded-t-md object-cover"
          />
          <div className="p-4 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p className="text-[1.28rem] mt-3 text-gray-600 justify-center">
              {position}
            </p>
          </div>
        </div>
      </a>
    </>
  );
};

export default Card;
import React from "react";
import { NavLink } from "react-router-dom";
import sp1 from '../../assets/sponsors/nssilk.jpeg'
import sp2 from '../../assets/sponsors/sirimart.jpeg'
import sp3 from '../../assets/sponsors/vegguru.jpeg'

const Partners = () => {
  return (
    <>
      <div className="pt-20 pr-24">
        <div className="flex items-start space-x-4">
          <div className="relative flex-none">
            <img
              src="https://cdn.prod.website-files.com/640f47772aaf7f35956f7cf6/640f47772aaf7fa5616f7d4d_Group%2026.svg"
              className="w-92 h-auto ml-80"
            />
            <div className="absolute top-0 left-0 p-4">
              <p className="text-white text-7xl font-bold p-4 ml-40">Our</p>
              <p className="text-white text-7xl font-bold p-4 ml-40">Sponsors</p>
            </div>
          </div>

          <div className="flex-1 ml-4 mt-12 px-20 py-10">
            <p className="mb-10 text-sm sm:text-base md:text-lg lg:text-xl sm:leading-relaxed md:leading-relaxed px-4 sm:px-6 lg:px-8 text-justify">
              Join us on our journey to proliferate meaningful discussions and associate with a global name consistent with collaboration, innovation, and enduring optimism. Our event is a great opportunity to increase your reach among a brilliant audience and an equally amazing speaker line-up.
            </p>

            <NavLink
              to="/contact"
              className="mt-16 ml-8 px-16 py-3 border-2 border-red-600 text-red-600 text-lg rounded-lg hover:bg-red-600 hover:text-white transition cursor-pointer"
            >
              Sponsor us
            </NavLink>

          </div>

        </div>

        <div className="flex justify-center items-center py-32 px-52 space-x-10">
          <img src={sp1} className="w-1/2 h-64" />
          <img src={sp2} className="w-1/2 h-64" />
          <img src={sp3} className="w-1/2 h-64" />
        </div>

      </div>
    </>
  );
};

export default Partners;
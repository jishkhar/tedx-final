import React from 'react';

const Card = ({ name, position, test, content }) => {
    return (
        <div className="h-fit w-[400px] rounded-3xl py-10 px-5 flex flex-col">
            <div className="flex justify-center">
                <img
                    src={test}
                    className="h-[250px] w-[250px] rounded-full object-cover"
                />
            </div>
            <div className="pt-4 flex flex-col justify-center items-center">
                <h1 className="text-3xl text-red-600 font-semibold text-center">{name}</h1>
                <p className="text-[1.6rem] mt-3 text-gray-600">{position}</p>
                <p className="text-[1.2rem] mt-3 text-gray-600">{content}</p>
            </div>
        </div>
    );
};

export default Card;

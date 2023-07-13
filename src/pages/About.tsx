import React from "react";
import bible from "../assets/bible.jpg";

const About = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center h-[800px] bg-cover bg-center bg-no-repeat bg-image"
        style={{ backgroundImage: `url(${bible})` }}
      >
        <div className="bg-gray-800 bg-opacity-25 mt-[-200px] text-center max-w-[80%] rounded-xl">
          <h1 className="font-normal text-md lg:text-xl md:text-xl text-white max-w-2xl lg:leading-[1.5]">
          Welcome to Church Note! This application was designed to assist you in your studies of the word of God. If you haven't already, hit the sign up button and create an account to store all of your notes and thoughts. Thank you for checking out Church Note God bless!
          </h1>
        </div>
      </div>
    </>
  );
};

export default About;

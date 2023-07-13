import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import Background from "../assets/Background.jpg"
import DropDownLogin from "../components/DropDownLogin";


interface HomeProps {
  dropDownVisible: boolean;
  setDropDownVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: FC<HomeProps> = ({ dropDownVisible, setDropDownVisible }) => {

  const [showlogin, setShowLogin] = useState<boolean>(false);

  const handleLoginModal = () => {
    setShowLogin(!showlogin)
  }

  return (
    <>
      <div
        className="flex flex-col items-center justify-center h-[800px] lg:h-[900px] bg-cover bg-center bg-no-repeat bg-image"
        style={{ backgroundImage: `url(${Background})` }}
      >
        {dropDownVisible ? (
          <div className="text-center">
            <DropDownLogin dropDownVisible={dropDownVisible} setDropDownVisible={setDropDownVisible} />
          </div>
        ) : (
          <>
            <div className="text-center">
              <h1 className="font-normal text-2xl lg:text-5xl md:text-4xl font-extrabold text-white max-w-2xl lg:leading-[1.5]">
                For from Him and through Him and to Him are all things.<br></br> To him be the glory forever. <br></br>Amen.
              </h1>
            </div>
            <div className="mt-4">
              <Link to="/signup">
                <button className="px-4 py-2 bg-gray-800 text-white font-bold rounded hover:bg-gray-700">
                  Get Started
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
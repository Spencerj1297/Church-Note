import React, { FC, useState, useContext } from "react";
import { Link } from "react-router-dom";
import LOGO from "../assets/LOGO.png";
import DropdownLogin from "./DropDownLogin";


interface NavBarProps {
  dropDownVisible: boolean;
  setDropDownVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: FC<NavBarProps> = ({ dropDownVisible, setDropDownVisible }) => {

  const [openMenu, setOpenMenu] = useState<boolean>(false);
 
 
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleDropDown = () => {
    setDropDownVisible(!dropDownVisible)
  } 

  return (
    <>
      <div className="h-16 bg-gray-800 flex items-center justify-between px-4">
        <div className="flex items-center">
        <Link to="/">
          <img src={LOGO} alt="Logo" className="h-14 mr-4" />
        </Link>
          <h1 className="hidden sm:block text-white text-lg font-semibold">
            Church Note
          </h1>
        </div>
        <nav className="flex items-center justify-center">
          <div className="hidden md:block">
            <Link to="/" className="text-white text-lg font-semibold mx-4">
              Home
            </Link>
            <Link to="/about" className="text-white text-lg font-semibold mx-4">
              About
            </Link>
            <Link
              to="/signup"
              className="text-white text-lg font-semibold mx-4"
            >
              Sign up
            </Link>
            <Link to="/" onClick={handleDropDown}  className="text-white text-lg font-semibold mx-4">
              Sign in
            </Link>
            
          </div>
          <div className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className={`w-8 h-8 transform transition-transform ${
                openMenu ? "-rotate-90" : ""
              }`}
              onClick={handleMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div>
        </nav>
      </div>
      {openMenu && (
        <div className="md:hidden flex flex-col items-center h-full w-full bg-gray-900">
          <Link onClick={handleMenu} to="/" className="text-white text-lg font-semibold m-8 ">
            Home
          </Link>
          <Link onClick={handleMenu} to="/about" className="text-white text-lg font-semibold mb-8 ">
            About
          </Link>
          <Link onClick={handleMenu} to="/signup" className="text-white text-lg font-semibold mb-8 ">
            Sign up
          </Link>
          <Link onClick={handleDropDown} to="/" className="text-white text-lg font-semibold mb-8 ">
            Sign in
          </Link>
        </div>
      )}
    </>
  );
};

export default NavBar;

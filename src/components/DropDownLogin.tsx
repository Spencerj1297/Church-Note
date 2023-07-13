import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Cross from "../assets/Cross.jpg";

interface DropDownLoginProps {
  dropDownVisible: boolean;
  setDropDownVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDownLogin: React.FC<DropDownLoginProps> = ({
  dropDownVisible,
  setDropDownVisible,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeDropDown = () => {
    setDropDownVisible(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropDown();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50 "></div>
      <div
        ref={dropdownRef}
        className="relative z-10 bg-white md:h-[700px] md:w-[850px] h-[400px] w-[450px] rounded-2xl text-center md:mt-16"
      >
        <div className="flex h-full ">
          <div
            className="w-1/2 h-[100%] bg-cover bg-center bg-no-repeat bg-image rounded-tl-2xl rounded-bl-2xl"
            style={{ backgroundImage: `url(${Cross})` }}
          ></div>

          <div className="w-1/2 h-[400px] mr-2">
            <span className="flex items-center justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                className="w-8 h-8 m-2 cursor-pointer"
                onClick={closeDropDown}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
            <h2 className="text-left text-4xl ml-4 mt-4 mb-4 font-bold ">Sign in</h2>
            <form>
              <input
                placeholder="Email"
                type="text"
                className="mt-8 pl-2 w-[90%] h-[35px] border-b border-gray-500"
              />
              <input
                placeholder="Password"
                type="text"
                className="mt-8 pl-2 w-[90%] h-[35px] border-b border-gray-500"
              />
            </form>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-gray-800 text-white font-bold rounded hover:bg-gray-700 mt-16 flex items-center justify-center w-[90%]"
              >
                <span className="mr-2 text-lg">Continue</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownLogin;

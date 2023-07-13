import React, { FC, useState } from "react";
import MockNotes from "../MockNotes";

const ProtectedHome: FC = () => {
  const [query, setQuery] = useState<string>('')

  // const filteredData = () => {
  
  // }
  return (
    <>
      <div className="flex flex-col space-x-1 space-y-3 justify-center mb-5 mx-auto bg-white p-5  rounded-lg shadow-xl md:w-[50%] w-[75%] mt-[50px]">
        <div className="flex">
          <input
            type="text"
            placeholder="Search the Bible"
            // onChange={e => setQuery=(e.target.value)}
            className="px-3 text-lg md:text-xl bg-gray-200 border border-gray-300 shadow-inner rounded-l-xl w-full js-bound"
          />
        </div>
        <div className="flex justify-center items-center">
          <button className=" md:w-[50%] w-[100%] px-4 py-2 bg-gray-800 text-white font-bold rounded hover:bg-gray-700">
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-col space-x-1 space-y-3 justify-left mb-5 mx-auto bg-white p-5 rounded-lg shadow-xl md:w-[50%] h-[400px] md:h-[600px] w-[75%] mt-[50px] overflow-y-auto">
        {MockNotes.map((note) => (
          <div key={note.id} className="border border-gray-700 cursor-pointer p-4">
            <p className="underline">{note.book} {note.chapter}:{note.verse}</p>
            {note.note}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProtectedHome;

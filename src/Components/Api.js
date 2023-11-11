import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { what } from "../images/index";
import { BiMicrophone } from 'react-icons/bi';
import { BsSearch, BsFillGridFill } from 'react-icons/bs';
import Footer from "./Footer";

const SearchPage = () => {
  const navigate = useNavigate(); 
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const clickButton = () => {
    navigate(`/results?search=${search}`); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-2 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          <BsFillGridFill className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <img
            loading='lazy'
            className={`cursor-pointer h-10 rounded-full transition duration-150 transform hover:scale-110 `}
            src={what}
            alt='Profilepicture'
          />
        </div>
      </header>

      <form className="flex flex-col items-center mt-8 sm:mt-16 flex-grow w-4/5 sm:w-3/5 lg:w-2/5">
        <img
          src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
          width={300}
          height={100}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <BsSearch className="h-5 mr-3 text-gray-500" />
          <input
            type="text"
            name="street-address"
            className="focus:outline-none flex-grow"
            onChange={handleSearch}
            placeholder="Search for anything"
            value={search}
          />
          <BiMicrophone className="h-5" />
        </div>

        <div className="flex flex-col w-full sm:w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button
            className="btn bg-gray-300 text-black text-center p-2 px-4 rounded-md"
            onClick={clickButton}
          >
            Search
          </button>
          <button className="btn">I&apos;m Feeling Lucky</button>
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default SearchPage;

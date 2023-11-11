import React from 'react';
import { what } from '../images/index';
import { BiMicrophone } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header = ( { handleSearch, search, }) => {
  return (
    <div>
      <header className="sticky top-0 bg-white text-black">
        <div className="flex w-full p-6 items-center">
          <Link to="/">
            <img
              src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
              width={120}
              height={40}
              className="cursor-pointer"
            />
          </Link>
          <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
            <input
              placeholder="Search Google"
              className="flex-grow w-full focus:outline-none"
              value={search}
            />
            <BsSearch className="h-6 text-blue-500  sm:inline-flex cursor-pointer text-black" onChange={  handleSearch} />
            <BiMicrophone className="h-6 mr-3 sm:inline-flex text-black-500 border-l-2 pl-4 border-gray-300" />
          </form>
          <img
            loading="lazy"
            className={`cursor-pointer h-10 rounded-full transition duration-150 transform hover:scale-110 `}
            src={what}
            alt="Profilepicture"
          />
        </div>
        <div className="flex w-full text-black-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
         
        {/* <Link to="/images"
            className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointer `}
          >
            
            <p className=" sm:inline-flex">Images</p>
          </Link>
          */}
          
        
        </div>
      </header>
    </div>
  );
};

export default Header;

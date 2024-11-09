import React from "react";
import { CiDark, CiSearch } from "react-icons/ci";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";

const Header = () => {
  return (
    <div className="cc py-5 fixed w-screen bg-[var(--bg)] z-50 top-0">
      <div className="container flex md:flex-row flex-col md:items-center gap-5 md:gap-0 justify-between">
        <h1 className="flex items-center gap-2 font-semibold text-center md:w-[30%] w-full">
          <TiWeatherPartlySunny className="md:text-5xl text-[2rem]" />
          <p className="text-3xl">Weatherio</p>
        </h1>
        <div className="container flex items-center justify-between md:w-[65%] w-full">
        <form className="flex items-center justify-start bg-[var(--elem)] p-2 gap-2 w-[65%] md:w-[50%] rounded-3xl">
            <CiSearch className="text-xl font-bold ml-1" />
          <input
            type="text"
            placeholder="Search city...."
            className="bg-transparent outline-none w-full"
          />
        </form>
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-start bg-[var(--btn)] md:py-2 md:px-4 px-3 py-2 gap-2 rounded-3xl cursor-pointer">
            <FaLocationCrosshairs className="text-black" />
            <p className="text-black flex gap-2"><span className="hidden md:block">Current</span> Location</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

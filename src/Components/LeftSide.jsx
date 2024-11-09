import React from "react";
import WeatherBox from "../Common/WeatherBox";
import Forcast from "../Common/Forcast";

const LeftSide = () => {
  return (
    <div className="md:w-[23%] w-full">
      <WeatherBox />
      <p className="capitalize text-lg my-3">5 days forcast</p>
      <Forcast />
    </div>
  );
};

export default LeftSide;

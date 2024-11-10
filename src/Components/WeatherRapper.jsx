import React, { useContext } from "react";
import Header from "./Header";
import LeftSide from "./LeftSide";
import RightSide from './RightSide';
import { weatherContext } from "../Context/WeatherData";

const WeatherRapper = () => {
  const {} = useContext(weatherContext);
  
  return (
    <div className="w-screen">
      <Header />
      <div className="cc md:mt-[7rem] mt-[8.5rem]">
        <div className="container flex items-center md:flex-row flex-col justify-between gap-7">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default WeatherRapper;

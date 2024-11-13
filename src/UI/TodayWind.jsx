import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const TodayWind = ({ direction, time = "9 AM", wind = "11 km/h" }) => {
  return (
    <div className="bg-[var(--elem)] py-2 px-9 rounded-lg flex flex-col gap-6 justify-center text-center items-center">
      <p className="w-max">{time}</p>
      <FaLocationArrow
        className="text-3xl text-blue-500"
        style={{ transform: `rotate(${direction}deg)` }}
      />
      <p className="w-max"> {`${wind}km/h`}</p>
    </div>
  );
};

export default TodayWind;

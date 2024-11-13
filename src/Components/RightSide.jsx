import React, { useContext } from "react";
import Highlight from "./../Common/Highlight";
import Todays from "../UI/Todays";
import TodayWind from "../UI/TodayWind";
import { weatherContext } from "../Context/WeatherData";

const RightSide = () => {
  const { dayHourForcast } = useContext(weatherContext);
  const hour = (time) => {
    const date = new Date(time * 1000);
    let hours = date.getHours();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours} ${ampm}`;
  };
  return (
    <div className="md:w-[73%] w-full md:h-[80vh] overflow-y-auto rightside overflow-x-hidden">
      <Highlight />
      <p className="text-lg my-3">Todays at</p>
      {/* todays at all the feature */}
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center gap-2 scaley overflow-y-auto">
          {dayHourForcast &&
            dayHourForcast.list.slice(0, 8).map((cur, id) => {
              return (
                <Todays
                  key={id}
                  time={hour(cur.dt)}
                  image={cur.weather[0].icon}
                  temp={Math.trunc(cur.main.temp - 273.13)}
                />
              );
            })}
        </div>
        {/*  */}
        <div className="flex justify-between items-center gap-2 mb-10 scaley overflow-y-auto">
          {dayHourForcast &&
            dayHourForcast.list
              .slice(0, 8)
              .map((cur, id) => (
                <TodayWind
                 direction={cur.wind.deg}
                 key={id} 
                time={hour(cur.dt)}
                wind={Math.trunc(cur.wind.speed)}
                 />
              ))}
        </div>
      </div>
    </div>
  );
};

export default RightSide;

import React, { useContext } from "react";
import { weatherContext } from "../Context/WeatherData";

const Forecast = () => {
  const { dayHourForcast } = useContext(weatherContext);

  return (
    <div className="bg-[var(--elem)] rounded-2xl p-5 shadows">
      {dayHourForcast &&
        dayHourForcast.list.map((cur, index) => {
          // Display every 8th data point for daily forecast
          if (index % 8 === 0) {
            return (
              <div key={cur.dt} className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-1 md:text-xl text-2xl">
                  <img
                    src={`http://openweathermap.org/img/wn/${cur.weather[0].icon}@4x.png`}
                    alt="forecast weather icon"
                    className="w-14 md:w-11"
                  />
                  <p>{Math.trunc(cur.main.temp - 273.15)}°</p>
                </div>
                <p className="capitalize md:text-sm text-xl text-start">
                  {new Date(cur.dt * 1000).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                  })}
                </p>
                <p className="capitalize md:text-sm text-xl text-start w-[30%]">
                  {new Date(cur.dt * 1000).toLocaleString("en-US", {
                    weekday: "long",
                  })}
                </p>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
};

export default Forecast;

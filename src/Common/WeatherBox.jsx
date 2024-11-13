import React, { useContext, useEffect, useState } from "react";
import { MdOutlineDateRange, MdOutlineLocationOn } from "react-icons/md";
import { weatherContext } from "../Context/WeatherData";

const WeatherBox = () => {
  const { currentWeather, currentWeatherLoading } = useContext(weatherContext);
  const [currentDate, setCurrentDate] = useState();

  // ! today date
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "short",
    });
  };

  useEffect(() => {
    if (currentWeather && currentWeather.dt) {
      const today = new Date(currentWeather.dt * 1000); // Convert Unix timestamp to Date object
      setCurrentDate(formatDate(today));
    }
  }, [currentWeather]); // Dependency on `currentWeather`

  return (
    <section className="bg-[var(--elem)] rounded-2xl p-5 shadows">
      <h2 className="text-lg">Now</h2>
      {/* temparature and image */}
      <div className="flex items-center gap-6">
        <p>
          <span className="text-7xl">{currentWeather && Math.trunc(currentWeather.main.temp - 273.13)}</span>
          <span className="text-7xl">°</span>
          <sup className="text-4xl mt-4">C</sup>
        </p>
        { <img
          src={`http://openweathermap.org/img/wn/${currentWeather ? currentWeather.weather[0].icon:"02n"}@4x.png`}
          alt="waether based image from open waether"
          className="w-[7rem] img"
        /> }
      </div>
      {/* temparature and image */}
      <p className="capitalize text-base text-[#f2e0fe]">
        {currentWeather && currentWeather.weather[0].description}
      </p>
      <div className="w-full my-2 bg-[#756e7a] h-[.1rem] rounded-lg"></div>
      <div className="flex flex-col gap-2">
        <div className="flex capitalize items-center gap-2">
          <MdOutlineDateRange className="text-xl" />
          {currentDate}
        </div>
        <div className="flex capitalize items-center gap-2">
          <MdOutlineLocationOn className="text-xl" />
          {currentWeather && currentWeather.name},
          {currentWeather && currentWeather.sys.country}
        </div>
      </div>
    </section>
  );
};

export default WeatherBox;

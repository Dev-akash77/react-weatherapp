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
  const weatherIcon=()=>{
    if (currentWeather.weather[0].icon=="01n") {
      return `https://cdn-icons-png.flaticon.com/128/8179/8179110.png`
    }
    if (currentWeather.weather[0].icon=="01d") {
      return `https://cdn-icons-png.flaticon.com/128/8030/8030072.png`
    }
    if (currentWeather.weather[0].icon=="02n") {
      return `https://cdn-icons-png.flaticon.com/128/2286/2286940.png`
    }
    if (currentWeather.weather[0].icon=="02d") {
      return `https://cdn-icons-png.flaticon.com/128/4064/4064276.png`
    }
    if (currentWeather.weather[0].icon=="03n") {
      return `https://cdn-icons-png.flaticon.com/128/9755/9755232.png`
    }
    if (currentWeather.weather[0].icon=="03d") {
      return `https://cdn-icons-png.flaticon.com/128/9755/9755232.png`
    }
    if (currentWeather.weather[0].icon=="04n") {
      return `https://cdn-icons-png.flaticon.com/128/13804/13804450.png`
    }
    if (currentWeather.weather[0].icon=="04d") {
      return `https://cdn-icons-png.flaticon.com/128/13804/13804450.png`
    }
    if (currentWeather.weather[0].icon=="09n") {
      return `https://cdn-icons-png.flaticon.com/128/3351/3351962.png`
    }
    if (currentWeather.weather[0].icon=="09d") {
      return `https://cdn-icons-png.flaticon.com/128/3351/3351962.png`
    }
    if (currentWeather.weather[0].icon=="10n") {
      return `https://cdn-icons-png.flaticon.com/128/4834/4834499.png`
    }
    if (currentWeather.weather[0].icon=="10d") {
      return `https://cdn-icons-png.flaticon.com/128/3075/3075858.png`
    }
    if (currentWeather.weather[0].icon=="11n") {
      return `https://cdn-icons-png.flaticon.com/128/6635/6635854.png`
    }
    if (currentWeather.weather[0].icon=="11d") {
      return `https://cdn-icons-png.flaticon.com/128/6635/6635854.png`
    }
    if (currentWeather.weather[0].icon=="13n") {
      return `https://cdn-icons-png.flaticon.com/128/13370/13370664.png`
    }
    if (currentWeather.weather[0].icon=="13d") {
      return `https://cdn-icons-png.flaticon.com/128/13370/13370664.png`
    }
    if (currentWeather.weather[0].icon=="50n") {
      return `https://cdn-icons-png.flaticon.com/128/16227/16227754.png`
    }
    if (currentWeather.weather[0].icon=="50d") {
      return `https://cdn-icons-png.flaticon.com/128/16227/16227754.png`
    }
   }
 
  useEffect(() => {
    if (currentWeather && currentWeather.dt) {
      const today = new Date(currentWeather.dt * 1000); // Convert Unix timestamp to Date object
      setCurrentDate(formatDate(today));
    }
  }, [currentWeather]); // Dependency on `currentWeather`
  return (
    <section className="bg-[var(--elem)] rounded-2xl p-5">
      <h2 className="text-lg">Now</h2>
      {/* temparature and image */}
      <div className="flex items-center gap-6">
        <p>
          <span className="text-7xl">{currentWeather && Math.trunc(currentWeather.main.temp - 273.13)}</span>
          <span className="text-7xl">°</span>
          <sup className="text-4xl mt-4">C</sup>
        </p>
        { <img
          // src={`http://openweathermap.org/img/wn/${currentWeather ? currentWeather.weather[0].icon:"02n"}@4x.png`}
          src={weatherIcon()}
          alt="waether based image from open waether"
          className="w-[5rem] img"
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

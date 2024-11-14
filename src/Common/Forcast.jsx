import React, { useContext } from "react";
import { weatherContext } from "../Context/WeatherData";

const Forecast = () => {
  const { dayHourForcast } = useContext(weatherContext);

  return (
    <div className="bg-[var(--elem)] rounded-2xl p-5 ">
      {dayHourForcast &&
        dayHourForcast.list.map((cur, index) => {
          // ? weather icon
          const weatherIcon=()=>{
            const currentWeather=cur;
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
          // Display every 8th data point for daily forecast
          if (index % 8 === 0) {
            return (
              <div key={cur.dt} className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-1 md:text-xl text-2xl">
                  <img
                    src={weatherIcon()}
                    alt="forecast weather icon"
                    className="w-12 md:w-11"
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

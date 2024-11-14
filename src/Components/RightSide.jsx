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
              return (
                <Todays
                  key={id}
                  time={hour(cur.dt)}
                  image={weatherIcon()}
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

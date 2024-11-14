import React, { useContext } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { LuMoon } from "react-icons/lu";
import { MdAir, MdOutlineWaterDrop } from "react-icons/md";
import HighlightCard from "../UI/HighlightCard";
import { PiWaves } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { TbTemperatureMinus } from "react-icons/tb";
import { weatherContext } from "../Context/WeatherData";
const Highlight = () => {
  const { currentWeather,airPollution } = useContext(weatherContext);
  const { pm2_5, no2, so2, o3 } = airPollution?.list[0]?.components || {};
  const getAirQualityDetails = (no2) => {
    if (no2 <= 50) return { label: "Good", color: "bg-green-300" };
    if (no2 <= 100) return { label: "Moderate", color: "bg-yellow-300" };
    if (no2 <= 200) return { label: "Unhealthy for Sensitive Groups", color: "bg-orange-300" };
    if (no2 <= 300) return { label: "Unhealthy", color: "bg-red-400" };
    if (no2 <= 400) return { label: "Very Unhealthy", color: "bg-purple-600" };
    // return { label: "Hazardous", color: "bg-maroon-700" };
  };
  
  // ! format time for sunset and sunrise
  const formatTimes = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${formattedMinutes} ${ampm}`;
  };
  return (
    <div className="bg-[var(--elem)] rounded-2xl p-5">
      <p className="capitalize text-lg my-3">Todays Highlights</p>
      <div className="flex md:flex-row flex-col items-center justify-between mt-5 gap-5">
        {/*  */}
        <div className="bg-[var(--elmcont)] rounded-2xl p-3 text-sm w-full md:w-auto">
          <div className="flex items-center justify-between">
            <p className="capitalize text-gray-300 font-semibold md:text-sm text-base">
              Air quality index
            </p>
            <div
              className={`${getAirQualityDetails(no2) && getAirQualityDetails(no2).color} rounded-xl py-[.1rem] px-2 text-black cc`}
            >
              {getAirQualityDetails(no2) && getAirQualityDetails(no2).label}
            </div>
          </div>
          <div className="flex items-center justify-between mt-5">
            <MdAir className="md:text-[2.9rem] text-[3.5rem]" />
            <div className="grid place-content-center md:grid-cols-4 grid-cols-2 text-center gap-6 md:w-auto w-[80%]">
              {[
               { name: "PM25", val: isNaN(+pm2_5) ? "--" : Math.round(+(pm2_5)) },
               { name: "SO2", val: isNaN(+so2) ? "--" : Math.round(+(so2)) },
               { name: "NO2", val: isNaN(+no2) ? "--" : Math.round(+(no2)) },
               { name: "O3", val: isNaN(+o3) ? "--" : Math.round(+(o3)) },
              ].map((cur, id) => {
                return (
                  <div
                    className="flex flex-col items-center justify-center gap-1"
                    key={id}
                  >
                    <p className="uppercase text-[.8rem] text-gray-300 font-semibold">
                      {cur.name}
                    </p>
                    <p className="text-4xl">{cur.val}</p>
                  </div>
                );
              })}
            </div>
            {/*  */}
          </div>
        </div>
        {/*  */}
        <div className="bg-[var(--elmcont)] rounded-2xl py-3 px-5 md:w-auto w-full">
          <p className="capitalize md:text-sm text-base text-gray-300 font-semibold">
            Sunrise & sunset
          </p>
          <div className="flex items-center justify-between mt-5 gap-10">
            {/* sunrise */}
            <div className="flex md:items-center justify-between gap-5 md:flex-row flex-col">
              <IoSunnyOutline className="text-5xl" />
              <div className="flex flex-col justify-center">
                <p className="text-[.8rem] text-gray-300 font-semibold">
                  Sunrise
                </p>
                <p className="text-4xl">
                  {currentWeather && formatTimes(currentWeather.sys.sunrise)}
                </p>
              </div>
            </div>
            {/* sunrise */}

            {/* sunset */}
            <div className="flex md:tems-center justify-center gap-3 md:flex-row flex-col">
              <LuMoon className="text-[2.3rem]" />
              <div className="flex flex-col justify-center">
                <p className="text-[.8rem] text-gray-300 font-semibold">
                  Sunset
                </p>
                <p className="text-4xl">
                {currentWeather && formatTimes(currentWeather.sys.sunset)}
                </p>
              </div>
            </div>
            {/* sunset */}
          </div>
        </div>
        {/*  */}
      </div>

      {/* ****************************************** */}
      <div className="flex items-center justify-between gap-2 mt-5 md:flex-row flex-col mb-2 md:mb-0">
        <HighlightCard
          icon={<MdOutlineWaterDrop />}
          name="Humidity"
          value={currentWeather && currentWeather.main.humidity}
        />
        <HighlightCard
          icon={<PiWaves />}
          name="Pressure"
          value={currentWeather && currentWeather.main.pressure}
        />
        <HighlightCard
          icon={<FaRegEye />}
          name="visibility"
          value={currentWeather && currentWeather.visibility / 1000}
        />
        <HighlightCard
          icon={<TbTemperatureMinus />}
          name="Feels Like"
          value={
            currentWeather &&
            Math.trunc(currentWeather.main.feels_like - 273.13)
          }
        />
      </div>
    </div>
  );
};

export default Highlight;

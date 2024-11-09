import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { LuMoon } from "react-icons/lu";
import { MdAir, MdOutlineWaterDrop } from "react-icons/md";
import HighlightCard from "../UI/HighlightCard";
import { PiWaves } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { TbTemperatureMinus } from "react-icons/tb";
const Highlight = () => {
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
              className={`bg-green-300 rounded-xl py-[.1rem] px-2 text-black cc`}
            >
              Good
            </div>
          </div>
          <div className="flex items-center justify-between mt-5">
            <MdAir className="md:text-[2.9rem] text-[3.5rem]" />
            <div className="grid place-content-center md:grid-cols-4 grid-cols-2 text-center gap-6 md:w-auto w-[80%]">
              {[
                { name: "PM25", val: 3.9 },
                { name: "so2", val: 7.75 },
                { name: "No2", val: 66.5 },
                { name: "o3", val: 37.9 },
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
                <p className="text-4xl">6:30 AM</p>
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
                <p className="text-4xl">5:39 PM</p>
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
          value="82"
        />
        <HighlightCard icon={<PiWaves />} name="Pressure" value="1011" />
        <HighlightCard icon={<FaRegEye />} name="visibility" value="0.42" />
        <HighlightCard
          icon={<TbTemperatureMinus />}
          name="Feels Like"
          value="32"
        />
      </div>
    </div>
  );
};

export default Highlight;

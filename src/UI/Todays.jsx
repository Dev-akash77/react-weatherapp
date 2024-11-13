import React from "react";

const Todays = ({ time, image, temp }) => {
  return (
    <div className="bg-[var(--elem)] py-2 md:px-7 px-8 rounded-lg flex flex-col gap-2 justify-center text-center items-center md:text-base text-xl">
      <p className="w-max">{time || "5 AM"}</p>
      <img
        src={image?`http://openweathermap.org/img/wn/${image}@4x.png`:"http://openweathermap.org/img/wn/02d@4x.png"}
        alt="forecast data weather image"
        className="md:w-24 today_img"
      />
      <span>{`${temp}°` || "7°"}</span>
    </div>
  );
};

export default Todays;

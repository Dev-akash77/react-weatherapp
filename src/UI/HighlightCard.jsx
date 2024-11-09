import React from "react";

const HighlightCard = ({ icon, name, value }) => {
  return (
    <div className="bg-[var(--elmcont)] py-5 px-4 rounded-lg flex flex-col md:gap-3 gap-5 md:w-auto w-full">
      <p className="text-[1rem] text-gray-300 font-semibold">{name}</p>
      <div className="flex items-center justify-between gap-16">
        <p className="text-4xl ">{icon}</p>
        <p className="text-4xl font-medium">
          {value}
          {name == "Pressure" && (
            <span className="text-2xl font-normal">hPa</span>
          )}
          {name == "visibility" && (
            <span className="text-2xl font-normal">km</span>
          )}
          {name == "Feels Like" && (
            <span className="text-2xl font-normal"><sup>°C</sup></span>
          )}
          {name == "Humidity" && (
            <span className="text-2xl font-normal">%</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default HighlightCard;

import React from "react";

const Forcast = () => {
  return (
    <div className="bg-[var(--elem)] rounded-2xl p-5 shadows">
      {[1, 2, 3, 4, 5].map((cur) => {
        return (
          <div key={cur} className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-1 md:text-xl text-2xl">
              <img
                src="http://openweathermap.org/img/wn/03d@4x.png"
                alt="forcast data waether image"
                className="w-14 md:w-11"
              />
              7°
            </div>
            <p className="capitalize md:text-sm text-xl">2 Mar</p>
            <p className="capitalize md:text-sm text-xl">Thurst day</p>
          </div>
        );
      })}
    </div>
  );
};

export default Forcast;

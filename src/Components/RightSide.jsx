import React from "react";
import Highlight from "./../Common/Highlight";
import Todays from "../UI/Todays";
import TodayWind from "../UI/TodayWind";

const RightSide = () => {
  return (
    <div className="md:w-[73%] w-full md:h-[80vh] overflow-y-auto rightside overflow-x-hidden">
      <Highlight />
      <p className="text-lg my-3">Todays at</p>
      {/* todays at all the feature */}
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center gap-2 scaley overflow-y-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((cur) => {
            return <Todays key={cur} />;
          })}
        </div>
        {/*  */}
        <div className="flex justify-between items-center gap-2 mb-10 scaley overflow-y-auto">
          {[40, 35, 90, 78, 26, 69, 184, 30].map((cur) => (
            <TodayWind direction={cur} key={cur} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSide;

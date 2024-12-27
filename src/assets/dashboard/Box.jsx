import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useDarkMode from "../../Api/useDarkMode";
const Box = ({ icon, numberText, subTitle, Value }) => {
  const { mode } = useDarkMode();

  return (
    <div className=" col-span-12  md:col-span-6  lg:col-span-3 bg-gray-300 dark:bg-gray-700 dark:text-gray-200 text-gray-800 flex justify-between items-center px-4   py-2  rounded-sm  border-2 border-gray-500   h-30 md:h-50 ">
      <div className="flex flex-col gap-1 ">
        {icon}
        <h1 className="">{numberText}</h1>
        <p className="capitalize text-sm">{subTitle}</p>
      </div>
      <div className="flex flex-col w-3/5 ">
        <div className=" flex flex-col gap-1 items-end justify-center  ">
          <div className="w-3/5 sm:w-20 md:w-3/5 lg:w-full xl:w-3/5">
            <CircularProgressbarWithChildren
              value={Value}
              text={`${Value}%`}
              styles={buildStyles({
                textColor: mode ? "#e5e7eb" : "#1f2937",
                pathColor: mode ? "#e5e7eb" : "#1f2937",
                trailColor: mode ? "#1f2937" : "#9ca3af",
                transition: "stroke-dashoffset 0.5s ease 1s",
              })}
            />
          </div>
          <div className="flex justify-center items-center text-sm me-7 lg:me-3 xl:me-7">{`${Value}%`}</div>
        </div>
      </div>
    </div>
  );
};

export default Box;

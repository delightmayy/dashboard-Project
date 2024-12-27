import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import React from "react";


const DashboardTitle = ({Title,subTitle}) => {
  return (
    <div className="  text-zinc-800 dark:text-gray-200 capitalize px-2 pt-2 flex flex-col  sm:flex-row justify-between items-center">
      <div className=" text-center sm:text-start ">
        <h1 className="text-xl font-semibold ">{Title}</h1>
        <h3 className="text-sm mb-3 ">{subTitle}</h3>
      </div>

      <button className="flex gap-2 justify-between items-centerdark:bg-gray-700 hover:bg-gray-600 dark:bg-gray-600 bg-gray-400 dark:hover:bg-gray-400 capitalize text-sm  border border-gray-700 hover:boder-2 hover:border-gray-600 hover:text-gray-200 focus:border-red-700  dark:border-gray-400 rounded p-2 me-1">
        <ArrowDownTrayIcon className=" fill-red-500  w-4"/>
        <p className=""> download the report</p>
      </button>
    </div>
  );
};

export default DashboardTitle;

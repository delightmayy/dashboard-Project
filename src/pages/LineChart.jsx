import React from "react";
import HeadTitle from "../assets/HeadTitle";
import { ResponsiveLine } from "@nivo/line";
import LinechartBox from "../assets/chart/LinechartBox";

const LineChart = () => {
  return (
    <div className=" dark:bg-gray-500  dark:text-gray-200  text-gray-700 overflow-x-auto scrollbar-thin overflow-y-auto dark:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-800 scrollbar-track-gray-500 scrollbar-thumb-gray-600 p-1 h-full">
      <HeadTitle
        Title={"line chart"}
        subTitle={"view your progress in a line chart"}
      />
      <p className="px-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
        saepe. Eum et, ipsam quam dolorum at sit. Aut voluptatibus ad in
        consequatur ipsa voluptatum id, provident hic, modi repudiandae
        exercitationem.
      </p>
      <div className="h-5/6 w-full px-1  pt-6  dark:bg-gray-600/95 mt-2 bg-gray-400 text-gray-700 ">
        <LinechartBox />
      </div>
    </div>
  );
};

export default LineChart;

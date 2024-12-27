import React from "react";
import DashboardTitle from "../assets/dashboard/dashboardTitle";
import Box from "../assets/dashboard/Box";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { UsersIcon } from "@heroicons/react/24/solid";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import BarchartBox from "../assets/chart/BarchartBox";
import PiechartBox from "../assets/chart/PiechartBox";
import LinechartBox from "../assets/chart/LinechartBox";
import { useContext } from "react";
import DataContext from "../context/Context";
import DashList from "../assets/dashboard/dashList";

const Dashboard = () => {
  const Title = "Dashboard";
  const subTitle = "your site at a glance";
  const { home, setHome } = useContext(DataContext);

  return (
    <div className=" dark:bg-gray-500  dark:text-gray-200  text-gray-700 overflow-x-auto scrollbar-thin overflow-y-auto dark:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-800 scrollbar-track-gray-500 scrollbar-thumb-gray-600 p-1 h-full ">
      <DashboardTitle Title={Title} subTitle={subTitle} />

      <div className=" overflow-x-auto scrollbar-thin overflow-y-auto dark:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-800 scrollbar-track-gray-500 scrollbar-thumb-gray-600  dark:bg-gray-600/95 mt-2 bg-gray-400 text-gray-700 rounded-sm grid grid-cols-12 grid-flow-row gap-2 sm:gap-4 p-4 h-[90%] ">
        <Box
          icon={<EnvelopeIcon className="w-8 fill-red-700" />}
          numberText="11,201"
          subTitle="pending text"
          Value={90}
        />
        <Box
          icon={<UsersIcon className="w-8 fill-red-700" />}
          numberText="57"
          subTitle="active users"
          Value={30}
        />
        <Box
          icon={<UserPlusIcon className="w-8 fill-red-700" />}
          numberText="50,221"
          subTitle=" subscribers world wide"
          Value={70}
        />
        <Box
          icon={<ChevronDoubleUpIcon className="w-8 fill-red-700" />}
          numberText="21"
          subTitle="archeive patners"
          Value={50}
        />
        <div className=" col-span-12 md:col-span-7 lg:col-span-8     grid grid-flow-row grid-col-12 gap-2 sm:gap-4 w-full h-3/5 ">
          <div className="dark:bg-gray-500 bg-gray-200 flex flex-col  col-span-12 h-52 w-full" onDoubleClick = {()=>setHome(!home)}>
            <LinechartBox />
          </div>
          <div className="dark:bg-gray-400 bg-gray-300 flex flex-col  p-1 col-span-12 md:col-span-6  h-52 w-auto">
            <BarchartBox />
          </div>
          <div className="dark:bg-gray-500 bg-gray-300 flex flex-col p-1 col-span-12 md:col-span-6 h-52 w-auto">
            <PiechartBox />
          </div>
          {/* <div className="p-6 col-span-4 bg-green-300"></div> */}
        </div>
        <div className="dark:bg-gray-700 bg-gray-300 col-span-12 md:col-span-5 lg:col-span-4  p-1  ">
          <DashList/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

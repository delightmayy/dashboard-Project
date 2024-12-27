import React, { useContext } from "react";
import { MoonIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import useDarkMode from "../Api/useDarkMode";
import { SunIcon } from "@heroicons/react/24/outline";
import DataContext from "../context/Context";
import { useNavigate } from "react-router-dom";

const Headbar = () => {
  const { handleDarkMode } = useDarkMode();
  const { mode } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <div
      className=" w-full text-zinc-800 dark:text-white bg-gray-500 dark:bg-gray-700
        flex  justify-between  py-2 md:py-3 px-3"
    >
      {/* search bar */}

      <form className="flex" onSubmit={(e) => e.preventDefault()}>
        <div className=" ">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="search"
            className="h-6 w-20 rounded-md sm:w-full  dark:bg-gray-300 bg-white text-gray-800 text-xs outline outline-1 -outline-offset-1  placeholder:px-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 "
          />
          <label htmlFor="search" className="hidden  ">
            search
          </label>
        </div>
        <MagnifyingGlassIcon className="w-4 mx-1 my-auto" />
      </form>

      {/* side B */}

      <div className="flex gap-1 md:gap-2 cursor-pointer">
        {mode ? (
          <SunIcon onClick={handleDarkMode} className="w-4 hover:fill-white " />
        ) : (
          <MoonIcon
            onClick={handleDarkMode}
            className="w-4  hover:fill-gray-800 "
          />
        )}
        <UserIcon
          className="w-4  dark:hover:fill-white hover:fill-gray-800  "
          onClick={() => navigate("/personal-info")}
        />
        <Cog6ToothIcon
          className="w-4  dark:hover:fill-white hover:fill-gray-800 "
          onClick={() => navigate("/profileform")}
        />

        <BellIcon className="w-4 dark:hover:fill-white hover:fill-gray-800 hover:cursor-not-allowed " />
      </div>
    </div>
  );
};

export default Headbar;

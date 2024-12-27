import React from 'react'
import { Bars3Icon } from "@heroicons/react/24/outline";
import adminImg from "../../images/testimonials-3.jpg";

const Admindetails = ({ width, collapsed, setCollapsed, mode, userName, userDetails }) => {
  return (
    <div>{width < 768 ? (
        <div className="flex flex-col justify-center items-center p-4  dark:text-white text-zinc-800 ">
          {" "}
          <Bars3Icon className="w-5" />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center px-6 py-6  dark:text-white text-zinc-800 gap-4 xl:gap-5 ">
          {collapsed ? (
            <Bars3Icon
              className="w-6"
              onClick={() => setCollapsed(!collapsed)}
            />
          ) : (
            <>
              {" "}
              <div className="flex justify-between w-full">
                <h1 className="capitalize">admin</h1>
                <Bars3Icon
                  className=" w-6"
                  onClick={() => setCollapsed(!collapsed)}
                />
              </div>
              <img src={adminImg} alt="" className="border rounded-full w-20" />
              <div className="text-center  capitalize">
                <h1 className="">{userName}</h1>
                <p className="text-red-600 ">{userDetails}</p>
              </div>
            </>
          )}
        </div>
      )}</div>
  )
}

export default Admindetails
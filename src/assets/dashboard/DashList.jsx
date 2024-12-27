import React from "react";

const DashList = () => {
  return (
    <div className=" flex flex-col gap-1 text-gray-800 dark:text-gray-200 text p-1">
      <h1 className=" text-lg font-bold text-center ">Headline</h1>
      <p className="text-xs font-bold text-center capitalize ">
        major event of the week
      </p>
      <ul className=" py-2 max-h-96 scrollbar-thin overflow-y-auto dark:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-800 scrollbar-track-gray-500 scrollbar-thumb-gray-600">
        <li className="dark:bg-gray-500 bg-gray-400 p-1 rounded">
          <div className="  flex flex-col gap-1 border border-gray-200 dark:bg-gray-600 rounded">
            <h3 className="font-semibold text-center text-red-600 dark:bg-gray-400 bg-gray-300">
              bid it
            </h3>
            <p className="py-1 px-4 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
              ad. Omnis ad unde, accusamus molestias et aliquid! Eos ratione
              inventore odit nesciunt minima explicabo quod nobis ipsum, dolorem
              qui tenetur.
            </p>
          </div>
        </li>
        <li className="dark:bg-gray-500 bg-gray-400 p-1 rounded">
          <div className="  flex flex-col gap-1 border border-gray-200 dark:bg-gray-600 rounded">
            <h3 className="font-semibold text-center text-red-600 dark:bg-gray-400 bg-gray-300">
              bid it
            </h3>
            <p className="py-1 px-4 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
              ad. Omnis ad unde, accusamus molestias et aliquid! Eos ratione
              inventore odit nesciunt minima explicabo quod nobis ipsum, dolorem
              qui tenetur.
            </p>
          </div>
        </li>
        <li className="dark:bg-gray-500 bg-gray-400 p-1 rounded">
          <div className="  flex flex-col gap-1 border border-gray-200 dark:bg-gray-600 rounded">
            <h3 className="font-semibold text-center text-red-600 dark:bg-gray-400 bg-gray-300">
              bid it
            </h3>
            <p className="py-1 px-4 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
              ad. Omnis ad unde, accusamus molestias et aliquid! Eos ratione
              inventore odit nesciunt minima explicabo quod nobis ipsum, dolorem
              qui tenetur.
            </p>
          </div>
        </li>
        <li className="dark:bg-gray-500 bg-gray-400 p-1 rounded">
          <div className="  flex flex-col gap-1 border border-gray-200 dark:bg-gray-600 rounded">
            <h3 className="font-semibold text-center text-red-600 dark:bg-gray-400 bg-gray-300">
              bid it
            </h3>
            <p className="py-1 px-4 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
              ad. Omnis ad unde, accusamus molestias et aliquid! Eos ratione
              inventore odit nesciunt minima explicabo quod nobis ipsum, dolorem
              qui tenetur.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DashList;

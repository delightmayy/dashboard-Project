import React from "react";

const HeadTitle = ({ Title, subTitle }) => {
  return (
    <div className=" text-zinc-800 dark:text-gray-200 capitalize px-2 pt-2 ">
      <h1 className="text-xl font-semibold ">{Title}</h1>
      <h3 className="text-sm mb-3 ">{subTitle}</h3>
    </div>
  );
};

export default HeadTitle;

import React from "react";

const DashList = () => {
  const dashDataList = [
    {
      title: "bid it",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, ad. Omnis ad unde, accusamus molestias et aliquid! Eos ra inventore odit nesciunt minima explicabo quod nobis ipsum, dolorem qui tenetur.",
      id: 1,
    },
    {
      title: "get updated ",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, ad. Omnis ad unde, accusamus molestias et aliquid! Eos ra inventore odit nesciunt minima explicabo quod nobis ipsum, dolorem qui tenetur.",
      id: 2,
    },
    {
      title: "scam alert",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, ad. Omnis ad unde, accusamus molestias et aliquid! Eos ra inventore odit nesciunt minima explicabo quod nobis ipsum, dolorem qui tenetur.",
      id: 3,
    },
    {
      title: "check out",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, ad. Omnis ad unde, accusamus molestias et aliquid! Eos ra inventore odit nesciunt minima explicabo quod nobis ipsum, dolorem qui tenetur.",
      id: 4,
    },
    {
      title: "walk out",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, ad. Omnis ad unde, accusamus molestias et aliquid! Eos ra inventore odit nesciunt minima explicabo quod nobis ipsum, dolorem qui tenetur.",
      id: 5,
    },
  ];
  return (
    <div className=" flex flex-col gap-1 text-gray-800 dark:text-gray-200 text p-1">
      <h1 className=" text-lg font-bold text-center ">Headline</h1>
      <p className="text-xs font-bold text-center capitalize ">
        major event of the week
      </p>
      <ul className=" py-2 max-h-96 scrollbar-thin overflow-y-auto dark:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-800 scrollbar-track-gray-500 scrollbar-thumb-gray-600">
        {dashDataList.map((x) => {
          return (
            <li key={x.id} className="dark:bg-gray-500 bg-gray-400 p-1 rounded">
              <div className="  flex flex-col gap-1 border border-gray-200 dark:bg-gray-600 rounded">
                <h3 className="font-semibold text-center capitalize text-red-600 dark:bg-gray-400 bg-gray-300">
                  {x.title}
                </h3>
                <p className="py-1 px-4 text-justify">{x.text}</p>
              </div>
            </li>
          );
        })}

       
      </ul>
    </div>
  );
};

export default DashList;

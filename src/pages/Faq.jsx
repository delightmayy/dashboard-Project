import React from "react";
import HeadTitle from "../assets/HeadTitle";

const Faq = () => {
  const Summary = [
    {
      title: "What's the best thing about Switzerland?",
      detail:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat",
    },
    {
      title: "How do you make holy water?",
      detail:
        "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus.",
    },
    {
      title: "What do you call someone with no body and no nose?",
      detail:
        "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
    },
    {
      title: "Why do you never see elephants hiding in trees?",
      detail:
        "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      title: "Why can't you hear a pterodactyl go to the bathroom?",
      detail:
        "Because the pee is silent. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quas voluptatibus ex culpa ipsum, aspernatur blanditiis fugiat ullam magnam suscipit deserunt illum natus facilis atque vero consequatur! Quisquam, debitis error.",
    },
  ];

  return (
    <div className=" flex-grow flex flex-col dark:bg-gray-500 text-gray-800 dark:text-gray-100  overflow-x-auto scrollbar-thin dark:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-800 scrollbar-track-gray-500 scrollbar-thumb-gray-600 bg-gray-200 pb-6  ">

      <HeadTitle Title={"Faq"} subTitle={"what people ask"} />
      <div className="grid grid-cols-1 flex-grow overflow-y-auto scrollbar-thin px-1  ">
        
        <div className=" px-1 dark:bg-gray-700 bg-gray-400 text-sm md:text-base rounded gap-1 items-center  py-4 ">
          {Summary.map((x, id) => {
            return (
              <details
                key={id}
                className="darkborder-t-gray-500 border-t-gray-100 border-t-2"
              >
                <summary className="py-2 sx:ps-4 ps-3 ">{x.title}</summary>
                <p className="p-2 pb-4 dark:bg-gray-500 bg-gray-100 rounded">{x.detail}</p>
              </details>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;

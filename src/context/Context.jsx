import React, { createContext, useState } from "react";

const DataContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [home, setHome] = useState(true);
  const [mode, setMode] = useState(
    JSON.parse(localStorage.getItem("dark-mode"))
  );
  const userName = "delight";
  const userDetails = " always delighted";
  const dataBar = [
    {
      day: "Monday",
      degress: 59,
    },
    {
      day: "Tuesday",
      degress: 61,
    },
    {
      day: "Wednesday",
      degress: 55,
    },
    {
      day: "Thursday",
      degress: 78,
    },
    {
      day: "Friday",
      degress: 71,
    },
    {
      day: "Saturday",
      degress: 56,
    },
    {
      day: "Sunday",
      degress: 67,
    },
  ];

  const dataLine = [
    {
      data: [
        {
          x: 0,
          y: 0.7,
        },
        {
          x: 1,
          y: 0.9,
        },
        {
          x: 2,
          y: 0.8,
        },
        {
          x: 3,
          y: 0.6,
        },
        {
          x: 4,
          y: 0.3,
        },
        {
          x: 5,
          y: 0,
        },
        {
          x: 6,
          y: null,
        },
        {
          x: 7,
          y: null,
        },
        {
          x: 8,
          y: null,
        },
        {
          x: 9,
          y: null,
        },
        {
          x: 10,
          y: null,
        },
        {
          x: 11,
          y: 0,
        },
        {
          x: 12,
          y: 0.4,
        },
        {
          x: 13,
          y: 0.6,
        },
        {
          x: 14,
          y: 0.5,
        },
        {
          x: 15,
          y: 0.3,
        },
        {
          x: 16,
          y: 0.4,
        },
        {
          x: 17,
          y: 0,
        },
      ],
      id: "positive :)",
    },
    {
      data: [
        {
          x: 5,
          y: 0,
        },
        {
          x: 6,
          y: -0.3,
        },
        {
          x: 7,
          y: -0.5,
        },
        {
          x: 8,
          y: -0.9,
        },
        {
          x: 9,
          y: -0.2,
        },
        {
          x: 10,
          y: -0.4,
        },
        {
          x: 11,
          y: 0,
        },
        {
          x: 12,
          y: null,
        },
        {
          x: 13,
          y: null,
        },
        {
          x: 14,
          y: null,
        },
        {
          x: 15,
          y: null,
        },
        {
          x: 16,
          y: null,
        },
        {
          x: 17,
          y: 0,
        },
        {
          x: 18,
          y: -0.4,
        },
        {
          x: 19,
          y: -0.2,
        },
        {
          x: 20,
          y: -0.1,
        },
        {
          x: 21,
          y: -0.6,
        },
      ],
      id: "negative :(",
    },
  ];

  const dataPie = [
    {
      id: "java",
      label: "java",
      value: 195,
      color: "hsl(90, 70%, 50%)",
    },
    {
      id: "erlang",
      label: "erlang",
      value: 419,
      color: "hsl(56, 70%, 50%)",
    },
    {
      id: "ruby",
      label: "ruby",
      value: 407,
      color: "hsl(103, 70%, 50%)",
    },
    {
      id: "haskell",
      label: "haskell",
      value: 474,
      color: "hsl(186, 70%, 50%)",
    },
    {
      id: "go",
      label: "go",
      value: 71,
      color: "hsl(104, 70%, 50%)",
    },
  ];

  return (
    <DataContext.Provider
      value={{
        collapsed,
        setCollapsed,
        mode,
        setMode,
        userName,
        userDetails,
        dataBar,
        dataLine,
        dataPie,
        home,
        setHome,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

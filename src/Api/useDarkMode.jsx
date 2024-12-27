import React, { useContext, useEffect, useState } from "react";
import DataContext from "../context/Context";

const useDarkMode = () => {
  const { mode, setMode } = useContext(DataContext); 
  const handleDarkMode = () => {
    setMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(mode));
    mode
      ? document.querySelector("html").classList.add("dark")
      : document.querySelector("html").classList.remove("dark");
  }, [mode]);
 
  return { handleDarkMode, mode };
};

export default useDarkMode;

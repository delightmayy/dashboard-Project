import React, { useEffect, useState } from "react";

const useWindowSize = () => {
  const [width, setWidth] = useState(undefined);
  const [height, setHeight] = useState(undefined);

  const getSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    getSize();
    window.addEventListener("resize", getSize);
    return window.removeEventListener("resize", getSize());
  }, []);

  return { width, height };
};
export default useWindowSize;

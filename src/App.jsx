import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Errorpage from "./pages/Errorpage";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <div className=" h-full ">
      <ContextProvider>
        <Routes>
          <Route path="/*" element={<Home/>} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;

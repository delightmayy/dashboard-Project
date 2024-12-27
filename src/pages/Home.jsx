import React, { useEffect } from "react";
import Headbar from "../assets/Headbar";
import SideNav from "../assets/sidebar/SideNav";
import { Routes, Route } from "react-router-dom";
import Calendar from "./Calendar";
import Dashboard from "./Dashboard";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import Contact from "./Contact";
import Faq from "./Faq";
import Invoice from "./Invoice";
import Geography from "./Geography";
import LineChart from "./LineChart";
import Team from "./Team";
import ProfileForm from "./ProfileForm";
import Personal from "../assets/form/Personal";

const Home = () => {
  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(true));
  }, []);
  return (
    <div className=" w-screen flex h-screen  bg-gray-300 dark:bg-gray-700  ">
      <SideNav />
      <main className=" h-full bg-gray-300 flex flex-col flex-grow ">
        <Headbar />
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path={"/barchart"} element={<BarChart />} />
          <Route path={"/calendar"} element={<Calendar />} />
          <Route path={"/faq"} element={<Faq />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/geography"} element={<Geography />} />
          <Route path={"/invoice"} element={<Invoice />} />
          <Route path={"/linechart"} element={<LineChart />} />
          <Route path={"/piechart"} element={<PieChart />} />
          <Route path={"/team"} element={<Team />} />
          <Route path={"/Profileform"} element={<ProfileForm />} />
          <Route path={"/personal-info"} element={<Personal />} />
        </Routes>
      </main>
    </div>
  );
};

export default Home;

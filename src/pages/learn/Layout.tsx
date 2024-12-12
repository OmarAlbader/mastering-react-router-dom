import React from "react";
import Navbar from "../../components/Navbar";
import LearnAside from "../../components/LearnAside";
import { Outlet } from "react-router-dom";

const LearnLayout = () => {
  return (
    <>
      <Navbar />
      <LearnAside />

      <div className="ml-72">
        <Outlet />
      </div>
    </>
  );
};

export default LearnLayout;

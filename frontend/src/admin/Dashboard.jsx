import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "./sidebar/SideBar";
import TopBar from "./topbar/TopBar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className='dash-left'>
        <SideBar />
      </div>
      <div className='content'>
        <TopBar />
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import SideBar from "../sidebar/SideBar";
import TopBar from "../topbar/TopBar";

const Responses = () => {
  return (
    <div className='dashboard-container'>
      <SideBar />
      <div className='content'>
        <TopBar />
        <div className='container mt-3'>
          <p>Response page coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Responses;

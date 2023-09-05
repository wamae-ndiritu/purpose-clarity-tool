import React from "react";
import SideBar from "./sidebar/SideBar";
import TopBar from "./topbar/TopBar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <SideBar />
      <div className='content'>
        <TopBar />
        <div className='container mt-3'>
          <div className='row d-flex justify-content-center'>
            <div className='col-lg-3 col-md-3 col-sm-6'>
              <div className='card'>
                <div className='card-icon'>
                  <i className='fa fa-users' aria-hidden='true'></i>
                </div>
                <p className='text-warning'>50 Users</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6'>
              <div className='card'>
                <div className='card-icon'>
                  <i class='fa fa-file-text' aria-hidden='true'></i>
                </div>
                <p className='text-info'>18 Responses</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6'>
              <div className='card'>
                <div className='card-icon'>
                  <i className='fa fa-comment' aria-hidden='true'></i>
                </div>
                <p className='text-success'>7 Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

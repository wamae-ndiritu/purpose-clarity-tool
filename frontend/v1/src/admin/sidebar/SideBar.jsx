import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  const sidebarClass = isSidebarExpanded ? "expanded" : "collapsed";

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className='sidebar-header'>
        <h5 className='pct-title'>PCT</h5>
        <i className='fa fa-bars' onClick={toggleSidebar}></i>
      </div>
      <div className='sidebar-content'>
        <ul>
          <li>
            <Link to='/admin' className='side-link'>
              <i className='fa fa-home' aria-hidden='true'></i>
              <h6 className='link-text'>Dashboard</h6>
            </Link>
          </li>
          <li>
            <Link to='/admin/users' className='side-link'>
              <i className='fa fa-users' aria-hidden='true'></i>
              <h6 className='link-text'>Users</h6>
            </Link>
          </li>
          <li>
            <Link to='/admin/responses' className='side-link'>
              <i className='fa fa-sticky-note' aria-hidden='true'></i>
              <h6 className='link-text'>Rensponses</h6>
            </Link>
          </li>
          <li>
            <Link to='/admin/questions' className='side-link'>
              <i className='fa fa-pencil-square-o' aria-hidden='true'></i>
              <h6 className='link-text'>Questions</h6>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

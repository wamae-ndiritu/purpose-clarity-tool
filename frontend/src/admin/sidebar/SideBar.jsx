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
            <Link to='/' className='side-link'>
              <i className='fa fa-home' aria-hidden='true'></i>
              <h6 className='link-text'>Home</h6>
            </Link>
          </li>
          <li>
            <Link to='/users' className='side-link'>
              <i class='fa fa-users' aria-hidden='true'></i>
              <h6 className='link-text'>Users</h6>
            </Link>
          </li>
          <li>
            <Link to='/users' className='side-link'>
              <i class='fa fa-sticky-note' aria-hidden='true'></i>
              <h6 className='link-text'>Rensponses</h6>
            </Link>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
      <div className='sidebar-footer'>Sidebar Footer</div>
    </div>
  );
};

export default SideBar;

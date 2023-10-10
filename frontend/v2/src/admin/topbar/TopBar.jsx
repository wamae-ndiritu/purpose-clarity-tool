import React from "react";
import { useDispatch } from "react-redux";
import "./Topbar.css";
import { logout } from "../../redux/actions/userActions";

const TopBar = () => {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <div className='topbar'>
      <div className='topbar-content'>
        <h6>Purpose Clarity Tool</h6>
        <div className='topbar-right'>
          <div className='top-icon notification'>
            <i class='fa fa-bell-o' aria-hidden='true'></i>
            <span>0</span>
          </div>
          <div className='top-icon logout' onClick={handleLogout}>
            <i className='fa fa-sign-out' aria-hidden='true'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

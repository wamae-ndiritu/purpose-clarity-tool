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
        <div className='logout' onClick={handleLogout}>
          <i className='fa fa-sign-out' aria-hidden='true'></i>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

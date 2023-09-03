import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/userActions";

const NavBar = () => {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }
  return (
    <div className='cont'>
      <div className='header-row'>
        <Link to='/' className='logo-img'>
          <img src='/kome-logo.png' alt='' />
        </Link>
        <div className='nav-menu'>
          <ul>
            <li onClick={handleLogout}>
              <i className='fa fa-sign-out' aria-hidden='true'></i>
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

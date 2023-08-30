import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../redux/actions/userActions";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "grey",
  textDecoration: "none",
  color: "white",
};

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
            <li>
              <Link to='/login' className='nav-link-item'>
                <i className='fa fa-sign-in' aria-hidden='true'></i>
                <span>Login</span>
              </Link>
            </li>
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

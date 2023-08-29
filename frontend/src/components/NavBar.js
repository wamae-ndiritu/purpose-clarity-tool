import React from "react";
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
    <div className='container'>
      <div className='header-row'>
        <div className='logo-img'>
          <img src='/kome-logo.png' alt='' />
        </div>
        <div className='header-content'>
          <h1 className='h1'>Purpose Clarity Tool</h1>
          <div className='title-hr'></div>
        </div>
      </div>
    </div>
    // <div class='nav-cont p-3 rounded'>
    //   <NavLink
    //     to='/'
    //     /* set exact so it knows to only set activeStyle when route is deeply equal to link */
    //     exact
    //     /* add styling to Navlink */
    //     style={linkStyles}
    //     /* add prop for activeStyle */
    //     activeStyle={{
    //       background: "darkblue",
    //     }}
    //   >
    //     Home
    //   </NavLink>

    //   <NavLink
    //     to='/register'
    //     exact
    //     style={linkStyles}
    //     activeStyle={{
    //       background: "darkblue",
    //     }}
    //   >
    //     Register
    //   </NavLink>
    //   <NavLink
    //     to='/login'
    //     exact
    //     style={linkStyles}
    //     activeStyle={{
    //       background: "grey",
    //     }}
    //   >
    //     Login
    //   </NavLink>

    //   <button class='btn btn-secondary' onClick={handleLogout}>
    //     Logout
    //   </button>
    // </div>
  );
};

export default NavBar;

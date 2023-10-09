import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/userActions";

const NavBar = () => {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const activeHeader = document.querySelector("#header");
      activeHeader?.classList.toggle("active-header", window.scrollY > 200);
    });

    return () => {
      // Remove the scroll event listener when the component unmounts
      window.removeEventListener("scroll", function () {});
    };
  }, []);
  return (
    <div className='cont' id='header'>
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

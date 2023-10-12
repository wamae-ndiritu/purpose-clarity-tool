import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const user = useSelector((state) => state.user);
  const { userInfo } = user;
  return (
    <div className='w-full bg-gray-800 text-white py-3 text-center'>
      <div className='container mx-auto'>
        <ul className='flex justify-center space-x-6'>
          <li className="className='text-sm hover:text-gray-400 transition duration-300'">
            <Link to='/questions/purpose'>Get Started</Link>
          </li>
          <li className='text-sm hover:text-gray-400 transition duration-300'>
            Purpose Clarification Tool
          </li>
          {userInfo.isAdmin && (
            <li>
              <Link
                to='/admin/'
                className='text-sm hover:text-gray-400 transition duration-300'
              >
                Admin Dashboard
              </Link>
            </li>
          )}
        </ul>
        <p className='mt-2 text-sm'>© 2023 KOMEBC. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

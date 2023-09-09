import React, { useEffect } from "react";
import SideBar from "../sidebar/SideBar";
import TopBar from "../topbar/TopBar";
import { listUsers } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import UserssList from "./UsersList";

const User = () => {
  const user = useSelector((state) => state.user);
  const { loading, error, users } = user;
  const dispatch = useDispatch();

  useEffect(() => {
    if (users.length === 0) {
      dispatch(listUsers());
    }
  }, [users, dispatch]);

  const formattedUsers = users?.map((user, index) => {
    return {
      ...user,
      id: index + 1,
    };
  });
  return (
    <div className='dashboard-container'>
      <SideBar />
      <div className='content'>
        <TopBar />
        <div className='container mt-3'>
          <h6 className='text-center'>Subscribed Users</h6>
          <div className='row d-flex justify-content-center my-3'>
            {loading ? (
              <span className='text-warning'>Loading...</span>
            ) : (
              error && <span className='text-danger'>{error}</span>
            )}
            <div className='col-lg-10 col-md-10 col-sm-10'>
              <UserssList data={formattedUsers} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

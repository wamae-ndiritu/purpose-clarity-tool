import React, { useEffect } from "react";
import SideBar from "./sidebar/SideBar";
import TopBar from "./topbar/TopBar";
import "./Dashboard.css";
import UserssList from "./users/UsersList";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../redux/actions/userActions";
import Loading from "../utils/Loading";
import Message from "../utils/Message";

const Dashboard = () => {
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
        <div className='px-12'>
          <div className='grid grid-cols-3 gap-5 my-3'>
            <div className='border rounded'>
              <div className=' card rounded'>
                <div className='card-icon'>
                  <i className='fa fa-users' aria-hidden='true'></i>
                </div>
                <p className='text-orange-500'>{users?.length} Users</p>
              </div>
            </div>
            <div className='border rounded'>
              <div className='card rounded'>
                <div className='card-icon'>
                  <i class='fa fa-file-text' aria-hidden='true'></i>
                </div>
                <p className='text-blue-400'>0 Responses</p>
              </div>
            </div>
            <div className='rounded border'>
              <div className='card rounded'>
                <div className='card-icon'>
                  <i className='fa fa-comment' aria-hidden='true'></i>
                </div>
                <p className='text-green-400'>0 Reviews</p>
              </div>
            </div>
          </div>
          {loading ? <Loading /> : error && <Message>{error}</Message>}
          <div className='row d-flex justify-content-center my-3'>
            <div className='col-lg-10 col-md-10 col-sm-10'>
              <UserssList data={formattedUsers} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

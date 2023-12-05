import React, { useEffect } from "react";
import SideBar from "./sidebar/SideBar";
import TopBar from "./topbar/TopBar";
import "./Dashboard.css";
import UserssList from "./users/UsersList";
import { useDispatch, useSelector } from "react-redux";
import { listMPSUsers, listUsers } from "../redux/actions/userActions";
import Loading from "../utils/Loading";
import Message from "../utils/Message";

const Dashboard = () => {
  const user = useSelector((state) => state.user);
  const { loading, error, users, mpsUsers } = user;
  const dispatch = useDispatch();

  useEffect(() => {
    if (users.length === 0) {
      dispatch(listUsers());
    }
  }, [users, dispatch]);

  useEffect(() => {
    if (mpsUsers.length === 0) {
      dispatch(listMPSUsers());
    }
  }, [mpsUsers, dispatch]);

  const formattedUsers = users?.map((user, index) => {
    return {
      ...user,
      id: index + 1,
    };
  });

  const formattedMPSUsers = mpsUsers?.map((user, index) => {
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
                <p className='text-orange-500'>
                  {users?.length + mpsUsers?.length} All Users
                </p>
              </div>
            </div>
            <div className='border rounded'>
              <div className=' card rounded'>
                <div className='card-icon'>
                  <i className='fa fa-users' aria-hidden='true'></i>
                </div>
                <p className='text-orange-500'>{users?.length} PCT Users</p>
              </div>
            </div>
            <div className='border rounded'>
              <div className=' card rounded'>
                <div className='card-icon'>
                  <i className='fa fa-users' aria-hidden='true'></i>
                </div>
                <p className='text-orange-500'>{mpsUsers?.length} MPS Users</p>
              </div>
            </div>
          </div>
          {loading ? <Loading /> : error && <Message>{error}</Message>}
          <div className='row d-flex justify-content-center my-3'>
            <div className='col-lg-10 col-md-10 col-sm-10'>
              <h3 className='text-xl text-gray-600 py-3'>PCT Users</h3>
              <UserssList data={formattedUsers} />
            </div>
            <div className='col-lg-10 col-md-10 col-sm-10'>
              <h3 className='text-xl text-gray-600 py-3'>MPS Users</h3>
              <UserssList data={formattedMPSUsers} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

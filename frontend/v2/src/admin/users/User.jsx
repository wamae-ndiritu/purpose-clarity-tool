import React, { useEffect, useState } from "react";
import SideBar from "../sidebar/SideBar";
import TopBar from "../topbar/TopBar";
import { listUsers } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import UserssList from "./UsersList";
import Loading from "../../utils/Loading";
import Message from "../../utils/Message";

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

  const getAllUsers = () => {
    setList(formattedUsers);
  };

  const [list, setList] = useState(formattedUsers);

  const getMPSUsers = () => {
    const newUsers = users.filter((item) => item.account_type === "MPS");
    const formattedUsers = newUsers?.map((user, index) => {
      return {
        ...user,
        id: index + 1,
      };
    });
    setList(formattedUsers);
  };

  const getPCTUsers = () => {
    const newUsers = users.filter((item) => item.account_type !== "MPS");
    const formattedUsers = newUsers?.map((user, index) => {
      return {
        ...user,
        id: index + 1,
      };
    });
    setList(formattedUsers);
  };

  console.log(list);
  return (
    <div className='dashboard-container'>
      <SideBar />
      <div className='content'>
        <TopBar />
        <div className='px-12'>
          <div className='py-12'>
            {loading ? <Loading /> : error && <Message>{error}</Message>}
            <div className='col-lg-10 col-md-10 col-sm-10'>
              <div className='flex justify-space-between items-center mb-3 title-1-cont'>
                <div className='users-btn-cont'>
                  <button
                    className='btn user-btn-toggle active'
                    onClick={getAllUsers}
                  >
                    ALL
                  </button>
                  <button
                    className='btn user-btn-toggle active'
                    onClick={getPCTUsers}
                  >
                    PCT USERS
                  </button>
                  <button className='btn user-btn-toggle' onClick={getMPSUsers}>
                    MPS USERS
                  </button>
                </div>
                <h6 className='text-center'>Subscribed Users</h6>
              </div>
              <UserssList data={list} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

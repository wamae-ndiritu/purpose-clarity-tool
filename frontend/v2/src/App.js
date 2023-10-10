import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { verifySession } from "./redux/actions/userActions";
import Login from "./pages/Login";
import "./index.css";
import PurposeQuestion from "./pages/PurposeQuestion";
import Answers from "./pages/Answers";
import Register from "./pages/Register";
import { Dashboard, Responses, User, Questions } from "./admin";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { userInfo } = user;
  const location = useLocation();
  const path = location.pathname;

  function AuthLayout() {
    if (userInfo?.token) {
      return <Outlet />;
    }
    return <Navigate to='/account/login' />;
  }

  useEffect(() => {
    dispatch(verifySession());
  }, [dispatch, path]);

  return (
    <Routes>
      <Route exact path='/account/login' element={<Login />} />
      <Route exact path='/account/register' element={<Register />} />
      <Route element={<AuthLayout />}>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/questions/purpose' element={<PurposeQuestion />} />
        <Route exact path='/questions/answers' element={<Answers />} />
        <Route exact path='/admin/' element={<Dashboard />} />
        <Route exact path='/admin/users' element={<User />} />
        <Route exact path='/admin/responses' element={<Responses />} />
        <Route exact path='/admin/questions' element={<Questions />} />
      </Route>
    </Routes>
  );
}

export default App;

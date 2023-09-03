import React, { useEffect } from "react";
import { Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Form from "./components/Form";
import "./index.css";
import Answers from "./components/Answers";
import { useDispatch, useSelector } from "react-redux";
import Statement from "./components/UserView/Statement";
import { verifySession } from "./redux/actions/userActions";
import Account from "./components/account/Account";
import PreviousView from "./components/UserView/PreviousView";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { userInfo } = user;
  const location = useLocation();
  const path = location.pathname;

  function AuthLayout() {
    if (userInfo.token) {
      return <Outlet />;
    }
    return <Navigate to='/account/login' />;
  }

  useEffect(() => {
    dispatch(verifySession());
  }, [dispatch, path]);

  return (
    <Routes>
      <Route exact path='/account/login' element={<Account />} />
      <Route element={<AuthLayout />}>
        <Route exact path='/about' element={<About />} />
        <Route exact path='/form' element={<Form />} />
        <Route exact path='/answers' element={<Answers />} />
        <Route exact path='/' element={<Home />} />
        <Route
          exact
          path='/view/purpose-clarity-item'
          element={<PreviousView />}
        />
        <Route
          exact
          path='/purpose-clarity-item/download'
          element={<Statement />}
        />
      </Route>
    </Routes>
  );
}

export default App;

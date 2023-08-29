import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Form from "./components/Form";
import "./index.css";
import Register from "./components/Register";
import Answers from "./components/Answers";
import { useSelector } from "react-redux";
import View from "./components/UserView/View";
import Statement from "./components/UserView/Statement";

function App() {
  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  function AuthLayout() {
    if (userInfo.token) {
      return <Outlet />;
    }
    return <Navigate to='/login' />;
  }

  return (
    <div className='App'>
      <div className='main-cont'>
        <Routes>
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route element={<AuthLayout />}>
            <Route exact path='/about' element={<About />} />
            <Route exact path='/form' element={<Form />} />
            <Route exact path='/answers' element={<Answers />} />
            <Route exact path='/' element={<Home />} />
            <Route exact path='/purpose-clarity-item' element={<View />} />
            <Route
              exact
              path='/purpose-clarity-item/download'
              element={<Statement />}
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

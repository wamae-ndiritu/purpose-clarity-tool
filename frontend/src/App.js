import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Outlet, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import Firststep from "./components/Firststep";
import "./index.css";
import Register from "./components/Register";
import { useLocalStorage } from "./useLocalStorage";
import Answers from "./components/Answers";
import { useSelector } from "react-redux";
import View from "./components/UserView/View";
import Statement from "./components/UserView/Statement";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useLocalStorage();
  // const [user, setUser] = useState(null);
  const [fomData, setFomData] = useState({
    you: "",
    do: "",
    love: "",
    serve: "",
    beneficiaries: "",
    transform: "",
    income: "",
  });

  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  const navigate = useNavigate();

  function AuthLayout() {
    if (userInfo.token) {
      return <Outlet />;
    }
    return <Navigate to='/login' />;
  }

  return (
    <div className='App'>
      {<NavBar setToken={setToken} />}
      <div className='main-cont'>
        <Routes>
          <Route
            exact
            path='/register'
            element={<Register setToken={setToken} />}
          />
          <Route exact path='/login' element={<Login setToken={setToken} />} />
          <Route element={<AuthLayout />}>
            <Route exact path='/about' element={<About />} />
            <Route exact path='/form' element={<Form token={token} />} />
            <Route path='/firststep' element={<Firststep />} />
            <Route
              exact
              path='/answers'
              element={<Answers fomData={fomData} />}
            />
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

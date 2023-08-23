import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions/userActions";
import { useEffect } from "react";
const Login = ({ setToken }) => {
  const user = useSelector((state) => state.user);
  const { loading, error, userInfo } = user;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.email !== "" || formData.password !== "") {
      login(formData, dispatch);
    }

    // after logging the user in, redirect to the home page!
  }

  console.log(userInfo.token);

  useEffect(() => {
    if (userInfo.token) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  return (
    <form style={{ backgroundColor: "aliceblue" }} onSubmit={handleSubmit}>
      <h1>Login</h1>
      {loading ? (
        <span className='text-warning'>Loading...</span>
      ) : (
        error && <span className='text-danger'>{error}</span>
      )}
      <div class='col-md-6 mb-4' style={{ width: "700px" }}>
        <input
          type='text'
          name='email'
          class='form-control'
          placeholder='email'
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div class='col-md-6' style={{ width: "700px" }}>
        <input
          type='password'
          name='password'
          class='form-control'
          placeholder='password'
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button
        onClick={handleSubmit}
        class='btn btn-secondary mt-4'
        style={{ width: "100px" }}
        type='submit'
      >
        Login
      </button>
    </form>
  );
};

export default Login;

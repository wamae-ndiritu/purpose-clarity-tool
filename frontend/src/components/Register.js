import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/actions/userActions";

const fields = [
  {
    name: "First Name",
    key: "firstName",
  },
  {
    name: "Last Name",
    key: "lastName",
  },
  {
    name: "Email",
    key: "email",
  },
  {
    name: "Password",
    key: "password",
  },
  {
    name: "Confirm Password",
    key: "confirmPassword",
  },
];

const Register = ({ setToken }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { loading, error, userInfo } = user;
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault(e);
    if (
      !signUpData.password ||
      signUpData.confirmPassword !== signUpData.password
    ) {
      alert("password do not match");
      return;
    }
    register(signUpData, dispatch);
  };

  useEffect(() => {
    if (userInfo.created) {
      navigate("/login");
    }
  }, [userInfo, navigate]);
  return (
    <div style={{ backgroundColor: "aliceblue" }}>
      {loading ? (
        <span className='text-warning'>Loading...</span>
      ) : (
        error && <span className='text-danger'>{error}</span>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp();
        }}
        class='row g-3'
      >
        <h2>New user</h2>
        <p>Use the form below to create the account</p>

        {fields.map(({ name, key }) => (
          <div key={key} class='col-md-6' style={{ width: "700px" }}>
            <input
              type={name.includes("Password") ? "password" : "text"}
              class='form-control'
              placeholder={name}
              required={true}
              aria-label={name}
              value={setSignUpData[key]}
              onChange={(e) =>
                setSignUpData((s) => ({ ...s, [key]: e.target.value }))
              }
            />
          </div>
        ))}

        <div class='col-12'>
          <div class='form-check' style={{ width: "700px" }}>
            <input class='form-check-input' type='checkbox' id='gridCheck' />
            <label class='form-check-label' for='gridCheck'>
              Agree To Terms and Condition
            </label>
          </div>
        </div>

        <div class='col-12'>
          <button
            onClick={handleSignUp}
            type='submit'
            style={{ width: "500px" }}
            class='btn btn-secondary'
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;

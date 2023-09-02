import { useState, useEffect } from "react";
import "./account.css";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/actions/userActions";

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

  const [showRegister, setShowRegister] = useState(false);

  const handleComponentToggle = () => {
    setShowRegister(!showRegister);
  };

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
    // <div style={{ backgroundColor: "aliceblue" }}>
    //   {loading ? (
    //     <span className='text-warning'>Loading...</span>
    //   ) : (
    //     error && <span className='text-danger'>{error}</span>
    //   )}
    //   <form
    //     onSubmit={(e) => {
    //       e.preventDefault();
    //       handleSignUp();
    //     }}
    //     class='row g-3'
    //   >
    //     <h2>New user</h2>
    //     <p>Use the form below to create the account</p>

    //     {fields.map(({ name, key }) => (
    //       <div key={key} class='col-md-6' style={{ width: "700px" }}>
    //         <input
    //           type={name.includes("Password") ? "password" : "text"}
    //           class='form-control'
    //           placeholder={name}
    //           required={true}
    //           aria-label={name}
    //           value={setSignUpData[key]}
    //           onChange={(e) =>
    //             setSignUpData((s) => ({ ...s, [key]: e.target.value }))
    //           }
    //         />
    //       </div>
    //     ))}

    //     <div class='col-12'>
    //       <div class='form-check' style={{ width: "700px" }}>
    //         <input class='form-check-input' type='checkbox' id='gridCheck' />
    //         <label class='form-check-label' for='gridCheck'>
    //           Agree To Terms and Condition
    //         </label>
    //       </div>
    //     </div>

    //     <div class='col-12'>
    //       <button
    //         onClick={handleSignUp}
    //         type='submit'
    //         style={{ width: "500px" }}
    //         class='btn btn-secondary'
    //       >
    //         Register
    //       </button>
    //     </div>
    //   </form>
    // </div>
    <div className='account-cont'>
      <div className='login-top'>
        <div className='top-left'>
          <div className='login-logo'>
            <img src='kome-logo.png' alt='...' />
          </div>
        </div>
        <div className='top-right'>
          <img src='/register-bg.jpeg' alt='...' />
        </div>
      </div>
      <div className='login-bottom'>
        <div className='container'>
          <div className='row account-row'>
            <div className='col-lg-7 col-md-7 col-sm-10 col-11 shadow-lg login-wrapper'>
              <div className='account-left'>
                <p>Welcome to the</p>
                <h1>Purpose Clarification Tool</h1>
                <p>
                  If you are a new user, use the form below to create an accout.
                  If you already have an account, click on the link below to log
                  in.
                </p>
                <button
                  className='btn account-btn'
                  onClick={handleComponentToggle}
                >
                  {showRegister ? "Sign In" : "Sign Up"}
                </button>
              </div>
              <div className='account-right'>
                {showRegister ? (
                  <section className='user'>
                    <h5 className='h5'>New User?</h5>
                    <p>Use the form below to create yout account</p>
                    <div className='input-col-2 mb-3'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='First Name'
                      />
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Last Name'
                      />
                    </div>
                    <div className='mb-3'>
                      <input
                        type='email'
                        className='form-control'
                        placeholder='Enter your email'
                      />
                    </div>
                    <div className='input-col-2 mb-3'>
                      <input
                        type='password'
                        className='form-control'
                        placeholder='Password'
                      />
                      <input
                        type='password'
                        className='form-control'
                        placeholder='Confirm Password'
                      />
                    </div>
                    <div className='mb-3 terms'>
                      <input type='checkbox' />
                      <p>Agree to Terms and Conditions</p>
                    </div>
                    <div className='mb-3 d-flex justify-content-center'>
                      <button className='btn account-btn btn-user'>
                        Sing Up
                      </button>
                    </div>
                  </section>
                ) : (
                  <section className='user'>
                    <h5 className='h5'>Returning User?</h5>
                    <p>Enter your email and password to login</p>
                    <div className='mb-3'>
                      <input
                        type='email'
                        className='form-control'
                        placeholder='Enter your email'
                      />
                    </div>
                    <div className='mb-3'>
                      <input
                        type='password'
                        className='form-control'
                        placeholder='Password'
                      />
                    </div>
                    <div className='mb-3 d-flex justify-content-center'>
                      <button className='btn account-btn btn-user'>
                        Sing In
                      </button>
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

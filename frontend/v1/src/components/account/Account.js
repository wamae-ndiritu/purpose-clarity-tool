import { useState, useEffect } from "react";
import "./account.css";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  hideLoginErr,
  login,
  register,
  resetPassword,
  updatePassword,
} from "../../redux/actions/userActions";
import { validateInput } from "../../formValidation";

const Account = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const userLogin = useSelector((state) => state.user);
  const { loadingLogin, errorLogin, success } = userLogin;

  const user = useSelector((state) => state.user);
  const { loading, error, userInfo, resetPass, updatePass } = user;

  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const [showRegister, setShowRegister] = useState(false);
  const [inputErr, setInputErr] = useState(null);
  const [forgotPass, setForgotPass] = useState(false);
  const [showResetPass, setShowResetPass] = useState(false);
  const [forgotData, setForgotData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const userId = location.search
    ? location.search.split("?")[1].split("&")[0].split("=")[1]
    : null;

  const loginAction = location.search
    ? location.search.split("?")[1].split("&")[1].split("=")[1]
    : null;

  const handleChange = (e) => {
    setSignUpData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSignInChange = (e) => {
    setSignInData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleComponentToggle = () => {
    setShowRegister(!showRegister);
  };

  const handleSignUp = (e) => {
    e.preventDefault(e);
    setInputErr(null);
    const isValid = validateInput(signUpData);
    if (!isValid) {
      setInputErr("All inputs required!");
      return;
    }
    if (signUpData.confirmPassword !== signUpData.password) {
      setInputErr("Password do not match!");
      return;
    }
    dispatch(register(signUpData));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    setInputErr(null);
    const isValid = validateInput(signInData);
    if (!isValid) {
      setInputErr("All inputs required!");
      return;
    }
    dispatch(login(signInData));
  };

  const handleResetPass = (e) => {
    e.preventDefault();
    if (forgotData.email === "") {
      return;
    }
    dispatch(resetPassword(forgotData));
  };

  const handleForgotData = (e) => {
    setForgotData((prevState) => {
      const { name, value } = e.target;
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmitResetPassword = (e) => {
    e.preventDefault();
    setInputErr(null);
    if (forgotData.password === "" || forgotData.confirmPassword === "") {
      setInputErr("Please create and confirm password!");
      return;
    } else if (forgotData.password !== forgotData.confirmPassword) {
      setInputErr("Password do not match!");
      return;
    }
    dispatch(updatePassword(userId, { password: forgotData.password }));
  };

  useEffect(() => {
    if (userInfo.created) {
      setShowRegister(false);
    }
  }, [userInfo, navigate]);

  useEffect(() => {
    setInputErr(null);
    setSignUpData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setSignInData({
      email: "",
      password: "",
    });
  }, [showRegister]);

  useEffect(() => {
    if (success) {
      navigate("/");
    }
  }, [navigate, success]);

  useEffect(() => {
    if (loginAction) {
      setForgotPass(true);
      setShowResetPass(true);
    }
  }, [loginAction]);

  useEffect(() => {
    if (updatePass) {
      setShowResetPass(false);
      setForgotPass(false);
      setInputErr(null);
    }
  }, [updatePass]);

  function checkAndHide() {
    if (error || errorLogin) {
      dispatch(hideLoginErr());
    }
  }

  setInterval(checkAndHide, 5000);

  return (
    <div className='account-cont'>
      <div className='login-top'>
        <div className='top-left'>
          <div className='login-logo'>
            <img src='/kome-logo.png' alt='...' />
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
                    {inputErr && (
                      <span className='text-danger'>{inputErr}</span>
                    )}
                    {loading ? (
                      <span className='text-warning'>Loading...</span>
                    ) : (
                      error && <span className='text-danger'>{error}</span>
                    )}
                    <p>Use the form below to create yout account</p>
                    <div className='mb-3'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Enter your Name'
                        name='fullName'
                        value={signUpData.fullName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='mb-3'>
                      <input
                        type='email'
                        className='form-control'
                        placeholder='Enter your email'
                        name='email'
                        value={signUpData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='input-col-2 mb-3'>
                      <input
                        type='password'
                        className='form-control'
                        placeholder='Password'
                        name='password'
                        value={signUpData.password}
                        onChange={handleChange}
                      />
                      <input
                        type='password'
                        className='form-control'
                        placeholder='Confirm Password'
                        name='confirmPassword'
                        value={signUpData.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='mb-3 terms'>
                      <input type='checkbox' />
                      <p>Agree to Terms and Conditions</p>
                    </div>
                    <div className='mb-3 d-flex justify-content-center'>
                      <button
                        className='btn account-btn btn-user'
                        onClick={handleSignUp}
                      >
                        Sign Up
                      </button>
                    </div>
                  </section>
                ) : forgotPass ? (
                  showResetPass ? (
                    <section className='user'>
                      <h5 className='h5'>Reset Password?</h5>
                      {inputErr && (
                        <span className='text-danger'>{inputErr}</span>
                      )}
                      {loading ? (
                        <span className='text-warning'>Loading...</span>
                      ) : (
                        error && <span className='text-danger'>{error}</span>
                      )}
                      <p>Create a new password and confirm to continue</p>
                      <div className='mb-3'>
                        <input
                          type='password'
                          className='form-control'
                          placeholder='New Password'
                          name='password'
                          value={forgotData.password}
                          onChange={handleForgotData}
                        />
                      </div>
                      <div className='mb-3'>
                        <input
                          type='password'
                          className='form-control'
                          placeholder='Confirm New Password'
                          name='confirmPassword'
                          value={forgotData.confirmPassword}
                          onChange={handleForgotData}
                        />
                      </div>
                      <div className='mb-3 d-flex justify-content-center'>
                        <button
                          className='btn account-btn btn-user'
                          onClick={handleSubmitResetPassword}
                        >
                          Reset Password
                        </button>
                      </div>
                    </section>
                  ) : (
                    <section className='user'>
                      <h5 className='h5'>Reset Password</h5>
                      {loading ? (
                        <span className='text-warning'>Loading...</span>
                      ) : (
                        error && <span className='text-danger'>{error}</span>
                      )}
                      {resetPass && (
                        <div className='bg-success'>
                          <p className='alert alert-success'>
                            A reset password link has been sent to your{" "}
                            <strong>Email.</strong> Please check to continue...
                          </p>
                        </div>
                      )}
                      <p>Enter your email to reset password</p>
                      <div className='mb-3'>
                        <input
                          type='email'
                          className='form-control'
                          placeholder='Enter your email'
                          name='email'
                          value={forgotData.email}
                          onChange={handleForgotData}
                        />
                      </div>
                      <div className='mb-3 d-flex flex-column justify-content-center align-items-center'>
                        <button
                          className='btn account-btn btn-user'
                          onClick={handleResetPass}
                        >
                          Reset Password
                        </button>
                      </div>
                    </section>
                  )
                ) : (
                  <section className='user'>
                    <h5 className='h5'>Returning User?</h5>
                    {inputErr && (
                      <span className='text-danger'>{inputErr}</span>
                    )}
                    {loadingLogin ? (
                      <span className='text-warning'>Loading...</span>
                    ) : (
                      errorLogin && (
                        <span className='text-danger'>{errorLogin}</span>
                      )
                    )}
                    <p>Enter your email and password to login</p>
                    <div className='mb-3'>
                      <input
                        type='email'
                        className='form-control'
                        placeholder='Enter your email'
                        name='email'
                        value={signInData.email}
                        onChange={handleSignInChange}
                      />
                    </div>
                    <div className='mb-3'>
                      <input
                        type='password'
                        className='form-control'
                        placeholder='Password'
                        name='password'
                        value={signInData.password}
                        onChange={handleSignInChange}
                      />
                    </div>
                    <div className='mb-3 d-flex flex-column justify-content-center align-items-center'>
                      <button
                        className='btn account-btn btn-user'
                        onClick={handleSignIn}
                      >
                        Sign In
                      </button>
                      <div className='terms'>
                        <p
                          className='text-center mt-3 forgot-link'
                          onClick={() => setForgotPass(true)}
                        >
                          Forgot your password?
                        </p>
                      </div>
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

export default Account;

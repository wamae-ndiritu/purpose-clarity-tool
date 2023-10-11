import React from "react";

const LoginPage = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-1/4 bg-gray-700 p-8 rounded text-white'>
        <h6 className='uppercase bg-blue-500 rounded-full cursor-pointer w-max px-12 py-1 mx-auto text-orange-700 font-bold'>
          Login here
        </h6>
        <div className='mb-3'>
          <label htmlFor='name' className='font-semibold text-md'>
            Username
          </label>
          <input
            type='text'
            id='name'
            placeholder='johndoe'
            className='border rounded-lg p-1 outline-red'
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' placeholder='youemail@example.com' />
        </div>
        <div>
          <label htmlFor='pass_1'>Password</label>
          <input type='password' id='pass_1' placeholder='password' />
        </div>
        <div>
          <label htmlFor='pass_2'>Confirm Password</label>
          <input type='password' id='pass_2' placeholder='*********' />
        </div>
        <button className='my-3 font-semibold rounded-lg bg-blue-500 w-full py-1 hover:bg-orange-500'>
          Submit
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

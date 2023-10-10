import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Statement = () => {
  const navigate = useNavigate();
  const form = useSelector((state) => state.form);
  return (
    <div className='bg-slate-100'>
      <Navbar />
      <div className='w-full flex flex-col items-center gap-5 justify-center py-12'>
        <div className='mx-4 md:mx-0 md:w-3/5 bg-white p-4 md:p-8'>
          <div className='w-24 h-16'>
            <img src='/kome-logo.png' className='w-full' alt='KOMEBC logo' />
          </div>
          <h5 className='text-2xl text-center font-bold mb-4 text-gray-600'>
            Your Purpose Statement
          </h5>
          <p className='text-md text-gray-600'>{form.purpose_statement}</p>
        </div>
        <div className='w-full px-4 md:px-0 md:w-3/5 flex justify-between'>
          <button
            className='bg-red-500 text-white rounded px-4 py-1'
            onClick={() => navigate("/questions/answers")}
          >
            Go Back
          </button>
          <button className='bg-gray-700 text-white rounded px-4 py-1'>
            Download PDF
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Statement;

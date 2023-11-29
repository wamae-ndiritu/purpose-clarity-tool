import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const QuestionViewWrapper = ({ children }) => {
  return (
    <div className='bg-slate-100 main-container'>
      <Navbar />
      <div className='main-children'>{children}</div>
      <div className='footer-container'>
        <Footer />
      </div>
    </div>
  );
};

export default QuestionViewWrapper;

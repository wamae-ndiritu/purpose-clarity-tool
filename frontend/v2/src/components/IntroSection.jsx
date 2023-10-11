import React from "react";
import { Link } from "react-router-dom";

const IntroSection = () => {
  return (
    <section className='bg-gray-100 py-16 text-gray-600'>
      <div className='container mx-auto md:text-center px-8 md:px-4'>
        <h1 className='text-3xl md:text-4xl text-maroon-red font-bold mb-4'>
          Guided Purpose Clarification Journey
        </h1>
        <p className='text-lg mb-8'>
          The Purpose Clarification Tool (PCT) is meant to guide you on the
          journey of clarifying your purpose. It is possible that you may not
          clarify your purpose in a single sitting. You must keep refining your
          responses, and your purpose will be clearer with time. The true
          purpose is believed to be clarified through continuous experimentation
          with jobs or assignments rather than just thinking.
        </p>
        <p className='text-lg mb-8'>
          The PCT is grounded; for example, questions 1 and 2 ensure that your
          purpose is entrenched in reality, not just fancy desires, imaginations
          or high-sounding statements.
        </p>
        <Link
          to='/questions/purpose'
          className='border text-white bg-yellow-gold hover:bg-white hover:text-white py-2 px-6 rounded-full text-lg font-semibold inline-block transition duration-300'
        >
          <h6 className='text-white hover:text-gray-600'>Get Started</h6>
        </Link>
      </div>
    </section>
  );
};

export default IntroSection;

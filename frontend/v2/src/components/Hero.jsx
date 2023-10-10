import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className='py-16 bg-white'>
      <h1 className='text-3xl text-center text-gray-700 font-semibold mb-4'>
        Exploring Key Areas of Purpose Clarity
      </h1>
      <div className='px-8 grid grid-cols-1  md:grid-cols-3 gap-8 flex items-center justify-center'>
        {/* Left Column: Questions 1-4 */}
        <div className='col-span-1 space-y-6'>
          {/* Question 1 */}
          <Link
            to='/questions/purpose?page=1'
            className='flex items-center md:flex-row-reverse gap-3 hover:text-red-700'
          >
            <span className='w-8 h-8 bg-white border border-red-700 rounded flex items-center justify-center text-gray-800 font-semibold mr-2'>
              1
            </span>
            <h6>Who are you?</h6>
          </Link>
          {/* Question 2 */}
          <Link
            to='/questions/purpose?page=2'
            className='flex items-center md:flex-row-reverse gap-3 hover:text-red-700'
          >
            <span className='w-8 h-8 bg-white border border-red-700 rounded flex items-center justify-center text-gray-800 font-semibold mr-2'>
              2
            </span>
            <h6>What do you do well?</h6>
          </Link>
          {/* Question 3 */}
          <Link
            to='/questions/purpose?page=3'
            className='flex items-center md:flex-row-reverse gap-3 hover:text-red-700'
          >
            <span className='w-8 h-8 bg-white border border-red-700 rounded flex items-center justify-center text-gray-800 font-semibold mr-2'>
              3
            </span>
            <h6>What do you love to do?</h6>
          </Link>
          {/* Question 4 */}
          <Link
            to='/questions/purpose?page=4'
            className='flex items-center md:flex-row-reverse gap-3 hover:text-red-700'
          >
            <span className='w-8 h-8 bg-white border border-red-700 rounded flex items-center justify-center text-gray-800 font-semibold mr-2'>
              4
            </span>
            <h6>Whom do you intend to serve?</h6>
          </Link>
        </div>

        {/* Middle Column: Image */}
        <div className='col-span-1 flex items-center justify-center'>
          <img
            src='/assets/images/purpose-quiz.png'
            alt='Purpose Clarification'
            className='max-w-full'
          />
        </div>

        {/* Right Column: Questions 5-8 */}
        <div className='col-span-1 space-y-6'>
          {/* Question 5 */}
          <Link
            to='/questions/purpose?page=5'
            className='flex items-center hover:text-red-700'
          >
            <span className='w-8 h-8 bg-white border border-red-700 rounded flex items-center justify-center text-gray-800 font-semibold mr-2'>
              5
            </span>
            <h6>What do your beneficiaries need?</h6>
          </Link>
          {/* Question 6 */}
          <Link
            to='/questions/purpose?page=6'
            className='w-full flex items-center hover:text-red-700'
          >
            <span className='w-8 h-8 bg-white border border-red-700 rounded flex items-center justify-center text-gray-800 font-semibold mr-2'>
              6
            </span>
            <h6>How do your offerings transform your beneficiaries?</h6>
          </Link>
          {/* Question 7 */}
          <Link
            to='/questions/purpose?page=7'
            className='flex items-center hover:text-red-700'
          >
            <span className='w-8 h-8 bg-white border border-red-700 rounded flex items-center justify-center text-gray-800 font-semibold mr-2'>
              7
            </span>
            <h6>What activities can generate income for you?</h6>
          </Link>
          {/* Question 8 */}
          <Link
            to='/questions/purpose?page=8'
            className='flex items-center hover:text-red-700'
          >
            <span className='w-8 h-8 bg-white border border-red-700 rounded flex items-center justify-center text-gray-800 font-semibold mr-2'>
              8
            </span>
            <h6>What is your Purpose Statement?</h6>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";

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
          <div className='flex items-center md:flex-row-reverse gap-3'>
            <span className='w-8 h-8 bg-white border border-red-700 rounded flex items-center justify-center text-gray-800 font-semibold mr-2'>
              1
            </span>
            <h6>Who are you?</h6>
          </div>
          {/* Question 2 */}
          <div className='flex items-center md:flex-row-reverse gap-3'>
            <span className='w-8 h-8 bg-white border border-red-700 rounded flex items-center justify-center text-gray-800 font-semibold mr-2'>
              2
            </span>
            <h6>What do you do well?</h6>
          </div>
          {/* Question 3 */}
          <div className='flex items-center md:flex-row-reverse gap-3'>
            <span className='w-8 h-8 bg-white border border-red-700 rounded flex items-center justify-center text-gray-800 font-semibold mr-2'>
              3
            </span>
            <h6>What do you love to do?</h6>
          </div>
          {/* Question 4 */}
          <div className='flex items-center md:flex-row-reverse gap-3'>
            <span className='w-8 h-8 bg-white border border-red-700 rounded flex items-center justify-center text-gray-800 font-semibold mr-2'>
              4
            </span>
            <h6>Whom do you intend to serve?</h6>
          </div>
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
          <div className='flex items-center'>
            <span className='w-8 h-8 bg-white border border-red-700 rounded flex items-center justify-center text-gray-800 font-semibold mr-2'>
              5
            </span>
            <h6>What do your beneficiaries need?</h6>
          </div>
          {/* Question 6 */}
          <div className='w-full flex items-center'>
            <span className='w-8 h-8 bg-white border border-red-700 rounded flex items-center justify-center text-gray-800 font-semibold mr-2'>
              6
            </span>
            <h6>How do your offerings transform your beneficiaries?</h6>
          </div>
          {/* Question 7 */}
          <div className='flex items-center'>
            <span className='w-8 h-8 bg-white border border-red-700 rounded flex items-center justify-center text-gray-800 font-semibold mr-2'>
              7
            </span>
            <h6>What activities can generate income for you?</h6>
          </div>
          {/* Question 8 */}
          <div className='flex items-center'>
            <span className='w-8 h-8 bg-white border border-red-700 rounded flex items-center justify-center text-gray-800 font-semibold mr-2'>
              8
            </span>
            <h6>What is your Purpose Statement?</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

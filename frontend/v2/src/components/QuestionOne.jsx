import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addState } from "../redux/slices/formSlice";

const QuestionOne = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);
  const handleState = (e) => {
    dispatch(addState({ name: e.target.name, value: e.target.value }));
  };

  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-5 p-4 gap-5'>
      {/* Question Guide Card (1st Column) */}
      <div className='col-span-2 bg-white rounded-lg shadow p-6 w-full mb-4'>
        <h2 className='text-2xl font-bold mb-4 text-maroon-red'>
          Guide Questions
        </h2>
        <ul className='list-disc pl-6 mb-6 text-gray-600'>
          <li className='mb-2'>
            What are your identities, beliefs, and convictions?
          </li>
          <li className='mb-2'>What do you value?</li>
          <li className='mb-2'>
            What are your psychological or growth needs and motivations?
          </li>
          <li className='mb-2'>What are your natural or innate abilities?</li>
          <li className='mb-2'>
            What are your learned abilities (skills and knowledge)?
          </li>
          <li className='mb-2'>What is your personality?</li>
          <li className='mb-2'>What are your natural abilities or talents?</li>
          <li className='mb-2'>What are your passions and tendencies?</li>
        </ul>
      </div>
      {/* Question Description and Answer Input (2nd Column) */}
      <div className='col-span-3 flex flex-col justify-start items-start'>
        <h2 className='text-2xl md:text-2xl font-bold mb-4 mt-3 text-maroon-red'>
          1. Who Are You?
        </h2>
        <p className='text-md text-gray-600'>
          Purpose is clarified when something in you meets with something in the
          world that triggers you to take action. This question is meant to
          bring out something in you.
        </p>
        <p className='text-md text-gray-600 mt-3'>
          This question aims at two key aspects:
          <ol className='text-gray-600 list-decimal ml-8 text-sm'>
            <li>
              What resources do you have for your life’s assignment? The
              resources are not material or physical but natural abilities
              (unique strengths), learned abilities, values, and experiences.
            </li>
            <li>
              Why you and not someone else should be the bearer of the
              particular purpose? Clarifying your purpose starts with clarifying
              who you are. Knowing yourself is imperative in clarifying your
              purpose.
            </li>
          </ol>
        </p>

        {/* Answer Textarea */}
        <div className='w-full'>
          <h3 className='text-lg font-semibold mb-2 text-gray-600'>
            Your Answer
          </h3>
          <textarea
            className='w-full h-40 p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
            placeholder='Type your answer here...'
            name='identity'
            value={form.identity}
            onChange={handleState}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default QuestionOne;

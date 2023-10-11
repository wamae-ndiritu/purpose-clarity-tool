import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addState } from "../redux/slices/formSlice";

const QuestionTwo = () => {
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
            It is possible that you can do many things, but what are you really
            good at?
          </li>
          <li className='mb-2'>
            What do you feel uniquely qualified to teach or offer others?
          </li>
        </ul>
      </div>
      {/* Question Description and Answer Input (2nd Column) */}
      <div className='col-span-3 flex flex-col justify-start items-start'>
        <h2 className='text-2xl md:text-2xl font-bold mb-4 mt-3 text-maroon-red'>
          2. What do you do well?
        </h2>
        <p className='text-md text-gray-600'>
          The challenge here is that you may have unutilized potential; hence,
          you must search deeper than what you are currently good at. You may
          not even have the right words to explain what you are good at.
        </p>
        <p className='text-md text-gray-600 mt-3'>
          For example, a person who is faster on their hands than their legs may
          not even consider including this in the list of things they are good
          at. It does not have to be fancy or cool to others. It does not have
          to attract top dollars; you must be good at it.
        </p>

        {/* Answer Textarea */}
        <div className='w-full'>
          <h3 className='text-lg font-semibold mb-2 text-gray-600'>
            Your Answer
          </h3>
          <textarea
            className='w-full h-40 p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
            placeholder='Type your answer here...'
            name='strengths'
            value={form.strengths}
            onChange={handleState}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default QuestionTwo;

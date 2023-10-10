import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addState } from "../redux/slices/formSlice";

const QuestionSeven = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);
  const handleState = (e) => {
    dispatch(addState({ name: e.target.name, value: e.target.value }));
  };

  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-5 p-4 gap-5'>
      {/* Question Guide Card (1st Column) */}
      <div className='col-span-2 bg-white rounded-lg shadow p-6 w-full mb-4'>
        <h2 className='text-2xl font-bold mb-4 text-gray-600'>
          Guide Questions
        </h2>
        <ul className='list-disc pl-6 mb-6 text-gray-600'>
          <li className='mb-2'>
            What are the beneficiaries willing and able to pay for, and how
            much?
          </li>
          <li className='mb-2'>
            Are the payments enough to maintain a going concern?
          </li>
        </ul>
      </div>
      {/* Question Description and Answer Input (2nd Column) */}
      <div className='col-span-3 flex flex-col justify-start items-start'>
        <h2 className='text-2xl md:text-2xl font-bold mb-4 mt-3 text-gray-600'>
          7. What activities can generate income for you?
        </h2>
        <p className='text-sm text-gray-600'>
          Without this question, all the other questions lead to a hobby, and
          with only this question, you may end up as an unfulfilled ruthless
          money-making machine. This question gives you a vocation and
          multiplies the impact you can make.
        </p>

        {/* Answer Textarea */}
        <div className='w-full mt-3'>
          <textarea
            className='w-full h-40 p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
            placeholder='Type your answer here...'
            name='revenue_sources'
            value={form.revenue_sources}
            onChange={handleState}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default QuestionSeven;

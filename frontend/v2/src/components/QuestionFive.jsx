import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addState } from "../redux/slices/formSlice";

const QuestionFive = () => {
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
            What problems or challenges are affecting your potential
            beneficiaries?
          </li>
          <li className='mb-2'>How does your community want to be served?</li>
        </ul>
      </div>
      {/* Question Description and Answer Input (2nd Column) */}
      <div className='col-span-3 flex flex-col justify-start items-start'>
        <h2 className='text-2xl md:text-2xl font-bold mb-4 mt-3 text-maroon-red'>
          5. What do your beneficiaries need?
        </h2>
        <p className='text-sm text-gray-600'>
          Identify the needs of your beneficiaries that you are uniquely
          qualified to meet. Also, find out how you will contribute to the
          beneficiaries; this includes finding your voice, how to express
          yourself, and your positioning.
        </p>
        <p className='text-sm text-gray-600 mt-3'>
          Given that beneficiaries may have different and changing preferences,
          you should also constantly polish yourself. Search and experiment
          widely. It is why musicians experiment, sports people attempt several
          techniques or even sports, and writers search for new styles, even
          literary genres or categories.
        </p>

        {/* Answer Textarea */}
        <div className='w-full mt-3'>
          <textarea
            className='w-full h-40 p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
            placeholder='Type your answer here...'
            name='beneficiary_needs'
            value={form.beneficiary_needs}
            onChange={handleState}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default QuestionFive;

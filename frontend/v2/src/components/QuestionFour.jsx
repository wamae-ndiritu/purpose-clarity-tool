import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addState } from "../redux/slices/formSlice";

const QuestionFour = () => {
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
          <li className='mb-2'>Who is your core constituency?</li>
          <li className='mb-2'>
            Which group do you uniquely understand its struggles?
          </li>
          <li className='mb-2'>
            Which people, groups, or things/animals/environment do you enjoy
            serving?
          </li>
          <li className='mb-2'>Do they enjoy being served by you?</li>
        </ul>
      </div>
      {/* Question Description and Answer Input (2nd Column) */}
      <div className='col-span-3 flex flex-col justify-start items-start'>
        <h2 className='text-2xl md:text-2xl font-bold mb-4 mt-3 text-gray-600'>
          4. Whom do you intend to serve?
        </h2>
        <p className='text-sm text-gray-600'>
          Name your beneficiaries. Find your community. You may serve the whole
          world, but like Apple, which serves a ‘think different’ or creative
          community, you must have your own core group. Just because you can
          write doesn’t mean you can write for all age groups.
        </p>
        <p className='text-sm text-gray-600 mt-3'>
          There is a group you can serve better than your peers, so you choose
          that group, although it is the group that chooses you. Whichever way
          you look at it, you and the group must understand each other well.
          Another example is if you sell homes, many people need to own a home,
          but not all need a high-end home; some need a low-cost home. If you
          are in this space, you must pick a group you are passionate about
          serving.
        </p>

        {/* Answer Textarea */}
        <div className='w-full mt-3'>
          <textarea
            className='w-full h-40 p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
            placeholder='Type your answer here...'
            name='target_audience'
            value={form.target_audience}
            onChange={handleState}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default QuestionFour;

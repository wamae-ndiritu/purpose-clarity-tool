import React, { useState } from "react";

const QuestionSix = () => {
  const [answer, setAnswer] = useState("");

  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-5 p-4 gap-5'>
      {/* Question Guide Card (1st Column) */}
      <div className='col-span-2 bg-white rounded-lg shadow p-6 w-full mb-4'>
        <h2 className='text-2xl font-bold mb-4 text-gray-600'>
          Guide Questions
        </h2>
        <ul className='list-disc pl-6 mb-6 text-gray-600'>
          <li className='mb-2'>What is the output of your interventions?</li>
          <li className='mb-2'>
            What are the outcomes or impact of your interventions?
          </li>
        </ul>
      </div>
      {/* Question Description and Answer Input (2nd Column) */}
      <div className='col-span-3 flex flex-col justify-start items-start'>
        <h2 className='text-2xl md:text-2xl font-bold mb-4 mt-3 text-gray-600'>
          6. How do your offerings transform your beneficiaries?
        </h2>
        <p className='text-sm text-gray-600'>
          State not just the output but the outcome, which is the impact of your
          action. The answer to why you do what you do should be inbuilt into
          the impact you want to create.
        </p>
        <p className='text-sm text-gray-600 mt-3'>
          Personally, I inspire individuals and organisations to live meaningful
          lives. I inspire my beneficiaries through training and advisory, and
          as a result, they live meaningful lives. The beneficiaries transform
          from pursuing anything they can to pursuing what impacts society and
          fulfills them.
        </p>

        {/* Answer Textarea */}
        <div className='w-full mt-3'>
          <textarea
            className='w-full h-40 p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
            placeholder='Type your answer here...'
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default QuestionSix;

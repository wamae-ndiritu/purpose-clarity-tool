import React, { useState } from "react";

const QuestionOne = () => {
  const [answer, setAnswer] = useState("");

  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-5 p-4 gap-5'>
      {/* Question Guide Card (1st Column) */}
      <div className='col-span-2 bg-white rounded-lg shadow p-6 w-full mb-4'>
        <h2 className='text-2xl font-bold mb-4'>Guide Questions</h2>
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
        <h2 className='text-2xl md:text-3xl font-bold mb-4'>Who Are You?</h2>
        <p className='mb-4'>
          Purpose is clarified when something in you meets with something in the
          world that triggers you to take action. This question is meant to
          bring out something in you. This question aims at two key aspects: (1)
          what resources do you have for your life’s assignment? The resources
          are not material or physical but natural abilities (unique strengths),
          learned abilities, values, and experiences. (2) Why you and not
          someone else should be the bearer of the particular purpose?
          Clarifying your purpose starts with clarifying who you are. Knowing
          yourself is imperative in clarifying your purpose.
        </p>
        {/* Answer Textarea */}
        <div className='w-full'>
          <h3 className='text-lg font-semibold mb-2'>Your Answer</h3>
          <textarea
            className='w-full h-40 p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
            placeholder='Type your answer here...'
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          ></textarea>
        </div>
        {/* Save Button */}
        <button
          className='bg-green-400 text-white py-2 px-6 rounded hover:bg-green-600 mt-4'
          onClick={() => {
            // Handle save logic here
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default QuestionOne;

import React, { useState } from "react";

const QuestionThree = () => {
  const [answer, setAnswer] = useState("");

  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-5 p-4 gap-5'>
      {/* Question Guide Card (1st Column) */}
      <div className='col-span-2 bg-white rounded-lg shadow p-6 w-full mb-4'>
        <h2 className='text-2xl font-bold mb-4 text-gray-600'>
          Guide Questions
        </h2>
        <ul className='list-disc pl-6 mb-6 text-gray-600'>
          <li className='mb-2'>
            You can be good at several things, but what do you love to do?
          </li>
          <li className='mb-2'>What are your passions?</li>
          <li className='mb-2'>
            What do you have great interest and pleasure in doing?
          </li>
          <li className='mb-2'>
            What are the things that you have the inner energy to pursue?
          </li>
        </ul>
      </div>
      {/* Question Description and Answer Input (2nd Column) */}
      <div className='col-span-3 flex flex-col justify-start items-start'>
        <h2 className='text-2xl md:text-2xl font-bold mb-4 mt-3 text-gray-600'>
          3. What do you love to do?
        </h2>
        <p className='text-sm text-gray-600'>
          These are the loves of your life. You must see yourself as lucky or
          blessed to work on those pursuits. It is the kind of work you enjoy. I
          have concluded that sustainable good success is built on the path of
          less resistance internally.
        </p>
        <p className='text-sm text-gray-600 mt-3'>
          However, externally, this is not guaranteed; in most cases, it is the
          opposite. At this stage, include all things you love doing. You may
          include watching cartoons the whole day at this level if it is one of
          the things you love to do because it could indicate the underlying
          potential; however, by the time you answer all 7Qs, you will have
          narrowed down to things you love to do which help others and they are
          will to pay for them.
        </p>
        <p className='text-sm text-gray-600 mt-3'>
          You should not only dwell at the moment or present but also search in
          the past, things you love but were discouraged from doing or lacked
          opportunities to do. Include activities that get you into the flow.
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

export default QuestionThree;

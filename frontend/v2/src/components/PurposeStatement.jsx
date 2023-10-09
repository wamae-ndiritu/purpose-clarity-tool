import React, { useState } from "react";
import { Link } from "react-router-dom";

const PurposeStatement = () => {
  const [answer, setAnswer] = useState("");

  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-5 p-4 gap-5'>
      {/* Question Guide Card (1st Column) */}
      <div className='col-span-2 bg-white rounded-lg shadow p-6 w-full mb-4'>
        <h5 className='text-2xl font-bold mb-4 text-gray-600'>
          Here are your answers to the 7Qs. You can click to edit.
        </h5>
        <div className='mb-2'>
          <Link
            to='/questions/purpose?page=1'
            className='text-lg text-gray-600 font-semibold hover:text-green-500 hover:underline'
          >
            <h6>1. Who are you?</h6>
          </Link>
          <p className='text-sm text-gray-600'>
            Without this question, all the other questions lead to a hobby, and
            with only this question, you may end up as an unfulfilled ruthless
            money-making machine. This question gives you a vocation and
            multiplies the impact you can make.
          </p>
        </div>
        <div className='mb-2'>
          <Link
            to='/questions/purpose?page=2'
            className='text-lg text-gray-600 font-semibold hover:text-green-500 hover:underline'
          >
            <h6>2. What do you do well?</h6>
          </Link>
          <p className='text-sm text-gray-600'>
            This question gives you a vocation and multiplies the impact you can
            make.
          </p>
        </div>
        <div className='mb-2'>
          <Link
            to='/questions/purpose?page=3'
            className='text-lg text-gray-600 font-semibold hover:text-green-500 hover:underline'
          >
            <h6>3. What do you love to do?</h6>
          </Link>
          <p className='text-sm text-gray-600'>
            This question gives you a vocation and multiplies the impact you can
            make.
          </p>
        </div>
        <div className='mb-2'>
          <Link
            to='/questions/purpose?page=4'
            className='text-lg text-gray-600 font-semibold hover:text-green-500 hover:underline'
          >
            <h6>4. Whom do you intend to serve?</h6>
          </Link>
          <p className='text-sm text-gray-600'>
            This question gives you a vocation and multiplies the impact you can
            make.
          </p>
        </div>
        <div className='mb-2'>
          <Link
            to='/questions/purpose?page=5'
            className='text-lg text-gray-600 font-semibold hover:text-green-500 hover:underline'
          >
            <h6>5. What do your beneficiaries need?</h6>
          </Link>
          <p className='text-sm text-gray-600'>
            This question gives you a vocation and multiplies the impact you can
            make.
          </p>
        </div>
        <div className='mb-2'>
          <Link
            to='/questions/purpose?page=6'
            className='text-lg text-gray-600 font-semibold hover:text-green-500 hover:underline'
          >
            <h6>6. How do your offerings transform your beneficiaries?</h6>
          </Link>
          <p className='text-sm text-gray-600'>
            This question gives you a vocation and multiplies the impact you can
            make.
          </p>
        </div>
        <div className='mb-2'>
          <Link
            to='/questions/purpose?page=7'
            className='text-lg text-gray-600 font-semibold hover:text-green-500 hover:underline'
          >
            <h6>7. What activities can generate income for you?</h6>
          </Link>
          <p className='text-sm text-gray-600'>
            This question gives you a vocation and multiplies the impact you can
            make.
          </p>
        </div>
      </div>
      {/* Question Description and Answer Input (2nd Column) */}
      <div className='col-span-3 flex flex-col justify-start items-start'>
        <h2 className='text-2xl md:text-2xl font-bold mb-4 mt-3 text-gray-600'>
          8. The Purpose Statement
        </h2>
        <p className='text-sm text-gray-600 mb-2'>
          Turn your responses to the 7 questions above into a purpose statement
          using the structure below.
        </p>
        <p className='text-sm text-gray-600'>
          The purpose statement must be a concise, memorable and inspiring
          declaration. I will use my purpose,{" "}
          <i className='text-purple-500'>
            “I inspire individuals and organisations to live meaningful lives,”
          </i>{" "}
          to provide a structure for the purpose statement.
        </p>
        <p className='text-sm text-gray-600'>
          Purpose has three main dimensions: directional, transformational and
          motivational.
          <ul className='list-decimal ml-8'>
            <li className='mb-2'>
              Directional
              <p>
                The directional dimension includes two aspects
                <ul className='list-disc ml-8'>
                  <li>
                    the inspired actions you take or the path you follow, and,
                  </li>
                  <li>for whom you do it.</li>
                </ul>
                For example, based on my purpose, the directional dimension is
                <i className='text-purple-500'>
                  “I inspire individuals and organisations”.
                </i>
              </p>
            </li>
            <li className='mb-2'>
              Transformational
              <p>
                The transformational dimension includes the benefits your
                beneficiaries accrue from your actions. This dimension captures
                the intended impact on the recipients. It focuses on the
                difference one makes in people’s lives and society: the impact.
                For example, the transformational dimension of my purpose is{" "}
                <i className='text-purple-500'>“to live meaningful lives”</i>.
              </p>
            </li>
            <li className='mb-2'>
              Motivational
              <p>
                The motivational dimension is derived from the language and
                worthiness of the cause as captured through the directional and
                transformational dimensions. Both directional and
                transformational dimensions should be inspiring to awaken
                motivation. The directional and transformational aspects must be
                noble, compelling and inspirational. It should enlist or awaken
                the energies and enthusiasm you need to make your purpose a
                reality. Purpose comes with its energy. It is self-energising.
              </p>
            </li>
          </ul>
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

export default PurposeStatement;
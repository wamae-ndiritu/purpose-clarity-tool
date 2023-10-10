import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import Loading from "../utils/Loading";

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;

const ShareModal = ({ closeModal }) => {
  const form = useSelector((state) => state.form);
  const {
    identity,
    strengths,
    passions,
    target_audience,
    beneficiary_needs,
    impact,
    revenue_sources,
    purpose_statement,
  } = form;

  const questions = {
    question_1: "Who are you?",
    question_2: "What do you do well?",
    question_3: "What do you love to do?",
    question_4: "Whom do you intend to serve?",
    question_5: "What do your beneficiaries need?",
    question_6: "How do your offerings transform your beneficiaries?",
    question_7: "What activities can generate income for you?",
    question_8: "The Purpose Statement",
  };

  const answers = {
    answer_1: identity,
    answer_2: strengths,
    answer_3: passions,
    answer_4: target_audience,
    answer_5: beneficiary_needs,
    answer_6: impact,
    answer_7: revenue_sources,
    answer_8: purpose_statement,
  };

  const templateParams = {
    user_name: "Ndiritu Wa Wamai",
    user_email: "nelitetech@gmail.com",
    ...answers,
    ...questions,
  };

  const [loading, setLoading] = useState(false);

  const shareResponses = () => {
    setLoading(true);
    emailjs
      .send(
        "service_iz21rs6",
        "template_niqb61f",
        templateParams,
        "KehPQQgwKRR6ja30g"
      )
      .then((response) => {
        setLoading(false);
        console.log(response.text);
        closeModal();
      })
      .catch((error) => {
        console.log("FAILED...", error);
        closeModal();
      });
  };
  return (
    <div class='fixed inset-0 flex items-center justify-center z-50'>
      <div class='fixed inset-0 bg-black opacity-50'></div>
      <div class='w-1/3 bg-white p-8 rounded-lg z-50'>
        <button
          class='absolute top-2 right-2 text-gray-700 hover:text-gray-900'
          onClick='closeModal'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
        <div>
          <h2 class='text-2xl font-semibold mb-4'>Share your Responses</h2>
          {loading && <Loading />}
          <p class='text-gray-700 mb-6'>
            By consenting to share your responses with the coach, you are
            agreeing to receive feedback aimed at enhancing your answers for a
            more refined sense of purpose. This process is designed to provide
            valuable insights and support in your journey toward a clearer and
            more meaningful purpose.
          </p>
          <div className='w-full flex justify-between'>
            <button
              class='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded'
              onClick={shareResponses}
            >
              OK
            </button>
            <button
              class='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded'
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;

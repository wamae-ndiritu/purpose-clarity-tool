import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getPurposeStory } from "../redux/actions/purposeActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../utils/Loading";
import Message from "../utils/Message";
import ShareModal from "./ShareModal";

const ViewAnswers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const purposeStory = useSelector((state) => state.purposeStory);
  const { loading, error, item } = purposeStory;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const downloadPDF = () => {
    const element = document.getElementById("printable");

    if (!element) {
      console.error("Element not found");
      return;
    }

    const printWindow = window.open("", "", "width=600,height=600");
    printWindow.document.open();
    printWindow.document.write(`
    <html>
      <head>
        <title>My Purpose Story</title>
        <style>
          body { font-family: Arial, sans-serif; color: rgb(75 85 99); }
          h2 {font-size: 14px, margin: 0, padding: 0; color: #000000;}
          p {font-size: 14px, color: #000000; padding: 3px;}
        </style>
      </head>
      <body>
        ${element.innerHTML}
      </body>
    </html>
  `);
    printWindow.document.close();

    printWindow.print();
    printWindow.onafterprint = () => {
      printWindow.close();
    };
  };

  return (
    <div className='w-full flex flex-col items-center gap-5 justify-center py-12'>
      {isModalOpen && <ShareModal closeModal={closeModal} />}
      <div className='mx-4 md:mx-0 md:w-3/5 bg-white p-4 md:p-8'>
        <h5 className='text-2xl text-center font-bold mb-4 text-gray-600'>
          Here are your answers. You can click the title to edit.
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
        <div className='mb-2'>
          <Link
            to='/questions/purpose?page=8'
            className='text-lg text-gray-600 font-semibold hover:text-green-500 hover:underline'
          >
            <h6>8. The purpose statement</h6>
          </Link>
          <p className='text-sm text-gray-600'>
            This question gives you a vocation and multiplies the impact you can
            make.
          </p>
        </div>
      </div>
      <div className='w-full px-4 md:px-0 md:w-3/5 flex justify-between'>
        <button
          className='bg-red-500 text-white rounded px-4 py-1'
          onClick={() => navigate("/questions/purpose?page=8")}
        >
          Go Back to Form
        </button>
        <div className='flex items-center gap-3'>
          <div className='cursor-pointer' onClick={openModal}>
            🔄
          </div>
          <div className='cursor-pointer' onClick={downloadPDF}>
            ⬇️
          </div>
          {/* <button className='bg-green-500 text-white rounded px-4 py-1'>
            Download PDF
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ViewAnswers;

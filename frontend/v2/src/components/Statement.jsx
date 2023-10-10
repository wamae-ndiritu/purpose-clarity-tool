import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Statement = () => {
  const navigate = useNavigate();
  const form = useSelector((state) => state.form);

  const contentRef = useRef(null);

  const handleDownload = () => {
    const content = contentRef.current;

    html2canvas(content).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape");
      const imgWidth = 280;
      const aspectRatio = canvas.width / canvas.height;
      const imgHeight = imgWidth / aspectRatio;

      // Add the canvas image to the PDF
      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save("purpose-statement.pdf");
    });
  };
  return (
    <div className='bg-slate-100'>
      <Navbar />
      <div className='w-full flex flex-col items-center gap-5 justify-center py-12'>
        <div
          className='mx-4 md:mx-0 md:w-3/5 bg-white p-4 md:p-8'
          ref={contentRef}
        >
          <div className='w-24 h-16'>
            <img src='/kome-logo.png' className='w-full' alt='KOMEBC logo' />
          </div>
          <h5 className='text-2xl text-center font-bold mb-4 text-gray-600'>
            Your Purpose Statement
          </h5>
          <p className='text-md text-gray-600'>{form.purpose_statement}</p>
        </div>
        <div className='w-full px-4 md:px-0 md:w-3/5 flex justify-between'>
          <button
            className='bg-red-500 text-white rounded px-4 py-1'
            onClick={() => navigate("/questions/answers")}
          >
            Go Back
          </button>
          <button
            className='bg-gray-700 text-white rounded px-4 py-1'
            onClick={handleDownload}
          >
            Download PDF
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Statement;

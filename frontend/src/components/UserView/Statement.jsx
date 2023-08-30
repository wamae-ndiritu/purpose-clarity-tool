import React, { useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../../redux/actions/purposeActions";
import NavBar from "../NavBar";

const Statement = () => {
  const contentRef = useRef(null);
  const dispatch = useDispatch();
  const purpose = useSelector((state) => state.purpose);
  const { item } = purpose;

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

  useEffect(() => {
    dispatch(getItem());
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <div className='container mt-3'>
        <div className='row d-flex justify-content-center'>
          <div
            className='shadow-lg col-lg-8 col-md-8 col-sm-10 col-11'
            style={{ backgroundColor: "#fff" }}
          >
            <div className='cert-wrapper' ref={contentRef}>
              <div className='logo'>
                <img src='/kome-logo.png' alt='...' />
              </div>
              <div className='cert-info'>
                <h4 className='h4'>You Purpose Statement</h4>
                <p>{item?.purpose_statement}</p>
              </div>
            </div>
          </div>
        </div>
        <span className='btn-cont'>
          <button onClick={handleDownload}>Download Statement</button>
        </span>
      </div>
    </>
  );
};

export default Statement;

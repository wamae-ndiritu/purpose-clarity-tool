import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Statement = () => {
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
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='shadow-lg col-8'>
          <div className='cert-wrapper' ref={contentRef}>
            <div className='logo'>
              <img src='/kome-logo.png' alt='...' />
            </div>
            <div className='cert-info'>
              <h4 className='h4'>You Purpose Statement</h4>
              <p>
                Jelly sweet roll jelly beans biscuit pie macaroon chocolate
                donut. Carrot cake caramels pie sweet apple pie tiramisu carrot
                cake. Marzipan marshmallow croissant tootsie roll lollipop.
                Cupcake lemon drops bear claw gummies. Jelly bear claw gummi
                bears lollipop cotton candy gummi bears chocolate bar cake
                cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans
                tiramisu pudding. Toffee soufflé chocolate cake pastry brownie.
                Oat cake halvah sweet roll cotton candy croissant lollipop.
                Macaroon tiramisu chocolate bar candy candy carrot cake jelly
                sweet. Gummies croissant macaroon dessert. Chocolate cake dragée
                pie.
              </p>
            </div>
          </div>
        </div>
      </div>
      <span className='btn-cont'>
        <button onClick={handleDownload}>Download Statement</button>
      </span>
    </div>
  );
};

export default Statement;

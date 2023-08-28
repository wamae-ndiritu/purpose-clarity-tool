import React, { useEffect, useState } from "react";
import Firststep from "./Firststep";
import Secondstep from "./Secondstep";
import Thirdstep from "./Thirdstep";
import Forthstep from "./Forthstep";
import Fifthstep from "./Fifthstep";
import Sixthstep from "./Sixthstep";
import Seventhstep from "./Seventhstep";
import Answers from "./Answers";
import { useLocation, useNavigate } from "react-router-dom";

//container of all the steps
const Form = ({ token }) => {
  const navigate = useNavigate();

  const handlenav = () => {
    navigate("/answers", {
      state: {
        fomData,
      },
    });
  };
  const [page, setPage] = useState(0); //keeps track of which step/page we're in
  const [fomData, setFomData] = useState({
    you: "",
    what: "",
    love: "",
    serve: "",
    beneficiaries: "",
    transform: "",
    income: "",
  });
  //get the form answers if already entered. set page to last

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {};

  const FormTitles = [
    "Who are you?",
    "What do you do well?",
    "What do you love to do?",
    "Whom do you intend to serve?",
    "What do your beneficiaries need?",
    "How do your offerings transform your beneficiaries?",
    "What activities can generate income for you?",
  ];

  const pageDisplay = () => {
    if (page === 0) {
      return <Firststep fomData={fomData} setFomData={setFomData} />;
    } else if (page === 1) {
      return <Secondstep fomData={fomData} setFomData={setFomData} />;
    } else if (page === 2) {
      return <Thirdstep fomData={fomData} setFomData={setFomData} />;
    } else if (page === 3) {
      return <Forthstep fomData={fomData} setFomData={setFomData} />;
    } else if (page === 4) {
      return <Fifthstep fomData={fomData} setFomData={setFomData} />;
    } else if (page === 5) {
      return <Sixthstep fomData={fomData} setFomData={setFomData} />;
    } else {
      return <Seventhstep fomData={fomData} setFomData={setFomData} />;
    }
  };

  return (
    <div style={{ backgroundColor: "aliceblue" }} className='fom'>
      <div className='progressbar' style={{ marginLeft: "50rem" }}>
        <div
          style={{
            width: `${(100 / FormTitles.length) * (page + 1)}%`,
            backgroundColor: "grey",
          }}
        ></div>
      </div>
      <div className='fomcontainer'>
        <div className='header'>
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className='body'>{pageDisplay()}</div>
        <div className='footer'></div>
        <button
          class='btn btn-secondary'
          disabled={page == 0}
          style={{ width: "200px", marginBottom: "5rem",backgroundColor:"maroon" }}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </button>
        <button
          style={{ width: "200px", marginBottom: "5rem", marginLeft: "10px",backgroundColor:"maroon" }}
          class='btn btn-secondary'
          onClick={() => {
            if (page === FormTitles.length - 1) {
              // alert("FORM SUBMITTED");//submit to an API also display answers so user can see
              console.log(fomData);

              setIsSubmitted(true);

              setFomData(fomData);

              //  handleSubmit()

              //update the state when submit form

              handlenav();
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === FormTitles.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
      {isSubmitted && <Answers />}
    </div>
  );
};

export default Form;

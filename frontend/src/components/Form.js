import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "./Question";
import { steps } from "./formStepData";

const Form = () => {
  const navigate = useNavigate();

  const handlenav = () => {
    navigate("/answers", {
      state: {
        fomData,
      },
    });
  };
  const [fomData, setFomData] = useState({
    you: "",
    what: "",
    love: "",
    serve: "",
    beneficiaries: "",
    transform: "",
    income: "",
  });
  const [stepItem, setStepItem] = useState(steps[0]);

  const handleToggleQuestion = (id, type) => {
    let itemId;
    if (type === "next") {
      itemId = id + 1;
    } else if (type === "prev") {
      itemId = id - 1;
    }
    const nextItem = steps.find((step) => step.id === itemId);
    setStepItem(nextItem);
  };

  const handleQuestion = (id) => {
    const item = steps.find((step) => step.id === id);
    setStepItem(item);
  };

  return (
    <div className='container'>
      <div className='row fom'>
        <div className='progressbar' style={{ marginLeft: "50rem" }}>
          <div
            style={{
              width: `${(100 / steps.length) * (stepItem.id + 1)}%`,
              backgroundColor: "grey",
            }}
          ></div>
        </div>
        <div className='fomcontainer'>
          <div className='header'>
            <h1>
              {stepItem.id}. {stepItem.title}
            </h1>
          </div>
          <div className='body'>
            <Question
              fomData={fomData}
              setFomData={setFomData}
              stepItem={stepItem}
            />
          </div>
          <div className='btns'>
            <button
              class='btn btn-secondary'
              disabled={stepItem.id === 1}
              onClick={() => {
                handleToggleQuestion(stepItem.id, "prev");
              }}
            >
              Prev
            </button>
            <button
              class='btn btn-secondary'
              onClick={() => {
                if (stepItem.id === steps.length - 1) {
                  setFomData(fomData);
                  handlenav();
                } else {
                  handleToggleQuestion(stepItem.id, "next");
                }
              }}
            >
              {setStepItem.id === steps.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
          <div className='pages-cont'>
            {steps.map((step) => {
              const { id } = step;
              console.log(stepItem.id, id);
              return (
                <span
                  className={`${stepItem.id === id && "active-span"}`}
                  key={id}
                  onClick={() => handleQuestion(id)}
                >
                  {id}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

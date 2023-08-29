import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "./Question";
import { steps } from "./formStepData";
import { useSelector, useDispatch } from "react-redux";
import { addState } from "../redux/slices/formSlice";

const Form = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);
  console.log(form);
  const navigate = useNavigate();

  const handlenav = () => {
    dispatch(addState({ name: stepItem.inputName, value: input }));
    setInput("");
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
  const [input, setInput] = useState("");
  const [stepItem, setStepItem] = useState(steps[0]);

  const handleToggleQuestion = (id, type) => {
    dispatch(addState({ name: stepItem.inputName, value: input }));
    setInput("");
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
    dispatch(addState({ name: stepItem.inputName, value: input }));
    setInput("");
    const item = steps.find((step) => step.id === id);
    setStepItem(item);
  };

  return (
    <div className='container form-container'>
      <div className='row progress-row'>
        <div className='progressbar'>
          <div
            style={{
              width: `${(100 / steps.length) * stepItem.id + 1}%`,
              backgroundColor: "#9F2232",
            }}
          ></div>
        </div>
      </div>
      <div className='row fom'>
        <div className='body'>
          <Question
            fomData={fomData}
            setFomData={setInput}
            stepItem={stepItem}
            val={input}
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
              if (stepItem.id === steps.length) {
                handlenav();
              } else {
                handleToggleQuestion(stepItem.id, "next");
              }
            }}
          >
            {stepItem.id === steps.length ? "Submit" : "Next"}
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
  );
};

export default Form;

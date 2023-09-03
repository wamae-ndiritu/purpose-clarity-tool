import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Question from "./Question";
import { steps } from "./formStepData";
import { useDispatch, useSelector } from "react-redux";
import { addState } from "../redux/slices/formSlice";
import NavBar from "./NavBar";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useSelector((state) => state.form);

  const location = useLocation();
  const quizNo = location.search ? Number(location.search.split("=")[1]) : null;

  const handlenav = () => {
    dispatch(
      addState({
        name: stepItem.inputName,
        value: input,
      })
    );
    setInput("");
    navigate("/answers");
  };
  const [input, setInput] = useState(form.you);
  const [stepItem, setStepItem] = useState(steps[0]);

  const handleToggleQuestion = (id, type) => {
    dispatch(
      addState({
        name: stepItem.inputName,
        value: input || form[stepItem.inputName],
      })
    );
    let itemId;
    if (type === "next") {
      itemId = id + 1;
    } else if (type === "prev") {
      if (id === 1) {
        return;
      }
      itemId = id - 1;
    }
    const nextItem = steps.find((step) => step.id === itemId);
    setStepItem(nextItem);
    setInput(() => {
      return form[nextItem.inputName];
    });
  };

  const handleQuestion = (id) => {
    dispatch(
      addState({
        name: stepItem.inputName,
        value: input || form[stepItem.inputName],
      })
    );
    const item = steps.find((step) => step.id === id);
    setStepItem(item);
    setInput(() => {
      return form[item.inputName];
    });
  };

  useEffect(() => {
    if (quizNo) {
      setStepItem(steps[quizNo - 1]);
      setInput(() => {
        return form[steps[quizNo - 1].inputName];
      });
    }
  }, [quizNo]);

  return (
    <>
      <NavBar />
      <div className='container form-container mt-3'>
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
          <Question
            setInput={setInput}
            stepItem={stepItem}
            val={input}
            edit={quizNo}
          />
          <div className='btns'>
            <div
              className='btn-submit btn-div'
              disabled={stepItem.id === 1}
              onClick={() => {
                handleToggleQuestion(stepItem.id, "prev");
              }}
            >
              <span>
                <i class='fa fa-angle-left' aria-hidden='true'></i>
                <h6>Prev</h6>
              </span>
            </div>
            <div className='pages-cont'>
              {steps.map((step) => {
                const { id } = step;
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
            <div
              className='btn-submit btn-div'
              onClick={() => {
                if (stepItem.id === steps.length) {
                  handlenav();
                } else {
                  handleToggleQuestion(stepItem.id, "next");
                }
              }}
            >
              {stepItem.id === steps.length ? (
                <h6>Submit</h6>
              ) : (
                <span>
                  <h6>Next </h6>
                  <i class='fa fa-angle-right' aria-hidden='true'></i>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

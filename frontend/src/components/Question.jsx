import React from "react";

export default function Question({ val, stepItem, setInput }) {
  const { desc, inputName, guideItems } = stepItem;

  return (
    <div className='input-wrapper'>
      <div className='input-left'>
        <h6 className='h6 form-title'>
          <span>{stepItem.id}.</span> {stepItem.title}
        </h6>
        {desc}
        <div className='mb-3 mt-4'>
          <textarea
            className='form-control'
            placeholder={`Write your answer to question ${stepItem.id} here...`}
            rows='5'
            name={inputName}
            value={val}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
      <div className='input-right card text-bg-primary mb-3'>
        <div className='card-header h5 text-center'>
          Use this questions as a guide
        </div>
        <div className='card-body'>
          <ul>
            {guideItems.map((item, index) => {
              return (
                <li className='card-title' key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

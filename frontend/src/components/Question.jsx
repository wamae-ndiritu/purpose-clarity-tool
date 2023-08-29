import React from "react";

const Description = ({ desc }) => {
  return (
    <p style={{ color: "maroon" }} dangerouslySetInnerHTML={{ __html: desc }} />
  );
};

export default function Question({ val, stepItem, fomData, setFomData }) {
  const { desc, inputName, guideItems } = stepItem;

  return (
    <div className='input-wrapper'>
      <div className='input-left'>
        <h6 className='h6 form-title'>
          <span>{stepItem.id}.</span> {stepItem.title}
        </h6>
        <Description desc={desc} />
        <div class='mb-3 mt-4'>
          <textarea
            class='form-control'
            placeholder={`Write your answer to question ${stepItem.id} here...`}
            rows='10'
            name={inputName}
            value={val}
            onChange={(e) => {
              setFomData(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
      <div className='input-right card text-bg-primary mb-3'>
        <div class='card-header h5 text-center'>
          Use this questions as a guide
        </div>
        <div class='card-body'>
          <ul>
            {guideItems.map((item, index) => {
              return (
                <li class='card-title' key={index}>
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

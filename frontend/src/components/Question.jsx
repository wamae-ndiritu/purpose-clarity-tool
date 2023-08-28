import React from "react";

export default function Question({ stepItem, fomData, setFomData }) {
  const { desc, inputName, guideItems } = stepItem;
  return (
    <div className='input-wrapper'>
      <div className='input-left'>
        <p style={{ color: "maroon" }}>{desc}</p>
        <div class='mb-3 mt-4'>
          <textarea
            class='form-control'
            placeholder='firstAnswer'
            rows='10'
            name={inputName}
            value={fomData.inputName}
            onChange={(e) => {
              setFomData({ ...fomData, [e.target.name]: e.target.value });
            }}
          ></textarea>
        </div>
      </div>
      <div
        className='input-right card text-bg-primary mb-3'
        style={{
          maxWidth: "30rem",
          color: "white",
          backgroundColor: "maroon",
        }}
      >
        <div class='card-header'>Use this questions as a guide</div>
        <div class='card-body'>
          {guideItems.map((item, index) => {
            return (
              <h5 class='card-title' key={index}>
                {item}
              </h5>
            );
          })}
        </div>
      </div>
    </div>
  );
}

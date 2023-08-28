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
        <Description desc={desc} />
        <div class='mb-3 mt-4'>
          <textarea
            class='form-control'
            placeholder='firstAnswer'
            rows='10'
            name={inputName}
            value={val}
            onChange={(e) => {
              setFomData(e.target.value);
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

import React from "react";
import Purposestatement from "./Purposestatement";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Answers() {
  const form = useSelector((state) => state.form);
  const { you, what, love, serve, beneficiaries, transform, income } = form;
  const { state } = useLocation();

  console.log(form);

  return (
    <div style={{ backgroundColor: "aliceblue" }}>
      <h2>Here are your answers</h2>
      <br />
      <h2>Who are you?</h2>
      <p>{you}</p>
      <h2>What do you do well?</h2>
      <p>{what}</p>
      <h2>What do you love to do?</h2>
      <p>{love}</p>
      <h2>Whom do you intend to serve?</h2>
      <p>{serve}</p>
      <h2>What do your beneficiaries need?</h2>
      <p>{beneficiaries}</p>
      <h2>How do your offerings transform your beneficiaries?</h2>
      <p>{transform}</p>
      <h2>What activities can generate income for you?</h2>
      <p>{income}</p>

      <div
        class='card text-bg-primary mb-3'
        style={{
          // maxWidth: "60rem",
          // marginLeft: "1000px",
          marginRight: "0px",
          // marginTop: "-420px",
          color: "white",
          backgroundColor: "maroon",
          height: "750px",
        }}
      >
        <div class='card-header'>Write your purpose-statement</div>
        <div class='card-body'>{<Purposestatement />}</div>
      </div>
    </div>
  );
}

export default Answers;

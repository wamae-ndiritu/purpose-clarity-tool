import React from "react";
import Purposestatement from "./Purposestatement";
import { useLocation } from "react-router-dom";

function Answers() {
  const { state } = useLocation();

  return (
    <div style={{backgroundColor:"aliceblue"}}>
      <h2>Here are your answers</h2><br/>
      <h2>Who are you?</h2>
      <p>{state?.fomData.you}</p>
      <h2>What do you do well?</h2>
      <p>{state?.fomData.what}</p>
      <h2>What do you love to do?</h2>
      <p>{state?.fomData.love}</p>
      <h2>Whom do you intend to serve?</h2>
      <p>{state?.fomData.serve}</p>
      <h2>What do your beneficiaries need?</h2>
      <p>{state?.fomData.beneficiaries}</p>
      <h2>How do your offerings transform your beneficiaries?</h2>
      <p>{state?.fomData.transform}</p>
      <h2>What activities can generate income for you?</h2>
      <p>{state?.fomData.income}</p>

      <div class="card text-bg-primary mb-3" style={{maxWidth: "60rem",marginLeft:"1000px",marginRight:"0px",marginTop:"-420px",color:"white",backgroundColor:"maroon",height:"750px"}}>
      <div class="card-header">Write your purpose-statement</div>
      <div class="card-body">{<Purposestatement />}</div>
        </div>
    </div>
  );
}

export default Answers;



import React from "react";
import Purposestatement from "./Purposestatement";
import { useSelector } from "react-redux";

function Answers() {
  const form = useSelector((state) => state.form);
  const { you, what, love, serve, beneficiaries, transform, income } = form;

  return (
    <div className='container'>
      <div className='answers-row'>
        <div className='answers-left'>
          <Purposestatement />
        </div>
        <div class='card answers-right text-bg-primary mb-3'>
          <div class='card-header answers-header'>
            Here are your answers to the 7 key questions, you can click at any
            of them to edit.
          </div>
          <div class='card-body'>
            <ul className='answers-ul'>
              <li>
                <h6>1. Who are you?</h6>
                <p>a. {you}</p>
              </li>
              <li>
                <h6>What do you do well?</h6>
                <p>{what}</p>
              </li>
              <li>
                <h6>What do you love to do?</h6>
                <p>{love}</p>
              </li>
              <li>
                <h6>Whom do you intend to serve?</h6>
                <p>{serve}</p>
              </li>
              <li>
                <h6>What do your beneficiaries need?</h6>
                <p>{beneficiaries}</p>
              </li>
              <li>
                <h6>How do your offerings transform your beneficiaries?</h6>
                <p>{transform}</p>
              </li>
              <li>
                <h6>What activities can generate income for you?</h6>
                <p>{income}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Answers;

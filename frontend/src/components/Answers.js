import React from "react";
import Purposestatement from "./Purposestatement";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Answers() {
  const form = useSelector((state) => state.form);
  const { you, what, love, serve, beneficiaries, transform, income } = form;

  const data = [
    {
      id: 1,
      question: "Who are you?",
      answer: you,
    },
    {
      id: 2,
      question: "What do you do well?",
      answer: what,
    },
    {
      id: 3,
      question: "What do you love to do?",
      answer: love,
    },
    {
      id: 4,
      question: "Whom do you intend to serve?",
      answer: serve,
    },
    {
      id: 5,
      question: "What do your beneficiaries need?",
      answer: beneficiaries,
    },
    {
      id: 6,
      question: "How do your offerings transform your beneficiaries?",
      answer: transform,
    },
    {
      id: 7,
      question: "What activities can generate income for you?",
      answer: income,
    },
  ];

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
              {data.map((item) => {
                const { id, question, answer } = item;
                return (
                  <li key={id}>
                    <h6>
                      <Link to={`/form?question=${id}`}>
                        {id}. {question}
                      </Link>
                    </h6>
                    {answer === "" ? (
                      <p>Please fill your answer</p>
                    ) : (
                      <p>a. {answer}</p>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Answers;

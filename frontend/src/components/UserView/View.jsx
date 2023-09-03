import React from "react";
import "./view.css";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";

const View = ({ item }) => {
  const items = [
    {
      id: 0,
      title: "Who are you?",
      value: item?.identity,
    },
    {
      id: 1,
      title: "What do you do well?",
      value: item?.strengths,
    },
    {
      id: 2,
      title: "What do you love to do?",
      value: item?.passions,
    },
    {
      id: 3,
      title: "Whom do you intend to serve?",
      value: item?.target_audience,
    },
    {
      id: 4,
      title: "What do your beneficiaries need?",
      value: item?.beneficiary_needs,
    },
    {
      id: 5,
      title: "How do your offerings transform your beneficiaries?",
      value: item?.impact,
    },
    {
      id: 6,
      title: "What activities can generate income for you?",
      value: item?.revenue_sources,
    },
    {
      id: 7,
      title: "The Purpose Statement",
      value: "See your purpose statement below.",
    },
  ];

  return (
    <>
      <NavBar />
      <div className='container my-3'>
        <div className='my-3'>
          <h6 className='h6 text-center title'>Your Reponses</h6>
        </div>
        <div className='row view-cont'>
          {item ? (
            items.map((itemData) => {
              const { id, title, value } = itemData;
              return (
                <div className='col-lg-6 col-md-6 col-sm-6 col-item' key={id}>
                  <div className='shadow-sm item-wrapper bg-white'>
                    <h6 className='h6'>
                      <Link
                        to={`${id === 7 ? "/" : `/form?question=${id + 1}`}`}
                      >
                        {id + 1}. {title}
                      </Link>
                    </h6>
                    <p>{value}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className='col-8 no-response'>
              <h6 className='h6 text-center'>
                You have no previous responses.
              </h6>
              <Link to='/form' className='text-center'>
                Start Here
              </Link>
            </div>
          )}
        </div>
        {item && (
          <div className='row view-cont d-flex justify-content-center'>
            <div className='shadow-sm purpose-cont bg-white'>
              <h6 className='text-center h6'>Purpose Statement Summary</h6>
              <p>{item?.purpose_statement}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default View;

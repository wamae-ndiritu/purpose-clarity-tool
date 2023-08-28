import React, { useEffect } from "react";
import "./view.css";
import { useSelector, useDispatch } from "react-redux";
import { getItem } from "../../redux/actions/purposeActions";

const View = () => {
  const dispatch = useDispatch();
  const purpose = useSelector((state) => state.purpose);
  const { item } = purpose;

  useEffect(() => {
    dispatch(getItem());
  }, [dispatch]);

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
  ];

  return (
    <div className='container bg-white'>
      <div className='row view-cont'>
        <h2 className='text-center h2'>Purpose Clarity Tool</h2>
        <p className='text-center'>These are your responses</p>
        <span className='float-right'>Hi, {item?.user?.firstName}</span>
        <div className='col-8 view-wrapper'>
          {items.map((itemData) => {
            const { id, title, value } = itemData;
            return (
              <div className='shadow-sm item-wrapper' key={id}>
                <h6 className='h6'>{title}</h6>
                <p>{value}</p>
              </div>
            );
          })}
          <div className='shadow-sm mt-3 purpose-cont'>
            <h6 className='text-center h6'>Purpose Statement Summary</h6>
            <p>{item?.purpose_statement}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createItem,
  getItem,
  updateItem,
} from "../../redux/actions/purposeActions";
import View from "./View";
import UtilComponent from "../UtilComponent";
import { validateInput } from "../../formValidation";

const CurrentView = () => {
  const dispatch = useDispatch();

  const purpose = useSelector((state) => state.purpose);
  const { loading, error, item } = purpose;

  const form = useSelector((state) => state.form);
  const {
    you,
    what,
    love,
    serve,
    beneficiaries,
    transform,
    income,
    purpose_statement,
  } = form;

  const [inputErr, setInputErr] = useState(null);

  const handleSubmit = () => {
    const isValid = validateInput(form);
    if (!isValid) {
      setInputErr("All questions not answered!");
      return;
    }
    const details = {
      identity: you,
      strengths: what,
      passions: love,
      target_audience: serve,
      beneficiary_needs: beneficiaries,
      impact: transform,
      revenue_sources: income,
      purpose_statement: purpose_statement,
    };
    // check if we want to update or create a new one
    if (item) {
      dispatch(updateItem(details));
    } else {
      dispatch(createItem(details));
    }
  };

  useEffect(() => {
    dispatch(getItem());
  }, [dispatch]);
  return (
    <div>
      <UtilComponent loading={loading} error={inputErr || error} />
      <View item={form} />
      <div className='container mt-3'>
        <div className='row row-btn'>
          <div className='col-lg-8 col-md-8 col-sm-10 col-btn'>
            <button className='btn btn-submit btn-1'>Go Back</button>
            <button className='btn btn-submit btn-1'>Share For Feadback</button>
            <button className='btn btn-submit btn-1'>View Purpose</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentView;

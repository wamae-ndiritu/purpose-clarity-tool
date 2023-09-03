import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  createItem,
  getItem,
  sharePurpose,
  updateItem,
} from "../../redux/actions/purposeActions";
import View from "./View";
import UtilComponent from "../UtilComponent";
import { validateInput } from "../../formValidation";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const CurrentView = () => {
  const dispatch = useDispatch();

  const purpose = useSelector((state) => state.purpose);
  const { loading, error, item, sent, msg } = purpose;

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

  const handleSubmit = () => {
    const isValid = validateInput(form);
    if (!isValid) {
      setInputErr("All questions not answered!");
      return;
    }
    // check if we want to update or create a new one
    if (item) {
      dispatch(updateItem(details));
    } else {
      dispatch(createItem(details));
    }
  };

  const handleShareAnswers = (e) => {
    e.preventDefault();
    dispatch(sharePurpose(details));
  };

  useEffect(() => {
    dispatch(getItem());
  }, [dispatch]);

  useEffect(() => {
    if (sent) {
      toast.success("Sent successfully!", ToastObjects);
    } else if (msg) {
      toast.error(msg, ToastObjects);
    }
  }, [sent, msg]);
  return (
    <div>
      <View item={form} />
      <UtilComponent loading={loading} error={inputErr || error} />
      <div className='container'>
        <div className='row row-btn'>
          <div className='col-lg-8 col-md-8 col-sm-10 col-btn'>
            <button className='btn btn-submit btn-1'>Go Back</button>
            <button
              className='btn btn-submit btn-1'
              onClick={handleShareAnswers}
            >
              Share For Feadback
            </button>
            <Link
              to='/purpose-clarity-item/download'
              className='btn btn-submit btn-1'
            >
              View Purpose
            </Link>
          </div>
        </div>
        <div className='row text-success my-3'>
          <p className='policy-text text-center'>
            By clicking{" "}
            <i>
              <stron>Submit For Feadback</stron>
            </i>{" "}
            button, you agree to share your responses to the 7Qs to your coach
            for feadback and review.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentView;

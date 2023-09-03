import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../../redux/actions/purposeActions";
import View from "./View";

const PreviousView = () => {
  const dispatch = useDispatch();
  const purpose = useSelector((state) => state.purpose);
  const { item } = purpose;

  useEffect(() => {
    dispatch(getItem());
  }, [dispatch]);
  return (
    <div>
      <View item={item} />
    </div>
  );
};

export default PreviousView;

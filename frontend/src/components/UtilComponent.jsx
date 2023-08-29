import React from "react";

const UtilComponent = ({ loading, error }) => {
  return (
    <div className='util-cont'>
      {loading ? (
        <span className='text-warning'>Loading...</span>
      ) : (
        error && <span className='text-danger'>{error}</span>
      )}
    </div>
  );
};

export default UtilComponent;

import React from "react";

const ProgressCon = ({ names, value }) => {
  return (
    <div>
      <div className="design-text">
        <p>{names}</p>
        <p>{value}</p>
      </div>
      <div className="outer">
        <div style={{ width: value }} className="inner"></div>
      </div>
    </div>
  );
};

export default ProgressCon;

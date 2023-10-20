import React from "react";

const ServiceCon = ({ icon1, names, lorem }) => {
  return (
    <div className="server-con">
      <div id="icon">{icon1()}</div>
      <h4 id="text">{names}</h4>
      <p id="p-tag">{lorem}</p>
    </div>
  );
};

export default ServiceCon;

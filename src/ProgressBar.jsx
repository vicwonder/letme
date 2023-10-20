import React from "react";
import ProgressCon from "./ProgressCon";

const ProgressBar = () => {
  return (
    <div className="skills-con">
      <h3>MY SKILL</h3>
      <div className="skills">
        <div className="skill1">
          <ProgressCon names={"Web Design"} value={"70%"} />
          <ProgressCon names={"Web Development"} value={"80%"} />
          <ProgressCon names={"Graphic Design"} value={"60%"} />
        </div>
        <div className="skill2">
          <ProgressCon names={"Apps Development"} value={"90%"} />
          <ProgressCon names={"Affiliate Marketing"} value={"65%"} />
          <ProgressCon names={"Search Engine Optimization"} value={"85%"} />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

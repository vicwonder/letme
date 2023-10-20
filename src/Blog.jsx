import React from "react";

const Blog = ({ image, bigText, icon1, small, icon2, smallText, lorem }) => {
  return (
    <div className="logs">
      <img src={image} alt="pics" />
      <div className="texts">
        <h4>{bigText}</h4>
        <div className="admins">
          <div className="admin" id="ad">
            <div className="icn">{icon1()}</div>
            <h5>{small}</h5>
          </div>
          <div className="admin">
            <div className="icn">{icon2()}</div>
            <h5>{smallText}</h5>
          </div>
        </div>
        <p>{lorem}</p>
      </div>
    </div>
  );
};

export default Blog;

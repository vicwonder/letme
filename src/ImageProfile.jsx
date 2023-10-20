import React from "react";
import shanepics from "./Letme-Images/man.png";

const ImageProfile = () => {
  return (
    <div className="image-profile">
      <div className="picx">
        <img className="shane-pic" src={shanepics} alt="shanepics" />
      </div>
      <div className="profile-text">
        <h3>Hello, I'm</h3>
        <h1>SHANE WARNE</h1>
        <p>
          I'm a professional graphic designer and web developer. I'm working as
          a UI/UX Graphic Designer and Web Developer about five years.
        </p>
        <div className="profile-buts">
          <button>Hire Me</button>
          <button>My Portfolio</button>
        </div>
      </div>
    </div>
  );
};

export default ImageProfile;

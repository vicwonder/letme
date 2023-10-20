import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h3>CONTACT WITH ME</h3>
      <form className="form-container">
        <div className="form">
          <input type="text" className="form-control" placeholder="Name" />
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div>
          <input type="text" className="form-control" placeholder="Subject" />
        </div>
        <div>
          <textarea className="form-control" rows="12"></textarea>
        </div>
        <input type="button" id="button" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;

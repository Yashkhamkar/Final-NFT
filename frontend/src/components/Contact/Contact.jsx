import React from "react";
import "./contact.css";
const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="contact-main">
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="text" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="textarea">How Can We Help You?</label>
              <textarea
                name="textarea"
                id="textarea"
                rows="10"
                cols="50"
                required
              ></textarea>
            </div>
            <button className="form-submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

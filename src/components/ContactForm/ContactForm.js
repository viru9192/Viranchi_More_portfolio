import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/ContactForm.css";

const ContactForm = ({ onSubmit, status, isSubmitting }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="contact-name" id="contact-name-label">
          Name
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          aria-required="true"
          aria-labelledby="contact-name-label"
        />
      </div>
      <div className="form-group">
        <label htmlFor="contact-email" id="contact-email-label">
          Email
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-required="true"
          aria-labelledby="contact-email-label"
        />
      </div>
      <div className="form-group">
        <label htmlFor="contact-message" id="contact-message-label">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          aria-required="true"
          aria-labelledby="contact-message-label"
        />
      </div>
      <button 
        type="submit" 
        disabled={isSubmitting}
        aria-label={isSubmitting ? "Sending message..." : "Send message"}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {status && (
        <p 
          className={`status ${status.type}`}
          role="alert"
          aria-live="polite"
        >
          {status.message}
        </p>
      )}
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  status: PropTypes.shape({
    type: PropTypes.oneOf(["success", "error"]),
    message: PropTypes.string,
  }),
  isSubmitting: PropTypes.bool,
};

ContactForm.defaultProps = {
  status: null,
  isSubmitting: false,
};

export default ContactForm;

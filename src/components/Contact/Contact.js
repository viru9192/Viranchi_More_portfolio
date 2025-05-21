import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../contexts/theme";
import ContactForm from "../ContactForm/ContactForm";
import "../../styles/Contact.css";

const Contact = ({ contactInfo }) => {
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [{ themeName }] = useContext(ThemeContext);

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormStatus({
        type: "success",
        message: "Thank you for your message! I'll get back to you soon.",
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "Sorry, there was an error sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`contact ${themeName}`}>
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="contact-intro">Feel free to reach out to me for any questions or opportunities!</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope" />
              <a href={`mailto:${contactInfo.email}`} className="contact-link">
                {contactInfo.email}
              </a>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone" />
              <a href={`tel:${contactInfo.phone}`} className="contact-link">
                {contactInfo.phone}
              </a>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt" />
              <span>{contactInfo.location}</span>
            </div>
            <div className="social-links">
              {contactInfo.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={`Visit my ${link.name} profile`}
                >
                  <i className={link.icon} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>Send me a message</h3>
            <ContactForm
              onSubmit={handleSubmit}
              status={formStatus}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  contactInfo: PropTypes.shape({
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    socialLinks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};

Contact.defaultProps = {
  contactInfo: {
    email: "viranchi.more@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/viranchi-more",
        icon: "fab fa-github",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/viranchi-more",
        icon: "fab fa-linkedin",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/viranchi_more",
        icon: "fab fa-twitter",
      },
    ],
  },
};

export default Contact;

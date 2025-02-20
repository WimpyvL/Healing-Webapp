import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    service: "",
    dateTime: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h2>Book a Session or Request Information</h2>
        <p>Please fill out the form below to book a session or request more information.</p>
      </header>

      <section className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">Select Service:</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">-- Select a Service --</option>
              <option value="meditation">Meditation Session</option>
              <option value="qhht">QHHT Session</option>
              <option value="endOfLifeDoula">End of Life Doula</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="dateTime">Preferred Date and Time:</label>
            <input
              type="datetime-local"
              id="dateTime"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="additionalInfo">Additional Information:</label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              rows="5"
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>

      <section className="contact-info">
        <h3>Contact Information</h3>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@healingwithkytin.com</p>
        <p>Founder: Kytin Moodley</p>
      </section>
    </div>
  );
}

export default Contact;

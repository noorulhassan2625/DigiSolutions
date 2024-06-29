import React, { useState } from "react";
import emailjs from 'emailjs-com';

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the email parameters
    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message
    };

    // Send the email using EmailJS
    emailjs.send('service_pri93wd', 'template_cttg3c8', templateParams, 'ErWvlULc4zPr42dAn')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Clear the form after successful submission
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
      }, (error) => {
        console.error('Email could not be sent:', error);
      });
  };

  return (
    <>
      <hr />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <div className="title">
              <h2 className="text-start">Contact Us</h2>
            </div>
            <div className="my-3">
              <p className="mb-0">Lorem ipsum dolor sit amet</p>
              <span>text@testmail.com</span>
            </div>
            <div className="my-3">
              <p className="mb-0">Lorem ipsum dolor sit amet</p>
              <span>text@testmail.com</span>
            </div>
          </div>
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="fullName">Full Name:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="email">Email:</label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    className="form-control"
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="company">Company:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <label htmlFor="message">How can we help you?</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="col-md-2">
                  <button type="submit" className="btn btn-primary mt-3 w-100">Contact Us</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;

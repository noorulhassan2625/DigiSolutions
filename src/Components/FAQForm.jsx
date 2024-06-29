import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';

function FAQForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the email parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      question: formData.question
    };

    // Send the email using EmailJS
    emailjs.send('service_pri93wd', 'template_cttg3c8', templateParams, 'ErWvlULc4zPr42dAn')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Clear the form after successful submission
        setFormData({
          name: '',
          email: '',
          question: ''
        });
      }, (error) => {
        console.error('Email could not be sent:', error);
      });
  };

  return (
    <div className="bg-light p-3 rounded mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="question" className="form-label">Question</label>
          <textarea
            className="form-control"
            id="question"
            name="question"
            rows="3"
            value={formData.question}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default FAQForm;

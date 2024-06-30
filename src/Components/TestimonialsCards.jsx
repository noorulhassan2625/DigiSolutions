import React from "react";

function TestimonialsCards({ title, content, userName, testimonialDescription, className }) {
  return (
    <div className="col-md-3 px-1">
      <div className={`rounded border  cards-testimonials ${className}`}>
      <div className="card-title p-3">
        <h5 className="text-white">{title}</h5>
      </div>
      <div className="card-content">
        <p className="p-3 text-white font-weight-normal">{content}</p>

        <div className="user-info bg-black px-3 pt-3 d-flex rounded-bottom">
          <div className="mt-1 me-2">
            <img className="rounded-circle" src="https://via.placeholder.com/150" width={'50px'} alt="" />
          </div>
          <div>
            <h5 className="text-white">{userName}</h5>
            <p className="text-white">{testimonialDescription}</p>
          </div>
          <div>
            <img className="arrow-image" src="" alt="" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default TestimonialsCards;

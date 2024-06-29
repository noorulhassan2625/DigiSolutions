import React from "react";

function TestimonialsCards({ title, content, userName, testimonialDescription }) {
  return (
    <div className="col-md-3">
      <div className="rounded border p-3 cards-testimonials bg-white">
      <div className="card-title">
        <h5>{title}</h5>
      </div>
      <div className="card-content">
        <p>{content}</p>

        <div className="user-info">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h5>{userName}</h5>
            <p>{testimonialDescription}</p>
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

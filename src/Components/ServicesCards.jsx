import React from "react";

function ServicesCards({ services }) {
  return (
    <div className="container mb-5">
      <div className="row">
        {services.map((services, index) => (
          <div key={index} className="col-md-4 justify-content-center my-3">
            <div className="services-icon text-center">
              <img src={services.icon} width={'60px'} alt={services.title} />
            </div>
            <div className="content text-center">
              <h5>{services.title}</h5>
              <p>{services.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesCards;

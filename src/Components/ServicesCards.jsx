import React from "react";

function ServicesCards({ services }) {
  return (
    <div className="container mb-5">
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-4 justify-content-center my-3">
            <div className="services-icon text-center">
              <img src={service.icon} width={'60px'} alt={service.title} />
            </div>
            <div className="content text-center">
              <h5>{service.title}</h5>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesCards;

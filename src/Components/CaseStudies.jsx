import React from "react";

function CaseStudies() {
  return (
    <>
      <div className="case-studies container">
        <div className="title text-center">
          <h2>Case Studies</h2>
          <hr className="custom-hr" />
        </div>
        <p className="text-center">
          Our blend of creativity and technical finesse ensures bespoke
          solutions that elevate brands and captivate audiences, leaving an
          unforgettable imprint on the design landscape.
        </p>
      </div>
      <div className="container-fluid p-0">
        <div className="row w-100">
          <div className="col-md-5 px-0 py-2">
            <img
              className="w-100 rounded h-100"
              src="https://via.placeholder.com/150"
              alt=""
            />
          </div>
          <div className="col-md-2">
            <div className="h-50 py-2">
              <img
                className="w-100 rounded h-100 "
                src="https://via.placeholder.com/150"
                alt=""
              />
            </div>
            <div className="h-50 py-2">
              <img
                className="w-100 rounded h-100 "
                src="https://via.placeholder.com/150"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="h-50 py-2">
              <img
                className="w-100 rounded h-100 "
                src="https://via.placeholder.com/150"
                alt=""
              />
            </div>
            <div className="h-50 py-2">
              <img
                className="w-100 rounded h-100 "
                src="https://via.placeholder.com/150"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-2">
            <div className="h-50 py-2">
              <img
                className="w-100 rounded h-100 "
                src="https://via.placeholder.com/150"
                alt=""
              />
            </div>
            <div className="h-50 py-2">
              <img
                className="w-100 rounded h-100 "
                src="https://via.placeholder.com/150"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CaseStudies;

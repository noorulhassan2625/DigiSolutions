import React from "react";
import ArrowRight from "./icons/ArrowRight";

function CaseStudies() {
  return (
    <>
      <div className="case-studies container mt-5 pt-5">
        <div className="title text-center">
          <h2>Case Studies</h2>
          <hr className="custom-hr my-4" />
        </div>
        <p className="text-center">
          Our blend of creativity and technical finesse ensures bespoke
          solutions that elevate brands and captivate audiences, leaving an
          unforgettable imprint on the design landscape.
        </p>
      </div>
      <div className="container-fluid p-0 mt-5">
        <div className="row w-100">
          <div className="col-md-5 px-0  py-2">
            <div className="case-studies-img ms-4" style={{ height: "450px" }}>
              <img
                className="w-100 rounded h-100"
                src="https://via.placeholder.com/150"
                alt=""
              />
              <div className="case-studies-content">
                <h5 className="text-white">Case Study 1</h5>
              </div>
            </div>  
          </div>
          <div className="col-md-2">
            
            <div className="py-2 case-studies-img" style={{ height: "250px" }}>
              <img
                className="w-100 rounded h-100 "
                src="https://via.placeholder.com/150"
                alt=""
              />
                <div className="case-studies-content">
                <h5 className="text-white">Case Study 2</h5>
              </div>
            </div>
            <div className="py-2 case-studies-img"  style={{ height: "210px" }}>
              <img
                className="w-100 rounded h-100 "
                src="https://via.placeholder.com/150"
                alt=""
              />
                <div className="case-studies-content">
                <h5 className="text-white">Case Study 3</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="py-2 case-studies-img" style={{ height: "210px" }}>
              <img
                className="w-100 rounded h-100 "
                src="https://via.placeholder.com/150"
                alt=""
              />
                <div className="case-studies-content">
                <h5 className="text-white">Case Study 4</h5>
              </div>
            </div>
            <div className="py-2 case-studies-img" style={{ height: "250px" }}>
              <img
                className="w-100 rounded h-100 "
                src="https://via.placeholder.com/150"
                alt=""
              />
                <div className="case-studies-content">
                <h5 className="text-white">Case Study 5</h5>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="py-2 case-studies-img" style={{ height: "310px" }}>
              <img
                className="w-100 rounded h-100 "
                src="https://via.placeholder.com/150"
                alt=""
              />
                <div className="case-studies-content">
                <h5 className="text-white">Case Study 6</h5>
              </div>
            </div>
            <div className="py-2 case-studies-img" style={{ height: "145px" }}>
              <img
                className="w-100 rounded h-100 "
                src="https://via.placeholder.com/150"
                alt=""
              />
                <div className="case-studies-content">
                <h5 className="text-white">Case Study 7</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CaseStudies;

import React from "react";

function GetAQuote() {
  return (
    <div className="get-a-quote container shadow rounded p-3 my-5">
      <div className="row">
        <div className="col-md-10">
          <div className="content">
            <h4>READY TO TRANSFORM YOUR DIGITAL PRESENCE</h4>
            <p className="mb-0">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam nihil sunt soluta suscipit iste officiis illum.{" "}
            </p>
          </div>
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary mt-3">GET A QUOTE</button>
        </div>
      </div>
    </div>
  );
}

export default GetAQuote;

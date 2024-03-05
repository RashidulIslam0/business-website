import React from "react";
import Counts from "./Counts";

function Count() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Counts startups="50+" text="Startups & Entrepreneurs" />
          </div>
          <div className="col-lg-3">
            <Counts startups="300+" text="Completed Project" />
          </div>
          <div className="col-lg-3">
            <Counts startups="4" text="Years of Experience" />
          </div>
          <div className="col-lg-3">
            <Counts startups="50+" text="Startups & Entrepreneurs" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Count;

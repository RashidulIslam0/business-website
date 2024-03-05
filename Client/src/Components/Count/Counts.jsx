import React from "react";
import "./count.css";
function Counts(props) {
  return (
    <div className="countss mt-lg-5  mb-lg-5">
      <div className="count">
        <h5>{props.startups}</h5>
        <hr />
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Counts;

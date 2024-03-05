import React from "react";
import "./servicesCard.css";
import { Link } from "react-router-dom";

function ServicesCard(props) {
  return (
    <div>
      <section className="sections services-sectionnn" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="sections-title">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {props.features.map((feature, index) => (
              <div key={index} className="col-sm-6 col-lg-4">
                <div className="feature-box-1">
                  <Link to={feature.link}>
                    <div className="feature-content d-flex">
                      <i className={`fa ${feature.icon}`} />
                      <h5>{feature.title}</h5>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesCard;

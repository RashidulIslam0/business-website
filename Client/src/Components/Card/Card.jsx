import React from "react";
import "./card.css";
function Card({ imageUrl, title, description, buttonUrl }) {
  return (
    <div className="col-xs-12 col-sm-6 col-md-3 mb-sm-5">
      <div className="image-flip">
        <div className="mainflip ">
          <div className="frontside">
            <div className="card">
              <div className="card-body text-center">
                <p>
                  <img className=" img-fluid" src={imageUrl} alt="card image" />
                </p>
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{description}</p>
                <a href={buttonUrl} className="btn btn-primary btn-sm">
                  <i className="fa fa-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="backside">
            <div className="card">
              <div className="card-body text-center ">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{description}</p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a className="social-icon text-xs-center" target="_blank">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

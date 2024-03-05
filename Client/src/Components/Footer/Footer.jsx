import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="content">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-12 ">
                <div className="single-box">
                  <img
                    src="https://triobusinesscubers.com/wp-content/uploads/2022/04/tbc-logo-white-4.png"
                    alt
                  />
                  <p>
                    Trio Business Cubers provides personalized and practical
                    solutions to help businesses overcome the challenges they
                    face in launching and expanding their operations.
                  </p>
                  <h3>We Accect</h3>
                  <div className="card-area">
                    <i className="fa fa-cc-visa" />
                    <i className="fa fa-credit-card" />
                    <i className="fa fa-cc-mastercard" />
                    <i className="fa fa-cc-paypal" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3  col-6  ">
                <div className="single-box ps-lg-5">
                  <h2>Hosting</h2>
                  <ul>
                    <li>
                      <a href="#">Web Hosting</a>
                    </li>
                    <li>
                      <a href="#">Cloud Hosting</a>
                    </li>
                    <li>
                      <a href="#">CMS Hosting</a>
                    </li>
                    <li>
                      <a href="#">WordPress Hosting</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-6  ">
                <div className="single-box ps-lg-5">
                  <h2>Domain</h2>
                  <ul>
                    <li>
                      <a href="#">Web Domain</a>
                    </li>
                    <li>
                      <a href="#">Cloud Domain</a>
                    </li>
                    <li>
                      <a href="#">CMS Domain</a>
                    </li>
                    <li>
                      <a href="#">WordPress Domain</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-12  ">
                <div className="single-box">
                  <h2>Newsletter Signup</h2>
                  <p>
                    Subscribe and get regular update about us, read daily offers
                    & campaigns.
                  </p>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Recipient's username"
                      aria-label="Enter your Email ..."
                      aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text" id="basic-addon2">
                      <i className="fa fa-long-arrow-right" />
                    </span>
                  </div>
                  <h2>Follow us on</h2>
                  <p className="socials">
                    <i className="fa fa-facebook" />
                    <i className="fa fa-dribbble" />
                    <i className="fa fa-pinterest" />
                    <i className="fa fa-twitter" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;

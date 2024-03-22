import React, { useState } from "react";
import "./hero.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
function Hero(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoneNumber] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/v1/form", {
        name,
        email,
        phone,
      });
      console.log("Server response:", response.data);
      toast.success("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again later.");
    }

    console.log("Form submitted with:", { name, email, phone });
  };

  return (
    <>
      <section className="hero m-lg-5 ">
        <div className="container overflow-hidden">
          <div className="row  align-items-lg-center justify-content-lg-between">
            <div className="col-12 col-lg-6">
              <h2 className="display mb-3">{props.title}</h2>
              <p className="">{props.description}</p>
              <p className="mb-5">{props.secondaryDescription}</p>
              <div className="d-grid gap-2 d-sm-flex">
                <Link
                  to={props.buttonLink}
                  type="button"
                  className="btn btn-primary"
                >
                  {props.buttonText}
                </Link>
              </div>
            </div>

            <div className="col-12 form-all col-lg-5">
              <div className="container-fluid">
                <form className="mx-auto form " onSubmit={handleSubmit}>
                  <h4 className=" ">
                    👋 Claim Your Free Online Visibility Audit Report! –
                    (Manually Audit)
                  </h4>
                  <div className="">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      id="name"
                      placeholder="Enter Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <label htmlFor="phoneNumber" className="form-label">
                      Phone number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNumber"
                      placeholder="Enter Phone number"
                      value={phone}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <label htmlFor="countryCode" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="countryCode"
                      placeholder="Enter Country code"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary mt-5">
                    Find Out
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

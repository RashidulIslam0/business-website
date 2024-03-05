import React, { useState } from "react";
import "./book.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

function Book() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    startTime: "",
    endTime: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/books",
        formData
      );
      console.log("Book created:", response.data);
      // Show toast notification upon successful form submission
      toast.success("Appointment booked successfully!", {
        position: "top-right",
        autoClose: 3000, // Close the toast after 3 seconds
        hideProgressBar: false,
      });
      // Reset the form
      setFormData({
        name: "",
        phone: "",
        email: "",
        date: "",
        startTime: "",
        endTime: "",
      });
      navigate("/");
    } catch (error) {
      toast.error("Appointment booked Error!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
      });
      console.error("Error creating book:", error);
    }
  };

  return (
    <>
      <div className="Book  container ">
        <div className="row">
          <div className="col-4 pt-5">
            <div className="">
              <h1>hi this is a bangladesh</h1>
            </div>
          </div>
          <div className="col-8">
            <div className="formbold-main-wrapper">
              <div className="formbold-form-wrapper">
                <form onSubmit={handleSubmit}>
                  <div className="formbold-mb-5">
                    <label htmlFor="name" className="formbold-form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="formbold-form-input"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="formbold-mb-5">
                    <label htmlFor="phone" className="formbold-form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Enter your phone number"
                      className="formbold-form-input"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="formbold-mb-5">
                    <label htmlFor="email" className="formbold-form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      className="formbold-form-input"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="formbold-mb-5 w-full">
                    <label htmlFor="date" className="formbold-form-label">
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="formbold-form-input"
                      value={formData.date}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-wrap formbold--mx-3">
                    {/* <div className="w-full sm:w-half formbold-px-3">
                      <div className="formbold-mb-5 w-full">
                        <label htmlFor="date" className="formbold-form-label">
                          Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          id="date"
                          className="formbold-form-input"
                          value={formData.date}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div> */}
                    <div className="w-full sm:w-half formbold-px-3">
                      <div className="formbold-mb-5">
                        <label htmlFor="time" className="formbold-form-label">
                          StartTime
                        </label>
                        <input
                          type="time"
                          name="startTime"
                          id="time"
                          className="formbold-form-input"
                          value={formData.startTime}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="w-full sm:w-half formbold-px-3">
                      <div className="formbold-mb-5">
                        <label htmlFor="time" className="formbold-form-label">
                          EndTime
                        </label>
                        <input
                          type="time"
                          name="endTime"
                          id="endTime"
                          className="formbold-form-input"
                          value={formData.endTime}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <button type="submit" className="formbold-btn">
                      Book Appointment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Book;

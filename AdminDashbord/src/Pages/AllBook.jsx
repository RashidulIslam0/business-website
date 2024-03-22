import React, { useEffect, useState } from "react";
import axios from "axios";

function AllBook() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/books") // Replace '/api/bookings' with your backend endpoint
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
      });
  }, []);
  return (
    <div>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Dashboard</h1>
          </div>
          <a href="#" className="btn-download">
            <i className="bx bxs-cloud-download" />
            <span className="text">Download PDF</span>
          </a>
        </div>

        <div className="table-data">
          <div className="order">
            <div className="head">
              <h3>Recent User</h3>
              <i className="bx bx-search" />
              <i className="bx bx-filter" />
            </div>
            <table>
              <thead className="">
                <tr>
                  <th>User Name</th>
                  <th>Phone Number</th>
                  <th>Email Address</th>

                  <th>Date</th>
                  <th>StartTime</th>
                  <th>EndTime</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td>{booking.name}</td>
                    <td>{booking.phone}</td>
                    <td>{booking.email}</td>
                    <td>{booking.date}</td>
                    <td>{booking.startTime}</td>
                    <td>{booking.endTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AllBook;

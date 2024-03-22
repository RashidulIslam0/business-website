import AreaTableAction from "./AreaTableAction";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AreaTable.scss";

const TABLE_HEADS = [
  " Name",
  "Phone",
  " Email",
  "Date",
  "startTime",
  "EndTime",
];

const AreaTable = () => {
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
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Latest Book</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
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
    </section>
  );
};

export default AreaTable;

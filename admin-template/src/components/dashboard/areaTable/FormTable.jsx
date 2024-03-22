import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AreaTable.scss";

const TABLE_HEADS = [" Name", "Phone", " Email"];
function FormTable() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/form") // Replace '/api/bookings' with your backend endpoint
      .then((response) => {
        setForms(response.data);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
      });
  }, []);
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Form</h4>
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
            {forms.map((form) => (
              <tr key={form._id}>
                <td>{form.name}</td>
                <td>{form.phone}</td>
                <td>{form.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
export default FormTable;

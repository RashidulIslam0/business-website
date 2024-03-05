import React from "react";

function Home() {
  return (
    <>
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
        {/* <ul className="box-info">
          <li>
            <i className="bx bxs-calendar-check" />
            <span className="text">
              <h3>1020</h3>
              <p>New Order</p>
            </span>
          </li>
          <li>
            <i className="bx bxs-group" />
            <span className="text">
              <h3>2834</h3>
              <p>Visitors</p>
            </span>
          </li>
          <li>
            <i className="bx bxs-dollar-circle" />
            <span className="text">
              <h3>$2543</h3>
              <p>Total Sales</p>
            </span>
          </li>
        </ul> */}
        <div className="table-data">
          <div className="order">
            <div className="head">
              <h3>Recent Orders</h3>
              <i className="bx bx-search" />
              <i className="bx bx-filter" />
            </div>
            <table>
              <thead>
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
                <tr>
                  <td>
                    <img src="img/people.png" />
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2021</td>
                  <td>
                    <span className="status completed">Completed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;

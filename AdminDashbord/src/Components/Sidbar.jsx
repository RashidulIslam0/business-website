import React from "react";
import { Link } from "react-router-dom";

function Sidbar() {
  return (
    <div>
      <section id="sidebar">
        <a href="#" className="brand">
          <i className="bx bxs-smile" />
          <span className="text">AdminHub</span>
        </a>
        <ul className="side-menu top">
          <li className="active">
            <a href="#">
              <i className="bx bxs-dashboard" />
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li>
            <Link to={"/allbook"}>
              <i className="bx bxs-shopping-bag-alt" />
              <span className="text">All Book</span>
            </Link>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-doughnut-chart" />
              <span className="text">Analytics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-message-dots" />
              <span className="text">Message</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-group" />
              <span className="text">Team</span>
            </a>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <a href="#">
              <i className="bx bxs-cog" />
              <span className="text">Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout">
              <i className="bx bxs-log-out-circle" />
              <span className="text">Logout</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Sidbar;

// import React from "react";
// import { Link } from "react-router-dom";

// function Sidbar() {
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-lg-3 col-12 order-lg-first order-last">
//           <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div className="container-fluid">
//               <a href="#" className="navbar-brand">
//                 <i className="bx bxs-smile" />
//                 <span className="text">AdminHub</span>
//               </a>
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#sidebarMenu"
//                 aria-controls="sidebarMenu"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//               <div className="collapse navbar-collapse" id="sidebarMenu">
//                 <ul className="navbar-nav side-menu top">
//                   <li className="nav-item active">
//                     <a href="#" className="nav-link">
//                       <i className="bx bxs-dashboard" />
//                       <span className="text">Dashboard</span>
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <Link to={"/allbook"} className="nav-link">
//                       <i className="bx bxs-shopping-bag-alt" />
//                       <span className="text">My Store</span>
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <a href="#" className="nav-link">
//                       <i className="bx bxs-doughnut-chart" />
//                       <span className="text">Analytics</span>
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="#" className="nav-link">
//                       <i className="bx bxs-message-dots" />
//                       <span className="text">Message</span>
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="#" className="nav-link">
//                       <i className="bx bxs-group" />
//                       <span className="text">Team</span>
//                     </a>
//                   </li>
//                 </ul>
//                 <ul className="navbar-nav side-menu">
//                   <li className="nav-item">
//                     <a href="#" className="nav-link">
//                       <i className="bx bxs-cog" />
//                       <span className="text">Settings</span>
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="#" className="nav-link logout">
//                       <i className="bx bxs-log-out-circle" />
//                       <span className="text">Logout</span>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidbar;

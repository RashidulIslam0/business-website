// import React from "react";
// import "./video.css";
// import { Link } from "react-router-dom";

// function Video() {
//   return (
//     <>
//       <div>
//         <div className="container-xl">
//           <div className="table-responsive">
//             <div className="table-wrapper">
//               <div className="table-title">
//                 <div className="row">
//                   <div className="col-sm-6">
//                     <h2>
//                       Manage <b>Employees</b>
//                     </h2>
//                   </div>
//                   <div className="col-sm-6">
//                     <a
//                       href="#addEmployeeModal"
//                       className="btn btn-success"
//                       data-toggle="modal"
//                     >
//                       <i className="material-icons"></i>{" "}
//                       <span>Add New Employee</span>
//                     </a>
//                     <a
//                       href="#deleteEmployeeModal"
//                       className="btn btn-danger"
//                       data-toggle="modal"
//                     >
//                       <i className="material-icons"></i> <span>Delete</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <table className="table table-striped table-hover">
//                 <thead>
//                   <tr>
//                     <th>Video</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>Thomas Hardy</td>

//                     <td>
//                       <a
//                         href="#editEmployeeModal"
//                         className="edit"
//                         data-toggle="modal"
//                       >
//                         <i
//                           className="material-icons"
//                           data-toggle="tooltip"
//                           title="Edit"
//                         >
//                           
//                         </i>
//                       </a>
//                       <a
//                         href="#deleteEmployeeModal"
//                         className="delete"
//                         data-toggle="modal"
//                       >
//                         <i
//                           className="material-icons"
//                           data-toggle="tooltip"
//                           title="Delete"
//                         >
//                           
//                         </i>
//                       </a>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//         {/* Edit Modal HTML */}
//         {/* <div id="addEmployeeModal" className="modal fade">
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <form>
//                 <div className="modal-header">
//                   <h4 className="modal-title">Add Employee</h4>
//                   <button
//                     type="button"
//                     className="close"
//                     data-dismiss="modal"
//                     aria-hidden="true"
//                   >
//                     ×
//                   </button>
//                 </div>
//                 <div className="modal-body">
//                   <div className="form-group">
//                     <label>Name</label>
//                     <input type="text" className="form-control" required />
//                   </div>
//                   <div className="form-group">
//                     <label>Email</label>
//                     <input type="email" className="form-control" required />
//                   </div>
//                   <div className="form-group">
//                     <label>Address</label>
//                     <textarea
//                       className="form-control"
//                       required
//                       defaultValue={""}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>Phone</label>
//                     <input type="text" className="form-control" required />
//                   </div>
//                 </div>
//                 <div className="modal-footer">
//                   <input
//                     type="button"
//                     className="btn btn-default"
//                     data-dismiss="modal"
//                     defaultValue="Cancel"
//                   />
//                   <input
//                     type="submit"
//                     className="btn btn-success"
//                     defaultValue="Add"
//                   />
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div> */}
//         {/* Edit Modal HTML */}
//         <div id="editEmployeeModal" className="modal fade">
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <form>
//                 <div className="modal-header">
//                   <h4 className="modal-title">Edit Employee</h4>
//                   <button
//                     type="button"
//                     className="close"
//                     data-dismiss="modal"
//                     aria-hidden="true"
//                   >
//                     ×
//                   </button>
//                 </div>
//                 <div className="modal-body">
//                   <div className="form-group">
//                     <label>Name</label>
//                     <input type="text" className="form-control" required />
//                   </div>
//                   <div className="form-group">
//                     <label>Email</label>
//                     <input type="email" className="form-control" required />
//                   </div>
//                   <div className="form-group">
//                     <label>Address</label>
//                     <textarea
//                       className="form-control"
//                       required
//                       defaultValue={""}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>Phone</label>
//                     <input type="text" className="form-control" required />
//                   </div>
//                 </div>
//                 <div className="modal-footer">
//                   <input
//                     type="button"
//                     className="btn btn-default"
//                     data-dismiss="modal"
//                     defaultValue="Cancel"
//                   />
//                   <input
//                     type="submit"
//                     className="btn btn-info"
//                     defaultValue="Save"
//                   />
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//         {/* Delete Modal HTML */}
//         <div id="deleteEmployeeModal" className="modal fade">
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <form>
//                 <div className="modal-header">
//                   <h4 className="modal-title">Delete Employee</h4>
//                   <button
//                     type="button"
//                     className="close"
//                     data-dismiss="modal"
//                     aria-hidden="true"
//                   >
//                     ×
//                   </button>
//                 </div>
//                 <div className="modal-body">
//                   <p>Are you sure you want to delete these Records?</p>
//                   <p className="text-warning">
//                     <small>This action cannot be undone.</small>
//                   </p>
//                 </div>
//                 <div className="modal-footer">
//                   <input
//                     type="button"
//                     className="btn btn-default"
//                     data-dismiss="modal"
//                     defaultValue="Cancel"
//                   />
//                   <input
//                     type="submit"
//                     className="btn btn-danger"
//                     defaultValue="Delete"
//                   />
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Video;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./video.css";
import { Link } from "react-router-dom";

function Video() {
  const [videoss, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/video")
      .then((response) => {
        setVideos(response.data); // Assuming response.data is an array of video objects
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, []);

  return (
    <>
      <div>
        <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>
                      Manage <b>Videos</b>
                    </h2>
                  </div>
                  <div className="col-sm-6">
                    <Link to="#addVideoModal" className="btn btn-success">
                      <i className="material-icons"></i>{" "}
                      <span>Add New Video</span>
                    </Link>
                    <Link to="#deleteVideoModal" className="btn btn-danger">
                      <i className="material-icons"></i> <span>Delete</span>
                    </Link>
                  </div>
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Video</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {videoss.map((video) => (
                    <tr key={video.id}>
                      <td>{video.videos}</td>
                      <td>
                        <Link
                          to={"/edit"}
                          href="#editEmployeeModal"
                          className="edit"
                          data-toggle="modal"
                        >
                          <i
                            className="material-icons"
                            data-toggle="tooltip"
                            title="Edit"
                          >
                            
                          </i>
                        </Link>
                        <a
                          href="#deleteEmployeeModal"
                          className="delete"
                          data-toggle="modal"
                        >
                          <i
                            className="material-icons"
                            data-toggle="tooltip"
                            title="Delete"
                          >
                            
                          </i>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;

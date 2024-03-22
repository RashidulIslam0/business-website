import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Edit() {
  const [videoUrl, setVideoUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send PUT request to update video URL
      const response = await axios.put(`/api/v1/video/${videoId}`, {
        videoUrl,
      });

      // Handle success
      console.log("Video URL updated:", response.data);

      // Redirect to video page or perform any other action
    } catch (error) {
      // Handle error
      console.error("Error updating video URL:", error);
    }
  };
  return (
    <div>
      <div>
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h4 className="modal-title">Edit Video</h4>
                <Link
                  to={"/video"}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </Link>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Video Url</label>
                  <input
                    type="text"
                    className="form-control"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <Link to={"/video"}>
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    defaultValue="Cancel"
                  />
                </Link>

                <input
                  type="submit"
                  className="btn btn-info"
                  defaultValue="Save"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;

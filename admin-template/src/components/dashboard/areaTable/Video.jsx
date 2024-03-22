import React, { useState, useEffect } from "react";
import "./AreaTable.scss";
import axios from "axios";

const TABLE_HEADS = ["Video URL"];

function Video() {
  const [videoUrls, setVideoUrls] = useState([]);

  useEffect(() => {
    // Function to fetch data from the backend API using Axios
    const fetchVideoUrls = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/video/");
        setVideoUrls(response.data); // Assuming the response contains an array of video URLs
      } catch (error) {
        console.error("Error fetching video URLs:", error);
      }
    };

    fetchVideoUrls(); // Call the fetchVideoUrls function when the component mounts
  }, []);
  return (
    <>
      <section className="content-area-table">
        <div className="data-table-info">
          <h4 className="data-table-title">Video</h4>
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
              {videoUrls.map((videoUrl, index) => (
                <tr key={index}>
                  <td>{videoUrl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Video;

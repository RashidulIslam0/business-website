// import React from "react";
// import "./video.css";

// function VideoSection(props) {
//   return (
//     <div className="video-section ">
//       <div className="work pt-3 pb-3 pb-lg-5">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6 col-sm-12 mb-3 mb-md-0">
//               <iframe
//                 src=""
//                 title="YouTube video player"
//                 frameborder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 allowfullscreen
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default VideoSection;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./video.css";

function VideoSection() {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    // Function to fetch video URL using Axios
    const fetchVideoUrl = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/video/");
        setVideoUrl(response.data.videoUrl); // Assuming your API response contains a 'videoUrl' field
      } catch (error) {
        console.error("Error fetching video URL:", error);
      }
    };

    fetchVideoUrl(); // Call the fetchVideoUrl function when the component mounts
  }, []);

  return (
    <div className="video-section">
      <div className="work pt-3 pb-3 pb-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 mb-3 mb-md-0">
              <iframe
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;

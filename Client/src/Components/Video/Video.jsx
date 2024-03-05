import React from "react";
import "./video.css";

function VideoSection(props) {
  return (
    <div className="video-section ">
      <div className="work pt-3 pb-3 pb-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 mb-3 mb-md-0">
              <iframe
                src={props.videoFile}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;

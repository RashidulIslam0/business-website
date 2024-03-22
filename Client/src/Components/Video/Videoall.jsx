import React from "react";
import VideoSection from "./Video";

function Videoall() {
  return (
    <div>
      <VideoSection
        videoFile="https://www.youtube.com/embed/GuuOVv0C02I?si=iGDQxHqoZ7CEcC7h"
        iconUrl="/public/images/1f44b.svg"
        title="👋 Why work with us?"
        // badges={badgesData}
      />
    </div>
  );
}

export default Videoall;

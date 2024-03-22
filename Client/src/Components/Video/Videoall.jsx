import React from "react";
import VideoSection from "./Video";

function Videoall() {
  // const badgesData = [
  //   {
  //     imageUrl: "https://winstarit.com/wp-content/uploads/2022/06/on-time.png",
  //     text: "Dedicated account manager",
  //   },
  //   {
  //     imageUrl:
  //       "https://winstarit.com/wp-content/uploads/2022/06/indentation.png",
  //     text: "World-class high skilled team",
  //   },
  //   {
  //     imageUrl:
  //       "https://winstarit.com/wp-content/uploads/2022/06/checklist.png",
  //     text: "Dedicated account manager",
  //   },
  //   {
  //     imageUrl:
  //       "https://winstarit.com/wp-content/uploads/2022/06/guarantee.png",
  //     text: "Guaranteed growth of businesses",
  //   },
  // ];

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

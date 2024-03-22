import React from "react";
import Hero from "../../Components/Hero/Hero";
import Card from "../../Components/Card/Card";
import Services from "../../Components/Services/Services";
import Videoall from "../../Components/Video/Videoall";
import Count from "../../Components/Count/Count";
import { Link } from "react-router-dom";
import VideoSection from "../../Components/Video/Video";

function Home() {
  return (
    <div>
      <Hero
        title="Art of Design"
        description="Trio Business Cubers provides personalized and practical solutions to help businesses overcome the challenges they face in launching, managing, and expanding their operations."
        secondaryDescription="Trio Business Cubers provides personalized and practical solutions to help businesses overcome the challenges they face in launching, managing, and expanding their operations."
        buttonLink="/book"
        buttonText="Book A Call"
      />
      <VideoSection />

      <Count />

      <Services />

      <div className="">
        <section id="team">
          <div className="container">
            <h5 className="section-title h1">OUR TEAM</h5>
            <div className="row">
              <Card
                imageUrl="https://winstarit.com/wp-content/uploads/2021/11/ashikprofile.png"
                title="Rashidul Islam"
                description="Founder and CEO"
                buttonUrl=""
              />
              <Card
                imageUrl="https://winstarit.com/wp-content/uploads/2021/01/Tohin.png"
                title="Asaduzzaman Tohin"
                description="Marketing Manager"
                buttonUrl=""
              />
              <Card
                imageUrl="https://winstarit.com/wp-content/uploads/2021/11/ashikprofile.png"
                title="Sunlimetech"
                description="This is a basic card with image on top, title, description and button."
                buttonUrl=""
              />
              <Card
                imageUrl="https://winstarit.com/wp-content/uploads/2021/11/ashikprofile.png"
                title="Sunlimetech"
                description="This is a basic card with image on top, title, description and button."
                buttonUrl=""
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;

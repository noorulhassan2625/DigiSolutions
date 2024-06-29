import React from "react";
import Navbar from "./navbar";
import "../Assets/StyleComponents/heroSection.css";
import videofile from "../Assets/Media/videos/bg-video.mp4";
function HeroSection() {
  return (
    <div className="hero-section p-0 p-lg-5 p-md-5">
      <video autoPlay loop muted className="video-background">
        <source src={videofile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Navbar /> 
    </div>
  );
}

export default HeroSection;

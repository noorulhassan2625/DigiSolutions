import React from "react";
import "../Assets/StyleComponents/Services.css";
import ServicesCards from "./ServicesCards";
import icon1 from '../Assets/Media/images/webdevelopmentIcon.svg';
import icon2 from '../Assets/Media/images/webdevelopmentIcon.svg';
import icon3 from '../Assets/Media/images/webdevelopmentIcon.svg';
import icon4 from '../Assets/Media/images/webdevelopmentIcon.svg';
import icon5 from '../Assets/Media/images/webdevelopmentIcon.svg';
import icon6 from '../Assets/Media/images/webdevelopmentIcon.svg';
import SwiperSlider from "./SwiperSlider";

const serviceData = [
  {
    icon: icon1,
    title: "Web Development",
    description: "Our Business Plan is a written document describing a company’s core business activities."
  },
  {
    icon: icon2,
    title: "App Development",
    description: "Our Business Plan is a written document describing a company’s core business activities."
  },
  {
    icon: icon3,
    title: "UI/UX Design",
    description: "Our Business Plan is a written document describing a company’s core business activities."
  },
  {
    icon: icon4,
    title: "SEO Services",
    description: "Our Business Plan is a written document describing a company’s core business activities."
  },
  {
    icon: icon5,
    title: "Content Writing",
    description: "Our Business Plan is a written document describing a company’s core business activities."
  },
  {
    icon: icon6,
    title: "Digital Marketing",
    description: "Our Business Plan is a written document describing a company’s core business activities."
  }
];

function Services() {
  return (
    <div className="services mt-5">
      <div className="title text-center">
        <h2>Our Services</h2>
        <hr className="custom-hr" />
        <h2>Explore what services we’re offering</h2>
      </div>
      <ServicesCards services={serviceData} />
      <SwiperSlider />
    </div>
  );
}

export default Services;

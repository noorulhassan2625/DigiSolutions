import React from "react";
import "../Assets/StyleComponents/heroSection.css";
import Services from "../Components/Services";
import HeroSection from "../Components/heroSection";
import Testimonials from "../Components/Testimonials";
import Projects from "../Components/Project";
import GetAQuote from "../Components/GetAQuote";
import FAQs from "../Components/FAQs";
import CaseStudies from "../Components/CaseStudies";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
function Home() {
  return (
    <>
      <HeroSection />
      <Services/>
      <Testimonials/>
      <Projects />
      <GetAQuote/>
      <FAQs/>
      <CaseStudies/>
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default Home;

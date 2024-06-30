import React from "react";
import ProjectsCards from "./ProjectsCards";

function Projects() {
  const projects = [
    {
      image: "https://via.placeholder.com/150",
      title: "VR training app for a manufacturing company",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "E-commerce platform for local stores",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Mobile app for personal finance management",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Web portal for a healthcare provider",
    },
  ];

  return (
    <div className="projects pt-4 pb-5">
    <div className="container-fluid my-5">
      <div>
        <div>
        <h2 className="projects-title fw-bold px-md-5 px-lg-5 px-1">Projects</h2>
        </div>
        {/* <div className="ms-auto">
          <button className="btn btn-primary border border-white">Explore More</button>
        </div> */}
      </div>
      <div className="row">
        <ProjectsCards projects={projects} />
      </div>
    </div>
    </div>
  );
}

export default Projects;

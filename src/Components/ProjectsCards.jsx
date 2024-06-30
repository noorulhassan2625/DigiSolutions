import React from "react";
import ArrowRight from "./icons/ArrowRight";

function ProjectsCards({ projects }) {
  
  return (
    <>
      {projects.map((project, index) => (
        <div key={index} className="projects-cards   p-2 col-md-3">
          <div className="border rounded portfolio-cards bg-white">
            <div className="card-img">
              <img src={project.image} className="w-100" alt={project.title} />
            </div>
            <div className="content p-3">
              <h5 className="mb-4">{project.title}</h5>
              <span className="icon">
                <ArrowRight style={{ width: "23px", color: "white" }} />
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectsCards;

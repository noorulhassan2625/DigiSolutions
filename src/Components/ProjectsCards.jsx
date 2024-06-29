import React from "react";

function ProjectsCards({ projects }) {
  return (
    <>
      {projects.map((project, index) => (
        <div key={index} className="projects-cards   p-2 col-md-3">
        <div className="border rounded portfolio-cards bg-white">
          <div className="card-img">
            <img src={project.image} className="w-100" alt={project.title} />
          </div>
          <div className="content p-2">
            <h5>{project.title}</h5>
          </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectsCards;

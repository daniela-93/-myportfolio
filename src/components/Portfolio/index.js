import React from 'react';
import Project from "./project";


const Portfolio = () => {
  const projects = [
    {
      name: "Weddings.Com",
      tech: "Javascript/Express/Handlebars.js/Node",
      deployed: "",
      image: "../../assets/small/0.jpg",
      repo: "",
    },
    {
      name: "Recipedia",
      tech: "SASS/HTML/JavaScript/API",
      deployed: "",
      image: "../../assets/small/recipe2.jpg",
      repo: "",
    },
    {
      name: "Weather-Dashboard",
      tech: "Javascript/API",
      deployed: "",
      image: "../../assets/small/recipedia.jpg",
      repo: "",
    },
  ];
  return (
    <section className="projects-container">
      {projects.map((project) => (
        <div className="project-card my-2 mx-2">
          <Project
            name={project.name}
            tech={project.tech}
            deployed={project.deployed}
            image={project.image}
            repo={project.repo}
          />
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
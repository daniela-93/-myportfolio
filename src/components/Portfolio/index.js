import React from "react";
import Project from "./project";
   
const Portfolio = () => {
  const projects = [
    {
      name: "Music-Line",
      tech: "Javascript/Express/Handlebars.js/Node",
      deployed: "https://guarded-dawn-15470.herokuapp.com/",
      image: "../../assets/images/musicline.png",
      repo: "https://github.com/axeliono/Music-Line",
    },
    {
      name: "Recipedia",
      tech: "SASS/HTML/JavaScript/API",
      deployed: "https://frecklescherokee.github.io/recipedia/",
      image: "",
      repo: "https://github.com/frecklescherokee/recipedia",
    },
    {
        name: "Weddings.com",
        tech: "SASS/HTML/JavaScript/API",
        deployed: "https://wedding-spot.herokuapp.com/",
        image: "../../assets/images/wedding.png",
        repo: "https://github.com/frecklescherokee/weddings",
      },
      {
        name: "Budget Tracker",
        tech: "SASS/HTML/JavaScript/API",
        deployed: "https://morning-refuge-22242.herokuapp.com/",
        image: "",
        repo: "https://github.com/daniela-93/-BudgetTracker",
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
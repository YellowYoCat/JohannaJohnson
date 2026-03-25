"use client";
import { useState } from "react";
import "./works.css";

export default function Works() {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce App Design",
      category: "UI/UX",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://example.com/portfolio",
      external: true
    },
    {
      id: 2,
      title: "Portfolio Website",
      category: "Web Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://example.com/portfolio",
      external: true
    },
    {
      id: 3,
      title: "Brand Identity Design",
      category: "Graphic Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://example.com/portfolio",
      external: true
    },
    {
      id: 4,
      title: "Mobile Banking App",
      category: "UI/UX",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://example.com/portfolio",
      external: true
    },
    {
      id: 5,
      title: "Restaurant Website",
      category: "Web Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://example.com/restaurant",
      external: true
    },
    {
      id: 6,
      title: "Photography Portfolio",
      category: "Photography",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://example.com/portfolio",
      external: true
    }
   
  ];

  const filters = ["All", "UI/UX", "Web Development", "Graphic Design", "Photography"];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="container-works">
      <h1 className="title">My Work</h1>

      
      <div className="filterSection">
        <p className="filterLabel">Filter Works</p>
        <div className="buttons">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter ? "active" : ""}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

     
      <div className="projects">
        {filteredProjects.map((project) => (
          <div key={project.id} className="projectCard">
            <div className="image"></div>
            <div className="content">
              <h3>{project.title}</h3>
              <div className="line"></div>
              <p>{project.description}</p>
              <span className="category">{project.category}</span>
              <a 
                href={project.link}
                target={project.external ? "_blank" : "_self"}
                rel={project.external ? "noopener noreferrer" : ""}
                className="projectLink"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="noResults">
          <p>No projects found in this category.</p>
        </div>
      )}
    </section>
  );
}
"use client";
import { useState } from "react";
import "./works.css";

export default function Works() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      img: <img src="/supernon.png" alt="Super Nom Wrangler app interface" />,
      title: "Super Nom Wranger",
      category: "UI/UX",
      description: "The Super Nom Wrangler website and app concept was conceptualized and developed in 2025. This project was a collaborative effort involving a dedicated group of contributors, including myself. The development took place within a classroom environment, allowing for a structured approach to building the platform. This website is used to find mom and pop shops or hidden gems around your city. Adding a user-based interaction to the Website and app that involves the user in adding mom and pop shops that they find. They are also able to review the shops that they have been to.",
      link: "https://docs.google.com/document/d/1jQ-Uhd0fTLcxapWfk_qqPWmnhJu-1-Uv9ajQanHgHfM/edit?usp=sharing",
      external: true
    },
    {
      id: 2,
      img: <img src="/supernomlogo.png" alt="Super Nom Wrangler logo" />,
      title: "Super Nom Wranger",
      category: "Web Development",
      description: "The Super Nom Wrangler website and app concept was conceptualized and developed in 2025. This project was a collaborative effort involving a dedicated group of contributors, including myself. The development took place within a classroom environment, allowing for a structured approach to building the platform. This website is used to find mom and pop shops or hidden gems around your city. Adding a user-based interaction to the Website and app that involves the user in adding mom and pop shops that they find. They are also able to review the shops that they have been to.\n\nTech used:\n• React\n• CSS\n• Google Maps API\n• AWS (Amazon Web Services)\n• JavaScript (JS)",
      link: "https://github.com/LeighVirrey/SuperNomWrangler",
      external: true
    },
    {
      id: 3,
      img: <img src="/pond.png" alt="Pondfoilo portfolio website preview" />,
      title: "Pondfoilo",
      category: "Web Development",
      description:  "Pondfolio represents my initial foray into professional web development as my first personal portfolio website. Conceptualized and built in 2026, the project was developed entirely within the personal space of my bedroom. The site was engineered using a sophisticated modern stack to demonstrate technical proficiency.\n\nTech used:\n• NextJS\n• CSS\n• Tailwind CSS\n• Motion+\n• Vercel",
      link: "https://pondfolio.space/",
      external: true
    },
    {
      id: 4,
      img: <img src="/mavjo.png" alt="MavJo website homepage" />,
      title: "MavJo",
      category: "Web Development",
      description: "Conceptualized and developed in 2026, MavJo stands as a collaborative digital project between myself and a partner met through an online community. The platform was primarily designed as a professional showcase, serving as a comprehensive website to demonstrate our collective technical capabilities and creative potential. Functioning as a freelance hub, MavJo provides a streamlined interface for potential clients to explore our diverse range of services. The site facilitates direct communication, allowing individuals and organizations to contact us easily for project inquiries and service fulfillment.\n\nTech used:\n• NextJS \n• CSS \n• Vercel",
      link: "https://mavjo.space/",
      external: true
    },
    {
      id: 5,
      img: <img src="/mavjowire.png" alt="MavJo wireframe sketches" />,
      title: "MavJo Wireframes",
      category: "UI/UX",
      description: "Conceptualized and developed in 2026, MavJo is a collaborative digital project between a partner I met through an online community. The platform was primarily designed as a professional showcase, serving as a comprehensive website to demonstrate our collective technical capabilities and creative potential. Functioning as a freelance hub, MavJo provides a streamlined interface for potential clients to explore our diverse range of services. The site facilitates direct communication, allowing individuals and organizations to contact us easily for project inquiries and service fulfillment.",
      link: "https://docs.google.com/document/d/1IEK2_7mNk1eCUVfSfFTjxWG8kCF4Or1DO4TR0dKvHrI/edit?usp=sharing",
      external: true
    },
    {
      id: 6,
      img: <img src="/tune.png" alt="TuneBreaker music learning app design" />,
      title: "TuneBreaker",
      category: "UI/UX",
      description: "Designing a application that helps people who are learning music with splitting the sounds of the songs of your choice. letting the user learn how to identify music pitch and piano chords. ",
      link: "https://docs.google.com/document/d/1UWnS8CoeeaZi4a2NOPOFrMIGl3_RtfWNbqSLwoEuaHU/edit?usp=sharing",
      external: true
    },
   
    {
      id: 7,
      img: <img src="/leader.jpg" alt="Haewon Nmixx leader graphic design" />,
      title: "Haewon Nmixx Leader",
      category: "Graphic Design",
      description: "a page that shows off girlgroup Nmixx's leader Haewon 3 x 3",
      link: "https://www.pinterest.com/pin/688065649362299991/",
      external: true
    },
    {
      id: 8,
      img: <img src="/baegrey.jpg" alt="Bae phone wallpaper design" />,
      title: "Bae Phone Wallpaper",
      category: "Graphic Design",
      description: "A phone wallpaper created in affinity.",
      link: "https://www.pinterest.com/pin/688065649362315462/",
      external: true
    },
    {
      id: 9,
      img: <img src="/haewon_wallpaper.jpg" alt="Haewon phone wallpaper" />,
      title: "Haewon Phone Wallpaper",
      category: "Graphic Design",
      description: "A phone wallpaper created in affinity.",
      link: "https://www.pinterest.com/pin/688065649362302955/",
      external: true
    },
    {
      id: 10,
      img: <img src="/paperburnhaewon.jpg" alt="Haewon with paper burn effects" />,
      title: "Haewon with paper burn marks",
      category: "Graphic Design",
      description: "A phone wallpaper created in affinity",
      link: "https://www.pinterest.com/pin/688065649362322296/",
      external: true
    },
    {
      id: 11,
      img: <img src="/Twice.jpg" alt="Twice phone wallpaper" />,
      title: "Twice phone Wallpaper",
      category: "Graphic Design",
      description: "A phone wallpaper created in Photoshop",
      link: "https://www.pinterest.com/pin/688065649358234101/",
      external: true
    },
    {
      id: 12,
      img: <img src="lily.png" alt="Lily phone wallpaper" />,
      title: "Lily phone Wallpaper",
      category: "Graphic Design",
      description: "A phone wallpaper created in affinity",
      link: "https://www.pinterest.com/pin/688065649362336418/",
      external: true
    },
    {
      id: 13,
      img: <img src="/Cowboy.jpg" alt="Cowboy themed phone wallpaper" />,
      title: "Cowboy phone Wallpaper",
      category: "Graphic Design",
      description: "A phone wallpaper created in affinity",
      link: "https://www.pinterest.com/pin/688065649362357053/",
      external: true
    },
    {
      id: 14,
      img: <img src="/poster1.jpg" alt="Handmade poster from K-pop album 1" />,
      title: "Hand made Poster",
      category: "Graphic Design",
      description: "Hand made Poster made out of a k-pop album.",
      link: "https://www.instagram.com/p/DWZXbA_jsc0/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
      external: true
    },
    {
      id: 15,
      img: <img src="/poster2.jpg" alt="Handmade poster from K-pop album 2" />,
      title: "Hand made Poster",
      category: "Graphic Design",
      description: "Hand made Poster made out of a k-pop album.",
      link: "https://www.instagram.com/p/DWZXbA_jsc0/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
      external: true
    },
    {
      id: 16,
      img: <img src="/poster3.jpg" alt="Handmade poster from K-pop album 3" />,
      title: "Hand made Poster",
      category: "Graphic Design",
      description: "Hand made Poster made out of a k-pop album.",
      link: "https://www.instagram.com/p/DWZXbA_jsc0/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
      external: true
    },
    {
      id: 17,
      img: <img src="/poster4.jpg" alt="Handmade poster from K-pop album 4" />,
      title: "Hand made Poster",
      category: "Graphic Design",
      description: "Hand made Poster made out of a k-pop album.",
      link: "https://www.instagram.com/p/DWZXbA_jsc0/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
      external: true
    },
    {
      id: 18,
      img: <img src="/poster5.jpg" alt="Handmade poster from K-pop album 5" />,
      title: "Hand made Poster",
      category: "Graphic Design",
      description: "Hand made Poster made out of a k-pop album.",
      link: "https://www.instagram.com/p/DWZXbA_jsc0/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
      external: true
    },
    {
      id: 19,
      img: <img src="/poster6.jpg" alt="Handmade poster from K-pop album 6" />,
      title: "Hand made Poster",
      category: "Graphic Design",
      description: "Hand made Poster made out of a k-pop album.",
      link: "https://www.instagram.com/p/DWZXbA_jsc0/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
      external: true
    },
    {
      id: 20,
      img: <img src="/final_2.jpg" alt="Rose Blackpink photoshop experiment" />,
      title: "Rose blackpink",
      category: "Graphic Design",
      description: "Experminting with tools in photoshop.",
      link: "https://www.instagram.com/p/CvKtQ9PJZUA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      external: true
    },
   

  ];

  const filters = ["All", "UI/UX", "Web Development", "Graphic Design"];

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
      {project.img && (
        <div className="image">
          {project.img}
        </div>
      )}
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

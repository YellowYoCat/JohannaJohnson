"use client";
import { useState } from "react";
import "./works.css";

export default function Works() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      img: <img src="/supernon.png" />,
      title: "Super Nom Wranger",
      category: "UI/UX",
      description: "designing an app that allows users to search for Mom and Pop shops around your area.",
      link: "https://www.figma.com/design/0uCT2NPFitv7uUBCJ2pOMJ/Super-Nom-Wrangler?node-id=479-14&t=NNczMsUzsB4ZCK65-1",
      external: true
    },
    {
      id: 2,
      img: <img src="/supernomlogo.png" />,
      title: "Super Nom Wranger",
      category: "Web Development",
      description: "Devloping a app that allows users to search up mom and pop shop. Allowing user interaction with reviewing restaurants. Users are allowed to enter a restaurant in their area.",
      link: "https://github.com/LeighVirrey/SuperNomWrangler",
      external: true
    },
    {
      id: 3,
      img: <img src="/pond.png" />,
      title: "Pondfoilo",
      category: "Web Development",
      description: "The first time i've went out of my way to make a portfolio website. Every background is drawn by me even the pond creatures. Using nextjs as the framework, using motion+ for the animations and vercel for deployment.",
      link: "https://pondfolio.space/",
      external: true
    },
    {
      id: 4,
      img: <img src="/pondwire.png" />,
      title: "Pondfoilo",
      category: "UI/UX",
      description: "the wireframes for the idea of my first portfolio.",
      link: "https://www.figma.com/design/Dmukph3felNFIKBQNM7W23/Portolio?node-id=0-1&t=AXfQ937YJtaN6w8R-1",
      external: true
    },
    {
      id: 5,
      img: <img src="/mavjo.png" />,
      title: "MavJo",
      category: "Web Development",
      description: "A website that a friend and me made for freelance work.",
      link: "https://mavjo.space/",
      external: true
    },
    {
      id: 6,
      img: <img src="/mavjowire.png" />,
      title: "MavJo Wireframes",
      category: "UI/UX",
      description: "Wireframes and protypes of what we might wanted the site the look like. ",
      link: "https://www.figma.com/design/mgUcc0GrJBUatq216ag039/MavJo?node-id=0-1&t=cbuClbHGpROvQ6aN-1",
      external: true
    },
    {
      id: 7,
      img: <img src="/personalweb.png" />,
      title: "Portfolio Redo",
      category: "UI/UX",
      description: "Wireframes and protypes of what I wanted the redesign of my website to look like. ",
      link: "https://www.figma.com/design/lXm4KEWBMZJRXISl9UP2qj/redo-of-portfilo?node-id=0-1&t=tfRJcl9BPHStUCLp-1",
      external: true
    },
    {
      id: 8,
      img: <img src="/moviewire.png" />,
      title: "Movie reviewer",
      category: "UI/UX",
      description: "Wireframes and protypes for what a movie review site will look like.",
      link: "https://www.figma.com/design/Qddp46JXqS8jWSJzZqlzOM/Movie-Review-Site?node-id=28-59&t=Ju4Cc3EpKTIh5Re0-1",
      external: true
    },
    {
      id: 9,
      img: <img src="/logoplant.png" />,
      title: "Botani care Taker",
      category: "Web Development",
      description: "Using python with machine learning. Making a idle plant game where it waters the plant when you are away.",
      link: "https://github.com/madkmitchell/Roomba",
      external: true
    },
    {
      id: 10,
      img: <img src="/idleplant.png" />,
      title: "Botani care Taker",
      category: "UI/UX",
      description: "Wireframes and protypes for what Botani care taker would look like.",
      link: "https://www.figma.com/design/ki6fDj49zBNbHRM6sES9V9/Botani--caretaker?node-id=0-1&t=bejOsJeRuWfLMnQd-1",
      external: true
    },
    {
      id: 11,
      img: <img src="/tune.png" />,
      title: "TuneBreaker",
      category: "UI/UX",
      description: "Designing a application that helps people who are learning music with splitting the sounds of the songs of your choice. letting the user learn how to identify music pitch and piano chords. ",
      link: "https://www.figma.com/design/H3mxVvtrRWyb0TaII9ahVU/wireframes?node-id=0-1&t=28qVmmaO5x5TDwiE-1",
      external: true
    },
    {
      id: 12,
      // img: <img src=""/>,
      title: "Time 4 Trivia",
      category: "Web Development",
      description: "Website that has Trivia. was used to Demonstrate  how vulnerable websites can be. ",
      link: "https://github.com/rottngator/Time4Trivia-Start",
      external: true
    },
    {
      id: 13,
      // img: <img src="" />,
      title: "Movie Reviewer",
      category: "Web Development",
      description: "Using reactjs and GraphQL in creating a movie reviewer. where the user can reviews and search fro movies.",
      link: "https://github.com/YellowYoCat/Fantastic-Four",
      external: true
    },
    {
      id: 14,
      img: <img src="/leader.jpg" />,
      title: "Haewon Nmixx Leader",
      category: "Graphic Design",
      description: "a page that shows off girlgroup Nmixx's leader Haewon 3 x 3",
      link: "https://www.pinterest.com/pin/688065649362299991/",
      external: true
    },
    {
      id: 15,
      img: <img src="/baegrey.jpg" />,
      title: "Bae Phone Wallpaper",
      category: "Graphic Design",
      description: "A phone wallpaper created in affinity.",
      link: "https://www.pinterest.com/pin/688065649362315462/",
      external: true
    },
    {
      id: 16,
      img: <img src="/haewon_wallpaper.jpg" />,
      title: "Haewon Phone Wallpaper",
      category: "Graphic Design",
      description: "A phone wallpaper created in affinity.",
      link: "https://www.pinterest.com/pin/688065649362302955/",
      external: true
    },
    {
      id: 17,
      img: <img src="/paperburnhaewon.jpg" />,
      title: "Haewon with paper burn marks",
      category: "Graphic Design",
      description: "A phone wallpaper created in affinity",
      link: "https://www.pinterest.com/pin/688065649362322296/",
      external: true
    },
    {
      id: 18,
      img: <img src="/Twice.jpg" />,
      title: "Twice phone Wallpaper",
      category: "Graphic Design",
      description: "A phone wallpaper created in Photoshop",
      link: "https://www.pinterest.com/pin/688065649358234101/",
      external: true
    },
    {
      id: 19,
      img: <img src="lily.png" />,
      title: "Lily phone Wallpaper",
      category: "Graphic Design",
      description: "A phone wallpaper created in affinity",
      link: "https://www.pinterest.com/pin/688065649362336418/",
      external: true
    },
    {
      id: 20,
      img: <img src="/Cowboy.jpg" />,
      title: "Cowboy phone Wallpaper",
      category: "Graphic Design",
      description: "A phone wallpaper created in affinity",
      link: "https://www.pinterest.com/pin/688065649362357053/",
      external: true
    },
    {
      id: 21,
      img: <img src="/poster1.jpg" />,
      title: "Hand made Poster",
      category: "Graphic Design",
      description: "Hand made Poster made out of a k-pop album.",
      link: "https://www.instagram.com/p/DWZXbA_jsc0/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
      external: true
    },
    {
      id: 22,
      img: <img src="/poster2.jpg" />,
      title: "Hand made Poster",
      category: "Graphic Design",
      description: "Hand made Poster made out of a k-pop album.",
      link: "https://www.instagram.com/p/DWZXbA_jsc0/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
      external: true
    },
    {
      id: 23,
      img: <img src="/poster3.jpg" />,
      title: "Hand made Poster",
      category: "Graphic Design",
      description: "Hand made Poster made out of a k-pop album.",
      link: "https://www.instagram.com/p/DWZXbA_jsc0/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
      external: true
    },
    {
      id: 24,
      img: <img src="/poster4.jpg" />,
      title: "Hand made Poster",
      category: "Graphic Design",
      description: "Hand made Poster made out of a k-pop album.",
      link: "https://www.instagram.com/p/DWZXbA_jsc0/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
      external: true
    },
    {
      id: 25,
      img: <img src="/poster5.jpg" />,
      title: "Hand made Poster",
      category: "Graphic Design",
      description: "Hand made Poster made out of a k-pop album.",
      link: "https://www.instagram.com/p/DWZXbA_jsc0/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
      external: true
    },
    {
      id: 26,
      img: <img src="/poster6.jpg" />,
      title: "Hand made Poster",
      category: "Graphic Design",
      description: "Hand made Poster made out of a k-pop album.",
      link: "https://www.instagram.com/p/DWZXbA_jsc0/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
      external: true
    },
    {
      id: 27,
      img: <img src="/final_2.jpg" />,
      title: "Rose blackpink",
      category: "Graphic Design",
      description: "Experminting with tools in photoshop.",
      link: "https://www.instagram.com/p/CvKtQ9PJZUA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      external: true
    },
    {
      id: 28,
      img: <img src="/100_0061.JPG" />,
      title: "Photoshot",
      category: "Photography",
      description: "Picture of a friend in cosplay.",
      link: "https://www.instagram.com/p/C3_ud5OLxnG/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
      external: true
    },
    // {
    //   id: 29,
    //   img: <img src="" />,
    //   title: "Photography Portfolio",
    //   category: "Photography",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   link: "https://example.com/portfolio",
    //   external: true
    // },
    // {
    //   id: 30,
    //   img: <img src="" />,
    //   title: "Photography Portfolio",
    //   category: "Photography",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   link: "https://example.com/portfolio",
    //   external: true
    // },
    // {
    //   id: 31,
    //   img: <img src="" />,
    //   title: "Photography Portfolio",
    //   category: "Photography",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   link: "https://example.com/portfolio",
    //   external: true
    // },
    // {
    //   id: 32,
    //   img: <img src="" />,
    //   title: "Photography Portfolio",
    //   category: "Photography",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   link: "https://example.com/portfolio",
    //   external: true
    // },

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
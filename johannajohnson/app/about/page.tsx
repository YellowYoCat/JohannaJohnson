import "./about.css";

export default function About() {
  return (
    <main className="container">
     
      <section className="aboutSection">
        <div className="aboutImage"> <img src="./me.jpg" alt="profile" /></div>

        <div className="aboutContent">
          <h2>About Me</h2>
          <div className="aboutBox">
            <p>
              As a motivated professional, I recently graduated from Neumont University. 
              Throughout my academic career, 
              I have distinguished myself as a fast learner and a highly driven individual, 
              consistently seeking out new challenges to refine my technical and creative skill sets.
               My professional passion is primarily focused on front-end development and UX/UI design, 
               where I strive to create seamless, intuitive, and visually compelling user experiences that
                bridge the gap between complex functionality and user-centric design.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
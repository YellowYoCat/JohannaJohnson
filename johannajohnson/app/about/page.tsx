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
              I recently graduated from the Neumont University
              Science. I'm a fast learner and driven individual, primarily
              focused on front-end development and UX/UI design.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
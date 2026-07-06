import "./Projects.css";
import { useState, useEffect } from "react";
import { FaSearchPlus, FaTimes } from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/project4.webp";
import project5 from "../../assets/project5.jpg";
import project6 from "../../assets/project6.jpg";

function Projects(){
    const [selectedImage, setSelectedImage] = useState(null);
    const [count, setCount] = useState({
  projects: 0,
  experience: 0,
  clients: 0,
});
useEffect(() => {

  let p = 0;
  let e = 0;
  let c = 0;

  const timer = setInterval(() => {

    if (p < 500) p += 10;
    if (e < 15) e += 1;
    if (c < 100) c += 2;

    setCount({
      projects: p,
      experience: e,
      clients: c,
    });

    if (p >= 500 && e >= 15 && c >= 100) {
      clearInterval(timer);
    }

  }, 40);

  return () => clearInterval(timer);

}, []);

const projects=[

{
image:project1,
location:"Odisha",
type:"Industrial Project"
},

{
image:project2,
location:"Noida",
type:"Commercial Project"
},

{
image:project3,
location:"Maharastra",
type:"Power Distribution"
},

{
image:project4,
location:"Rourkela",
type:"Industrial Automation"
},

{
image:project5,
location:"Delhi",
type:"Electrical Project"
},

{
image:project6,
location:"Mumbai",
type:"Infrastructure"
}

];

return(

<>

<Navbar/>

<section className="project-banner">

<div className="project-overlay">

<span>OUR PROJECTS</span>

<h1>Completed Projects</h1>

<p>

Delivering premium electrical engineering
solutions across industries.

</p>

</div>

</section>

<section className="project-gallery">

<div className="section-title">

<span>OUR WORK</span>

<h2>Featured Projects</h2>

</div>

<div className="project-grid">
            {projects.map((item,index)=>(

          <div
            className="project-card"
            key={index}
          >

            <img
              src={item.image}
              alt={item.title}
            />
            <div
className="image-icon"
onClick={() => setSelectedImage(item.image)}
>

<FaSearchPlus />

</div>

            <div className="project-content">

              <span>

                {item.type}

              </span>

              <h3>

                {item.title}

              </h3>

              <p>

                📍 {item.location}

              </p>

            <div className="project-status">
  ✔ Completed Project
</div>

            </div>

          </div>

        ))}

      </div>

    </section>

    {/* Statistics */}

    <section className="project-counter">

      <div className="counter-box">

       <h2>{count.projects}+</h2>

        <p>Projects Completed</p>

      </div>

      <div className="counter-box">

        <h2>{count.experience}+</h2>

        <p>Years Experience</p>

      </div>

      <div className="counter-box">

        <h2>100+</h2>

        <p>Happy Clients</p>

      </div>

      <div className="counter-box">

        <h2>24×7</h2>

        <p>Technical Support</p>

      </div>

    </section>
          {/* Call To Action */}

      <section className="project-cta">

        <div className="project-cta-content">

          <h2>
            Looking For A Trusted Power Engineering Partner?
          </h2>

          <p>
            We deliver reliable Power panel solutions for
            industrial, commercial and infrastructure projects
            across India.
          </p>

          <a
            href="/contact"
            className="project-btn"
          >
            Contact Us →
          </a>

        </div>
       

      </section>
      {selectedImage && (

<div
className="lightbox"
onClick={() => setSelectedImage(null)}
>

<div className="lightbox-content">

<img
src={selectedImage}
alt="Project"
/>

<button
className="close-btn"
>

<FaTimes />

</button>

</div>

</div>

)}

      <Footer />

    </>

  );

}

export default Projects;

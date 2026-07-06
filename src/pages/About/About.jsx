import "./About.css";
import { NavLink } from "react-router-dom";
import about from "../../assets/about.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

function Counter({ end, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {

          let start = 0;

          const duration = 2000;

          const increment = end / (duration / 20);

          const timer = setInterval(() => {

            start += increment;

            if (start >= end) {

              setCount(end);

              clearInterval(timer);

            } else {

              setCount(Math.floor(start));

            }

          },20);

        }
      },
      {
        threshold:0.4,
      }
    );

    observer.observe(ref.current);

    return ()=>observer.disconnect();

  },[end]);

  return (
    <h2 ref={ref}>
      {count}
      {suffix}
    </h2>
  );
}

function About(){

return(

<section className="about">

<div className="about-container">

<div className="about-image">

<img src={about} alt="Power Engineers"/>

</div>

<div className="about-content">

<span className="sub-title">

ABOUT POWER ENGINEERS

</span>

<h2>

Delivering Reliable Electrical

<span> Engineering Solutions</span>

</h2>

<p>

Power Engineers is one of the leading manufacturers
of HT Panels, LT Panels, PCC Panels, MCC Panels,
APFC Panels and Industrial Automation Systems.

We provide complete turnkey electrical engineering
solutions with quality, safety and reliability.

</p>

<div className="feature-grid">

<div>

<FaCheckCircle/>

<span>HT / LT Panels</span>

</div>

<div>

<FaCheckCircle/>

<span>PCC & MCC Panels</span>

</div>

<div>

<FaCheckCircle/>

<span>Industrial Automation</span>

</div>

<div>

<FaCheckCircle/>

<span>Bus Duct Systems</span>

</div>

<div>

<FaCheckCircle/>

<span>Turnkey Projects</span>

</div>

<div>

<FaCheckCircle/>

<span>Testing & Commissioning</span>

</div>

</div>

<button className="about-btn">

Read More

</button>

</div>

</div>

<div className="counter-section">

<div className="counter-card">

<Counter end={500}/>

<p>Projects Completed</p>

</div>

<div className="counter-card">

<Counter end={150}/>

<p>Happy Clients</p>

</div>

<div className="counter-card">

<Counter end={15}/>

<p>Years Experience</p>

</div>

<div className="counter-card">

<h2>24/7</h2>

<p>Customer Support</p>

</div>

</div>

</section>

);

}

export default About;
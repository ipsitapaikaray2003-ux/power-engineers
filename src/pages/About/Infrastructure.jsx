import "./Infrastructure.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import factory from "../../assets/factory.avif";

function Infrastructure() {

  return (

    <>

      <Navbar />

      {/* Banner */}

      <section className="infra-banner">

        <div className="infra-overlay">

          <span>ABOUT US</span>

          <h1>Infrastructure</h1>

          <p>

            State-of-the-art manufacturing facility equipped
            with advanced machinery and skilled professionals.

          </p>

        </div>

      </section>

      {/* Manufacturing */}

      <section className="infra-section">

        <div className="infra-image">

          <img src={factory} alt="Infrastructure" />

        </div>

        <div className="infra-content">

          <span>OUR FACILITY</span>

          <h2>

            Modern Manufacturing
            Infrastructure

          </h2>

          <p>

            Our production facility is equipped with modern
            fabrication machines, precision tools and
            advanced electrical testing equipment to
            manufacture premium quality electrical panels.

          </p>

          <p>

            Every product passes through strict quality
            inspection before dispatch ensuring complete
            customer satisfaction.

          </p>

          <ul>

            <li>✔ Advanced Manufacturing Machines</li>

            <li>✔ Powder Coating Facility</li>

            <li>✔ Quality Testing Laboratory</li>

            <li>✔ Experienced Engineers</li>

            <li>✔ Skilled Production Team</li>

            <li>✔ Safe Working Environment</li>

          </ul>

        </div>

      </section>
            {/* Modern Infrastructure */}

      <section className="infra-features">

        <div className="section-heading">

          <span>OUR STRENGTH</span>

          <h2>Advanced Infrastructure</h2>

          <p>
            Our world-class manufacturing facility is designed to
            deliver high-quality electrical control panels with
            precision, efficiency and reliability.
          </p>

        </div>

        <div className="infra-grid">

          <div className="infra-card">

            <h3>Modern Machinery</h3>

            <p>
              Equipped with advanced fabrication and assembly
              machines for precision manufacturing.
            </p>

          </div>

          <div className="infra-card">

            <h3>Testing Laboratory</h3>

            <p>
              Every panel undergoes electrical and mechanical
              testing before dispatch.
            </p>

          </div>

          <div className="infra-card">

            <h3>Quality Control</h3>

            <p>
              Strict inspection procedures ensure compliance
              with national and international standards.
            </p>

          </div>

          <div className="infra-card">

            <h3>Experienced Team</h3>

            <p>
              Highly skilled engineers and technicians ensure
              quality manufacturing and timely delivery.
            </p>

          </div>

          <div className="infra-card">

            <h3>Production Capacity</h3>

            <p>
              Efficient manufacturing processes enable us to
              handle small as well as large-scale projects.
            </p>

          </div>

          <div className="infra-card">

            <h3>Customer Satisfaction</h3>

            <p>
              Dedicated support and reliable after-sales service
              help us build long-term customer relationships.
            </p>

          </div>

        </div>

      </section>


      {/* Manufacturing Process */}

      <section className="process-section">

        <div className="section-heading">

          <span>OUR PROCESS</span>

          <h2>Manufacturing Workflow</h2>

        </div>

        <div className="process-grid">

          <div className="process-box">
            <h3>01</h3>
            <p>Design & Engineering</p>
          </div>

          <div className="process-box">
            <h3>02</h3>
            <p>Fabrication</p>
          </div>

          <div className="process-box">
            <h3>03</h3>
            <p>Assembly</p>
          </div>

          <div className="process-box">
            <h3>04</h3>
            <p>Testing & Inspection</p>
          </div>

          <div className="process-box">
            <h3>05</h3>
            <p>Quality Check</p>
          </div>

          <div className="process-box">
            <h3>06</h3>
            <p>Delivery</p>
          </div>

        </div>

      </section>
            {/* Call To Action */}

      <section className="infra-cta">

        <div className="infra-cta-content">

          <h2>
            Looking For A Trusted Electrical Panel Manufacturer?
          </h2>

          <p>
            Our modern manufacturing infrastructure, experienced
            engineers and stringent quality standards help us
            deliver reliable electrical solutions for every project.
          </p>

          <a href="/contact" className="infra-btn">

            Contact Us →

          </a>

        </div>

      </section>

      {/* Footer */}

      <Footer />

    </>

  );

}

export default Infrastructure;
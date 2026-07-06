import "./VisionMission.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function VisionMission() {

  return (

    <>

      <Navbar />

      {/* Banner */}

      <section className="vm-banner">

        <div className="vm-overlay">

          <span>ABOUT US</span>

          <h1>Vision & Mission</h1>

          <p>

            Building the future through innovation,
            quality and engineering excellence.

          </p>

        </div>

      </section>

      {/* Vision */}

      <section className="vision-wrapper">

        <div className="vision-card">

          <div className="icon">

            👁

          </div>

          <h2>Our Vision</h2>

          <p>

            To become India's most trusted manufacturer of
            Electrical Control Panels by delivering innovative,
            reliable and energy-efficient engineering solutions
            that exceed customer expectations.

          </p>

        </div>

        <div className="vision-card">

          <div className="icon">

            🎯

          </div>

          <h2>Our Mission</h2>

          <p>

            To manufacture world-class electrical products,
            maintain uncompromising quality standards and
            build long-term relationships through customer
            satisfaction and continuous innovation.

          </p>

        </div>

      </section>
            {/* Core Values */}

      <section className="values-section">

        <div className="section-heading">

          <span>OUR VALUES</span>

          <h2>What Drives Power Engineers</h2>

          <p>
            We believe in delivering excellence through innovation,
            quality, integrity and customer satisfaction.
          </p>

        </div>

        <div className="values-grid">

          <div className="value-card">

            <h3>Integrity</h3>

            <p>
              We conduct our business with honesty,
              transparency and professionalism.
            </p>

          </div>

          <div className="value-card">

            <h3>Innovation</h3>

            <p>
              We continuously improve our products
              using modern engineering technology.
            </p>

          </div>

          <div className="value-card">

            <h3>Quality</h3>

            <p>
              Every product passes through strict
              quality inspection before delivery.
            </p>

          </div>

          <div className="value-card">

            <h3>Customer Focus</h3>

            <p>
              Customer satisfaction remains our
              highest priority in every project.
            </p>

          </div>

        </div>

      </section>


      {/* Why Choose Us */}

      <section className="why-section">

        <div className="why-left">

          <span>WHY CHOOSE US</span>

          <h2>
            Engineering Excellence
            With Trusted Quality
          </h2>

          <p>

            We provide complete electrical engineering
            solutions with modern manufacturing,
            experienced engineers and premium quality
            electrical products.

          </p>

        </div>

        <div className="why-right">

          <div className="why-box">

            ✔ Experienced Engineers

          </div>

          <div className="why-box">

            ✔ Premium Components

          </div>

          <div className="why-box">

            ✔ Modern Manufacturing

          </div>

          <div className="why-box">

            ✔ Timely Delivery

          </div>

          <div className="why-box">

            ✔ Quality Assurance

          </div>

          <div className="why-box">

            ✔ After Sales Support

          </div>

        </div>

      </section>
            {/* Call To Action */}

      <section className="vm-cta">

        <div className="vm-cta-content">

          <h2>
            Let's Build Reliable Electrical Solutions Together
          </h2>

          <p>
            We are committed to providing innovative, safe and
            high-quality electrical engineering solutions for
            industrial, commercial and infrastructure projects.
          </p>

          <a href="/contact" className="vm-btn">

            Contact Us →

          </a>

        </div>

      </section>

      {/* Footer */}

      <Footer />

    </>

  );

}

export default VisionMission;
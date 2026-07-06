import "./AboutPage.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import about from "../../assets/about.jpg";
import factory from "../../assets/factory.avif";
import whychoose from "../../assets/whychoose.jpg";

function AboutPage() {
  return (
    <>
      <Navbar />

      {/* ================= Banner ================= */}

      <section className="about-banner">

        <div className="about-overlay">

          <span>ABOUT US</span>

          <h1>Power Engineers</h1>

          <p>
            Delivering Reliable, Innovative and High Quality Electrical
            Engineering Solutions For Industries Across India.
          </p>

        </div>

      </section>

      {/* ================= Company Overview ================= */}

      <section className="company-section">

        <div className="company-image">

          <img src={about} alt="Power Engineers" />

        </div>

        <div className="company-content">

          <span className="section-tag">
            WHO WE ARE
          </span>

          <h2>
            Trusted Electrical Panel Manufacturer &
            Engineering Solution Provider
          </h2>

          <p>
            Power Engineers is a leading manufacturer of premium quality
            Electrical Control Panels, PCC Panels, MCC Panels,
            LT Panels, HT Panels, APFC Panels and Bus Duct Systems.
          </p>

          <p>
            We provide complete electrical engineering solutions for
            Industrial, Commercial and Infrastructure projects with
            advanced technology, skilled professionals and uncompromising
            quality standards.
          </p>

          <p>
            Our mission is to build long-term relationships with our
            clients by delivering innovative, safe and reliable products
            backed by excellent technical support.
          </p>

          <div className="company-stats">

            <div className="stat-box">

              <h3>15+</h3>

              <p>Years Experience</p>

            </div>

            <div className="stat-box">

              <h3>500+</h3>

              <p>Projects Delivered</p>

            </div>

            <div className="stat-box">

              <h3>100%</h3>

              <p>Quality Assurance</p>

            </div>

          </div>

        </div>

      </section>
{/* ================= OUR JOURNEY ================= */}

<section className="journey-section">

  <div className="journey-left">

    <span className="section-tag">
      OUR JOURNEY
    </span>

    <h2>
      Building Trust Through
      Engineering Excellence
    </h2>

    <p>
      Since our establishment, Power Engineers has been committed to
      delivering reliable electrical engineering solutions that exceed
      customer expectations. Our expertise in manufacturing electrical
      panels and power distribution systems has made us a trusted partner
      for industries across India.
    </p>

    <p>
      Every project reflects our dedication towards innovation,
      precision engineering, quality manufacturing and customer
      satisfaction.
    </p>

  </div>

  <div className="journey-right">

    <div className="journey-card">

      <h3>01</h3>

      <h4>Innovation</h4>

      <p>
        Modern manufacturing processes with advanced electrical technology.
      </p>

    </div>

    <div className="journey-card">

      <h3>02</h3>

      <h4>Quality</h4>

      <p>
        Every product undergoes strict quality inspection before delivery.
      </p>

    </div>

    <div className="journey-card">

      <h3>03</h3>

      <h4>Commitment</h4>

      <p>
        Timely project execution with complete customer satisfaction.
      </p>

    </div>

    <div className="journey-card">

      <h3>04</h3>

      <h4>Support</h4>

      <p>
        Dedicated technical assistance and reliable after-sales service.
      </p>

    </div>

  </div>

</section>


{/* ================= VISION & MISSION ================= */}

<section className="vision-section">

  <div className="vision-card">

    <div className="vision-icon">
      👁
    </div>

    <h3>Our Vision</h3>

    <p>
      To become one of India's most trusted electrical engineering
      companies by delivering innovative, energy-efficient and
      world-class electrical solutions.
    </p>

  </div>

  <div className="vision-card">

    <div className="vision-icon">
      🎯
    </div>

    <h3>Our Mission</h3>

    <p>
      To provide premium quality electrical products with
      cutting-edge technology, exceptional customer service and
      long-term business relationships.
    </p>

  </div>

</section>


{/* ================= CORE VALUES ================= */}

<section className="values-section">

  <div className="section-heading">

    <span>OUR VALUES</span>

    <h2>What Drives Power Engineers</h2>

  </div>

  <div className="values-grid">

    <div className="value-box">

      <h3>Integrity</h3>

      <p>
        We conduct every project with honesty, transparency
        and professionalism.
      </p>

    </div>

    <div className="value-box">

      <h3>Innovation</h3>

      <p>
        We continuously improve our products using modern
        engineering practices.
      </p>

    </div>

    <div className="value-box">

      <h3>Customer Focus</h3>

      <p>
        Our clients remain at the center of everything we do.
      </p>

    </div>

    <div className="value-box">

      <h3>Quality First</h3>

      <p>
        Delivering dependable and high-performance electrical
        solutions without compromise.
      </p>

    </div>

  </div>

</section>
{/* ================= MANUFACTURING FACILITY ================= */}

<section className="facility-section">

  <div className="facility-content">

    <span className="section-tag">
      MANUFACTURING FACILITY
    </span>

    <h2>
      Modern Infrastructure &
      Advanced Manufacturing
    </h2>

    <p>
      Our manufacturing facility is equipped with modern machinery,
      advanced testing equipment and skilled professionals to ensure
      every electrical panel meets international quality standards.
    </p>

    <ul className="facility-list">

      <li>✔ Advanced Manufacturing Equipment</li>

      <li>✔ Quality Testing Laboratory</li>

      <li>✔ Experienced Technical Team</li>

      <li>✔ On-Time Project Delivery</li>

      <li>✔ Premium Grade Raw Materials</li>

      <li>✔ Strict Safety Standards</li>

    </ul>

  </div>

  <div className="facility-image">

    <img src={factory} alt="Factory" />

  </div>

</section>



{/* ================= WHY CHOOSE US ================= */}

<section className="about-choose">

  <div className="choose-image">

    <img src={whychoose} alt="Why Choose Us" />

  </div>

  <div className="choose-content">

    <span className="section-tag">
      WHY CHOOSE US
    </span>

    <h2>
      Why Industries Trust
      Power Engineers
    </h2>

    <div className="choose-grid">

      <div className="choose-box">

        <h3>Premium Quality</h3>

        <p>
          High-quality electrical products with complete testing.
        </p>

      </div>

      <div className="choose-box">

        <h3>Experienced Team</h3>

        <p>
          Skilled engineers delivering reliable engineering solutions.
        </p>

      </div>

      <div className="choose-box">

        <h3>Latest Technology</h3>

        <p>
          Modern manufacturing using advanced technology.
        </p>

      </div>

      <div className="choose-box">

        <h3>Customer Satisfaction</h3>

        <p>
          Long-term relationships through quality service.
        </p>

      </div>

    </div>

  </div>

</section>



{/* ================= INDUSTRIES ================= */}

<section className="industry-section">

  <div className="section-heading">

    <span>INDUSTRIES WE SERVE</span>

    <h2>Serving Diverse Industries</h2>

  </div>

  <div className="industry-grid">

    <div className="industry-card">🏭 Manufacturing Industries</div>

    <div className="industry-card">⚡ Power Plants</div>

    <div className="industry-card">🏢 Commercial Buildings</div>

    <div className="industry-card">🧵 Textile Industries</div>

    <div className="industry-card">💊 Pharmaceutical</div>

    <div className="industry-card">🍽 Food Processing</div>

  </div>

</section>



{/* ================= QUALITY POLICY ================= */}

<section className="quality-section">

  <span className="section-tag">
    QUALITY POLICY
  </span>

  <h2>
    Quality Is At The Heart Of Everything We Do
  </h2>

  <p>

    We are committed to manufacturing premium quality electrical
    products by following strict quality control procedures,
    continuous improvement and complete customer satisfaction.

  </p>

</section>



{/* ================= CALL TO ACTION ================= */}

<section className="about-cta">

  <h2>
    Looking For Reliable Electrical Engineering Solutions?
  </h2>

  <p>

    Contact our experts today for customized electrical panels,
    power distribution systems and industrial automation solutions.

  </p>

  <a href="/contact" className="about-btn">

    Get In Touch →

  </a>

</section>
      <Footer />
    </>
  );
}

export default AboutPage;
import "./HTPanel.css";
import { NavLink } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import lt from "../../assets/ltpanel1.jpg";

function LTPanel() {
  return (
    <>
      <Navbar />

      {/* Banner */}

      <section className="product-banner">
        <div className="banner-overlay">
          <h1>LT Panels</h1>

          <p>
            Reliable Low Tension Distribution Panels for Industrial &
            Commercial Applications
          </p>
        </div>
      </section>

      {/* Product Details */}

      <section className="product-details">
        <div className="product-image">
          <img src={lt} alt="LT Panel" />
        </div>

        <div className="product-content">
          <span>OUR PRODUCT</span>

          <h2>Low Tension Electrical Panels</h2>

          <p>
            LT Panels are designed for safe and efficient power distribution
            in commercial buildings, industries and infrastructure projects.
          </p>

          <p>
            Manufactured with premium components, our LT Panels provide
            reliable performance, maximum safety and long operational life.
          </p>
        </div>
      </section>

      {/* Features */}

      <section className="product-features">

        <div className="section-title">
          <span>FEATURES</span>
          <h2>Key Features</h2>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>✔ High Reliability</h3>
            <p>Designed for uninterrupted power distribution.</p>
          </div>

          <div className="feature-card">
            <h3>✔ Premium Components</h3>
            <p>Manufactured using branded electrical accessories.</p>
          </div>

          <div className="feature-card">
            <h3>✔ Easy Maintenance</h3>
            <p>Compact design for easy servicing and operation.</p>
          </div>

          <div className="feature-card">
            <h3>✔ Long Service Life</h3>
            <p>Strong construction with corrosion resistant finish.</p>
          </div>

        </div>

      </section>

      {/* Specifications */}

      <section className="specifications">

        <div className="section-title">
          <span>SPECIFICATIONS</span>
          <h2>Technical Specifications</h2>
        </div>

        <table className="spec-table">

          <tbody>

            <tr>
              <td>Rated Voltage</td>
              <td>415 V</td>
            </tr>

            <tr>
              <td>Frequency</td>
              <td>50 Hz</td>
            </tr>

            <tr>
              <td>Protection</td>
              <td>IP42 / IP54 / IP65</td>
            </tr>

            <tr>
              <td>Material</td>
              <td>CRCA Sheet Steel</td>
            </tr>

            <tr>
              <td>Finish</td>
              <td>Powder Coated</td>
            </tr>

          </tbody>

        </table>

      </section>

      {/* CTA */}

      <section className="product-cta">

        <h2>Need Premium LT Panels?</h2>

        <p>
          Contact our experts for customized Low Tension Panel solutions.
        </p>

        <NavLink to="/get-quote" className="quote-now">
          Get Quote →
        </NavLink>

      </section>

      <Footer />
    </>
  );
}

export default LTPanel;
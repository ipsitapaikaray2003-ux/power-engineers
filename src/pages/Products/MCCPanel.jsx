import "./HTPanel.css";
import { NavLink } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import mcc from "../../assets/mccpanel1.jpg";

function MCCPanel() {

  return (
    <>
      <Navbar />

      {/* Banner */}

      <section className="product-banner">

        <div className="banner-overlay">

          <h1>MCC Panels</h1>

          <p>
            Premium Motor Control Centre Panels for Safe &
            Efficient Motor Control Applications
          </p>

        </div>

      </section>

      {/* Product Details */}

      <section className="product-details">

        <div className="product-image">

          <img src={mcc} alt="MCC Panel" />

        </div>

        <div className="product-content">

          <span>OUR PRODUCT</span>

          <h2>Motor Control Centre Panels</h2>

          <p>
            MCC Panels are designed to provide centralized control
            and protection for multiple motors in industrial plants.
          </p>

          <p>
            Manufactured with premium electrical components for
            reliable operation, safety and long service life.
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
            <h3>✔ Motor Protection</h3>
            <p>Provides safe and reliable motor control.</p>
          </div>

          <div className="feature-card">
            <h3>✔ Modular Design</h3>
            <p>Easy installation, maintenance and future expansion.</p>
          </div>

          <div className="feature-card">
            <h3>✔ High Safety</h3>
            <p>Designed according to industrial safety standards.</p>
          </div>

          <div className="feature-card">
            <h3>✔ Energy Efficient</h3>
            <p>Optimized design for efficient power utilization.</p>
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

        <h2>Need Reliable MCC Panels?</h2>

        <p>
          Contact our experts for customized Motor Control Centre
          Panel solutions.
        </p>

        <NavLink to="/get-quote" className="quote-now">

          Get Quote →

        </NavLink>

      </section>

      <Footer />

    </>
  );

}

export default MCCPanel;
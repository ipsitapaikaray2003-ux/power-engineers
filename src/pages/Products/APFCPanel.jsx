import "./HTPanel.css";
import { NavLink } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import apfc from "../../assets/Apfcpanel1.png";

function APFCPanel() {
  return (
    <>
      <Navbar />

      {/* Banner */}
      <section className="product-banner">
        <div className="banner-overlay">
          <h1>APFC Panels</h1>

          <p>
            Automatic Power Factor Control Panels for Efficient
            Power Management and Energy Saving
          </p>
        </div>
      </section>

      {/* Product Details */}
      <section className="product-details">
        <div className="product-image">
          <img src={apfc} alt="APFC Panel" />
        </div>

        <div className="product-content">
          <span>OUR PRODUCT</span>

          <h2>Automatic Power Factor Control Panels</h2>

          <p>
            APFC Panels are designed to improve power factor,
            reduce electricity losses and optimize energy efficiency.
          </p>

          <p>
            Manufactured with intelligent controllers and premium
            components to ensure reliable and automatic power
            factor correction.
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
            <h3>✔ Automatic Power Factor Correction</h3>
            <p>
              Maintains optimum power factor automatically.
            </p>
          </div>

          <div className="feature-card">
            <h3>✔ Energy Saving</h3>
            <p>
              Reduces electricity losses and utility penalties.
            </p>
          </div>

          <div className="feature-card">
            <h3>✔ Intelligent Controller</h3>
            <p>
              Fast response with accurate capacitor switching.
            </p>
          </div>

          <div className="feature-card">
            <h3>✔ Long Service Life</h3>
            <p>
              Premium quality components for reliable operation.
            </p>
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
              <td>Power Factor</td>
              <td>Up to 0.99</td>
            </tr>

            <tr>
              <td>Protection</td>
              <td>IP42 / IP54 / IP65</td>
            </tr>

            <tr>
              <td>Material</td>
              <td>CRCA Sheet Steel</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* CTA */}
      <section className="product-cta">
        <h2>Need APFC Panels?</h2>

        <p>
          Contact our experts for customized APFC Panel
          solutions.
        </p>

        <NavLink
          to="/get-quote"
          className="quote-now"
        >
          Get Quote →
        </NavLink>
      </section>

      <Footer />
    </>
  );
}

export default APFCPanel;
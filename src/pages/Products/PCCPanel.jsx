import "./HTPanel.css";
import { NavLink } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import pcc from "../../assets/pccpanel1.webp";

function PCCPanel() {

  return (
    <>
      <Navbar />

      {/* Banner */}

      <section className="product-banner">

        <div className="banner-overlay">

          <h1>PCC Panels</h1>

          <p>
            Premium Power Control Centre Panels for Safe &
            Efficient Power Distribution
          </p>

        </div>

      </section>

      {/* Product Details */}

      <section className="product-details">

        <div className="product-image">

          <img src={pcc} alt="PCC Panel" />

        </div>

        <div className="product-content">

          <span>OUR PRODUCT</span>

          <h2>Power Control Centre Panels</h2>

          <p>
            PCC Panels are designed for centralized power distribution
            and control in industrial and commercial applications.
          </p>

          <p>
            Manufactured with premium quality components to ensure
            maximum safety, efficiency and uninterrupted operation.
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
            <h3>✔ Reliable Power Control</h3>
            <p>Efficient monitoring and control of electrical systems.</p>
          </div>

          <div className="feature-card">
            <h3>✔ Premium Components</h3>
            <p>Built with high-quality branded electrical equipment.</p>
          </div>

          <div className="feature-card">
            <h3>✔ High Safety</h3>
            <p>Designed according to industry safety standards.</p>
          </div>

          <div className="feature-card">
            <h3>✔ Easy Maintenance</h3>
            <p>Compact modular design for hassle-free servicing.</p>
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

        <h2>Looking For PCC Panels?</h2>

        <p>
          Contact our experts for customized Power Control Centre
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

export default PCCPanel;
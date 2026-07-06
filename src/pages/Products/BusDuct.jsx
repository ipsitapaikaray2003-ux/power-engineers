import "./BusDuct.css";
import { NavLink } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import busduct from "../../assets/busduct.jpg";

function BusDuct() {

  return (

    <>

      <Navbar />

      {/* Banner */}

      <section className="product-banner">

        <div className="banner-overlay">

          <h1>Bus Duct System</h1>

          <p>

            Efficient Power Distribution Solutions
            For Industrial & Commercial Applications

          </p>

        </div>

      </section>

      {/* Product Details */}

      <section className="product-details">

        <div className="product-image">

          <img src={busduct} alt="Bus Duct" />

        </div>

        <div className="product-content">

          <span>OUR PRODUCT</span>

          <h2>

            Bus Duct
            Distribution System

          </h2>

          <p>

            Bus Duct Systems provide a safe,
            reliable and efficient method of
            electrical power distribution for
            industrial and commercial facilities.

          </p>

          <p>

            Designed using premium quality materials,
            our Bus Ducts ensure low maintenance,
            excellent conductivity and long service life.

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

            <h3>✔ Compact Design</h3>

            <p>
              Space-saving and modular design for easy installation.
            </p>

          </div>

          <div className="feature-card">

            <h3>✔ High Conductivity</h3>

            <p>
              Copper and aluminium bus bars ensure efficient power transmission.
            </p>

          </div>

          <div className="feature-card">

            <h3>✔ Fire Resistant</h3>

            <p>
              Manufactured with high-quality insulated materials for maximum safety.
            </p>

          </div>

          <div className="feature-card">

            <h3>✔ Low Maintenance</h3>

            <p>
              Robust construction with long operational life and minimum maintenance.
            </p>

          </div>

        </div>

      </section>


      {/* Applications */}

      <section className="applications">

        <div className="section-title">

          <span>APPLICATIONS</span>

          <h2>Where Bus Duct Is Used</h2>

        </div>

        <div className="application-grid">

          <div className="application-box">
            Manufacturing Industries
          </div>

          <div className="application-box">
            Commercial Buildings
          </div>

          <div className="application-box">
            Power Plants
          </div>

          <div className="application-box">
            Data Centers
          </div>

          <div className="application-box">
            Shopping Malls
          </div>

          <div className="application-box">
            Infrastructure Projects
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
              <td>Up to 690 V</td>
            </tr>

            <tr>
              <td>Rated Current</td>
              <td>100 A – 6300 A</td>
            </tr>

            <tr>
              <td>Frequency</td>
              <td>50 / 60 Hz</td>
            </tr>

            <tr>
              <td>Protection</td>
              <td>IP42 / IP54 / IP65</td>
            </tr>

            <tr>
              <td>Conductor</td>
              <td>Copper / Aluminium</td>
            </tr>

            <tr>
              <td>Standards</td>
              <td>IEC 61439 / IS Standards</td>
            </tr>

          </tbody>

        </table>

      </section>

      {/* CTA */}

      <section className="product-cta">

        <h2>
          Looking For Reliable Bus Duct Systems?
        </h2>

        <p>
          Contact our experts for customized Bus Duct solutions
          designed for industrial, commercial and infrastructure
          applications.
        </p>

        <NavLink
          to="/get-quote"
          className="quote-now"
        >
          Get Quote →
        </NavLink>

      </section>

      {/* Related Products */}

      <section className="related-products">

        <div className="section-title">

          <span>OUR PRODUCTS</span>

          <h2>You May Also Like</h2>

        </div>

        <div className="related-grid">

          <NavLink
            to="/products/ht-panel"
            className="related-card"
          >
            HT Panel
          </NavLink>

          <NavLink
            to="/products/lt-panel"
            className="related-card"
          >
            LT Panel
          </NavLink>

          <NavLink
            to="/products/pcc-panel"
            className="related-card"
          >
            PCC Panel
          </NavLink>

          <NavLink
            to="/products/apfc-panel"
            className="related-card"
          >
            APFC Panel
          </NavLink>

        </div>

      </section>

      <Footer />

    </>

  );

}

export default BusDuct;
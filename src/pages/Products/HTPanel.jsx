import "./HTPanel.css";
import { NavLink } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import ht from "../../assets/htpanel1.jpg";

function HTPanel() {

  return (

    <>

      <Navbar />

      {/* Banner */}

      <section className="product-banner">

        <div className="banner-overlay">

          <h1>HT Panels</h1>

          <p>

            High Performance High Tension Electrical Panels
            Designed For Industrial Applications

          </p>

        </div>

      </section>

      {/* Product Section */}

      <section className="product-details">

        <div className="product-image">

          <img src={ht} alt="HT Panel" />

        </div>

        <div className="product-content">

          <span>OUR PRODUCT</span>

          <h2>

            High Tension
            Electrical Panels

          </h2>

          <p>

            HT Panels are manufactured using premium quality
            components to ensure safe and reliable power
            distribution in industrial plants, substations
            and commercial facilities.

          </p>

          <p>

            Our panels are designed according to
            industry standards with maximum safety,
            durability and operational efficiency.

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
            <h3>✔ High Safety</h3>
            <p>
              Designed with advanced protection systems for maximum electrical safety.
            </p>
          </div>

          <div className="feature-card">
            <h3>✔ Robust Construction</h3>
            <p>
              Built using premium quality CRCA sheets and branded components.
            </p>
          </div>

          <div className="feature-card">
            <h3>✔ Reliable Performance</h3>
            <p>
              Ensures uninterrupted power distribution with long service life.
            </p>
          </div>

          <div className="feature-card">
            <h3>✔ Easy Maintenance</h3>
            <p>
              User-friendly design for quick inspection and maintenance.
            </p>
          </div>

        </div>

      </section>


      {/* Applications */}

      <section className="applications">

        <div className="section-title">

          <span>APPLICATIONS</span>

          <h2>Where HT Panels Are Used</h2>

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
            Textile Industries
          </div>

          <div className="application-box">
            Pharmaceutical Units
          </div>

          <div className="application-box">
            Food Processing Plants
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
              <td>Up to 33 KV</td>
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
              <td>Painting</td>
              <td>Powder Coated</td>
            </tr>

            <tr>
              <td>Standards</td>
              <td>IEC / IS Standards</td>
            </tr>

          </tbody>

        </table>

      </section>
            {/* Call To Action */}

      <section className="product-cta">

        <h2>
          Looking For High Quality HT Panels?
        </h2>

        <p>
          Contact our experts for customized High Tension Panel
          solutions designed according to your industrial requirements.
        </p>

        <NavLink to="/get-quote" className="quote-now">

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

          <NavLink to="/products/lt-panel" className="related-card">
            LT Panel
          </NavLink>

          <NavLink to="/products/pcc-panel" className="related-card">
            PCC Panel
          </NavLink>

          <NavLink to="/products/mcc-panel" className="related-card">
            MCC Panel
          </NavLink>

          <NavLink to="/products/apfc-panel" className="related-card">
            APFC Panel
          </NavLink>

        </div>

      </section>

      <Footer />

    </>

  );

}

export default HTPanel;
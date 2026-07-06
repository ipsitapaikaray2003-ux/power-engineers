import "./GetQuote.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import heroBg from "../../assets/contact-bg.jpg";

import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaBuilding,
  FaClipboardList,
  FaPaperPlane,
} from "react-icons/fa";

function GetQuote() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section
        className="quote-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="quote-overlay">
          <span>GET A QUOTE</span>

          <h1>Request A Free Quote</h1>

          <p>
            Tell us about your project and our experts will provide the
            best electrical engineering solution.
          </p>
        </div>
      </section>

      {/* Quote Section */}

      <section className="quote-section">

        {/* Left */}

        <div className="quote-left">

          <span>WHY CHOOSE US</span>

          <h2>Let's Build Your Next Project</h2>

          <p>
            Power Engineers provides premium electrical panels,
            industrial automation solutions and complete engineering
            support.
          </p>

          <ul>
            <li>✔ Premium Quality Products</li>
            <li>✔ Experienced Engineers</li>
            <li>✔ Competitive Pricing</li>
            <li>✔ Fast Delivery</li>
            <li>✔ 24×7 Technical Support</li>
          </ul>

        </div>

        {/* Right */}

        <div className="quote-right">

          <form className="quote-form">

            <div className="quote-row">

              <div className="quote-input">

                <FaUser />

                <input
                  type="text"
                  placeholder="Full Name"
                  required
                />

              </div>

              <div className="quote-input">

                <FaEnvelope />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                />

              </div>

            </div>

            <div className="quote-row">

              <div className="quote-input">

                <FaPhoneAlt />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                />

              </div>

              <div className="quote-input">

                <FaBuilding />

                <input
                  type="text"
                  placeholder="Company Name"
                />

              </div>

            </div>

            <div className="quote-input">

              <FaClipboardList />

              <select required>

                <option>Select Service</option>

                <option>HT Panel</option>

                <option>LT Panel</option>

                <option>PCC Panel</option>

                <option>MCC Panel</option>

                <option>APFC Panel</option>

                <option>Bus Duct</option>

                <option>Electrical Turnkey Project</option>

              </select>

            </div>

            <div className="quote-input">

              <input
                type="text"
                placeholder="Estimated Budget"
              />

            </div>

            <textarea
              rows="6"
              placeholder="Project Details..."
            ></textarea>

            <button type="submit">

              <FaPaperPlane />

              <span>Request Quote</span>

            </button>

          </form>

        </div>

      </section>

      {/* WHY US */}

      <section className="quote-features">

        <div className="quote-title">

          <span>WHY POWER ENGINEERS</span>

          <h2>Trusted Electrical Engineering Partner</h2>

          <p>
            We deliver reliable and high-quality electrical solutions
            for industrial, commercial and infrastructure projects.
          </p>

        </div>

        <div className="feature-grid">

          <div className="feature-card">

            <h3>⚡ Premium Quality</h3>

            <p>
              Manufactured with high-quality materials and tested to
              industry standards.
            </p>

          </div>

          <div className="feature-card">

            <h3>👨‍🔧 Expert Engineers</h3>

            <p>
              Experienced professionals providing complete engineering
              support.
            </p>

          </div>

          <div className="feature-card">

            <h3>🚚 Fast Delivery</h3>

            <p>
              Timely project execution and on-time product delivery.
            </p>

          </div>

          <div className="feature-card">

            <h3>📞 24×7 Technical Support</h3>

            <p>
              Dedicated support before and after project completion.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="quote-cta">

        <div className="quote-cta-content">

          <h2>Let's Power Your Next Project</h2>

          <p>
            Request your free quotation today and our experts
            will get back to you with the best solution.
          </p>

          <a
            href="/contact"
            className="quote-btn"
          >
            Contact Our Team →
          </a>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default GetQuote;
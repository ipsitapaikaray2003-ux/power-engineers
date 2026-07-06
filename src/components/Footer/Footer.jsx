import "./Footer.css";
import logo from "../../assets/logo.png";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Company Info */}
        <div className="footer-col company">
          <img src={logo} alt="Power Engineers" className="footer-logo" />

          <p>
            Power Engineers is committed to delivering high-quality electrical
            engineering solutions for industrial, commercial, and residential
            projects with safety, innovation, and reliability.
          </p>

          <div className="social-icons">
            <a
              href="https://wa.me/919665554556"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="mailto:powerengineers.sales@gmail.com"
              title="Email"
            >
              <FaEnvelope />
            </a>

            <a
              href="tel:+918006200062"
              title="Call"
            >
              <FaPhoneAlt />
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=2216/7+Vivekanand+Nagar+Korochi+Ichalkaranji+416109"
              target="_blank"
              rel="noopener noreferrer"
              title="Location"
            >
              <FaMapMarkerAlt />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="#home">
                <FaArrowRight /> Home
              </a>
            </li>

            <li>
              <a href="#about">
                <FaArrowRight /> About Us
              </a>
            </li>

            <li>
              <a href="#services">
                <FaArrowRight /> Services
              </a>
            </li>

            <li>
              <a href="#products">
                <FaArrowRight /> Products
              </a>
            </li>

            <li>
              <a href="#contact">
                <FaArrowRight /> Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h3>Our Services</h3>

          <ul>
            <li><FaArrowRight /> Electrical Panels</li>
            <li><FaArrowRight /> Power Distribution</li>
            <li><FaArrowRight /> Industrial Automation</li>
            <li><FaArrowRight /> Installation</li>
            <li><FaArrowRight /> Maintenance</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact Info</h3>

          <p>
            <FaPhoneAlt />
            <a href="tel:+918006200062">
              +91 8006200062
            </a>
          </p>

          <p>
            <FaPhoneAlt />
            <a href="tel:+919665554556">
              +91 9665554556
            </a>
          </p>

          <p>
            <FaEnvelope />
            <a href="mailto:powerengineers.sales@gmail.com">
              powerengineers.sales@gmail.com
            </a>
          </p>

          <p>
            <FaEnvelope />
            <a href="mailto:mvpowerengineers@yahoo.com">
              mvpowerengineers@yahoo.com
            </a>
          </p>

          <p>
            <FaMapMarkerAlt />
            <a
              href="https://www.google.com/maps/search/?api=1&query=2216/7+Vivekanand+Nagar+Korochi+Ichalkaranji+416109"
              target="_blank"
              rel="noopener noreferrer"
            >
              2216/7 Vivekanand Nagar,
              <br />
              Korochi, Ichalkaranji,
              <br />
              Maharashtra - 416109
            </a>
          </p>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Power Engineers. All Rights Reserved.</p>

        <p>
          Designed &amp; Developed by{" "}
          <a
            href="https://www.qubnixtechnology.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="qubnix-link"
          >
            <strong>Qubnix Technology</strong>
          </a>
        </p>
      </div>
      {/* Floating WhatsApp Button */}
<a
  href="https://wa.me/919665554556"
  className="floating-whatsapp"
  target="_blank"
  rel="noopener noreferrer"
  title="Chat with us on WhatsApp"
>
  <FaWhatsapp />
  <span>Chat with Us</span>
</a>
    </footer>
  );
}

export default Footer;
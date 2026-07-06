import "./Contact.css";
import contactBg from "../../assets/contact-bg.jpg";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      className="contact"
      id="contact"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="contact-overlay"></div>

      <div className="contact-wrapper">

        {/* Left Side */}
        <div className="contact-left">

          <span className="contact-tag">CONTACT US</span>

          <h2>
            Let's Build <span>Your Next Project</span>
          </h2>

          <p>
            Power Engineers delivers premium electrical engineering
            solutions with superior quality, innovative technology and
            reliable service. Contact our team for industrial,
            commercial and residential electrical requirements.
          </p>

          {/* Phone */}
          <div className="contact-card">
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>

            <div className="contact-content">
              <h3>Call Us</h3>

              <a href="tel:+918006200062">
                +91 8006200062
              </a>

              <a href="tel:+919665554556">
                +91 9665554556
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="contact-card">
            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div className="contact-content">
              <h3>Email Us</h3>

              <a href="mailto:powerengineers.sales@gmail.com">
                powerengineers.sales@gmail.com
              </a>

              <a href="mailto:mvpowerengineers@yahoo.com">
                mvpowerengineers@yahoo.com
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="contact-card">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>

            <div className="contact-content">
              <h3>Office Address</h3>

              <a
                href="https://www.google.com/maps/search/?api=1&query=2216/7+Vivekanand+Nagar+Korochi+Ichalkaranji+416109"
                target="_blank"
                rel="noopener noreferrer"
              >
                2216/7, Vivekanand Nagar
                <br />
                Korochi, Ichalkaranji
                <br />
                Maharashtra - 416109
              </a>
            </div>
          </div>

        </div>
        {/* End Left Side */}

        {/* Right Side */}
        <div className="contact-right">

          <div className="form-box">

            <h2>Get In Touch</h2>

            <p>
              Fill in the details below and our team will contact you shortly.
            </p>

            <form>

              <div className="input-row">

                <input
                  type="text"
                  placeholder="Your Name"
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                />

              </div>

              <div className="input-row">

                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                />

                <input
                  type="text"
                  placeholder="Company Name"
                />

              </div>

              <input
                type="text"
                placeholder="Subject"
              />

              <textarea
                rows="6"
                placeholder="Write Your Message..."
              ></textarea>

              <button type="submit">
                <FaPaperPlane />
                <span>Send Message</span>
              </button>

            </form>

          </div>

        </div>
        {/* End Right Side */}

      </div>
      {/* End Wrapper */}

    </section>
  );
}

export default Contact;
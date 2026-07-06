import "./Career.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import careerBg from "../../assets/contact-bg.jpg";

function Career() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section
        className="career-hero"
        style={{ backgroundImage: `url(${careerBg})` }}
      >
        <div className="career-overlay">

          <span>JOIN OUR TEAM</span>

          <h1>Build Your Career With Power Engineers</h1>

          <p>
            Be a part of an innovative engineering company delivering
            premium electrical panel solutions across India.
          </p>

        </div>
      </section>

      {/* About Career */}

      <section className="career-about">

        <div className="career-left">

          <span>WHY WORK WITH US</span>

          <h2>Grow Your Future With Us</h2>

          <p>
            We believe in innovation, teamwork and continuous learning.
            Our employees work on exciting electrical engineering
            projects with modern technologies and experienced mentors.
          </p>

          <ul>

            <li>✔ Professional Work Environment</li>

            <li>✔ Career Growth Opportunities</li>

            <li>✔ Skilled Engineering Team</li>

            <li>✔ Learning & Development</li>

            <li>✔ Attractive Salary Package</li>

          </ul>

        </div>

        <div className="career-right">

          <img src={careerBg} alt="Career"/>

        </div>

      </section>
           
            {/* ================= APPLY FORM ================= */}

      <section className="career-apply">

        <div className="apply-left">

          <span>APPLY NOW</span>

          <h2>Start Your Career Journey</h2>

          <p>
            Interested in joining Power Engineers?
            Fill out the application form and upload your resume.
            Our HR team will get in touch with you shortly.
          </p>

        </div>

        <div className="apply-right">

          <form className="career-form">

            <div className="career-input-row">

              <input
                type="text"
                placeholder="Full Name"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                required
              />

            </div>

            <div className="career-input-row">

              <input
                type="tel"
                placeholder="Phone Number"
                required
              />

              <input
                type="text"
                placeholder="Position Applying For"
              />

            </div>

            <input
              type="text"
              placeholder="Current Location"
            />

            <textarea
              rows="5"
              placeholder="Tell us about yourself..."
            ></textarea>

            <label className="resume-upload">

              Upload Resume

              <input
                type="file"
              />

            </label>

            <button type="submit">

              Submit Application →

            </button>

          </form>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="career-cta">

        <div className="career-cta-content">

          <h2>

            Ready To Build Your Career?

          </h2>

          <p>

            Become a part of our growing engineering team and work on
            exciting industrial projects across India.

          </p>

          <a
            href="/contact"
            className="career-btn"
          >

            Contact HR →

          </a>

        </div>

      </section>

      <Footer />

    </>

  );
}

export default Career;
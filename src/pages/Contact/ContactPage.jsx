import "./ContactPage.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPaperPlane
} from "react-icons/fa";

function ContactPage() {

return(

<>

<Navbar/>

{/* HERO */}

<section className="contact-hero">

<div className="hero-overlay">

<span>

GET IN TOUCH

</span>

<h1>

Contact Us

</h1>

<p>

We'd love to hear from you.
Reach out for any enquiries,
business collaborations or support.

</p>

</div>

</section>

{/* CONTACT CARDS */}

<section className="contact-cards">

<div className="contact-card">

<div className="card-icon">

<FaPhoneAlt/>

</div>

<div>

<h3>

Call Us

</h3>

<a href="tel:+919665554556">

+91 96655 54556

</a>

<a href="tel:+91 8006200062">

+91 8006200062

</a>

</div>

</div>

<div className="contact-card">

<div className="card-icon">

<FaEnvelope/>

</div>

<div>

<h3>

Email Us

</h3>

<a href="mailto:mvpowerengineers@yahoo.com">

mvpowerengineers@yahoo.com

</a>

<a href="mailto:powerengineers.sales@gmail.com">

powerengineers.sales@gmail.com

</a>

</div>

</div>

<div className="contact-card">

<div className="card-icon">

<FaMapMarkerAlt/>

</div>

<div>

<h3>

Our Office

</h3>

<a
  href="https://www.google.com/maps/place/16%C2%B042'53.7%22N+74%C2%B026'59.9%22E/"
  target="_blank"
  rel="noreferrer"
>
   Khanjire Industrial Estate, Near Radha Kanhaiya process
  <br />
  Ichalkaranji
  <br />
   Khotwadi, - 416116
  <br />
  Maharashtra, India
</a>

</div>

</div>

<div className="contact-card">

<div className="card-icon">

<FaWhatsapp/>

</div>

<div>

<h3>

WhatsApp

</h3>

<a

href="https://wa.me/919665554556"

target="_blank"

rel="noreferrer"

>

Chat With Us

</a>

</div>

</div>

</section>
{/* ================= CONTACT SECTION ================= */}

<section className="contact-wrapper">

  {/* LEFT FORM */}

  <div className="contact-form">

    <span className="form-tag">

      SEND MESSAGE

    </span>

    <h2>

      Let's Start A Conversation

    </h2>

    <p>

      Fill out the form below and our experts
      will contact you shortly.

    </p>

    <form>

      <div className="input-group">

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

      <div className="input-group">

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
        rows="7"
        placeholder="Write Your Message..."
      ></textarea>

      <button type="submit">

        <FaPaperPlane />

        Send Message

      </button>

    </form>

  </div>

  {/* RIGHT MAP */}

  <div className="contact-map">
  <iframe
    title="Power Engineers Location"
    src="https://maps.google.com/maps?q=16.714907,74.449972&z=16&output=embed"
    width="100%"
    height="450"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
  ></iframe>
</div>

</section>
      {/* ================= WHY CHOOSE US ================= */}

      <section className="why-contact">

        <div className="section-heading">

          <span>WHY CHOOSE US</span>

          <h2>Why Industries Trust Power Engineers</h2>

          <p>

            We provide reliable electrical engineering solutions
            with premium quality products, experienced engineers
            and complete customer satisfaction.

          </p>

        </div>

        <div className="why-grid">

          <div className="why-box">

            <div className="why-number">

              01

            </div>

            <h3>

              Fast Response

            </h3>

            <p>

              Our team responds quickly to every enquiry.

            </p>

          </div>

          <div className="why-box">

            <div className="why-number">

              02

            </div>

            <h3>

              Expert Engineers

            </h3>

            <p>

              Experienced professionals for every project.

            </p>

          </div>

          <div className="why-box">

            <div className="why-number">

              03

            </div>

            <h3>

              Premium Quality

            </h3>

            <p>

              High-quality electrical panels with strict testing.

            </p>

          </div>

          <div className="why-box">

            <div className="why-number">

              04

            </div>

            <h3>

              Customer Support

            </h3>

            <p>

              Complete support before and after project delivery.

            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="contact-cta">

        <div className="cta-overlay">

          <span>

            LET'S WORK TOGETHER

          </span>

          <h2>

            Need Premium Electrical Engineering Solutions?

          </h2>

          <p>

            Contact our experts today and get customized
            electrical panel solutions for your industry.

          </p>

          <a

            href="/get-quote"

            className="cta-btn"

          >

            Get Free Quote →

          </a>

        </div>

      </section>

      <Footer />

    </>

  );

}

export default ContactPage;
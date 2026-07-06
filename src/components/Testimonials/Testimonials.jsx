import "./Testimonials.css";
import bg from "../../assets/testimonial-bg.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaUser,
} from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      message:
        "Excellent quality products and timely delivery. Their electrical panels are reliable, well designed and built with great attention to detail.",
      name: "Verified Customer",
    },
    {
      message:
        "Professional engineering support with outstanding workmanship. Every product was delivered on time with exceptional quality standards.",
      name: "Satisfied Customer",
    },
    {
      message:
        "We are extremely happy with the overall experience. Excellent service, premium products and quick response from the team.",
      name: "Industrial Customer",
    },
    {
      message:
        "Reliable engineering partner for electrical projects. Highly recommended for quality and professionalism.",
      name: "Business Customer",
    },
  ];

  return (
    <section
      className="testimonials-section"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="testimonial-overlay"></div>

      <div className="testimonial-container">
        <div className="testimonial-heading">
          <h5>WHAT PEOPLE SAY</h5>

          <h2>TRUSTED BY OUR CUSTOMERS</h2>

          <div className="heading-line"></div>

          <p>
            We are trusted by our customers for delivering premium electrical
            engineering solutions with quality, reliability and professional
            service.
          </p>
        </div>

        <Swiper
          className="testimonial-slider"
          modules={[
            Navigation,
            Pagination,
            Autoplay,
            EffectFade,
          ]}
          effect="fade"
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          navigation={{
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
          }}
          pagination={{
            clickable: true,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = ".testimonial-prev";
            swiper.params.navigation.nextEl = ".testimonial-next";
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="testimonial-quote">
                  <FaQuoteLeft />
                </div>

                <p className="testimonial-text">{item.message}</p>

                <div className="testimonial-line"></div>

                <h4>
                  <FaUser />
                  {item.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}

          <div className="testimonial-prev">
            <FaChevronLeft />
          </div>

          <div className="testimonial-next">
            <FaChevronRight />
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
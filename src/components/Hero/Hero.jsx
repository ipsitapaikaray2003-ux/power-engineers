import "./Hero.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

import hero1 from "../../assets/heroo1.jpg";
import hero2 from "../../assets/heroo2.jpg";
import hero3 from "../../assets/heroo3.jpg";
import hero4 from "../../assets/heroo4.jpg";

function Hero() {
  const slides = [
    {
      image: hero1,
      heading: "Engineering",
      green: "Future",
      subtitle:
        "Premium Electrical Engineering & Industrial Automation Solutions Delivering Reliable HT/LT Panels, PCC, MCC & Turnkey Electrical Projects Across India.",
    },
    {
      image: hero2,
      heading: "Reliable",
      green: "Power",
      subtitle:
        "Delivering Innovative Electrical Infrastructure For Industries Across India.",
    },
    {
      image: hero3,
      heading: "Industrial",
      green: "Automation",
      subtitle:
        "Complete Electrical Design, Manufacturing, Installation & Commissioning.",
    },
    {
      image: hero4,
      heading: "Trusted",
      green: "Engineering",
      subtitle:
        "Your Reliable Partner For Every Electrical Engineering Requirement.",
    },
  ];

  return (
    <section className="hero">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="overlay"></div>

              <div className="hero-content hero-container">
                <motion.div
                  className="hero-text"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="welcome">
                    WELCOME TO
                  </span>

                  <h4>POWER ENGINEERS</h4>

                  <h1>
                    {slide.heading}
                    <br />
                    The <span>{slide.green}</span>
                  </h1>

                  <p>{slide.subtitle}</p>

                  <div className="hero-buttons">

                    <Link
                      to="/products"
                      className="hero-btn primary"
                    >
                      Explore Services
                    </Link>

                    <Link
                      to="/contact"
                      className="hero-btn secondary"
                    >
                      Contact Us
                    </Link>

                  </div>

                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;
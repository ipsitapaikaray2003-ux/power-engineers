import "./WhyChoose.css";
import { motion } from "framer-motion";
import {
  FaAward,
  FaBolt,
  FaUserCog,
  FaHeadset,
  FaArrowRight
} from "react-icons/fa";

import choose from "../../assets/whychoose.jpg";

const cardAnimation = {
  hidden: { opacity: 0, y: 80 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
    },
  }),
};

function WhyChoose() {
  return (
    <section className="choose">

      <div className="choose-container">

        {/* LEFT */}

        <motion.div
          className="choose-left"
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <img src={choose} alt="Power Engineers" />

          <div className="experience-box">
            <h2>15+</h2>
            <span>Years Of Experience</span>
          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="choose-right"
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >

          <span className="tag">
            WHY CHOOSE US
          </span>

          <h2>
            Engineering Excellence
            <br />
            <span>That Powers Industries</span>
          </h2>

          <p>
            We manufacture premium quality HT/LT Panels,
            PCC Panels, MCC Panels, APFC Panels and complete
            electrical automation solutions using advanced
            engineering and international quality standards.
          </p>

          <div className="choose-grid">

            {[
              {
                icon: <FaAward />,
                title: "Certified Quality",
                text: "Strict quality inspection with premium manufacturing."
              },
              {
                icon: <FaBolt />,
                title: "Fast Delivery",
                text: "Timely execution with complete project support."
              },
              {
                icon: <FaUserCog />,
                title: "Expert Engineers",
                text: "Experienced engineering professionals."
              },
              {
                icon: <FaHeadset />,
                title: "24×7 Support",
                text: "Reliable technical assistance anytime."
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                className="choose-card"
                variants={cardAnimation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                custom={index}
              >

                <div className="icon-box">

                  {item.icon}

                </div>

                <h4>{item.title}</h4>

                <p>{item.text}</p>

                <a href="#">

                  Learn More

                  <FaArrowRight />

                </a>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default WhyChoose;
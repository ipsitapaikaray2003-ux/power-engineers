import "./Products.css";
import { NavLink } from "react-router-dom";

import ht from "../../assets/htpanel1.jpg";
import lt from "../../assets/ltpanel1.jpg";
import pcc from "../../assets/pccpanel1.webp";
import mcc from "../../assets/mccpanel1.jpg";
import apfc from "../../assets/Apfcpanel1.png";
import busduct from "../../assets/busduct.jpg";

function Products() {

  const products = [
    {
      image: ht,
      title: "HT Panels",
      desc: "High Tension Electrical Panels",
      link: "/products/ht-panel",
    },
    {
      image: lt,
      title: "LT Panels",
      desc: "Low Tension Distribution Panels",
      link: "/products/lt-panel",
    },
    {
      image: pcc,
      title: "PCC Panels",
      desc: "Power Control Centre Panels",
      link: "/products/pcc-panel",
    },
    {
      image: mcc,
      title: "MCC Panels",
      desc: "Motor Control Centre Panels",
      link: "/products/mcc-panel",
    },
    {
      image: apfc,
      title: "APFC Panels",
      desc: "Automatic Power Factor Control",
      link: "/products/apfc-panel",
    },
    {
      image: busduct,
      title: "Bus Duct",
      desc: "Bus Duct Distribution System",
      link: "/products/bus-duct",
    },
  ];

  return (

    <section className="products">

      <div className="title">

        <span>OUR PRODUCTS</span>

        <h2>Electrical Control Panels</h2>

        <p>
          We manufacture premium quality electrical control panels
          for industrial, commercial and infrastructure projects.
        </p>

      </div>

      <div className="product-grid">

        {products.map((item, index) => (

          <NavLink
            to={item.link}
            className="product-card"
            key={index}
          >

            <img
              src={item.image}
              alt={item.title}
            />

            <h3 className="product-name">
              {item.title}
            </h3>

            <div className="product-overlay">

              <div className="overlay-content">

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                <span className="view-btn">
                  View Details →
                </span>

              </div>

            </div>

          </NavLink>

        ))}

      </div>

    </section>

  );

}

export default Products;
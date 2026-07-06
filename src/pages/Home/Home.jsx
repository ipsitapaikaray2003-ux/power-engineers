import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import About from "../About/About";
import Products from "../Products/Products";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import Industries from "../../components/Industries/Industries";
import Testimonials from "../../components/Testimonials/Testimonials";
import Contact from "../Contact/Contact";
import Footer from "../../components/Footer/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhyChoose />
       <Industries />
       <Testimonials />
       <Contact />
      <Footer />
    </>
  );
}

export default Home;
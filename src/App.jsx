import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

import AboutPage from "./pages/About/AboutPage";
import VisionMission from "./pages/About/VisionMission";
import Infrastructure from "./pages/About/Infrastructure";

import Projects from "./pages/Projects/Projects";

import ContactPage from "./pages/Contact/ContactPage";
import Career from "./pages/Contact/Career";
import GetQuote from "./pages/Contact/GetQuote";

import HTPanel from "./pages/Products/HTPanel";
import LTPanel from "./pages/Products/LTPanel";
import PCCPanel from "./pages/Products/PCCPanel";
import MCCPanel from "./pages/Products/MCCPanel";
import APFCPanel from "./pages/Products/APFCPanel";
import BusDuct from "./pages/Products/BusDuct";

function App() {
  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* About */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/vision-mission" element={<VisionMission />} />
      <Route path="/infrastructure" element={<Infrastructure />} />

      {/* Projects */}
      <Route path="/projects" element={<Projects />} />

      {/* Products */}
      <Route path="/products" element={<HTPanel />} />
      <Route path="/products/ht-panel" element={<HTPanel />} />
      <Route path="/products/lt-panel" element={<LTPanel />} />
      <Route path="/products/pcc-panel" element={<PCCPanel />} />
      <Route path="/products/mcc-panel" element={<MCCPanel />} />
      <Route path="/products/apfc-panel" element={<APFCPanel />} />
      <Route path="/products/bus-duct" element={<BusDuct />} />

      {/* Contact */}
      <Route path="/contact" element={<ContactPage />} />

      {/* Career */}
      <Route path="/career" element={<Career />} />

      {/* Get Quote */}
      <Route path="/get-quote" element={<GetQuote />} />

    </Routes>
  );
}

export default App;
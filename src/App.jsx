import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Sportswear from "./pages/Sportswear";
import Activewear from "./pages/Activewear";
import CasualWear from "./pages/CasualWear";
import Gloves from "./pages/Gloves";
import Accessories from "./pages/Accessories";
import FAQ from "./pages/FAQ";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Banner />
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/custom-sportswear-maker" element={<Sportswear />} />
            <Route path="custom-activewear-maker" element={<Activewear />} />
            <Route path="/casual-wear" element={<CasualWear />} />
            <Route path="/gloves" element={<Gloves />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="about-us" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

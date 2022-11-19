import "./App.css";
import { useEffect } from "react";
import Header from "./Layout/Header";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Aboutus from "./Aboutus/Aboutus";
import Contact from "./Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prodecuts from "./Prodecuts/Prodecuts";
function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/ourproducts" element={<Prodecuts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

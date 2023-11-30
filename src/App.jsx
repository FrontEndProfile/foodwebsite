import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init();
  }, []);
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service" element={<Service />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

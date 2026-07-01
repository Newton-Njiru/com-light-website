import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import AppHero from "./components/SectionOne";
import AboutUs from "./components/About";
import Programs from "./components/Programs";
import Impact from "./components/Impact";
import GetInvolved from "./components/GetInvolved";
import Contact from "./components/Contact";
import NewsLetter from "./components/Newsletter";
import Footer from "./components/Footer";

import AboutPage from "./pages/AboutPage";
import ProgramsPage from "./pages/ProgramsPage";
import ProgramPage from "./pages/ProgramPage";
import ImpactPage from "./pages/ImpactPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";
import ContactPage from "./pages/ContactPage";

// Home page — all sections stacked for scroll spy
function HomePage() {
  useEffect(() => {
    const navbar = document.getElementById("mainNavbar");
    if (window.bootstrap && navbar) {
      new window.bootstrap.ScrollSpy(document.body, {
        target: "#mainNavbar",
        offset: navbar.offsetHeight,
      });
    }
  }, []);

  return (
    <main
      data-bs-spy="scroll"
      data-bs-target="#mainNavbar"
      data-bs-smooth-scroll="true"
      tabIndex="0"
    >
      <AppHero />
      <AboutUs />
      <Programs />
      <Impact />
      <GetInvolved />
      <Contact />
      <NewsLetter />
    </main>
  );
}

// Scroll to top on route change; also handle hash scrolling from other pages
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Small delay to let page render, then scroll to section
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/programs/:slug" element={<ProgramPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/getinvolved" element={<GetInvolvedPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

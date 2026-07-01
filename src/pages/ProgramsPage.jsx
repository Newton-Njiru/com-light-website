import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { programs } from "../data/programs.js";
import bgColor from "../assets/images/bgColor2.jpg";
import "../App.css";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProgramsPage() {
  return (
    <div className="programs-page">
      <div className="page-back-bar">
        <div className="container">
          <Link to="/" className="page-back-link">
            <i className="bi bi-arrow-left me-2"></i> Back to Home
          </Link>
        </div>
      </div>

      {/* HERO */}
      <div className="programs-hero page-hero" style={{ "--bgColor": `url(${bgColor})`, "--page-hero-bg": `url(${bgColor})` }}>
        <div className="programs-hero-overlay page-hero-overlay">
          <div className="programs-hero-content container text-center">
            <span className="impact-eyebrow">What We Do</span>
            <h1 className="page-hero-title">Our Programs</h1>
          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="container programs-cards-wrapper">
        <motion.div
          className="row g-3 justify-content-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {programs.map((prog, index) => (
            <motion.div
              key={index}
              variants={item}
              className="col-xl-4 col-lg-4 col-md-6 d-flex"
            >
              <article className="program-card w-100">
                <div className="program-image-wrapper">
                  <img src={prog.img} alt={prog.title} />
                </div>
                <div className="program-content">
                  <div className="program-icon">
                    <i className={prog.icon}></i>
                  </div>
                  <h5 className="program-title">{prog.title}</h5>
                  <div className="purpose-line"></div>
                  <p className="program-text">{prog.summary}</p>
                  <Link to={`/programs/${prog.slug}`} className="program-btn">
                    Discover More <i className="bi bi-chevron-double-right"></i>
                  </Link>
                </div>
              </article>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <section className="ap-cta">
        <div className="container text-center">
          <h3 className="ap-cta-title">Interested in supporting a program?</h3>
          <p className="ap-cta-sub">Your involvement as a volunteer, donor, or partner helps us reach more lives</p>
          <div className="ap-cta-btns">
            <Link to="/getinvolved" className="ap-cta-primary">Get Involved</Link>
            <Link to="/contact" className="ap-cta-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

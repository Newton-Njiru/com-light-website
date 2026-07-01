import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { motion } from "framer-motion";
import { programs } from "../data/programs.js";
import bgColor from "../assets/images/bgColor2.jpg";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Programs() {
  return (
    <section className="programs-section" id="programs">
      {/* HERO */}
      <div className="programs-hero" style={{ "--bgColor": `url(${bgColor})` }}>
        <div className="programs-hero-overlay">
          <div className="programs-hero-content">
            <h2>Our Programs</h2>
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
    </section>
  );
}

export default Programs;

import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

import ceo from "../assets/images/ceo.jpg";
import od from "../assets/images/od.jpg";
import hr from "../assets/images/hr.jpg";
import ld from "../assets/images/ld.jpg";
import copc from "../assets/images/copc.jpg";
import ict from "../assets/images/ict.jpg";
import fd from "../assets/images/fd.jpg";
import bgColor from "../assets/images/bgColor5.jpg";

const team = [
  { photo: ceo, title: "Chief Executive Officer" },
  { photo: od, title: "Operations Director" },
  { photo: hr, title: "HR Director" },
  { photo: fd, title: "Finance Director" },
  { photo: ld, title: "Legal Director" },
  { photo: ict, title: "ICT Director" },
  { photo: copc, title: "Community Outreach Coordinator" }
];

const purposeItems = [
  {
    icon: "bi-eye-fill",
    title: "Vision",
    text: "Transform lives through sustainable solutions"
  },
  {
    icon: "bi-bullseye",
    title: "Mission",
    text: "To transform communities holistically through integrating solution-focused approaches by mobilizing resources to bring light, growth, and development"
  },
  {
    icon: "bi-heart-fill",
    title: "Core Values",
    text: "Commitment, Inclusivity, Innovation, Accountability, and Sustainability"
  }
];

export default function AboutUs() {
  return (
    <section className="about-section" id="about">

      {/* ================= WHO WE ARE ================= */}
      <div className="about-who text-white text-center" style={{ "--bg": `url(${bgColor})` }}>
        <div className="container">

          <div className="who-icon">
            <i className="bi bi-people-fill"></i>
          </div>

          <h2 className="section-title">Who We Are</h2>

          <p className="section-text">
            Com-Light is a non-profit Organization founded to bridge gaps in
            education and economic opportunity by delivering sustainable,
            practical solutions that unlock potential, restore dignity,
            and create lasting impact across generations
          </p>

          <Link to="/about" className="about-cta">
            Learn More <i className="bi bi-chevron-double-right"></i>
          </Link>

          <div className="team-anchor">
            <h3 className="section-title">Our Team</h3>
            <div className="title-line"></div>
          </div>

        </div>
      </div>

      {/* ================= TEAM CARDS ================= */}
      <div className="team-cards-wrapper">
        <div className="container team-container">
          <div className="row g-3 justify-content-center">

            {team.map((m, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-3 d-flex">
                <div className="team-card w-100">
                  <div className="team-photo">
                    <img src={m.photo} alt={m.title} />
                  </div>
                  <h5 className="team-title">{m.title}</h5>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* ================= PURPOSE ================= */}
      <div className="purpose-section">
        <div className="container purpose-container">
          <div className="row g-3 justify-content-center">

            {purposeItems.map((item, index) => (
              <div key={index} className="col-12 col-lg-4 d-flex">
                <div className="purpose-card w-100">
                  <i className={`bi ${item.icon} purpose-icon`}></i>
                  <h4>{item.title}</h4>
                  <div className="purpose-line"></div>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}

              </div>
            </div>
        </div>

    </section>
  );
}
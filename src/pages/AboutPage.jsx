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
import missionImg from "../assets/images/mission.jpg";
import visionImg from "../assets/images/vision.jpg";
import officeImg from "../assets/images/office.jpg";

const team = [
  { photo: ceo, title: "Chief Executive Officer", dept: "Executive Leadership" },
  { photo: od, title: "Operations Director", dept: "Operations" },
  { photo: hr, title: "HR Director", dept: "Human Resources" },
  { photo: fd, title: "Finance Director", dept: "Finance" },
  { photo: ld, title: "Legal Director", dept: "Legal" },
  { photo: ict, title: "ICT Director", dept: "Technology" },
  { photo: copc, title: "Community Outreach Coordinator", dept: "Community" },
];

const values = [
  { icon: "bi-check2-circle", title: "Commitment", text: "We follow through on every promise to the communities we serve, no matter the challenge." },
  { icon: "bi-people", title: "Inclusivity", text: "Every voice matters. We design programs that welcome and uplift people regardless of background." },
  { icon: "bi-lightbulb", title: "Innovation", text: "We challenge ourselves to find smarter, more effective ways to create lasting change." },
  { icon: "bi-shield-check", title: "Accountability", text: "We are transparent with our resources, our results, and our responsibilities." },
  { icon: "bi-tree", title: "Sustainability", text: "We build solutions that outlast our involvement, empowering communities to own their future." },
];

const milestones = [
  { year: "February, 2024", event: "Com-Light founded in Embu with a vision to transform communities holistically" },
  { year: "April, 2024", event: "Launched the the Career Workshop series, supporting one student in our first cohort" },
  { year: "August, 2024", event: "Introduced the Student Mentorship Program, building 100 mentorship pairs" },
  { year: "December, 2024", event: "Launched Economic Empowerment track; 1,000th beneficiary milestone reached" },
  { year: "December, 2024", event: "Expanded team to 7 directors" },
  { year: "January, 2025", event: "Launched the Elimisha Program, supporting 5 students in our first cohort" },
  { year: "April, 2025", event: "Opened our first Community Reading Centre and initiated the Library Program" },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="page-back-bar">
        <div className="container">
          <Link to="/" className="page-back-link">
            <i className="bi bi-arrow-left me-2"></i> Back to Home
          </Link>
        </div>
      </div>

      <div className="page-hero" style={{ "--page-hero-bg": `url(${bgColor})` }}>
        <div className="page-hero-overlay">
          <div className="container text-center">
            <span className="impact-eyebrow">Our Story</span>
            <h1 className="page-hero-title">About Com-Light</h1>
            <p className="page-hero-sub">
              A non-profit born from the conviction that every community, no matter how under-resourced, holds the seeds of its own transformation
            </p>
          </div>
        </div>
      </div>

      <section className="ap-section ap-who">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              <span className="section-eyebrow">Who We Are</span>
              <h2 className="ap-section-title">Bridging Gaps, Building Futures</h2>
              <div className="title-line" style={{ margin: "12px 0 20px" }}></div>
              <p className="ap-body-text">
                Com-Light is a non-profit organisation founded to bridge gaps in education and economic opportunity by delivering sustainable, practical solutions that unlock potential, restore dignity, and create lasting impact across generations.
              </p>
              <p className="ap-body-text">
                We work at the intersection of education, economic empowerment, and community development — believing that true transformation happens when people have both the knowledge and the tools to shape their own futures.
              </p>
              <p className="ap-body-text">
                From learning centres to career workshops, every program we run is designed with the community, not just for the community.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <div className="ap-img-block">
                <img src={officeImg} alt="Com-Light office and team" className="ap-main-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ap-section ap-mv">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div className="ap-mv-card" style={{ "--mv-img": `url(${visionImg})` }}>
                <div className="ap-mv-overlay">
                  <div className="ap-mv-icon"><i className="bi bi-eye-fill"></i></div>
                  <h3 className="ap-mv-title">Our Vision</h3>
                  <p className="ap-mv-text">Transform lives through sustainable solutions.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="ap-mv-card" style={{ "--mv-img": `url(${missionImg})` }}>
                <div className="ap-mv-overlay">
                  <div className="ap-mv-icon"><i className="bi bi-bullseye"></i></div>
                  <h3 className="ap-mv-title">Our Mission</h3>
                  <p className="ap-mv-text">
                    To transform communities holistically through integrating solution-focused approaches by mobilizing resources to bring light, growth, and development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ap-section ap-values">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">What Guides Us</span>
            <h2 className="ap-section-title">Our Core Values</h2>
            <div className="title-line" style={{ margin: "12px auto 0" }}></div>
          </div>
          <div className="row g-4 justify-content-center">
            {values.map((v, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-4 d-flex">
                <div className="ap-value-card w-100">
                  <div className="ap-value-icon"><i className={`bi ${v.icon}`}></i></div>
                  <h5 className="ap-value-title">{v.title}</h5>
                  <p className="ap-value-text">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-section ap-timeline">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">How Far We Have Come</span>
            <h2 className="ap-section-title">Our Journey</h2>
            <div className="title-line" style={{ margin: "12px auto 0" }}></div>
          </div>
          <div className="ap-timeline-track">
            {milestones.map((m, i) => (
              <div key={i} className={`ap-timeline-item ${i % 2 === 0 ? "tl-left" : "tl-right"}`}>
                <div className="ap-timeline-dot"></div>
                <div className="ap-timeline-card">
                  <span className="ap-timeline-year">{m.year}</span>
                  <p className="ap-timeline-event">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-section ap-team">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">The People Behind the Work</span>
            <h2 className="ap-section-title">Our Leadership Team</h2>
            <div className="title-line" style={{ margin: "12px auto 0" }}></div>
          </div>
          <div className="row g-4 justify-content-center">
            {team.map((m, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-3 d-flex">
                <div className="ap-team-card w-100">
                  <div className="ap-team-photo">
                    <img src={m.photo} alt={m.title} />
                  </div>
                  <div className="ap-team-info">
                    <div className="ap-team-dept">{m.dept}</div>
                    <h6 className="ap-team-title">{m.title}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-cta">
        <div className="container text-center">
          <h3 className="ap-cta-title">Ready to be part of the story?</h3>
          <p className="ap-cta-sub">Whether you volunteer, donate, or simply spread the word — you have a role to play.</p>
          <div className="ap-cta-btns">
            <Link to="/getinvolved" className="ap-cta-primary">Get Involved</Link>
            <Link to="/contact" className="ap-cta-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

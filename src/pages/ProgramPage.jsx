import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { programs } from "../data/programs.js";
import "../App.css";

export default function ProgramPage() {
  const { slug } = useParams();
  const prog = programs.find((p) => p.slug === slug);

  if (!prog) return <Navigate to="/" replace />;

  const others = programs.filter((p) => p.slug !== slug);

  return (
    <div className="program-page">
      <div className="page-back-bar">
        <div className="container">
          <Link to="/" className="page-back-link">
            <i className="bi bi-arrow-left me-2"></i> Back to Home
          </Link>
        </div>
      </div>

      {/* HERO */}
      <div className="pp-hero" style={{ "--pp-bg": `url(${prog.img})` }}>
        <div className="pp-hero-overlay">
          <div className="container text-center">
            <div className="pp-hero-icon">
              <i className={prog.icon}></i>
            </div>
            <span className="impact-eyebrow">Our Programs</span>
            <h1 className="page-hero-title">{prog.title}</h1>
            <p className="page-hero-sub">{prog.tagline}</p>
          </div>
        </div>
      </div>

      {/* ABOUT THE PROGRAM */}
      <section className="pp-section pp-about">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-12 col-lg-7">
              <span className="section-eyebrow">About This Program</span>
              <h2 className="ap-section-title">{prog.title}</h2>
              <div className="title-line" style={{ margin: "12px 0 24px" }}></div>
              {prog.description.split("\n\n").map((para, i) => (
                <p key={i} className="ap-body-text">{para.trim()}</p>
              ))}
            </div>
            <div className="col-12 col-lg-5">
              <div className="pp-sidebar">
                <div className="pp-goals-card">
                  <h5 className="pp-goals-heading">
                    <i className="bi bi-bullseye me-2"></i> Program Goals
                  </h5>
                  <ul className="pp-goals-list">
                    {prog.goals.map((g, i) => (
                      <li key={i}>
                        <i className="bi bi-check-circle-fill"></i>
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pp-impact-card">
                  <i className="bi bi-graph-up-arrow pp-impact-icon"></i>
                  <h6 className="pp-impact-label">Impact So Far</h6>
                  <p className="pp-impact-text">{prog.impact}</p>
                </div>
                <Link to="/contact" className="pp-cta-btn">
                  <i className="bi bi-envelope-fill me-2"></i> Get Involved in This Program
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER PROGRAMS */}
      <section className="pp-section pp-others">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">Explore More</span>
            <h2 className="ap-section-title">Other Programs</h2>
            <div className="title-line" style={{ margin: "12px auto 0" }}></div>
          </div>
          <div className="row g-4 justify-content-center">
            {others.map((p, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-4 d-flex">
                <div className="pp-other-card w-100">
                  <div className="pp-other-img">
                    <img src={p.img} alt={p.title} />
                    <div className="pp-other-icon">
                      <i className={p.icon}></i>
                    </div>
                  </div>
                  <div className="pp-other-body">
                    <h5 className="pp-other-title">{p.title}</h5>
                    <p className="pp-other-text">{p.summary}</p>
                    <Link to={`/programs/${p.slug}`} className="pp-other-btn">
                      Discover More <i className="bi bi-chevron-double-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

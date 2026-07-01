import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import bgColor from "../assets/images/bgColor3.jpg";
import careerMentorship from "../assets/images/careerMentorship.jpg";
import careerWorkshop2 from "../assets/images/careerWorkshop2.jpg";
import studentMentorship from "../assets/images/studentMentorship.jpg";

const stats = [
  { value: 1200, label: "Students Supported", icon: "bi-mortarboard-fill", suffix: "+" },
  { value: 8, label: "Active Programs", icon: "bi-grid-fill", suffix: "" },
  { value: 15, label: "Communities Reached", icon: "bi-geo-alt-fill", suffix: "+" },
  { value: 98, label: "Satisfaction Rate", icon: "bi-star-fill", suffix: "%" },
];

const stories = [
  {
    img: careerMentorship,
    name: "Career Mentorship",
    quote: "The mentorship program gave me direction when I had none. Today I run my own small business and support my family.",
    person: "Program Participant, Nairobi",
  },
  {
    img: careerWorkshop2,
    name: "Career Workshops",
    quote: "I walked into the workshop not knowing what I wanted. I walked out with a five-year plan and the confidence to pursue it.",
    person: "Youth Beneficiary, Mombasa",
  },
  {
    img: studentMentorship,
    name: "Student Mentorship",
    quote: "Having a mentor who believed in me changed everything. My grades improved and I am now preparing for university.",
    person: "Secondary Student, Kisumu",
  },
];

const outcomes = [
  { icon: "bi-graph-up-arrow", title: "150+", sub: "Small businesses launched by program graduates" },
  { icon: "bi-award-fill", title: "40%", sub: "Average income increase for economic empowerment graduates" },
  { icon: "bi-book-half", title: "2,000+", sub: "Books in circulation across our reading centres" },
  { icon: "bi-people-fill", title: "250+", sub: "Active mentorship pairs formed since 2022" },
  { icon: "bi-bar-chart-fill", title: "18%", sub: "Average improvement in academic scores for mentorship students" },
  { icon: "bi-heart-fill", title: "5", sub: "Learning centres operating across Kenya" },
];

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 25);
    return () => clearInterval(timer);
  }, [active, target]);
  return <span>{count}{suffix}</span>;
}

export default function ImpactPage() {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="impact-page">
      <div className="page-back-bar">
        <div className="container">
          <Link to="/" className="page-back-link">
            <i className="bi bi-arrow-left me-2"></i> Back to Home
          </Link>
        </div>
      </div>

      {/* HERO */}
      <div className="impact-hero page-hero" style={{ "--impact-bg": `url(${bgColor})`, "--page-hero-bg": `url(${bgColor})` }}>
        <div className="impact-hero-overlay page-hero-overlay">
          <div className="container text-center impact-hero-content">
            <span className="impact-eyebrow">Real Change. Real People.</span>
            <h1 className="page-hero-title">Our Impact</h1>
            <p className="page-hero-sub">
              Every number represents a life touched, a community lifted, and a future unlocked.
            </p>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="impact-stats-wrapper" ref={statsRef}>
        <div className="container">
          <div className="row g-3 justify-content-center">
            {stats.map((s, i) => (
              <div key={i} className="col-6 col-md-3 d-flex">
                <div className="impact-stat-card w-100">
                  <div className="impact-stat-icon"><i className={`bi ${s.icon}`}></i></div>
                  <div className="impact-stat-value">
                    <CountUp target={s.value} suffix={s.suffix} active={statsVisible} />
                  </div>
                  <div className="impact-stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* OUTCOMES */}
      <section className="ap-section" style={{ background: "#f8f9fa" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">By the Numbers</span>
            <h2 className="ap-section-title">Program Outcomes</h2>
            <div className="title-line" style={{ margin: "12px auto 0" }}></div>
          </div>
          <div className="row g-4 justify-content-center">
            {outcomes.map((o, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-4 d-flex">
                <div className="ap-value-card w-100 text-center">
                  <div className="ap-value-icon"><i className={`bi ${o.icon}`}></i></div>
                  <h3 style={{ color: "rgb(11,8,184)", fontWeight: 800, fontSize: "2rem", margin: "8px 0 4px" }}>{o.title}</h3>
                  <p className="ap-value-text">{o.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORIES */}
      <div className="impact-stories-wrapper">
        <div className="container">
          <div className="impact-stories-header text-center mb-5">
            <span className="section-eyebrow">Stories That Matter</span>
            <h3 className="impact-stories-title">Voices From the Field</h3>
            <div className="title-line" style={{ margin: "10px auto" }}></div>
          </div>
          <div className="row g-4 justify-content-center">
            {stories.map((s, i) => (
              <div key={i} className="col-12 col-md-4 d-flex">
                <div className="story-card w-100">
                  <div className="story-img-wrapper">
                    <img src={s.img} alt={s.name} />
                    <div className="story-badge">{s.name}</div>
                  </div>
                  <div className="story-body">
                    <i className="bi bi-quote story-quote-icon"></i>
                    <p className="story-quote">{s.quote}</p>
                    <div className="story-person">— {s.person}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="ap-cta">
        <div className="container text-center">
          <h3 className="ap-cta-title">Want to be part of the impact?</h3>
          <p className="ap-cta-sub">Your support — whether time, resources, or voice — multiplies our reach.</p>
          <div className="ap-cta-btns">
            <Link to="/getinvolved" className="ap-cta-primary">Get Involved</Link>
            <Link to="/contact" className="ap-cta-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

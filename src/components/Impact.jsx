import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import bgColor from "../assets/images/bgColor3.jpg";
import careerMentorship from "../assets/images/careerMentorship.jpg";
import careerWorkshop2 from "../assets/images/careerWorkshop2.jpg";
import studentMentorship from "../assets/images/studentMentorship.jpg";

const stats = [
  { value: 100, label: "Students Supported", icon: "bi-mortarboard-fill", suffix: "+" },
  { value: 5, label: "Active Programs", icon: "bi-grid-fill", suffix: "" },
  { value: 8, label: "Communities Reached", icon: "bi-geo-alt-fill", suffix: "+" },
  { value: 95, label: "Satisfaction Rate", icon: "bi-star-fill", suffix: "%" },
];

const stories = [
  {
    img: careerMentorship,
    name: "Economic Empowerment",
    quote:
      "For years, I didn't know my purpose. Today, I run my own small business and support my family thanks to the Economic Empowerment Program",
    person: "Mumbi, Karigiri, Embu",
  },
  {
    img: careerMentorship,
    name: "Career Workshop",
    quote:
      "I walked into the workshop not knowing what I wanted. I walked out with a plan and the confidence to pursue it",
    person: "Newton, Iriari, Embu",
  },
  {
    img: studentMentorship,
    name: "Student Mentorship",
    quote:
      "Having a mentor who believed in me changed everything. My grades improved and I am now pursuing a bachelor degree in the university",
    person: "Immaculate, Njeruri, Embu",
  },
];

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 25);
    return () => clearInterval(timer);
  }, [active, target]);
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Impact() {
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
    <section className="impact-section" id="impact">
      {/* HERO */}
      <div className="impact-hero" style={{ "--impact-bg": `url(${bgColor})` }}>
        <div className="impact-hero-overlay">
          <div className="container text-center impact-hero-content">
            <span className="impact-eyebrow">Real Change | Real People</span>
            <h2 className="impact-hero-title">Our Impact</h2>
            <p className="impact-hero-sub">
              Every number represents a life touched, a community lifted, and a future unlocked
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
                  <div className="impact-stat-icon">
                    <i className={`bi ${s.icon}`}></i>
                  </div>
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
    </section>
  );
}

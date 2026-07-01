import React from "react";
import "../App.css";
import bgColor from "../assets/images/bgColor4.jpg";
import vision from "../assets/images/vision.jpg";

const ways = [
  {
    icon: "bi-hand-thumbs-up-fill",
    title: "Volunteer",
    text: "Give your time and skills to support our programs on the ground. From tutoring students to facilitating workshops, every hour matters.",
    cta: "Become a Volunteer",
  },
  {
    icon: "bi-currency-dollar",
    title: "Donate",
    text: "Your financial support enables us to reach more communities, run more programs, and change more lives — every contribution counts.",
    cta: "Make a Donation",
  },
  {
    icon: "bi-diagram-3-fill",
    title: "Partner With Us",
    text: "Organizations, businesses, and institutions can partner with Com-Light to amplify our shared impact and co-create sustainable solutions.",
    cta: "Explore Partnership",
  },
  {
    icon: "bi-megaphone-fill",
    title: "Spread the Word",
    text: "Share our story with your network. Awareness is powerful — help us reach those who need us most or those who can help us grow.",
    cta: "Share Our Mission",
  },
];

export default function GetInvolved() {
  return (
    <section className="getinvolved-section" id="getinvolved">
      {/* HERO */}
      <div className="gi-hero" style={{ "--gi-bg": `url(${bgColor})` }}>
        <div className="gi-hero-overlay">
          <div className="container text-center gi-hero-content">
            <span className="impact-eyebrow">Be the Change</span>
            <h2 className="gi-hero-title">Get Involved</h2>
            <p className="gi-hero-sub">
              There is a role for everyone. Whether you give your time, your resources, or your voice — you can make a difference.
            </p>
          </div>
        </div>
      </div>

      {/* WAYS TO HELP */}
      <div className="gi-ways-wrapper">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {ways.map((w, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-3 d-flex">
                <div className="gi-card w-100">
                  <div className="gi-card-icon">
                    <i className={`bi ${w.icon}`}></i>
                  </div>
                  <h5 className="gi-card-title">{w.title}</h5>
                  <div className="purpose-line"></div>
                  <p className="gi-card-text">{w.text}</p>
                  <a href="#contact" className="gi-card-btn">{w.cta} <i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BANNER */}
      <div className="gi-banner" style={{ "--gi-banner": `url(${vision})` }}>
        <div className="gi-banner-overlay">
          <div className="container text-center">
            <h3 className="gi-banner-title">Together, We Transform Communities</h3>
            <p className="gi-banner-sub">
              Join hundreds of changemakers who have already chosen to stand with Com-Light.
            </p>
            <a href="#contact" className="gi-banner-btn">
              Start Today <i className="bi bi-arrow-right-circle-fill ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

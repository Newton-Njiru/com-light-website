import React from "react";
import { Link } from "react-router-dom";
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

const faqs = [
  {
    q: "Do I need professional experience to volunteer?",
    a: "Not at all. We welcome volunteers from all backgrounds. Whether you are a student, a professional, or a retiree, there is a meaningful role for you.",
  },
  {
    q: "How is my donation used?",
    a: "Every shilling goes directly towards program delivery — learning materials, facilitator training, community outreach, and operational support. We publish annual impact reports for full transparency.",
  },
  {
    q: "Can organisations partner with Com-Light?",
    a: "Yes. We actively seek partnerships with schools, businesses, NGOs, and government bodies. Reach out via our Contact page and our partnerships team will respond within 48 hours.",
  },
  {
    q: "Is Com-Light registered?",
    a: "Yes, Com-Light is a registered non-profit organisation in Kenya, fully compliant with all regulatory requirements.",
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="getinvolved-page">
      <div className="page-back-bar">
        <div className="container">
          <Link to="/" className="page-back-link">
            <i className="bi bi-arrow-left me-2"></i> Back to Home
          </Link>
        </div>
      </div>

      {/* HERO */}
      <div className="gi-hero page-hero" style={{ "--gi-bg": `url(${bgColor})`, "--page-hero-bg": `url(${bgColor})` }}>
        <div className="gi-hero-overlay page-hero-overlay">
          <div className="container text-center gi-hero-content">
            <span className="impact-eyebrow">Be the Change</span>
            <h1 className="page-hero-title">Get Involved</h1>
            <p className="page-hero-sub">
              There is a role for everyone. Whether you give your time, your resources, or your voice — you can make a difference.
            </p>
          </div>
        </div>
      </div>

      {/* WAYS TO HELP */}
      <div className="gi-ways-wrapper">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">How You Can Help</span>
            <h2 className="ap-section-title">Ways to Contribute</h2>
            <div className="title-line" style={{ margin: "12px auto 0" }}></div>
          </div>
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
                  <Link to="/contact" className="gi-card-btn">
                    {w.cta} <i className="bi bi-arrow-right"></i>
                  </Link>
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
            <Link to="/contact" className="gi-banner-btn">
              Start Today <i className="bi bi-arrow-right-circle-fill ms-2"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="ap-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">Common Questions</span>
            <h2 className="ap-section-title">Frequently Asked</h2>
            <div className="title-line" style={{ margin: "12px auto 0" }}></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="accordion" id="faqAccordion">
                {faqs.map((faq, i) => (
                  <div className="accordion-item border-0 mb-3" key={i}
                    style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 12px rgba(11,8,184,0.08)" }}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button${i !== 0 ? " collapsed" : ""} fw-semibold`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq${i}`}
                        style={{ background: i === 0 ? "rgb(11,8,184)" : "#fff", color: i === 0 ? "#fff" : "rgb(11,8,184)" }}
                      >
                        {faq.q}
                      </button>
                    </h2>
                    <div id={`faq${i}`} className={`accordion-collapse collapse${i === 0 ? " show" : ""}`} data-bs-parent="#faqAccordion">
                      <div className="accordion-body" style={{ color: "#444", lineHeight: 1.7 }}>
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ap-cta">
        <div className="container text-center">
          <h3 className="ap-cta-title">Ready to take the first step?</h3>
          <p className="ap-cta-sub">Reach out and a member of our team will get back to you within 48 hours.</p>
          <div className="ap-cta-btns">
            <Link to="/contact" className="ap-cta-primary">Contact Us</Link>
            <Link to="/programs" className="ap-cta-secondary">Explore Programs</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

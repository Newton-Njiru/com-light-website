import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import bgColor from "../assets/images/bgColor5.jpg";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="contact-page">
      <div className="page-back-bar">
        <div className="container">
          <Link to="/" className="page-back-link">
            <i className="bi bi-arrow-left me-2"></i> Back to Home
          </Link>
        </div>
      </div>

      {/* HERO */}
      <div className="page-hero" style={{ "--page-hero-bg": `url(${bgColor})` }}>
        <div className="page-hero-overlay">
          <div className="container text-center">
            <span className="impact-eyebrow">We'd love to hear from you</span>
            <h1 className="page-hero-title">Get In Touch</h1>
            <p className="page-hero-sub">
              Have a question, partnership idea, or want to volunteer? Reach out and our team will respond within 48 hours.
            </p>
          </div>
        </div>
      </div>

      {/* CONTACT BODY */}
      <section className="contact-section" style={{ paddingTop: "60px" }}>
        <div className="container">
          <div className="row g-5 justify-content-center contact-body">
            {/* INFO */}
            <div className="col-12 col-lg-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className="bi bi-geo-alt-fill"></i></div>
                  <div><h6>Our Location</h6><p>Nairobi, Kenya</p></div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className="bi bi-envelope-fill"></i></div>
                  <div><h6>Email Us</h6><p>info@com-light.org</p></div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className="bi bi-telephone-fill"></i></div>
                  <div><h6>Call Us</h6><p>+254 700 000 000</p></div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className="bi bi-clock-fill"></i></div>
                  <div><h6>Office Hours</h6><p>Mon – Fri, 8:00 AM – 5:00 PM EAT</p></div>
                </div>
                <div className="contact-socials">
                  <a href="https://www.facebook.com/share/1EgbzVGP6K/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                  <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                  <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                  <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                  <a href="#" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
                </div>

                {/* Quick nav */}
                <div className="mt-4">
                  <h6 style={{ color: "rgb(11,8,184)", fontWeight: 700, marginBottom: "12px" }}>Quick Links</h6>
                  <div className="d-flex flex-column gap-2">
                    <Link to="/about" className="gi-card-btn" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "8px 16px", fontSize: "14px" }}>
                      <i className="bi bi-people-fill"></i> About Us
                    </Link>
                    <Link to="/getinvolved" className="gi-card-btn" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "8px 16px", fontSize: "14px" }}>
                      <i className="bi bi-hand-thumbs-up-fill"></i> Get Involved
                    </Link>
                    <Link to="/programs" className="gi-card-btn" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "8px 16px", fontSize: "14px" }}>
                      <i className="bi bi-grid-fill"></i> Our Programs
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="col-12 col-lg-7">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success-icon"><i className="bi bi-check-circle-fill"></i></div>
                  <h4>Message Sent!</h4>
                  <p>Thank you for reaching out. We will get back to you within 48 hours.</p>
                  <button className="contact-reset-btn" onClick={() => { setForm({ name:"",email:"",subject:"",message:"" }); setSubmitted(false); }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <label htmlFor="cp-name">Full Name</label>
                      <input id="cp-name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="col-12 col-sm-6">
                      <label htmlFor="cp-email">Email Address</label>
                      <input id="cp-email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="cp-subject">Subject</label>
                      <input id="cp-subject" name="subject" type="text" placeholder="How can we help?" value={form.subject} onChange={handleChange} required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="cp-message">Message</label>
                      <textarea id="cp-message" name="message" rows={6} placeholder="Tell us more about your inquiry…" value={form.message} onChange={handleChange} required></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="contact-submit-btn">
                        Send Message <i className="bi bi-send-fill ms-2"></i>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

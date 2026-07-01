import React, { useState } from "react";
import "../App.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        {/* HEADER */}
        <div className="contact-header text-center">
          <span className="section-eyebrow">We'd love to hear from you</span>
          <h2 className="contact-title">Get In Touch</h2>
          <div className="title-line" style={{ margin: "10px auto 0" }}></div>
          <p className="contact-intro">
            Have a question, partnership idea, or want to volunteer? Reach out and a member of our team will respond within 48 hours.
          </p>
        </div>

        <div className="row g-5 justify-content-center contact-body">
          {/* INFO */}
          <div className="col-12 col-lg-4">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon"><i className="bi bi-geo-alt-fill"></i></div>
                <div>
                  <h6>Our Location</h6>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon"><i className="bi bi-envelope-fill"></i></div>
                <div>
                  <h6>Email Us</h6>
                  <p>info@com-light.org</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon"><i className="bi bi-telephone-fill"></i></div>
                <div>
                  <h6>Call Us</h6>
                  <p>+254 700 000 000</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon"><i className="bi bi-clock-fill"></i></div>
                <div>
                  <h6>Office Hours</h6>
                  <p>Mon – Fri, 8:00 AM – 5:00 PM EAT</p>
                </div>
              </div>

              {/* SOCIALS */}
              <div className="contact-socials">
                <a href="https://www.facebook.com/share/1EgbzVGP6K/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <a href="#" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
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
                    <label htmlFor="cf-name">Full Name</label>
                    <input id="cf-name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="col-12 col-sm-6">
                    <label htmlFor="cf-email">Email Address</label>
                    <input id="cf-email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="cf-subject">Subject</label>
                    <input id="cf-subject" name="subject" type="text" placeholder="How can we help?" value={form.subject} onChange={handleChange} required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="cf-message">Message</label>
                    <textarea id="cf-message" name="message" rows={5} placeholder="Tell us more about your inquiry…" value={form.message} onChange={handleChange} required></textarea>
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
  );
}

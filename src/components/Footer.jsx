import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assets/images/logo.jpg";
import { programs as programList } from "../data/programs.js";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Impact", to: "/impact" },
  { label: "Get Involved", to: "/getinvolved" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleTop = () => window.scrollTo(0, 0);

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="row g-5">
            {/* BRAND */}
            <div className="col-12 col-md-4">
              <div className="footer-brand">
                <img src={logo} alt="Com-Light" className="footer-logo" />
                <h5 className="footer-brand-name">Com-Light</h5>
                <p className="footer-tagline">
                  Empowering Communities, Transforming Lives. We bridge gaps in education and economic opportunity with sustainable, people-first solutions
                </p>
                <div className="footer-socials">
                  <a href="https://www.facebook.com/share/1EgbzVGP6K/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                  <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                  <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                  <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                  <a href="#" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="col-6 col-md-2">
              <h6 className="footer-heading">Quick Links</h6>
              <ul className="footer-links">
                {quickLinks.map((l, i) => (
                  <li key={i}>
                    <Link to={l.to} onClick={handleTop}>
                      <i className="bi bi-chevron-right"></i> {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* PROGRAMS */}
            <div className="col-6 col-md-3">
              <h6 className="footer-heading">Our Programs</h6>
              <ul className="footer-links">
                {programList.map((p, i) => (
                  <li key={i}>
                    <Link to={`/programs/${p.slug}`} onClick={handleTop}>
                      <i className="bi bi-chevron-right"></i> {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div className="col-12 col-md-3">
              <h6 className="footer-heading">Contact Us</h6>
              <ul className="footer-contact-list">
                <li><i className="bi bi-geo-alt-fill"></i> Embu, Kenya</li>
                <li><i className="bi bi-envelope-fill"></i> comlight.clg@gmail.com</li>
                <li><i className="bi bi-telephone-fill"></i> +254 727 340 017</li>
                <li><i className="bi bi-clock-fill"></i> Mon–Fri, 8AM – 5PM EAT</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {year} Com-Light. All rights reserved. | Registered Non-Profit Organization</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

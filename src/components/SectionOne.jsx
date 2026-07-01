import "../App.css";
import logo from "../assets/images/logo.jpg";
import heroBg from "../assets/images/bgColor.jpg";
import { useEffect, useRef, useState } from "react";

function AppHero() {
  const pillars = [
    {
      icon: "bi-book-half",
      title: "Education",
      text: "Providing knowledge, skills, and learning access for sustainable growth.",
    },
    {
      icon: "bi-heart-pulse",
      title: "Health Awareness",
      text: "Promoting preventive care and health education for stronger communities.",
    },
    {
      icon: "bi-graph-up",
      title: "Socio-Economic Empowerment",
      text: "Equipping communities with tools for financial independence and resilience.",
    },
    {
      icon: "bi-leaf",
      title: "Environmental Preservation",
      text: "Encouraging sustainable practices that protect our shared environment.",
    },
  ];

  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState(() => new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);

            setVisibleCards((prev) => {
              if (prev.has(index)) return prev;
              const newSet = new Set(prev);
              newSet.add(index);
              return newSet;
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const getDelay = (i) => `${i * 0.15}s`;

  return (
    <section className="hero-wrapper" id="home">
      <div
        className="hero-top"
        style={{ "--hero-bg": `url(${heroBg})` }}
      >
        <div className="container text-center hero-top-content">
          <div className="logo-circle mb-4">
            <img src={logo} alt="Com-Light Logo" loading="lazy" />
          </div>

          <div className="org-label">
            <span>Non-Profit Organization</span>
            <div className="pillar-line"></div>
          </div>

          <h1 className="hero-main-title">
            Empowering Communities, Transforming Lives
          </h1>

          <h2 className="pillars-title">Our Pillars</h2>

          <div className="pillars-connector">
            <span></span>
          </div>
        </div>
      </div>

      <div className="hero-pillars">
        <div className="container pillars-container">
          <div className="row g-3 justify-content-center">
            {pillars.map((pillar, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3 d-flex">
                <div
                  ref={(el) => {
                    if (el) cardRefs.current[index] = el;
                  }}
                  data-index={index}
                  className={`pillar-card w-100 ${
                    visibleCards.has(index) ? "show" : ""
                  }`}
                  style={{ transitionDelay: getDelay(index) }}
                >
                  <div className="pillar-icon">
                    <i className={`bi ${pillar.icon}`}></i>
                  </div>

                  <h3>{pillar.title}</h3>
                  <div className="pillar-line"></div>
                  <p>{pillar.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppHero;
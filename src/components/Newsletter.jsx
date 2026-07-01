import "../App.css";

function NewsLetter() {
  return (
    <section
      className="py-3"
      style={{
        backgroundColor: "rgb(11, 8, 184)", // dark background
        color: "#F9FAFB",
        marginTop:"10px",

      }}
    >
      <div className="container">
        <div className="row align-items-center gy-3">

          {/* Text Column */}
          <div className="col-12 col-lg-5">
            <h3 className="fw-bold mb-2" style={{ color: "#F9FAFB", fontSize: "clamp(18px, 4vw, 22px)"}}>
              <span style={{color:"#f9a825"}}>Stay Connected</span> <span style={{color:"#F9FAFB"}}>with Com-Light</span>
            </h3>
            <p className="lead mb-0 " style={{textAlign: "justify", fontSize: "clamp(14px, 4vw, 18px)", fontWeight:"450"}}>
              Get updates on our <span style={{color:"#fbc02d"}}>programmes, impact stories, and opportunities to get involved</span>.
            </p>
          </div>

          {/* Input + Button Column */}
          <div className="col-12 col-lg-7 d-flex flex-column flex-md-row align-items-stretch">
            <input
              type="email"
              className="form-control mb-2 mb-md-0 me-md-2"
              id="newsletter-input"
              placeholder="Enter Email Address"

            />
            <button
              className="btn btn-lg news"
              id="newsletter-btn"
            >
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
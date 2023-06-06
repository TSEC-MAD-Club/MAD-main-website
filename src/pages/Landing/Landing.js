import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Landing.css";
import playstore_img from "../../assets/googleplay.png";
import appstore_img from "../../assets/appstore.png";

function Landing() {
  const iOSUrl = "";
  const androidUrl = "";
  return (
    <div className="page-width">
      <Navbar />
      <div className="landing-hero">
        <div className="landing-hero-content">
          <div className="landing-hero-title">
            <h1 className="white">TSEC</h1>
            <h1 className="devs-gradient">Developer's Club</h1>
          </div>
          <p className="landing-hero-subtitle grey">
            Build, collaborate and work on real-life applications
          </p>
          <div className="landing-hero-buttons">
            <Link>
              <button>Be a member</button>
            </Link>
            <Link>
              <button>Know more</button>
            </Link>
          </div>
        </div>
        <div className="landing-hero-image">
          <img src="https://i.ibb.co/0jZ3Q0K/landing-hero-image.png" alt="" />
        </div>
      </div>
      <section className="app-promo-wrapper">
        <h1 className="app-promo-title devs-gradient">
          We are the club that created and manages the official app of TSEC.
        </h1>
        <div className="app-promo-content">
          <div className="app-promo-image">
            <img src="https://i.ibb.co/0jZ3Q0K/landing-hero-image.png" alt="" />
          </div>
          <div className="app-promo-text">
            <p className="grey">
              The official app of TSEC is a one-stop solution for all the
              students of TSEC. It provides a platform for the college to
              connect with the students. The app is built by the students of
              TSEC and is managed by the TSEC Developer's Club.
            </p>
            <div className="app-promo-buttons">
              <Link>
                <button>Download on the app store</button>
              </Link>
              <Link>
                <button>Get it on googleplay</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;

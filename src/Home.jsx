import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ninja from "./assets/ninja.png"; // or your image's filename and extension


function Home() {
  const [typedText, setTypedText] = useState("");
  const motto = "no fake hype. No guessing. Controlled Growth through discipline.";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let idx = 0;
    const type = () => {
      if (idx <= motto.length) {
        setTypedText(motto.slice(0, idx));
        idx++;
        setTimeout(type, idx === motto.length ? 1200 : 60);
      }
    };
    type();

    // Blinking cursor
    const cursorInterval = setInterval(() => setShowCursor((cur) => !cur), 500);
    return () => clearInterval(cursorInterval);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="home-bg">
      {/* Navigation */}
      <nav className="top-nav">
        <Link to="/" className="nav-link active">Home</Link>
        <Link to="/about" className="nav-link">About Yourself</Link>
        <Link to="/legacy" className="nav-link">Legacy Wall</Link>
        <Link to="/potential" className="nav-link">Silent Potential</Link>
      </nav>

      {/* Hero section */}
      <section className="hero">
        <div className="ninja-hero-wrapper">
          {/* Replace ninja.png with your preferred ninja SVG/PNG in src/assets and import as above */}
          <img src={ninja} alt="Ninja" className="ninja-img" />
        </div>
        <h1 className="community-name">Silent Equity</h1>
        <div className="motto-typewriter">
          <span>{typedText}</span>
          <span className="blink-cursor">{showCursor ? "|" : " "}</span>
        </div>
      </section>
    </div>
  );
}

export default Home;

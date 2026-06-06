"use client";

export default function Hero() {
  return (
    <div className="hero-section animate-fade-in delay-100">
      <h1 className="hero-title">
        Orchestrating Autonomous <br />
        <span style={{ color: "var(--text-main)" }}>Enterprise Scale.</span>
      </h1>
      <p className="hero-subtitle">
        I architect AI-driven autonomous engines, automated FinOps pipelines, and scalable enterprise operations. Ex-Scale AI, Ramp, Modern Treasury.
      </p>
      
      <div className="btn-group">
        <a href="#valuation-drivers" className="btn-executive">
          View Valuation Drivers
        </a>
        <a href="https://github.com/djjrip/war-room-ops" target="_blank" rel="noreferrer" className="btn-executive btn-outline">
          View Autonomous Architecture
        </a>
      </div>
    </div>
  );
}

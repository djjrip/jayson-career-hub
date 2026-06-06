"use client";
import { useState, useEffect } from 'react';

export default function Telemetry() {
  const [telemetry, setTelemetry] = useState(null);

  useEffect(() => {
    const fetchTelemetry = async () => {
      try {
        const res = await fetch('https://raw.githubusercontent.com/djjrip/djjrip/main/telemetry.json?' + new Date().getTime());
        if (res.ok) {
          const data = await res.json();
          setTelemetry(data);
        }
      } catch (error) {
        console.error("Failed to fetch live telemetry.", error);
      }
    };

    fetchTelemetry();
    const interval = setInterval(fetchTelemetry, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="telemetry-container animate-fade-in delay-300">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '2rem', margin: 0 }}>Autonomous Platform Telemetry</h2>
        <div className="status-badge">
          <div className="status-dot"></div>
          {telemetry?.systemState || "SYSTEM ONLINE"}
        </div>
      </div>
      
      <p style={{ color: "var(--text-muted)", marginBottom: "2rem", maxWidth: "800px" }}>
        My portfolio isn't static. It is actively managed by a 25-module autonomous AI engine I engineered (`drifting-quasar`). 
        It continuously runs security red-teams, finops cloud-cost optimizations, and brand sentiment defense in the background.
      </p>

      <div className="metric-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <div>
          <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", textTransform: "uppercase" }}>Enterprise Valuation Protected</div>
          <div style={{ color: "var(--accent-cyan)", fontSize: "2rem", fontWeight: 700 }}>
            {telemetry?.metrics?.enterpriseValuation || "$0"}
          </div>
        </div>
        <div>
          <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", textTransform: "uppercase" }}>Ledger Events</div>
          <div style={{ color: "#fff", fontSize: "2rem", fontWeight: 700 }}>
            {telemetry?.metrics?.totalLedgerEvents || 0}
          </div>
        </div>
        <div>
          <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", textTransform: "uppercase" }}>Security Mitigations</div>
          <div style={{ color: "#fff", fontSize: "2rem", fontWeight: 700 }}>
            {telemetry?.metrics?.securityInterventions || 0}
          </div>
        </div>
      </div>
    </div>
  );
}

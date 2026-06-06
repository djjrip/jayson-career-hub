"use client";
import { useState, useEffect } from 'react';

export default function CommandCenter() {
  const [telemetry, setTelemetry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTelemetry = async () => {
      try {
        // Fetch the raw JSON directly from the public GitHub repository
        const res = await fetch('https://raw.githubusercontent.com/djjrip/djjrip/main/telemetry.json?' + new Date().getTime());
        if (res.ok) {
          const data = await res.json();
          setTelemetry(data);
        }
      } catch (error) {
        console.error("Failed to fetch live telemetry.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTelemetry();
    // Poll every 30 seconds for live updates
    const interval = setInterval(fetchTelemetry, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="animate-fade-in" style={{ padding: '2rem', color: 'var(--text-muted)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="pulse-ring"></div>
          <h2>Establishing connection to Nexus Engine...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <h1>Nexus CTO Command Center</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Live operational telemetry from the autonomous deployment engine. Data is synchronized directly from the Immutable Ledger.
      </p>

      <div className="metric-grid">
        <div className="glass-panel" style={{ borderTop: '3px solid var(--accent-green)' }}>
          <h3>Enterprise Valuation</h3>
          <div className="metric-value" style={{ color: 'var(--accent-green)', fontSize: '2.5rem' }}>
            {telemetry?.metrics?.enterpriseValuation || "$0"}
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Real-time ARR trajectory with 10x SaaS Multiple.
          </p>
        </div>

        <div className="glass-panel" style={{ borderTop: '3px solid var(--accent-blue)' }}>
          <h3>Revenue Generated</h3>
          <div className="metric-value" style={{ color: 'var(--accent-blue)', fontSize: '2.5rem' }}>
            {telemetry?.metrics?.revenueBilled || "$0"}
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Autonomous capital billed from successful operations.
          </p>
        </div>

        <div className="glass-panel" style={{ borderTop: '3px solid var(--accent-amber)' }}>
          <h3>Capital Saved</h3>
          <div className="metric-value" style={{ color: 'var(--accent-amber)', fontSize: '2.5rem' }}>
            {telemetry?.metrics?.capitalSaved || "$0"}
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Infrastructure bloat trimmed by the Capital Optimizer.
          </p>
        </div>
      </div>

      <div className="metric-grid" style={{ marginTop: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <div className="glass-panel" style={{ padding: '1rem' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>System State</div>
          <div style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: telemetry?.systemState === 'OPERATIONAL' ? '#00f0ff' : '#ff3366', boxShadow: `0 0 10px ${telemetry?.systemState === 'OPERATIONAL' ? '#00f0ff' : '#ff3366'}` }}></div>
            {telemetry?.systemState || "UNKNOWN"}
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1rem' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Successful Deployments</div>
          <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginTop: '0.5rem' }}>
            {telemetry?.metrics?.successfulDeployments || 0}
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1rem' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Security Blocks</div>
          <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginTop: '0.5rem' }}>
            {telemetry?.metrics?.securityInterventions || 0}
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1rem' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Cryptographic Ledger Events</div>
          <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginTop: '0.5rem' }}>
            {telemetry?.metrics?.totalLedgerEvents || 0}
          </div>
        </div>
      </div>

      <div className="glass-panel" style={{ marginTop: '2rem' }}>
        <h2>Live System Heartbeat</h2>
        <div className="item-list" style={{ marginTop: '1.5rem' }}>
          <div className="item-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: '3px solid var(--accent-blue)' }}>
            <div>
              <div style={{ fontWeight: 500, fontFamily: 'monospace' }}>TELEMETRY_PULSE_BROADCAST</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Latest state synchronized from the autonomous backend.</div>
            </div>
            <span style={{ color: 'var(--accent-blue)', fontSize: '0.85rem', fontFamily: 'monospace' }}>
              {telemetry ? new Date(telemetry.timestamp).toLocaleTimeString() : 'N/A'}
            </span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .pulse-ring {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: var(--accent-blue);
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(0, 240, 255, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(0, 240, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 240, 255, 0); }
        }
      `}</style>
    </div>
  );
}

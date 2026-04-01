export default function CommandCenter() {
  return (
    <div className="animate-fade-in">
      <h1>Command Center</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Overview of your autonomous opportunity engines and training progress.
      </p>

      <div className="metric-grid">
        <div className="glass-panel">
          <h3>Active Leads (24h)</h3>
          <div className="metric-value" style={{ color: 'var(--accent-blue)' }}>12</div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            New remote tech jobs and local FBO roles found.
          </p>
        </div>

        <div className="glass-panel">
          <h3>Targeted Funding</h3>
          <div className="metric-value" style={{ color: 'var(--accent-amber)' }}>$26,000</div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Available scholarship pool in 2026.
          </p>
        </div>

        <div className="glass-panel">
          <h3>PPL Flight Hours</h3>
          <div className="metric-value" style={{ color: 'var(--accent-green)' }}>1.5 / 40</div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Track total flight time towards checkride.
          </p>
        </div>
      </div>

      <div className="glass-panel">
        <h2>Recent System Activity</h2>
        <div className="item-list" style={{ marginTop: '1.5rem' }}>
          <div className="item-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 500 }}>AI Draft Generated</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Arlington Air Center Walk-In Script</div>
            </div>
            <span style={{ color: 'var(--accent-blue)', fontSize: '0.85rem' }}>10m ago</span>
          </div>
          <div className="item-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 500 }}>Scholarship Sniper Complete</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Found 3 active 2026 aviation grants</div>
            </div>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>1h ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

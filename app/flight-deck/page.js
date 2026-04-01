export default function FlightDeck() {
  return (
    <div className="animate-fade-in">
      <h1>The Flight Deck</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Central node for Private Pilot License training materials, pulled directly from your Skymates prep.
      </p>

      <div className="metric-grid">
        <div className="glass-panel">
          <h3>Requirements Roadmap</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0.5rem 0 1.5rem' }}>
            Checklist based precisely on the Skymates PPL course.
          </p>
          <button className="btn btn-outline" style={{ width: '100%' }}>Launch Module</button>
        </div>

        <div className="glass-panel">
          <h3>Ground School Flashcards</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0.5rem 0 1.5rem' }}>
            Interactive 3D flashcards covering Airspace, Aerodynamics, Weather, and FARs.
          </p>
          <button className="btn btn-primary" style={{ width: '100%' }}>Start Study Session</button>
        </div>

        <div className="glass-panel">
          <h3>Flight Flight Logbook</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0.5rem 0 1.5rem' }}>
            Track your progress toward the 40-hour flight time minimum.
          </p>
          <button className="btn btn-outline" style={{ width: '100%' }}>Launch Module</button>
        </div>
      </div>
      
      <div className="glass-panel">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{color: 'var(--accent-green)'}}>System Status</h3>
            <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Legacy React modules are successfully integrated into the Hub architecture.</p>
          </div>
          <div className="status-dot"></div>
        </div>
      </div>
    </div>
  );
}

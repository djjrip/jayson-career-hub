"use client";
import { useState } from 'react';

export default function Opportunities() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleScrape = async (type) => {
    setLoading(true);
    setMessage(`Running ${type} scraper...`);
    try {
      const res = await fetch(`/api/scrape/${type}`, { method: 'POST' });
      const data = await res.json();
      setMessage(`Found ${data.count} new ${type}.`);
    } catch (err) {
      setMessage('Error running scraper.');
    }
    setLoading(false);
  };

  const handleGenerate = async (companyName) => {
    setLoading(true);
    setMessage(`Generating AI draft for ${companyName}...`);
    try {
      const payload = { type: 'airport_job', payload: { company: companyName, title: "Line Service", airportCode: "DFW Area" } };
      await fetch('/api/generate', { method: 'POST', body: JSON.stringify(payload) });
      setMessage('Draft generated successfully! Check /data/drafts.json');
    } catch (err) {
      setMessage('Error generating draft.');
    }
    setLoading(false);
  };

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1>Opportunity Tracker</h1>
          <p style={{ color: 'var(--text-muted)' }}>Manage your scraped jobs and scholarship leads.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-outline" onClick={() => handleScrape('jobs')} disabled={loading}>
            Scrape Jobs
          </button>
          <button className="btn btn-outline" onClick={() => handleScrape('scholarships')} disabled={loading}>
            Snipe Scholarships
          </button>
        </div>
      </div>

      {message && (
        <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-green)', borderRadius: '8px', marginBottom: '2rem' }}>
          {message}
        </div>
      )}

      <div className="glass-panel">
        <h2>Active Leads</h2>
        <div className="item-list" style={{ marginTop: '1.5rem' }}>
          
          <div className="item-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Line Service Technician</div>
              <div style={{ color: 'var(--text-muted)' }}>Aviator Air FBO - Grand Prairie (KGPM)</div>
            </div>
            <button className="btn btn-primary" onClick={() => handleGenerate('Aviator Air FBO')} disabled={loading}>
              Generate App
            </button>
          </div>
          
          <div className="item-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Front Desk Dispatch</div>
              <div style={{ color: 'var(--text-muted)' }}>Skymates Flight Academy - Arlington (KGKY)</div>
            </div>
            <button className="btn btn-primary" onClick={() => handleGenerate('Skymates')} disabled={loading}>
              Generate App
            </button>
          </div>

          <div className="item-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Ray Aviation Scholarship</div>
              <div style={{ color: 'var(--text-muted)' }}>EAA - Experimental Aircraft Association ($11k)</div>
            </div>
            <button className="btn btn-primary" onClick={() => handleGenerate('EAA')} disabled={loading}>
              Generate Essay
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

"use client";
import { useState } from 'react';

export default function Forge() {
  const [skills, setSkills] = useState('Playwright, Node.js, AWS, System Architecture, Checklist Discipline');
  const [targetRole, setTargetRole] = useState('Remote Tech Co-Founder / Engineer');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('Forging document via AI...');
    
    // Simulate generation payload
    try {
      const payload = { 
        type: 'job', 
        payload: { company: 'Target Employer', title: targetRole, skills } 
      };
      await fetch('/api/generate', { method: 'POST', body: JSON.stringify(payload) });
      setMessage('Document Forged! Saved to your backend node /data/drafts.json.');
    } catch (err) {
      setMessage('Error forging document.');
    }
    setLoading(false);
  };

  return (
    <div className="animate-fade-in">
      <h1>The Forge</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Input your raw background data to generate tailored, high-converting scripts and resumes.
      </p>

      {message && (
        <div style={{ padding: '1rem', background: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent-amber)', borderRadius: '8px', marginBottom: '2rem' }}>
          {message}
        </div>
      )}

      <div className="glass-panel" style={{ maxWidth: '600px' }}>
        <form onSubmit={handleGenerate} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Target Role / Goal</label>
            <input 
              type="text" 
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'rgba(0,0,0,0.5)', color: 'white' }}
              required
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Raw Skills / Experience Context</label>
            <textarea 
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              rows="4"
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'rgba(0,0,0,0.5)', color: 'white', fontFamily: 'inherit' }}
              required
            />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              The AI will read this context to write your pitch.
            </p>
          </div>

          <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }} disabled={loading}>
            Forge Document
          </button>
        </form>
      </div>
    </div>
  );
}

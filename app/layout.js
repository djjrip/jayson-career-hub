export const metadata = {
  title: 'Jayson Career Hub',
  description: 'Unified Command Center for Jobs, Scholarships & PPL',
};

import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <aside className="sidebar">
            <div className="sidebar-logo">
              <div className="status-dot"></div>
              Jayson Career Hub
            </div>
            <nav>
              <Link href="/" className="nav-link">Command Center</Link>
              <Link href="/opportunities" className="nav-link">Opportunity Tracker</Link>
              <Link href="/forge" className="nav-link">The Forge</Link>
              <Link href="/flight-deck" className="nav-link">The Flight Deck</Link>
            </nav>
            
            <div style={{marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border)', fontSize: '0.8rem', color: 'var(--text-muted)'}}>
              SYSTEM: ONLINE
            </div>
          </aside>
          
          <main className="main-content">
             {children}
          </main>
        </div>
      </body>
    </html>
  );
}

import Hero from './components/Hero';
import ValuationDrivers from './components/ValuationDrivers';
import Telemetry from './components/Telemetry';

export default function Home() {
  return (
    <>
      <div className="bg-glow"></div>
      <div className="bg-glow-bottom"></div>
      
      <main className="executive-container">
        <header className="nav-header animate-fade-in">
          <div className="nav-brand">Jayson Quindao</div>
          <div className="status-badge">
            <div className="status-dot"></div>
            SYSTEM ONLINE
          </div>
        </header>

        <Hero />
        <ValuationDrivers />
        <Telemetry />

      </main>
    </>
  );
}

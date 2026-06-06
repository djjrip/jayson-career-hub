"use client";

export default function ValuationDrivers() {
  const drivers = [
    {
      company: "Modern Treasury",
      title: "FinOps Enterprise Scaling",
      description: "Engineered autonomous financial reconciliation pipelines securing millions in B2B transaction volume. Led cross-functional growth strategies aligning technical architecture with top-line revenue.",
      eyebrow: "B2B PAYMENTS INFRASTRUCTURE",
      color: "var(--accent-cyan)"
    },
    {
      company: "Ramp",
      title: "Risk & Capital Optimization",
      description: "Optimized multi-million dollar underwriting pipelines. Deployed automated ledger reconciliation and margin-defense strategies, protecting core EBITDA from systemic fraud.",
      eyebrow: "CORPORATE FINTECH",
      color: "var(--accent-gold)"
    },
    {
      company: "Scale AI",
      title: "Autonomous AI Operations",
      description: "Architected end-to-end data pipelines for tier-1 LLM deployments. Scaled operational throughput while maintaining strict enterprise compliance and security standards.",
      eyebrow: "GENERATIVE AI",
      color: "#ffffff"
    }
  ];

  return (
    <div id="valuation-drivers" className="animate-fade-in delay-200">
      <h2 style={{ fontSize: "2.5rem", marginBottom: "3rem" }}>Key Valuation Drivers</h2>
      <div className="valuation-grid">
        {drivers.map((d, i) => (
          <div key={i} className="glass-card">
            <span className="card-eyebrow" style={{ color: d.color }}>{d.eyebrow}</span>
            <h3 className="card-title">{d.company}</h3>
            <div style={{ fontWeight: 600, marginBottom: "1rem", color: "#fff" }}>{d.title}</div>
            <p className="card-desc">{d.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState } from 'react';

const FILTERS = ['ALL', 'AI PRODUCTS', 'DATA TOOLS', 'SIDE PROJECTS'] as const;
type Filter = typeof FILTERS[number];

const projects = [
  {
    id: 'PROJECT_001',
    title: 'AI Copilot for PMs',
    desc: 'An AI-powered assistant that automates PRD drafting, backlog prioritization, and stakeholder reporting.',
    tags: ['AI', 'LLM', 'Product'],
    category: 'AI PRODUCTS' as Filter,
    accent: 'var(--accent)',
    hasDemo: true,
    hasRepo: false,
  },
  {
    id: 'PROJECT_002',
    title: 'Data Insight Dashboard',
    desc: 'Real-time analytics platform connecting product metrics to user behavior signals via ML pipelines.',
    tags: ['Data', 'Python', 'Analytics'],
    category: 'DATA TOOLS' as Filter,
    accent: 'var(--accent-tertiary)',
    hasDemo: true,
    hasRepo: true,
  },
  {
    id: 'PROJECT_003',
    title: 'Onboarding Flow 2.0',
    desc: 'Redesigned AI-guided onboarding reducing activation time by 40% through personalized pathways.',
    tags: ['UX', 'Growth', 'A/B Test'],
    category: 'AI PRODUCTS' as Filter,
    accent: 'var(--accent-secondary)',
    hasDemo: false,
    hasRepo: false,
  },
  {
    id: 'PROJECT_004',
    title: 'Prompt Library CLI',
    desc: 'Open-source command-line tool to manage, version, and test prompt templates for LLM applications.',
    tags: ['CLI', 'Python', 'Open Source'],
    category: 'SIDE PROJECTS' as Filter,
    accent: 'var(--accent)',
    hasDemo: false,
    hasRepo: true,
  },
  {
    id: 'PROJECT_005',
    title: 'Churn Prediction Model',
    desc: 'ML model predicting user churn 30 days in advance with 87% accuracy, integrated into CRM workflows.',
    tags: ['ML', 'Python', 'Data Science'],
    category: 'DATA TOOLS' as Filter,
    accent: 'var(--accent-tertiary)',
    hasDemo: true,
    hasRepo: true,
  },
  {
    id: 'PROJECT_006',
    title: 'AI Habit Tracker',
    desc: 'A mobile-first habit tracking app that uses behavioral AI to adapt reminders and streaks dynamically.',
    tags: ['Mobile', 'AI', 'Personal'],
    category: 'SIDE PROJECTS' as Filter,
    accent: 'var(--accent-secondary)',
    hasDemo: true,
    hasRepo: false,
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<Filter>('ALL');

  const filtered = active === 'ALL' ? projects : projects.filter((p) => p.category === active);

  return (
    <div style={{ padding: '80px 24px', minHeight: 'calc(100vh - 60px)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <p className="section-label" style={{ marginBottom: '12px' }}>
          <span>// </span>PORTFOLIO
        </p>
        <h1
          style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 900,
            color: 'var(--fg)',
            marginBottom: '40px',
            letterSpacing: '0.06em',
          }}
        >
          SELECTED WORK
        </h1>

        {/* Filter Bar */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {FILTERS.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="cyber-chamfer-sm"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.72rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  border: `1px solid ${isActive ? 'var(--accent)' : 'var(--border)'}`,
                  backgroundColor: isActive ? 'var(--accent)' : 'transparent',
                  color: isActive ? '#0a0a0f' : 'var(--fg-muted)',
                  boxShadow: isActive ? 'var(--glow-sm)' : 'none',
                  transition: 'all 150ms ease',
                }}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '20px',
          }}
        >
          {filtered.map((p) => (
            <div
              key={p.id}
              className="cyber-chamfer"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
                overflow: 'hidden',
                transition: 'all 200ms ease',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = p.accent.replace('var(', '').replace(')', '');
                el.style.borderColor = p.accent;
                el.style.boxShadow = `0 0 10px ${p.accent === 'var(--accent)' ? '#d946ef40' : p.accent === 'var(--accent-tertiary)' ? '#f472b640' : '#7c3aed40'}`;
                el.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'var(--border)';
                el.style.boxShadow = 'none';
                el.style.transform = 'none';
              }}
            >
              {/* Top accent bar */}
              <div style={{ height: '3px', background: p.accent, boxShadow: `0 0 8px ${p.accent}` }} />

              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.62rem',
                    color: 'var(--fg-muted)',
                    letterSpacing: '0.2em',
                    marginBottom: '8px',
                  }}
                >
                  {p.id}
                </p>
                <h3
                  style={{
                    fontFamily: 'Orbitron, monospace',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--fg)',
                    letterSpacing: '0.06em',
                    marginBottom: '10px',
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--fg-muted)',
                    lineHeight: 1.7,
                    marginBottom: '16px',
                    flex: 1,
                  }}
                >
                  {p.desc}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '18px' }}>
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.6rem',
                        letterSpacing: '0.1em',
                        color: p.accent,
                        border: `1px solid ${p.accent}50`,
                        padding: '2px 8px',
                        backgroundColor: `${p.accent === 'var(--accent)' ? 'rgba(0,255,136' : p.accent === 'var(--accent-tertiary)' ? 'rgba(0,212,255' : 'rgba(255,0,255'},0.06)`,
                      }}
                    >
                      [{tag}]
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '10px' }}>
                  {p.hasDemo && (
                    <a
                      href="#"
                      className="cyber-chamfer-sm"
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.65rem',
                        letterSpacing: '0.12em',
                        color: p.accent,
                        border: `1px solid ${p.accent}`,
                        padding: '6px 12px',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        transition: 'all 150ms ease',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.backgroundColor = p.accent;
                        el.style.color = '#0a0a0f';
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.backgroundColor = 'transparent';
                        el.style.color = p.accent;
                      }}
                    >
                      [ CASE STUDY ↗ ]
                    </a>
                  )}
                  {p.hasRepo && (
                    <a
                      href="#"
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.65rem',
                        letterSpacing: '0.12em',
                        color: 'var(--fg-muted)',
                        border: '1px solid var(--border)',
                        padding: '6px 12px',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        transition: 'all 150ms ease',
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg-muted)'; }}
                    >
                      [ GITHUB ↗ ]
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';

const skills = [
  'Product Strategy', 'AI/ML Integration', 'Prompt Engineering',
  'User Research', 'Data Analysis', 'Roadmapping',
  'Agile / Scrum', 'Figma', 'Python',
];

const featuredProjects = [
  {
    id: 'PROJECT_001',
    title: 'AI Copilot for PMs',
    desc: 'An AI-powered assistant that automates PRD drafting and backlog prioritization.',
    tags: ['AI', 'Product', 'LLM'],
    color: 'var(--accent)',
  },
  {
    id: 'PROJECT_002',
    title: 'Data Insight Dashboard',
    desc: 'Real-time analytics platform connecting product metrics to user behavior signals.',
    tags: ['Data', 'Python', 'Analytics'],
    color: 'var(--accent-tertiary)',
  },
  {
    id: 'PROJECT_003',
    title: 'Onboarding Flow 2.0',
    desc: 'Redesigned onboarding reducing activation time by 40% through AI-guided steps.',
    tags: ['UX', 'Growth', 'A/B Test'],
    color: 'var(--accent-secondary)',
  },
];

/* ── Decorative HUD Grid ──────────────────────────────── */
function HudGrid() {
  const cells = Array.from({ length: 64 });
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gap: '4px',
        opacity: 0.6,
      }}
    >
      {cells.map((_, i) => {
        const bright = Math.random() > 0.82;
        return (
          <div
            key={i}
            style={{
              height: '24px',
              border: `1px solid ${bright ? 'var(--accent)' : 'var(--border)'}`,
              backgroundColor: bright ? 'rgba(0,255,136,0.06)' : 'transparent',
              boxShadow: bright ? '0 0 4px #d946ef40' : 'none',
            }}
          />
        );
      })}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section
        className="circuit-bg"
        style={{
          minHeight: 'calc(100vh - 60px)',
          display: 'flex',
          alignItems: 'center',
          padding: '80px 24px 60px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* radial ambient glow */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '5%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '3fr 2fr',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* ── Left: Text ── */}
          <div className="animate-fade-in-up">
            <p
              className="section-label"
              style={{ marginBottom: '20px' }}
            >
              <span>// </span>INITIALIZING...
            </p>

            <h1
              className="animate-rgb-shift"
              style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                color: 'var(--accent)',
                marginBottom: '16px',
                letterSpacing: '0.06em',
              }}
            >
              Hi，Here is Gaia
            </h1>

            <div
              style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: 'clamp(1rem, 2vw, 1.4rem)',
                fontWeight: 700,
                color: 'var(--fg)',
                letterSpacing: '0.15em',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              AI PRODUCT MANAGER
              <span
                className="animate-blink"
                style={{ color: 'var(--accent)', marginLeft: '2px' }}
              >
                _
              </span>
            </div>

            <p
              style={{
                color: 'var(--fg-muted)',
                fontSize: '0.95rem',
                maxWidth: '520px',
                lineHeight: 1.8,
                marginBottom: '36px',
                letterSpacing: '0.04em',
              }}
            >
              Building tomorrow's products with AI, empathy &amp; systems thinking.
              Bridging the gap between cutting-edge technology and real human needs.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <Link
                to="/portfolio"
                className="cyber-chamfer-sm animate-glitch"
                style={{
                  backgroundColor: 'var(--accent)',
                  color: '#0a0a0f',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  padding: '12px 24px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'all 150ms ease',
                  boxShadow: 'var(--glow)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'var(--glow-lg)';
                  (e.currentTarget as HTMLAnchorElement).style.filter = 'brightness(1.1)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'var(--glow)';
                  (e.currentTarget as HTMLAnchorElement).style.filter = 'none';
                }}
              >
                [ VIEW PORTFOLIO ]
              </Link>
              <Link
                to="/contact"
                className="cyber-chamfer-sm"
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--accent-secondary)',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  padding: '12px 24px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  border: '2px solid var(--accent-secondary)',
                  transition: 'all 150ms ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = 'var(--accent-secondary)';
                  el.style.color = '#0a0a0f';
                  el.style.boxShadow = 'var(--glow-mg)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = 'transparent';
                  el.style.color = 'var(--accent-secondary)';
                  el.style.boxShadow = 'none';
                }}
              >
                [ CONTACT ME ]
              </Link>
            </div>

            {/* Terminal status line */}
            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.72rem',
                color: 'var(--fg-muted)',
                letterSpacing: '0.12em',
              }}
            >
              <span style={{ color: 'var(--accent)' }}>&gt;</span>{' '}
              STATUS: ONLINE{' '}
              <span style={{ color: 'var(--accent)', letterSpacing: '-0.05em' }}>
                ████████████
              </span>{' '}
              100%
            </div>
          </div>

          {/* ── Right: HUD Graphic ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div
              className="cyber-chamfer"
              style={{
                border: '1px solid var(--border)',
                backgroundColor: 'var(--bg-card)',
                padding: '20px',
                boxShadow: 'var(--glow-sm)',
              }}
            >
              <HudGrid />
            </div>

            {/* Stat badges */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['3+ YRS EXP', '20+ PROJECTS', 'AI NATIVE'].map((badge) => (
                <span
                  key={badge}
                  className="cyber-chamfer-sm"
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    color: 'var(--accent)',
                    border: '1px solid var(--accent)',
                    padding: '6px 12px',
                    backgroundColor: 'rgba(0,255,136,0.05)',
                    boxShadow: 'var(--glow-sm)',
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CORE STACK ═══════════════════ */}
      <section
        style={{
          padding: '80px 24px',
          borderTop: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p className="section-label" style={{ marginBottom: '32px' }}>
            <span>// </span>CORE_STACK
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {skills.map((skill) => (
              <span
                key={skill}
                className="cyber-chamfer-sm"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.78rem',
                  letterSpacing: '0.1em',
                  color: 'var(--accent)',
                  border: '1px solid var(--accent)',
                  padding: '8px 16px',
                  backgroundColor: 'rgba(0,255,136,0.04)',
                  cursor: 'default',
                  transition: 'all 150ms ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLSpanElement).style.backgroundColor = 'rgba(0,255,136,0.12)';
                  (e.currentTarget as HTMLSpanElement).style.boxShadow = 'var(--glow-sm)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLSpanElement).style.backgroundColor = 'rgba(0,255,136,0.04)';
                  (e.currentTarget as HTMLSpanElement).style.boxShadow = 'none';
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SELECTED WORK ═══════════════════ */}
      <section
        style={{
          padding: '80px 24px',
          borderTop: '1px solid var(--border)',
          backgroundColor: 'var(--bg-card)',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '40px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <p className="section-label">
              <span>// </span>SELECTED_WORK
            </p>
            <Link
              to="/portfolio"
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.72rem',
                letterSpacing: '0.15em',
                color: 'var(--accent)',
                textDecoration: 'none',
              }}
            >
              VIEW ALL →
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {featuredProjects.map((p) => (
              <div
                key={p.id}
                className="cyber-chamfer"
                style={{
                  backgroundColor: 'var(--bg)',
                  border: '1px solid var(--border)',
                  overflow: 'hidden',
                  transition: 'all 200ms ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = p.color;
                  el.style.boxShadow = `0 0 8px ${p.color}50, 0 0 20px ${p.color}20`;
                  el.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = 'var(--border)';
                  el.style.boxShadow = 'none';
                  el.style.transform = 'none';
                }}
              >
                {/* Color accent bar */}
                <div
                  style={{
                    height: '3px',
                    background: p.color,
                    boxShadow: `0 0 8px ${p.color}`,
                  }}
                />
                <div style={{ padding: '20px' }}>
                  <p
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.65rem',
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
                      marginBottom: '10px',
                      letterSpacing: '0.06em',
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
                    }}
                  >
                    {p.desc}
                  </p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.62rem',
                          letterSpacing: '0.12em',
                          color: p.color,
                          border: `1px solid ${p.color}60`,
                          padding: '2px 8px',
                          backgroundColor: `${p.color}08`,
                        }}
                      >
                        [{tag}]
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/portfolio"
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.7rem',
                      letterSpacing: '0.15em',
                      color: p.color,
                      textDecoration: 'none',
                      textTransform: 'uppercase',
                    }}
                  >
                    [ VIEW → ]
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

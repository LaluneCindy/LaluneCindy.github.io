const identityTags = [
  { label: 'PRODUCT MANAGER', color: 'var(--accent)' },
  { label: 'AI ENTHUSIAST',   color: 'var(--accent-tertiary)' },
  { label: 'TECH LEARNER',    color: 'var(--accent-secondary)' },
  { label: 'CONTINUOUS GROWER', color: 'var(--accent)' },
];

const timeline = [
  {
    year: '2024',
    role: 'AI Product Manager',
    org: 'Current Company',
    desc: 'Leading AI-driven product development and integrating LLMs into core workflows.',
    current: true,
  },
  {
    year: '2022',
    role: 'Senior Product Manager',
    org: 'Previous Company',
    desc: 'Owned the full product lifecycle for a B2B SaaS platform with 50K+ users.',
    current: false,
  },
  {
    year: '2020',
    role: 'Product Manager',
    org: 'Startup',
    desc: 'Built 0→1 mobile product from ideation to 100K downloads.',
    current: false,
  },
  {
    year: '2018',
    role: 'B.Sc. Computer Science',
    org: 'University',
    desc: 'Graduated with focus on HCI and machine learning.',
    current: false,
  },
];

const sysStats = [
  { key: 'ROLE',     val: 'AI Product Manager' },
  { key: 'FOCUS',    val: 'AI-Driven Products' },
  { key: 'LOCATION', val: 'Remote / Global' },
  { key: 'STATUS',   val: 'Open to opportunities' },
];

export default function About() {
  return (
    <div style={{ padding: '80px 24px', minHeight: 'calc(100vh - 60px)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Page Label */}
        <p className="section-label" style={{ marginBottom: '48px' }}>
          <span>// </span>ABOUT.exe
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'start',
          }}
        >
          {/* ── LEFT: Bio ── */}
          <div>
            {/* Identity Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
              {identityTags.map((tag) => (
                <span
                  key={tag.label}
                  className="cyber-chamfer-sm"
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.68rem',
                    letterSpacing: '0.18em',
                    color: tag.color,
                    border: `1px solid ${tag.color}`,
                    padding: '5px 12px',
                    backgroundColor: `${tag.color}08`,
                    boxShadow: `0 0 4px ${tag.color}40`,
                  }}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            {/* Bio Paragraph */}
            <div
              className="cyber-chamfer"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
                padding: '24px',
                marginBottom: '28px',
                position: 'relative',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: '-16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontFamily: 'Orbitron, monospace',
                  fontSize: '3rem',
                  color: 'var(--accent)',
                  opacity: 0.3,
                  lineHeight: 1,
                }}
              >
                {'{'}
              </span>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--fg-muted)',
                  lineHeight: 1.85,
                  letterSpacing: '0.04em',
                }}
              >
                I'm a product manager passionate about the intersection of AI and human experience.
                I believe the best products emerge from deep empathy combined with rigorous systems
                thinking. As an AI enthusiast and lifelong tech learner, I constantly explore how
                emerging technologies can solve real problems at scale.
              </p>
            </div>

            {/* System Stats Terminal */}
            <div
              className="cyber-chamfer"
              style={{
                backgroundColor: 'var(--bg)',
                border: '1px solid var(--border)',
                overflow: 'hidden',
              }}
            >
              <div className="terminal-bar">
                <span className="terminal-bar-title">system_info.sh</span>
              </div>
              <div style={{ padding: '20px' }}>
                {sysStats.map((s) => (
                  <div
                    key={s.key}
                    style={{
                      display: 'flex',
                      gap: '8px',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.82rem',
                      marginBottom: '10px',
                      letterSpacing: '0.06em',
                    }}
                  >
                    <span style={{ color: 'var(--accent)' }}>&gt;</span>
                    <span style={{ color: 'var(--fg-muted)', minWidth: '90px' }}>{s.key}</span>
                    <span style={{ color: 'var(--fg-muted)' }}>::</span>
                    <span style={{ color: 'var(--fg)' }}>{s.val}</span>
                  </div>
                ))}
                <div
                  style={{
                    display: 'flex',
                    gap: '8px',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.82rem',
                    color: 'var(--accent)',
                  }}
                >
                  <span>&gt;</span>
                  <span className="animate-blink">_</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Timeline ── */}
          <div>
            <p className="section-label" style={{ marginBottom: '32px' }}>
              <span>// </span>TIMELINE.log
            </p>

            <div style={{ position: 'relative', paddingLeft: '28px' }}>
              {/* Vertical neon line */}
              <div
                style={{
                  position: 'absolute',
                  left: '8px',
                  top: '8px',
                  bottom: '8px',
                  width: '1px',
                  background: 'linear-gradient(to bottom, var(--accent), var(--accent-tertiary))',
                  boxShadow: '0 0 6px #d946ef60',
                }}
              />

              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    marginBottom: idx < timeline.length - 1 ? '32px' : 0,
                    position: 'relative',
                  }}
                >
                  {/* Dot on timeline */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-24px',
                      top: '8px',
                      width: '10px',
                      height: '10px',
                      backgroundColor: item.current ? 'var(--accent)' : 'var(--bg-card)',
                      border: `2px solid ${item.current ? 'var(--accent)' : 'var(--accent-tertiary)'}`,
                      boxShadow: item.current ? 'var(--glow)' : 'var(--glow-cy)',
                    }}
                  />

                  <div
                    className="cyber-chamfer"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      border: `1px solid ${item.current ? 'var(--accent)' : 'var(--border)'}`,
                      padding: '16px 18px',
                      boxShadow: item.current ? 'var(--glow-sm)' : 'none',
                      transition: 'all 200ms ease',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '6px',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.65rem',
                          color: 'var(--accent)',
                          border: '1px solid var(--accent)',
                          padding: '2px 8px',
                          letterSpacing: '0.12em',
                          boxShadow: 'var(--glow-sm)',
                        }}
                      >
                        {item.year}
                      </span>
                      {item.current && (
                        <span
                          style={{
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '0.6rem',
                            color: 'var(--accent)',
                            letterSpacing: '0.15em',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                          }}
                        >
                          CURRENT
                          <span className="animate-blink">|</span>
                        </span>
                      )}
                    </div>
                    <h3
                      style={{
                        fontFamily: 'Orbitron, monospace',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: 'var(--fg)',
                        letterSpacing: '0.06em',
                        marginBottom: '2px',
                      }}
                    >
                      {item.role}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.72rem',
                        color: 'var(--accent-tertiary)',
                        letterSpacing: '0.1em',
                        marginBottom: '8px',
                      }}
                    >
                      @ {item.org}
                    </p>
                    <p
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--fg-muted)',
                        lineHeight: 1.65,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

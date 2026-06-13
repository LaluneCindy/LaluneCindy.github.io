import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div
      className="circuit-bg"
      style={{
        minHeight: 'calc(100vh - 60px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '40px 24px',
      }}
    >
      <p className="section-label" style={{ marginBottom: '16px' }}>
        <span>// </span>ERROR_404
      </p>
      <h1
        className="animate-glitch"
        style={{
          fontFamily: 'Orbitron, monospace',
          fontSize: 'clamp(4rem, 15vw, 8rem)',
          fontWeight: 900,
          color: 'var(--destructive)',
          textShadow: '0 0 20px #ff336680, 0 0 40px #ff336640',
          letterSpacing: '0.1em',
          lineHeight: 1,
          marginBottom: '16px',
        }}
      >
        404
      </h1>
      <p
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.9rem',
          color: 'var(--fg-muted)',
          marginBottom: '36px',
          letterSpacing: '0.1em',
        }}
      >
        &gt; CONNECTION LOST — PAGE NOT FOUND
      </p>
      <Link
        to="/"
        className="cyber-chamfer-sm"
        style={{
          backgroundColor: 'var(--accent)',
          color: '#0a0a0f',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.78rem',
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          padding: '12px 28px',
          textDecoration: 'none',
          boxShadow: 'var(--glow)',
        }}
      >
        [ RETURN TO HOME ]
      </Link>
    </div>
  );
}

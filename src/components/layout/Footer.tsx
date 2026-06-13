import { NavLink } from 'react-router-dom';
import { navItems } from '@/data/nav';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--bg-card)',
        padding: '32px 24px',
        marginTop: 'auto',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        {/* Monogram */}
        <span
          style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: '1rem',
            fontWeight: 900,
            color: 'var(--accent)',
            textShadow: '0 0 8px #d946ef70',
            letterSpacing: '0.1em',
          }}
        >
          {'<APM/>'}
        </span>

        {/* Nav Links */}
        <nav style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.68rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--fg-muted)',
                textDecoration: 'none',
                transition: 'color 150ms',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg-muted)'; }}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Copyright + Status */}
        <p
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.65rem',
            color: 'var(--fg-muted)',
            letterSpacing: '0.15em',
          }}
        >
          © {year} APM —{' '}
          <span style={{ color: 'var(--accent)', textShadow: '0 0 6px #d946ef70' }}>
            SYSTEM ONLINE
          </span>
        </p>
      </div>
    </footer>
  );
}

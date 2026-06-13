import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '@/data/nav';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(10,10,15,0.85)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* ── Logo / Monogram ── */}
        <NavLink
          to="/"
          style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
        >
          <span
            style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: '1.1rem',
              fontWeight: 900,
              color: 'var(--accent)',
              textShadow: '0 0 8px #d946ef, 0 0 20px #d946ef50',
              letterSpacing: '0.1em',
            }}
          >
            {'<APM/>'}
          </span>
          <span
            style={{
              fontSize: '0.65rem',
              color: 'var(--fg-muted)',
              fontFamily: 'JetBrains Mono, monospace',
              letterSpacing: '0.2em',
              paddingTop: '2px',
            }}
          >
            AI PRODUCT MGR
          </span>
        </NavLink>

        {/* ── Desktop Nav ── */}
        <nav style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              style={({ isActive }) => ({
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.72rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                padding: '6px 12px',
                color: isActive ? 'var(--accent)' : 'var(--fg-muted)',
                textDecoration: 'none',
                borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                textShadow: isActive ? '0 0 8px #d946ef70' : 'none',
                transition: 'all 150ms ease',
              })}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                if (!el.style.textShadow.includes('8px')) {
                  el.style.color = 'var(--fg)';
                }
              }}
              onMouseLeave={() => {
                // active state maintained by NavLink style fn — no override needed
              }}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: '1px solid var(--border)',
            color: 'var(--accent)',
            padding: '6px 10px',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.8rem',
            cursor: 'pointer',
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      {menuOpen && (
        <div
          style={{
            borderTop: '1px solid var(--border)',
            backgroundColor: 'rgba(10,10,15,0.98)',
            padding: '12px 24px',
          }}
          className="mobile-nav"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                display: 'block',
                padding: '10px 0',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.8rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: isActive ? 'var(--accent)' : 'var(--fg-muted)',
                borderBottom: '1px solid var(--border)',
                textDecoration: 'none',
              })}
            >
              {'>'} {item.label}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: block !important; }
          nav { display: none !important; }
        }
      `}</style>
    </header>
  );
}

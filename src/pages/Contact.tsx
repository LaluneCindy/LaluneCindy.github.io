import { useState } from 'react';

const socials = [
  { key: 'EMAIL',         val: 'you@example.com',          href: 'mailto:you@example.com' },
  { key: 'GITHUB',        val: 'github.com/yourname',      href: 'https://github.com/' },
  { key: 'LINKEDIN',      val: 'linkedin.com/in/yourname', href: 'https://linkedin.com/' },
  { key: 'TWITTER/X',     val: '@yourhandle',              href: 'https://x.com/' },
  { key: 'RESPONSE TIME', val: '< 24h',                    href: null },
];

type FieldKey = 'name' | 'email' | 'subject' | 'message';

export default function Contact() {
  const [form, setForm] = useState<Record<FieldKey, string>>({
    name: '', email: '', subject: '', message: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (k: FieldKey) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'var(--bg)',
    border: '1px solid var(--border)',
    color: 'var(--accent)',
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: '0.85rem',
    padding: '10px 12px 10px 32px',
    outline: 'none',
    transition: 'all 150ms ease',
    letterSpacing: '0.04em',
  };

  return (
    <div style={{ padding: '80px 24px', minHeight: 'calc(100vh - 60px)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <p className="section-label" style={{ marginBottom: '12px' }}>
          <span>// </span>CONTACT
        </p>
        <h1
          style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 900,
            color: 'var(--fg)',
            letterSpacing: '0.06em',
            marginBottom: '48px',
          }}
        >
          ESTABLISH CONNECTION
        </h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          {/* ── LEFT: Connection Info ── */}
          <div>
            {/* Online indicator */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '28px',
              }}
            >
              <span
                className="animate-online-pulse"
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent)',
                  display: 'inline-block',
                  boxShadow: '0 0 6px #d946ef',
                }}
              />
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.72rem',
                  letterSpacing: '0.2em',
                  color: 'var(--accent)',
                }}
              >
                ONLINE — AVAILABLE FOR CONTACT
              </span>
            </div>

            {/* Terminal social block */}
            <div
              className="cyber-chamfer"
              style={{
                backgroundColor: 'var(--bg)',
                border: '1px solid var(--border)',
                overflow: 'hidden',
              }}
            >
              <div className="terminal-bar">
                <span className="terminal-bar-title">connection.sh</span>
              </div>
              <div style={{ padding: '20px 22px' }}>
                {socials.map((s) => (
                  <div
                    key={s.key}
                    style={{
                      display: 'flex',
                      gap: '8px',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.82rem',
                      marginBottom: '12px',
                      letterSpacing: '0.04em',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span style={{ color: 'var(--accent)', flexShrink: 0 }}>&gt;</span>
                    <span style={{ color: 'var(--fg-muted)', minWidth: '120px', flexShrink: 0 }}>
                      {s.key}:
                    </span>
                    {s.href ? (
                      <a
                        href={s.href}
                        target={s.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        style={{
                          color: 'var(--accent-tertiary)',
                          textDecoration: 'none',
                          transition: 'color 150ms',
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-tertiary)'; }}
                      >
                        {s.val} {s.href.startsWith('http') ? '↗' : ''}
                      </a>
                    ) : (
                      <span style={{ color: 'var(--fg)' }}>{s.val}</span>
                    )}
                  </div>
                ))}
                <div style={{ display: 'flex', gap: '8px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', color: 'var(--accent)' }}>
                  <span>&gt;</span>
                  <span className="animate-blink">_</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Contact Form ── */}
          <div
            className="cyber-chamfer"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
              overflow: 'hidden',
            }}
          >
            <div className="terminal-bar">
              <span className="terminal-bar-title">send_message.exe</span>
            </div>

            {sent ? (
              <div style={{ padding: '48px 28px', textAlign: 'center' }}>
                <p
                  style={{
                    fontFamily: 'Orbitron, monospace',
                    fontSize: '1.2rem',
                    color: 'var(--accent)',
                    textShadow: '0 0 10px #d946ef70',
                    letterSpacing: '0.1em',
                    marginBottom: '12px',
                  }}
                >
                  MESSAGE SENT ✓
                </p>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: 'var(--fg-muted)' }}>
                  // Transmission successful. Response incoming within 24h.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {(['name', 'email', 'subject'] as FieldKey[]).map((field) => (
                  <div key={field} style={{ position: 'relative' }}>
                    <label
                      htmlFor={field}
                      style={{
                        display: 'block',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.65rem',
                        letterSpacing: '0.2em',
                        color: 'var(--fg-muted)',
                        textTransform: 'uppercase',
                        marginBottom: '6px',
                      }}
                    >
                      {field}
                    </label>
                    <div style={{ position: 'relative' }}>
                      <span
                        aria-hidden
                        style={{
                          position: 'absolute',
                          left: '10px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          color: 'var(--accent)',
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.85rem',
                          pointerEvents: 'none',
                        }}
                      >
                        &gt;
                      </span>
                      <input
                        id={field}
                        type={field === 'email' ? 'email' : 'text'}
                        value={form[field]}
                        onChange={handleChange(field)}
                        required
                        placeholder={`Enter your ${field}...`}
                        style={inputStyle}
                        onFocus={(e) => {
                          (e.currentTarget as HTMLInputElement).style.borderColor = 'var(--accent)';
                          (e.currentTarget as HTMLInputElement).style.boxShadow = 'var(--glow-sm)';
                        }}
                        onBlur={(e) => {
                          (e.currentTarget as HTMLInputElement).style.borderColor = 'var(--border)';
                          (e.currentTarget as HTMLInputElement).style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>
                ))}

                {/* Message textarea */}
                <div style={{ position: 'relative' }}>
                  <label
                    htmlFor="message"
                    style={{
                      display: 'block',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.65rem',
                      letterSpacing: '0.2em',
                      color: 'var(--fg-muted)',
                      textTransform: 'uppercase',
                      marginBottom: '6px',
                    }}
                  >
                    MESSAGE
                  </label>
                  <div style={{ position: 'relative' }}>
                    <span
                      aria-hidden
                      style={{
                        position: 'absolute',
                        left: '10px',
                        top: '12px',
                        color: 'var(--accent)',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.85rem',
                        pointerEvents: 'none',
                      }}
                    >
                      &gt;
                    </span>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange('message')}
                      required
                      placeholder="Your message..."
                      style={{ ...inputStyle, resize: 'vertical', paddingTop: '12px' }}
                      onFocus={(e) => {
                        (e.currentTarget as HTMLTextAreaElement).style.borderColor = 'var(--accent)';
                        (e.currentTarget as HTMLTextAreaElement).style.boxShadow = 'var(--glow-sm)';
                      }}
                      onBlur={(e) => {
                        (e.currentTarget as HTMLTextAreaElement).style.borderColor = 'var(--border)';
                        (e.currentTarget as HTMLTextAreaElement).style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="cyber-chamfer-sm animate-glitch"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: '#0a0a0f',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    padding: '13px 24px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: 'var(--glow)',
                    transition: 'all 150ms ease',
                    width: '100%',
                    marginTop: '4px',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = 'var(--glow-lg)';
                    (e.currentTarget as HTMLButtonElement).style.filter = 'brightness(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = 'var(--glow)';
                    (e.currentTarget as HTMLButtonElement).style.filter = 'none';
                  }}
                >
                  [ SEND_MESSAGE.exe ]
                </button>

                <p
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.62rem',
                    color: 'var(--fg-muted)',
                    letterSpacing: '0.15em',
                    textAlign: 'center',
                  }}
                >
                  <span style={{ color: 'var(--accent)' }}>//</span> ENCRYPTION: ACTIVE
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1.4fr"] {
            grid-template-columns: 1fr !important;
          }
        }
        ::placeholder { color: var(--fg-muted); opacity: 1; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; }
      `}</style>
    </div>
  );
}

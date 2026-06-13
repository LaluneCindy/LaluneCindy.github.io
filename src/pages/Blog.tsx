import { useState } from 'react';

const CATEGORIES = ['ALL', 'PRODUCT THINKING', 'AI RESEARCH', 'LIFE NOTES'] as const;
type Category = typeof CATEGORIES[number];

const categoryColor: Record<Category, string> = {
  'ALL':              'var(--accent)',
  'PRODUCT THINKING': 'var(--accent)',
  'AI RESEARCH':      'var(--accent-tertiary)',
  'LIFE NOTES':       'var(--accent-secondary)',
};

const posts = [
  {
    cat: 'PRODUCT THINKING' as Category,
    date: '2024.06.01',
    title: 'Why Most AI Features Fail: A PM\'s Field Notes',
    excerpt: 'After shipping 10+ AI-powered features, here\'s what I\'ve learned about the gap between demo magic and production reality.',
    readTime: '~7 MIN READ',
  },
  {
    cat: 'AI RESEARCH' as Category,
    date: '2024.05.18',
    title: 'Understanding RAG: Beyond the Hype',
    excerpt: 'A deep dive into retrieval-augmented generation—when it works, when it doesn\'t, and what the benchmark papers actually tell us.',
    readTime: '~12 MIN READ',
  },
  {
    cat: 'LIFE NOTES' as Category,
    date: '2024.05.05',
    title: 'Building in Public: 30 Days In',
    excerpt: 'What I\'ve learned after committing to share my work openly for 30 days—the good, the awkward, and the unexpected connections.',
    readTime: '~5 MIN READ',
  },
  {
    cat: 'AI RESEARCH' as Category,
    date: '2024.04.22',
    title: 'Prompt Chaining vs. Agent Loops',
    excerpt: 'A practical comparison: when to use deterministic prompt chains versus autonomous agent loops for production AI workflows.',
    readTime: '~9 MIN READ',
  },
  {
    cat: 'PRODUCT THINKING' as Category,
    date: '2024.04.08',
    title: 'The Metrics Trap: Measuring AI Product Quality',
    excerpt: 'Engagement metrics lie. Here\'s a framework for measuring whether your AI product is actually delivering value—not just sessions.',
    readTime: '~8 MIN READ',
  },
  {
    cat: 'LIFE NOTES' as Category,
    date: '2024.03.15',
    title: 'How I Read 40 AI Papers Without Burning Out',
    excerpt: 'My evolving system for staying current with AI research while maintaining a full-time product role. Tools, templates, and mindset.',
    readTime: '~6 MIN READ',
  },
];

export default function Blog() {
  const [active, setActive] = useState<Category>('ALL');

  const filtered = active === 'ALL' ? posts : posts.filter((p) => p.cat === active);

  return (
    <div style={{ padding: '80px 24px', minHeight: 'calc(100vh - 60px)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <p className="section-label" style={{ marginBottom: '12px' }}>
          <span>// </span>BLOG
        </p>
        <h1
          style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 900,
            color: 'var(--fg)',
            letterSpacing: '0.06em',
            marginBottom: '40px',
          }}
        >
          DISPATCH LOG
        </h1>

        {/* Category Tabs */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {CATEGORIES.map((cat) => {
            const isActive = active === cat;
            const col = categoryColor[cat];
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="cyber-chamfer-sm"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.68rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: '7px 14px',
                  cursor: 'pointer',
                  border: `1px solid ${isActive ? col : 'var(--border)'}`,
                  backgroundColor: isActive ? col : 'transparent',
                  color: isActive ? '#0a0a0f' : 'var(--fg-muted)',
                  transition: 'all 150ms ease',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Post Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '16px',
          }}
        >
          {filtered.map((post, idx) => {
            const col = categoryColor[post.cat];
            return (
              <article
                key={idx}
                className="cyber-chamfer"
                style={{
                  backgroundColor: 'var(--bg)',
                  border: '1px solid var(--border)',
                  overflow: 'hidden',
                  transition: 'all 200ms ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = col;
                  el.style.transform = 'translateY(-3px)';
                  el.style.boxShadow = `0 0 10px ${col}30`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'var(--border)';
                  el.style.transform = 'none';
                  el.style.boxShadow = 'none';
                }}
              >
                {/* Terminal header bar */}
                <div className="terminal-bar">
                  <span className="terminal-bar-title">blog.md — {post.cat}</span>
                </div>

                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Category badge + date */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '12px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.58rem',
                        letterSpacing: '0.15em',
                        color: col,
                        border: `1px solid ${col}60`,
                        padding: '2px 8px',
                        backgroundColor: `${col}08`,
                      }}
                    >
                      {post.cat}
                    </span>
                    <span
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.62rem',
                        color: 'var(--fg-muted)',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {post.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    style={{
                      fontFamily: 'Orbitron, monospace',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: 'var(--fg)',
                      letterSpacing: '0.05em',
                      lineHeight: 1.4,
                      marginBottom: '10px',
                    }}
                  >
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--fg-muted)',
                      lineHeight: 1.7,
                      flex: 1,
                      marginBottom: '16px',
                    }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.6rem',
                        color: 'var(--fg-muted)',
                        letterSpacing: '0.15em',
                      }}
                    >
                      {post.readTime}
                    </span>
                    <a
                      href="#"
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.65rem',
                        letterSpacing: '0.12em',
                        color: col,
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                      }}
                    >
                      [ READ MORE → ]
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

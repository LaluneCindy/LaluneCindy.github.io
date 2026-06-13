const stats = [
  { label: 'EXPERIMENTS', val: '12' },
  { label: 'MODELS TESTED', val: '8' },
  { label: 'PAPERS READ', val: '40+' },
  { label: 'TOOLS BUILT', val: '5' },
];

type ExpStatus = 'ACTIVE' | 'COMPLETE' | 'IN PROGRESS';

const statusColors: Record<ExpStatus, string> = {
  'ACTIVE':      'var(--accent)',
  'COMPLETE':    'var(--accent-tertiary)',
  'IN PROGRESS': 'var(--accent-secondary)',
};

const experiments = [
  {
    n: 1,
    title: 'Autonomous PRD Generator',
    status: 'ACTIVE' as ExpStatus,
    desc: 'Using GPT-4o + structured outputs to generate full Product Requirement Documents from a 3-sentence brief. Evaluating output quality via rubric-based scoring.',
    tags: ['GPT-4o', 'Structured Output', 'Product'],
    date: '2024.05',
  },
  {
    n: 2,
    title: 'RAG for Competitive Intelligence',
    status: 'COMPLETE' as ExpStatus,
    desc: 'Built a retrieval-augmented generation pipeline that ingests competitor changelogs, release notes, and blog posts to surface weekly product intelligence summaries.',
    tags: ['RAG', 'Embeddings', 'LangChain'],
    date: '2024.03',
  },
  {
    n: 3,
    title: 'Prompt Optimization via DSPy',
    status: 'IN PROGRESS' as ExpStatus,
    desc: 'Experimenting with DSPy to automatically optimize prompt chains for classification tasks, reducing manual prompt engineering iteration cycles.',
    tags: ['DSPy', 'Optimization', 'LLM'],
    date: '2024.04',
  },
  {
    n: 4,
    title: 'Multi-Agent Product Planning',
    status: 'ACTIVE' as ExpStatus,
    desc: 'An agent swarm where specialized sub-agents (researcher, designer, engineer) collaborate to produce product plans with cross-functional perspectives.',
    tags: ['Agents', 'CrewAI', 'Planning'],
    date: '2024.06',
  },
  {
    n: 5,
    title: 'User Interview Synthesizer',
    status: 'COMPLETE' as ExpStatus,
    desc: 'Fine-tuned a small model to extract themes, pain points, and quotes from raw user interview transcripts into structured JSON.',
    tags: ['Fine-tuning', 'UX Research', 'NLP'],
    date: '2024.02',
  },
];

export default function AILab() {
  return (
    <div style={{ minHeight: 'calc(100vh - 60px)' }}>

      {/* ═══ Hero ═══ */}
      <section
        className="circuit-bg"
        style={{
          padding: '80px 24px 60px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p className="section-label" style={{ marginBottom: '16px' }}>
            <span>// </span>AI_LAB {':: '}
            <span style={{ color: 'var(--accent-secondary)' }}>EXPERIMENTAL</span>
          </p>
          <h1
            style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 900,
              color: 'var(--accent)',
              letterSpacing: '0.06em',
              textShadow: '0 0 12px #d946ef70',
              marginBottom: '12px',
            }}
          >
            AI LAB
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--fg-muted)', maxWidth: '560px', lineHeight: 1.7 }}>
            Active research &amp; experiments in AI product design. A living workspace where
            ideas meet code, models meet use cases, and hypotheses get tested.
          </p>

          {/* Stats Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0',
              marginTop: '48px',
              border: '1px solid var(--border)',
              backgroundColor: 'var(--bg-card)',
              overflow: 'hidden',
            }}
            className="cyber-chamfer"
          >
            {stats.map((s, idx) => (
              <div
                key={s.label}
                style={{
                  flex: '1 1 120px',
                  padding: '20px 24px',
                  borderRight: idx < stats.length - 1 ? '1px solid var(--border)' : 'none',
                  textAlign: 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Orbitron, monospace',
                    fontSize: '1.8rem',
                    fontWeight: 900,
                    color: 'var(--accent)',
                    textShadow: '0 0 10px #d946ef70',
                    letterSpacing: '0.1em',
                  }}
                >
                  {s.val}
                </p>
                <p
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.6rem',
                    color: 'var(--fg-muted)',
                    letterSpacing: '0.2em',
                    marginTop: '4px',
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Experiments List ═══ */}
      <section style={{ padding: '60px 24px 80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p className="section-label" style={{ marginBottom: '32px' }}>
            <span>// </span>EXPERIMENT_LOG
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {experiments.map((exp) => {
              const sColor = statusColors[exp.status];
              return (
                <div
                  key={exp.n}
                  className="cyber-chamfer"
                  style={{
                    backgroundColor: 'var(--bg)',
                    border: '1px solid var(--border)',
                    overflow: 'hidden',
                    transition: 'all 200ms ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = sColor;
                    el.style.boxShadow = `0 0 8px ${sColor}40`;
                    el.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = 'var(--border)';
                    el.style.boxShadow = 'none';
                    el.style.transform = 'none';
                  }}
                >
                  {/* Terminal header */}
                  <div className="terminal-bar">
                    <span className="terminal-bar-title">
                      user@ai-lab:~$ run experiment_{String(exp.n).padStart(2, '0')}
                    </span>
                  </div>

                  <div style={{ padding: '20px 24px' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '12px',
                        marginBottom: '10px',
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: 'Orbitron, monospace',
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: 'var(--fg)',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {exp.title}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span
                          style={{
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '0.6rem',
                            color: 'var(--fg-muted)',
                            letterSpacing: '0.15em',
                          }}
                        >
                          {exp.date}
                        </span>
                        <span
                          className="cyber-chamfer-sm"
                          style={{
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '0.6rem',
                            letterSpacing: '0.15em',
                            color: sColor,
                            border: `1px solid ${sColor}`,
                            padding: '3px 10px',
                            backgroundColor: `${sColor}10`,
                            boxShadow: `0 0 4px ${sColor}40`,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                          }}
                        >
                          {exp.status === 'ACTIVE' && (
                            <span className="animate-blink" style={{ fontSize: '0.5rem' }}>●</span>
                          )}
                          {exp.status}
                        </span>
                      </div>
                    </div>

                    <p
                      style={{
                        fontSize: '0.83rem',
                        color: 'var(--fg-muted)',
                        lineHeight: 1.75,
                        marginBottom: '14px',
                      }}
                    >
                      {exp.desc}
                    </p>

                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '0.6rem',
                            letterSpacing: '0.12em',
                            color: sColor,
                            border: `1px solid ${sColor}40`,
                            padding: '2px 8px',
                            backgroundColor: `${sColor}06`,
                          }}
                        >
                          [{tag}]
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

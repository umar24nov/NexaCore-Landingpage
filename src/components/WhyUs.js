import { WHY_US_STATS, REASONS } from '../constants/data';
import { colors, fonts } from '../constants/theme';
import Card from './ui/Card';
import SectionHeading from './ui/SectionHeading';

export default function WhyUs() {
  return (
    <section id="why-us" style={{ background: colors.bgMid, padding: '100px 2rem' }} className="section-inner">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionHeading badge="Why NexaCore" title="The numbers speak" />

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 20, marginBottom: 56 }}>
          {WHY_US_STATS.map((w) => (
            <Card key={w.label} style={{ textAlign: 'center', padding: '36px 24px' }}>
              <div style={{ fontFamily: fonts.display, fontSize: 40, fontWeight: 700, color: colors.accent, letterSpacing: '-1px', lineHeight: 1, marginBottom: 10 }}>
                {w.stat}
              </div>
              <div style={{ fontFamily: fonts.body, fontSize: 14, color: colors.textMuted }}>{w.label}</div>
            </Card>
          ))}
        </div>

        {/* Reason cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 22 }}>
          {REASONS.map((r) => (
            <Card key={r.title} accentLeft>
              <h3 style={{ fontFamily: fonts.display, fontSize: 16, fontWeight: 600, color: colors.textLight, margin: '0 0 10px' }}>
                {r.title}
              </h3>
              <p style={{ fontFamily: fonts.body, fontSize: 14, color: colors.textMuted, lineHeight: 1.65, margin: 0 }}>
                {r.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ABOUT_CARDS } from '../constants/data';
import { colors, fonts } from '../constants/theme';
import Card from './ui/Card';
import Badge from './ui/Badge';

export default function About() {
  return (
    <section id="about" style={{ background: colors.bgMid, padding: '100px 2rem' }} className="section-inner">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

          {/* Left – text */}
          <div>
            <Badge>About NexaCore</Badge>
            <h2 style={{ fontFamily: fonts.display, fontSize: 'clamp(30px,4vw,44px)', fontWeight: 700, color: colors.textLight, lineHeight: 1.15, letterSpacing: '-1px', margin: '0 0 22px' }}>
              We build the foundation so you can build the future
            </h2>
            <p style={{ fontFamily: fonts.body, fontSize: 17, color: colors.textSoft, lineHeight: 1.7, margin: '0 0 18px' }}>
              Founded in 2019 by engineers from AWS and DeepMind, NexaCore was built on a simple belief: infrastructure should be a competitive advantage, not an operational burden.
            </p>
            <p style={{ fontFamily: fonts.body, fontSize: 17, color: colors.textSoft, lineHeight: 1.7, margin: 0 }}>
              Today we serve over 500 companies — from seed-stage startups to Fortune 500 engineering teams — all running on the same unified platform.
            </p>
          </div>

          {/* Right – cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {ABOUT_CARDS.map((c) => (
              <Card key={c.title}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
                <div style={{ fontFamily: fonts.display, fontSize: 15, fontWeight: 600, color: colors.textLight, marginBottom: 8 }}>{c.title}</div>
                <div style={{ fontFamily: fonts.body, fontSize: 13, color: colors.textMuted, lineHeight: 1.6 }}>{c.text}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

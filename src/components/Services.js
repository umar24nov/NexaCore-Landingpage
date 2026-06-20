import { SERVICES } from '../constants/data';
import { colors, fonts } from '../constants/theme';
import Card from './ui/Card';
import SectionHeading from './ui/SectionHeading';

export default function Services() {
  return (
    <section id="services" style={{ background: colors.bgDark, padding: '100px 2rem' }} className="section-inner">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionHeading
          badge="Platform Services"
          badgeVariant="accent"
          title="Everything your stack needs"
          subtitle="Six tightly integrated products. One API surface. One dashboard. One bill."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 22 }}>
          {SERVICES.map((s) => (
            <Card key={s.title}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>{s.icon}</div>
              <h3 style={{ fontFamily: fonts.display, fontSize: 18, fontWeight: 600, color: colors.textLight, margin: '0 0 10px' }}>
                {s.title}
              </h3>
              <p style={{ fontFamily: fonts.body, fontSize: 14, color: colors.textMuted, lineHeight: 1.65, margin: 0 }}>
                {s.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

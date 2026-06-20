import { TESTIMONIALS } from '../constants/data';
import { colors, fonts } from '../constants/theme';
import Card from './ui/Card';
import SectionHeading from './ui/SectionHeading';

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: colors.bgDark, padding: '100px 2rem' }} className="section-inner">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionHeading badge="Testimonials" badgeVariant="accent" title="Trusted by engineering teams" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24 }}>
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} style={{ padding: '32px 28px' }}>
              <div style={{ fontFamily: fonts.body, fontSize: 32, color: colors.primary, lineHeight: 1, marginBottom: 16 }}>
                "
              </div>
              <p style={{ fontFamily: fonts.body, fontSize: 15, color: colors.textSoft, lineHeight: 1.7, margin: '0 0 28px', fontStyle: 'italic' }}>
                {t.quote}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: `linear-gradient(135deg,${colors.primary},${colors.accent})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: fonts.display, fontWeight: 700, fontSize: 14, color: '#fff', flexShrink: 0,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontFamily: fonts.display, fontSize: 14, fontWeight: 600, color: colors.textLight }}>
                    {t.name}
                  </div>
                  <div style={{ fontFamily: fonts.body, fontSize: 12, color: colors.textGray, marginTop: 2 }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { colors, fonts } from '../../constants/theme';
import Badge from './Badge';

/**
 * Shared section header: badge + heading + optional subtitle.
 * Used at the top of About, Services, WhyUs, Testimonials, Contact.
 */
export default function SectionHeading({
  badge,
  badgeVariant = 'primary',
  title,
  subtitle,
  align = 'center',
}) {
  return (
    <div style={{ textAlign: align, marginBottom: 56 }}>
      <Badge variant={badgeVariant}>{badge}</Badge>
      <h2
        style={{
          fontFamily: fonts.display,
          fontSize: 'clamp(28px,4vw,44px)',
          fontWeight: 700,
          color: colors.textLight,
          letterSpacing: '-1px',
          margin: subtitle ? '0 0 16px' : 0,
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontFamily: fonts.body,
            fontSize: 17,
            color: colors.textMuted,
            maxWidth: 540,
            margin: align === 'center' ? '0 auto' : 0,
            lineHeight: 1.65,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

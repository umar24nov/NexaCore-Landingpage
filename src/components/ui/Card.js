import { colors } from '../../constants/theme';

/**
 * Reusable elevated card surface.
 * accentLeft: adds a colored left border (used in "Why Choose Us" reasons)
 * hoverLift: whether it lifts + glows on hover (default true)
 */
export default function Card({ children, accentLeft = false, hoverLift = true, style = {} }) {
  const baseStyle = {
    background: colors.bgCard,
    border: `1px solid ${colors.border}`,
    borderLeft: accentLeft ? `3px solid ${colors.primary}` : `1px solid ${colors.border}`,
    borderRadius: 16,
    padding: '28px 24px',
    transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
    cursor: 'default',
    ...style,
  };

  const handleEnter = (e) => {
    if (!hoverLift) return;
    e.currentTarget.style.borderColor = colors.borderBright;
    e.currentTarget.style.transform = 'translateY(-3px)';
    e.currentTarget.style.boxShadow = '0 8px 32px rgba(79,70,229,0.16)';
  };

  const handleLeave = (e) => {
    if (!hoverLift) return;
    e.currentTarget.style.borderColor = colors.border;
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <div style={baseStyle} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {children}
    </div>
  );
}

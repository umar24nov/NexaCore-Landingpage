import { colors, fonts } from '../../constants/theme';

/**
 * Small pill label used above section headings (e.g. "About NexaCore").
 * variant: 'primary' (indigo) | 'accent' (teal)
 */
export default function Badge({ children, variant = 'primary' }) {
  const isAccent = variant === 'accent';
  const color = isAccent ? colors.accent : colors.primary;
  const borderColor = isAccent ? 'rgba(6,182,212,0.3)' : 'rgba(79,70,229,0.3)';
  const bg = isAccent ? 'rgba(6,182,212,0.1)' : 'rgba(79,70,229,0.12)';

  return (
    <div
      style={{
        display: 'inline-block',
        background: bg,
        color,
        fontFamily: fonts.body,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        padding: '5px 14px',
        borderRadius: 100,
        marginBottom: 20,
        border: `1px solid ${borderColor}`,
      }}
    >
      {children}
    </div>
  );
}

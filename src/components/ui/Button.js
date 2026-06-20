import { colors, fonts } from '../../constants/theme';

/**
 * Reusable button.
 * variant: 'primary' (filled indigo) | 'outline' (transparent border)
 * size: 'md' | 'lg'
 * fullWidth: boolean
 */
export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
}) {
  const isOutline = variant === 'outline';

  const sizes = {
    md: { padding: '10px 22px', fontSize: 14 },
    lg: { padding: '14px 32px', fontSize: 16 },
  };

  const baseStyle = {
    width: fullWidth ? '100%' : 'auto',
    background: isOutline ? 'transparent' : colors.primary,
    border: isOutline ? `1px solid ${colors.borderSoft}` : 'none',
    color: '#fff',
    fontFamily: fonts.body,
    fontWeight: 600,
    cursor: 'pointer',
    borderRadius: 10,
    transition: 'all 0.2s ease',
    ...sizes[size],
  };

  const handleEnter = (e) => {
    if (isOutline) {
      e.currentTarget.style.borderColor = colors.borderBright;
      e.currentTarget.style.background = 'rgba(79,70,229,0.12)';
    } else {
      e.currentTarget.style.background = colors.primaryHover;
      e.currentTarget.style.transform = 'translateY(-2px)';
    }
  };

  const handleLeave = (e) => {
    if (isOutline) {
      e.currentTarget.style.borderColor = colors.borderSoft;
      e.currentTarget.style.background = 'transparent';
    } else {
      e.currentTarget.style.background = colors.primary;
      e.currentTarget.style.transform = 'translateY(0)';
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={baseStyle}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {children}
    </button>
  );
}

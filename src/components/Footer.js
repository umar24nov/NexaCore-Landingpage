import { FOOTER_COLS } from '../constants/data';
import { colors, fonts } from '../constants/theme';

export default function Footer() {
  return (
    <footer
      style={{
        background: colors.bgDarker,
        borderTop: `1px solid ${colors.border}`,
        padding: '72px 2rem 40px',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: 48,
            marginBottom: 60,
          }}
        >
          {/* Brand column */}
          <div>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  background: `linear-gradient(135deg,${colors.primary},${colors.accent})`,
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: fonts.display,
                  fontWeight: 700,
                  fontSize: 15,
                  color: '#fff',
                }}
              >
                N
              </div>
              <span
                style={{
                  fontFamily: fonts.display,
                  fontWeight: 700,
                  fontSize: 18,
                  color: colors.textLight,
                  letterSpacing: '-0.5px',
                }}
              >
                NexaCore
              </span>
            </div>
            <p
              style={{
                fontFamily: fonts.body,
                fontSize: 14,
                color: 'rgba(248,250,255,0.42)',
                lineHeight: 1.7,
                maxWidth: 260,
                margin: 0,
              }}
            >
              Cloud, AI, and edge infrastructure for teams who ship fast and sleep well.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.heading}>
              <div
                style={{
                  fontFamily: fonts.display,
                  fontSize: 13,
                  fontWeight: 600,
                  color: colors.textLight,
                  marginBottom: 18,
                  letterSpacing: '0.04em',
                }}
              >
                {col.heading}
              </div>
              {col.links.map((link) => (
                <div key={link} style={{ marginBottom: 10 }}>
                  <button
                    type="button"
                    style={{
                      fontFamily: fonts.body,
                      fontSize: 14,
                      color: 'rgba(248,250,255,0.45)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = colors.accent)}
                    onMouseLeave={(e) =>
                      (e.target.style.color = 'rgba(248,250,255,0.45)')
                    }
                  >
                    {link}
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(248,250,255,0.07)',
            paddingTop: 28,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <div
            style={{
              fontFamily: fonts.body,
              fontSize: 13,
              color: 'rgba(248,250,255,0.3)',
            }}
          >
            © 2024 NexaCore, Inc. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((l) => (
              <button
                key={l}
                type="button"
                style={{
                  fontFamily: fonts.body,
                  fontSize: 13,
                  color: 'rgba(248,250,255,0.3)',
                  textDecoration: 'none',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                }}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

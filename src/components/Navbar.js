import { useState } from 'react';
import { NAV_LINKS } from '../constants/data';
import { colors, fonts } from '../constants/theme';
import Button from './ui/Button';

export default function Navbar({ scrollY }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const goHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpen(false);
  };

  const scrolled = scrollY > 40;

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? 'rgba(10,15,30,0.97)' : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none', borderBottom: scrolled ? `1px solid ${colors.border}` : 'none', transition: 'background 0.3s, border 0.3s', padding: '0 2rem' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo — click goes home */}
        <div onClick={goHome} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
          <div style={{ width: 34, height: 34, background: `linear-gradient(135deg,${colors.primary},${colors.accent})`, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.display, fontWeight: 700, fontSize: 16, color: '#fff' }}>
            N
          </div>
          <span style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: 20, color: colors.textLight, letterSpacing: '-0.5px' }}>
            NexaCore
          </span>
        </div>

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {NAV_LINKS.map((l) => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase().replace(' ', '-'))}
              style={{ background: 'none', border: 'none', color: colors.textSoft, fontFamily: fonts.body, fontSize: 14, cursor: 'pointer', padding: '6px 14px', borderRadius: 6, transition: 'color 0.2s, background 0.2s' }}
              onMouseEnter={(e) => { e.target.style.color = colors.textLight; e.target.style.background = 'rgba(79,70,229,0.15)'; }}
              onMouseLeave={(e) => { e.target.style.color = colors.textSoft; e.target.style.background = 'none'; }}
            >
              {l}
            </button>
          ))}
          <div style={{ marginLeft: 12 }}>
            <Button onClick={() => scrollTo('contact')}>Get Started</Button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button className="mobile-menu-btn" onClick={() => setOpen(!open)}
          style={{ display: 'none', background: 'none', border: `1px solid rgba(79,70,229,0.3)`, color: colors.textLight, borderRadius: 6, padding: '6px 10px', cursor: 'pointer', fontSize: 18 }}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div style={{ background: 'rgba(10,15,30,0.97)', borderTop: `1px solid ${colors.border}`, padding: '1rem 2rem 1.5rem' }}>
          <button onClick={goHome} style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', color: colors.accent, fontFamily: fonts.body, fontSize: 16, cursor: 'pointer', padding: '10px 0', borderBottom: `1px solid rgba(79,70,229,0.1)` }}>
            🏠 Home
          </button>
          {NAV_LINKS.map((l) => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase().replace(' ', '-'))}
              style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', color: colors.textLight, fontFamily: fonts.body, fontSize: 16, cursor: 'pointer', padding: '10px 0', borderBottom: `1px solid rgba(79,70,229,0.1)` }}>
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

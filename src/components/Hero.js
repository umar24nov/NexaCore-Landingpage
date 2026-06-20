import { useEffect, useRef } from 'react';
import { HERO_STATS } from '../constants/data';
import { colors, fonts } from '../constants/theme';
import Button from './ui/Button';

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    const pts = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(79,70,229,0.55)';
        ctx.fill();
      });
      pts.forEach((a, i) => {
        pts.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(79,70,229,${0.15 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    const ro = new ResizeObserver(() => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    });
    ro.observe(canvas);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />
  );
}

export default function Hero() {
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToServices = () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" style={{ minHeight: '100vh', background: `linear-gradient(160deg,${colors.bgDark} 60%,#0F1535 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '120px 2rem 80px' }}>
      <ParticleCanvas />

      <div style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, background: 'radial-gradient(circle,rgba(79,70,229,0.12) 0%,transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: 860, textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(79,70,229,0.12)', border: `1px solid rgba(79,70,229,0.35)`, borderRadius: 100, padding: '6px 16px', marginBottom: 32 }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: colors.accent, display: 'inline-block' }} />
          <span style={{ fontFamily: fonts.body, fontSize: 13, color: colors.accent, fontWeight: 500 }}>
            Now in General Availability — Edge Compute v2
          </span>
        </div>

        <h1 style={{ fontFamily: fonts.display, fontSize: 'clamp(40px,6vw,76px)', fontWeight: 700, color: colors.textLight, lineHeight: 1.08, letterSpacing: '-2px', margin: '0 0 28px' }}>
          Infrastructure that{' '}
          <span style={{ background: `linear-gradient(90deg,${colors.primary},${colors.accent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            thinks ahead
          </span>
        </h1>

        <p style={{ fontFamily: fonts.body, fontSize: 'clamp(16px,2vw,20px)', color: colors.textMuted, lineHeight: 1.65, maxWidth: 600, margin: '0 auto 44px' }}>
          NexaCore provides cloud, AI, and edge infrastructure for teams who ship fast and sleep well. From MVP to millions of users — the same platform scales with you.
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button onClick={scrollToContact} size="lg">Start Free Trial →</Button>
          <Button onClick={scrollToServices} size="lg" variant="outline">Explore Platform</Button>
        </div>

        <div className="hero-stats" style={{ display: 'flex', gap: 40, justifyContent: 'center', marginTop: 64, flexWrap: 'wrap' }}>
          {HERO_STATS.map(({ number, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: fonts.display, fontSize: 30, fontWeight: 700, color: colors.textLight, letterSpacing: '-1px' }}>
                {number}
              </div>
              <div style={{ fontFamily: fonts.body, fontSize: 13, color: colors.textGray, marginTop: 4 }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

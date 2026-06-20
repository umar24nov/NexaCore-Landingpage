import { useState } from 'react';
import { colors, fonts } from '../constants/theme';
import Badge from './ui/Badge';
import Button from './ui/Button';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 👇 Replace YOUR_FORM_ID with your Formspree ID — see README
    const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) setSent(true);
  };

  const inputStyle = {
    width: '100%', padding: '12px 16px', borderRadius: 10,
    border: `1px solid ${colors.border}`,
    fontFamily: fonts.body, fontSize: 15,
    color: colors.textLight, background: colors.bgCard,
    outline: 'none', boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" style={{ background: colors.bgMid, padding: '100px 2rem' }} className="section-inner">
      <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
        <Badge>Contact</Badge>
        <h2 style={{ fontFamily: fonts.display, fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, color: colors.textLight, letterSpacing: '-1px', margin: '0 0 16px' }}>
          Let's talk infrastructure
        </h2>
        <p style={{ fontFamily: fonts.body, fontSize: 17, color: colors.textMuted, lineHeight: 1.65, margin: '0 0 48px' }}>
          Tell us about your stack. We'll get back to you within one business day.
        </p>

        {sent ? (
          <div style={{ background: 'rgba(6,182,212,0.08)', border: `1px solid rgba(6,182,212,0.3)`, borderRadius: 16, padding: '48px 32px' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
            <h3 style={{ fontFamily: fonts.display, fontSize: 22, fontWeight: 600, color: colors.textLight, margin: '0 0 10px' }}>Message received!</h3>
            <p style={{ fontFamily: fonts.body, color: colors.textMuted, margin: 0 }}>Our team will be in touch within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {[
              { id: 'name', label: 'Your Name', type: 'text', ph: 'Mohammad Umar Farook' },
              { id: 'email', label: 'Work Email', type: 'email', ph: 'nexacore@company.com' },
            ].map((f) => (
              <div key={f.id} style={{ marginBottom: 20, textAlign: 'left' }}>
                <label style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 500, color: colors.textSoft, display: 'block', marginBottom: 8 }}>{f.label}</label>
                <input type={f.type} placeholder={f.ph} required value={form[f.id]}
                  onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = colors.primary)}
                  onBlur={(e) => (e.target.style.borderColor = colors.border)}
                />
              </div>
            ))}
            <div style={{ marginBottom: 28, textAlign: 'left' }}>
              <label style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 500, color: colors.textSoft, display: 'block', marginBottom: 8 }}>Tell us about your project</label>
              <textarea rows={5} required placeholder="We're running a monolith and need help scaling..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={(e) => (e.target.style.borderColor = colors.primary)}
                onBlur={(e) => (e.target.style.borderColor = colors.border)}
              />
            </div>
            <Button type="submit" fullWidth size="lg">Send Message →</Button>
          </form>
        )}
      </div>
    </section>
  );
}

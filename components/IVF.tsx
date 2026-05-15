'use client'

import { motion } from 'framer-motion'
import { FiPhone, FiMessageCircle, FiArrowRight } from 'react-icons/fi'

const phone = '8866117255'

const procedures = [
  { name: 'Pre-Conception Counselling', description: 'Expert guidance before starting your fertility journey' },
  { name: 'Genetic Analysis', description: 'Chromosomal and genetic screening for informed decisions' },
  { name: 'Infertility Workup', description: 'Comprehensive diagnosis of fertility issues' },
  { name: '3D/4D USG for Infertility', description: 'Advanced imaging for reproductive health assessment' },
  { name: 'Fertility-Enhancing Surgeries', description: 'Surgical interventions to improve fertility outcomes' },
  { name: 'Fertility-Conserving Surgeries', description: 'Preserving reproductive potential during treatment' },
  { name: 'Ovulation Induction', description: 'Medication-based follicle development' },
  { name: 'Intrauterine Insemination (IUI)', description: 'Timed artificial insemination procedure' },
  { name: 'IVF (In Vitro Fertilization)', description: 'Full IVF treatment cycle with personalized care' },
  { name: 'ICSI', description: 'Intracytoplasmic sperm injection for male factor infertility' },
  { name: 'TESA', description: 'Testicular sperm extraction procedure' },
  { name: 'Male Factor Infertility', description: 'Specialized treatments for male fertility issues' }
]

const badges = ['High Success Rates', 'Experienced Team', 'Modern Lab', 'Personalized Care', 'Affordable Packages']

export default function IVF() {
  return (
    <section id="ivf" style={{ padding: '100px 5%', background: 'var(--primary)', position: 'relative', overflow: 'hidden' }}>
      {/* Background Glow */}
      <div style={{ position: 'absolute', top: '-200px', right: '-200px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(232, 67, 147, 0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-200px', left: '-200px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(30, 58, 95, 0.3) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Accent Gradient */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--accent), var(--accent-light), var(--accent))' }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '64px', alignItems: 'start' }}>
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: 'var(--accent-soft)',
              border: '1px solid rgba(232, 67, 147, 0.3)',
              color: 'var(--accent-light)',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '20px',
              fontWeight: 600,
            }}>
              <span style={{ width: '20px', height: '2px', background: 'var(--accent)' }} />
              IVF & Fertility Center
              <span style={{ width: '20px', height: '2px', background: 'var(--accent)' }} />
            </div>

            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(34px, 4vw, 48px)',
              fontWeight: 400,
              color: 'white',
              lineHeight: 1.15,
              marginBottom: '20px',
            }}>
              Your Journey to<br />
              <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Parenthood</span>
            </h2>

            <p style={{
              fontSize: '15px',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.8,
              marginBottom: '28px',
            }}>
              Our IVF and Fertility Center offers comprehensive fertility treatments with state-of-the-art technology and compassionate care. We understand the emotional journey of infertility and are here to support you every step of the way.
            </p>

            <p style={{
              fontSize: '15px',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.8,
              marginBottom: '32px',
            }}>
              Located in Bhuj, we serve couples from across Kutch and beyond, providing hope and healing with personalized treatment plans.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a href={`tel:${phone}`} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--accent)',
                color: 'white',
                padding: '14px 24px',
                borderRadius: '10px',
                fontSize: '12px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.3s',
                boxShadow: '0 4px 16px rgba(232, 67, 147, 0.35)',
              }}>
                <FiPhone size={16} />
                Book Consultation
              </a>
              <a href="https://wa.me/918866117255" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#25D366',
                color: 'white',
                padding: '14px 24px',
                borderRadius: '10px',
                fontSize: '12px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.3s',
              }}>
                <FiMessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* Right - Procedures Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '12px' }}>
              {procedures.map((proc, index) => (
                <motion.div
                  key={proc.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(232, 67, 147, 0.15)',
                    padding: '20px',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.borderColor = 'rgba(232, 67, 147, 0.4)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.borderColor = 'rgba(232, 67, 147, 0.15)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '16px',
                    color: 'white',
                    marginBottom: '6px',
                    fontWeight: 500,
                  }}>{proc.name}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{proc.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginTop: '64px', textAlign: 'center' }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {badges.map((badge) => (
              <span key={badge} style={{
                padding: '10px 20px',
                background: 'rgba(232, 67, 147, 0.1)',
                border: '1px solid rgba(232, 67, 147, 0.25)',
                color: 'var(--accent-light)',
                fontSize: '12px',
                letterSpacing: '1px',
                borderRadius: '24px',
              }}>
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
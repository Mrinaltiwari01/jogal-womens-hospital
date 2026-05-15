'use client'

import { motion } from 'framer-motion'
import { FiPhone, FiMessageCircle, FiArrowRight } from 'react-icons/fi'

const phone = '8866117255'

export default function CTABanner() {
  return (
    <section style={{
      position: 'relative',
      padding: '80px 5%',
      background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)',
      overflow: 'hidden',
    }}>
      {/* Decorative Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.1,
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '24px 24px',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ position: 'relative', zIndex: 10, maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}
      >
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(32px, 4vw, 52px)',
          color: 'white',
          fontWeight: 400,
          marginBottom: '16px',
        }}>
          Your Health Journey Starts Here
        </h2>
        <p style={{
          fontSize: '16px',
          color: 'rgba(255,255,255,0.9)',
          marginBottom: '32px',
          maxWidth: '600px',
          margin: '0 auto 32px',
        }}>
          Schedule a consultation with our specialists today and take the first step towards better health.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          <a
            href={`tel:${phone}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: 'var(--primary)',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '12px',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.3s',
              boxShadow: '0 4px 20px rgba(30, 58, 95, 0.3)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <FiPhone size={20} />
            Call +91 {phone}
          </a>
          <a
            href="https://wa.me/918866117255"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'white',
              color: 'var(--accent)',
              padding: '16px 32px',
              borderRadius: '12px',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.3s',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <FiMessageCircle size={20} />
            WhatsApp Us
          </a>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '12px',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.3s',
              border: '1px solid rgba(255,255,255,0.3)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
          >
            Book Appointment
            <FiArrowRight size={16} />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
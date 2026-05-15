'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiPhone, FiCalendar, FiMessageCircle, FiMapPin, FiClock, FiHeart } from 'react-icons/fi'

const phone = '8866117255'

const trustBadges = [
  { icon: <FiHeart size={16} />, label: 'Maternity Care' },
  { icon: '🧬', label: 'IVF & Fertility' },
  { icon: '👶', label: 'Level 3 NICU' },
  { icon: '🔬', label: 'Laparoscopy' },
  { icon: <FiClock size={16} />, label: '24/7 Emergency' },
]

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      background: 'var(--background)',
      overflow: 'hidden',
    }}>
      {/* Background Gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, var(--soft-pink) 0%, var(--soft-blue) 50%, var(--soft-lavender) 100%)',
        opacity: 0.5,
      }} />

      {/* Decorative Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--accent-soft) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(30, 58, 95, 0.08) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />

      {/* Subtle Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.015,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3a5f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '60px',
          alignItems: 'center',
          paddingTop: '80px',
          paddingBottom: '80px',
        }}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                padding: '8px 16px',
                borderRadius: '24px',
                marginBottom: '24px',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)', animation: 'pulse-soft 2s infinite' }} />
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 500 }}>Women&apos;s Hospital in Bhuj</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(40px, 5vw, 60px)',
                fontWeight: 400,
                color: 'var(--text)',
                lineHeight: 1.15,
                marginBottom: '20px',
                letterSpacing: '-0.5px',
              }}
            >
              Advanced Mother, Baby &<br />
              <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Women&apos;s Care</span><br />
              for Kutch
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                fontSize: '16px',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                maxWidth: '500px',
                marginBottom: '32px',
                fontWeight: 400,
              }}
            >
              Jogal Women&apos;s Hospital, Bhuj brings maternity, fertility, gynecology, laparoscopy, pediatrics, Level 3 NICU, and women&apos;s wellness care under one trusted roof.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '36px',
              }}
            >
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                  }}
                >
                  <span style={{ color: 'var(--accent)' }}>{badge.icon}</span>
                  {badge.label}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}
            >
              <a
                href={`tel:${phone}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'var(--accent)',
                  color: 'white',
                  padding: '14px 28px',
                  fontSize: '13px',
                  fontWeight: 600,
                  borderRadius: '10px',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 16px rgba(232, 67, 147, 0.35)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(232, 67, 147, 0.45)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(232, 67, 147, 0.35)'
                }}
              >
                <FiPhone size={18} />
                Call Emergency
              </a>
              <a
                href="https://wa.me/918866117255"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: '#25D366',
                  color: 'white',
                  padding: '14px 28px',
                  fontSize: '13px',
                  fontWeight: 600,
                  borderRadius: '10px',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 16px rgba(37, 211, 102, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <FiMessageCircle size={18} />
                WhatsApp Us
              </a>
              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'var(--surface)',
                  color: 'var(--text)',
                  padding: '14px 28px',
                  fontSize: '13px',
                  fontWeight: 600,
                  borderRadius: '10px',
                  textDecoration: 'none',
                  border: '1px solid var(--border)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.color = 'var(--accent)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text)'
                }}
              >
                <FiCalendar size={18} />
                Book Appointment
              </a>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--soft-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FiMapPin size={18} color="var(--primary)" />
                </div>
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Location</div>
                  <div style={{ fontSize: '13px', color: 'var(--text)', fontWeight: 500 }}>Bhuj, Kutch</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--soft-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FiClock size={18} color="var(--accent)" />
                </div>
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Emergency</div>
                  <div style={{ fontSize: '13px', color: 'var(--text)', fontWeight: 500 }}>24/7 Available</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Hospital Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            {/* Main Image Card */}
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              aspectRatio: '4/3',
            }}>
              <Image
                src="/3D/Exterior/Exterior Building Facade.png"
                alt="Jogal Women's Hospital - Bhuj, Kutch"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              {/* Gradient Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(30, 58, 95, 0.4) 0%, transparent 50%)',
              }} />

              {/* Floating Stats */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
              }}>
                {[
                  { number: '25+', label: 'Years' },
                  { number: '10K+', label: 'Families' },
                  { number: 'Level 3', label: 'NICU' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'rgba(255,255,255,0.95)',
                      backdropFilter: 'blur(8px)',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', color: 'var(--primary)', fontWeight: 600, lineHeight: 1 }}>{stat.number}</div>
                    <div style={{ fontSize: '9px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '2px' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accent Image - Reception */}
            <div style={{
              position: 'absolute',
              top: '-30px',
              right: '-30px',
              width: '180px',
              height: '120px',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '4px solid var(--surface)',
              boxShadow: 'var(--shadow-md)',
            }}>
              <Image
                src="/3D/Interior/Ground Floor/RECEPTION AREA(1).png"
                alt="Jogal Hospital Reception"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Accent Image - NICU */}
            <div style={{
              position: 'absolute',
              bottom: '40px',
              left: '-40px',
              width: '140px',
              height: '100px',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '4px solid var(--surface)',
              boxShadow: 'var(--shadow-md)',
            }}>
              <Image
                src="/3D/Interior/2nd Floor/NICU/NICU VIEW 4 copy.png"
                alt="Level 3 NICU"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        color: 'var(--muted)',
        animation: 'float 2s ease-in-out infinite',
      }}>
        <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>Scroll</span>
        <div style={{ width: '24px', height: '40px', border: '2px solid var(--border)', borderRadius: '12px', display: 'flex', justifyContent: 'center', paddingTop: '8px' }}>
          <div style={{ width: '4px', height: '8px', background: 'var(--accent)', borderRadius: '2px', animation: 'pulse-soft 1.5s infinite' }} />
        </div>
      </div>
    </section>
  )
}
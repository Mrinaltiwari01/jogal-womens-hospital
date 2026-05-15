'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiPhone, FiCheckCircle, FiHeart, FiAward, FiClock, FiShield } from 'react-icons/fi'

const phone = '8866117255'

const uspItems = [
  {
    icon: <FiHeart size={20} />,
    title: 'Mother, Baby & Women\'s Specialty Hospital',
    description: 'Comprehensive care for women at every stage of life - from adolescence to motherhood and beyond.',
    highlight: true
  },
  {
    icon: <FiAward size={20} />,
    title: 'Advanced Maternity Care',
    description: 'Expert obstetric care including normal deliveries, C-sections, and high-risk pregnancy management.',
    highlight: false
  },
  {
    icon: <FiShield size={20} />,
    title: 'Level 3 NICU',
    description: 'State-of-the-art 12-bed Neonatal Intensive Care Unit with round-the-clock specialist care.',
    highlight: false
  },
  {
    icon: '🧬',
    title: 'IVF & Fertility Support',
    description: 'Complete fertility solutions from assessment to advanced treatments like IVF and ICSI.',
    highlight: false
  },
  {
    icon: <FiShield size={20} />,
    title: 'Advanced Gynecology & Laparoscopic Surgery',
    description: 'Minimally invasive surgical expertise for conditions like fibroids, cysts, and endometriosis.',
    highlight: false
  },
  {
    icon: <FiHeart size={20} />,
    title: 'Women\'s Wellness & Recovery',
    description: 'Holistic care including nutrition guidance, physiotherapy, and preventive health checkups.',
    highlight: false
  },
  {
    icon: <FiClock size={20} />,
    title: '24/7 Emergency Support',
    description: 'Round-the-clock emergency obstetric and gynecological care with dedicated ambulance service.',
    highlight: false
  },
  {
    icon: <FiAward size={20} />,
    title: 'Doctor-Led Trust',
    description: 'Personalized care from experienced specialists, not rotating junior doctors.',
    highlight: false
  },
  {
    icon: <FiShield size={20} />,
    title: 'Modern Infrastructure',
    description: 'State-of-the-art facilities including in-house diagnostics, modern OT, and comfortable rooms.',
    highlight: false
  },
  {
    icon: <FiHeart size={20} />,
    title: 'Compassionate Care Close to Home',
    description: 'Quality healthcare in Bhuj, so you don\'t have to travel far for expert treatment.',
    highlight: false
  }
]

export default function WhyUs() {
  return (
    <section id="why-us" style={{ padding: '100px 5%', background: 'var(--background)', position: 'relative', overflow: 'hidden' }}>
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, var(--soft-pink) 0%, transparent 50%, var(--soft-blue) 100%)',
        opacity: 0.3,
      }} />
      <div style={{
        position: 'absolute',
        top: '-200px',
        right: '-200px',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--accent-soft) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 56px' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            color: 'var(--accent)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: 'widest',
            marginBottom: '16px',
            fontWeight: 600,
          }}>
            <span style={{ width: '24px', height: '2px', background: 'var(--accent)' }} />
            Why Choose Us
            <span style={{ width: '24px', height: '2px', background: 'var(--accent)' }} />
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(34px, 4vw, 48px)',
            fontWeight: 400,
            color: 'var(--text)',
            lineHeight: 1.15,
            marginBottom: '16px',
          }}>
            Why <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Jogal Women&apos;s</span> Hospital?
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
          }}>
            We are a regional mother-baby-women&apos;s specialty hospital for Kutch, offering advanced maternity care, Level 3 NICU, fertility/IVF services, gynecology, laparoscopic surgery, and women&apos;s wellness support under one roof.
          </p>
        </motion.div>

        {/* Main Positioning Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '20px',
            padding: '40px 48px',
            marginBottom: '48px',
            textAlign: 'center',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '26px',
            fontWeight: 400,
            color: 'var(--primary)',
            marginBottom: '12px',
          }}>
            Your Trusted Women&apos;s Hospital in Bhuj
          </h3>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: '700px',
            margin: '0 auto',
          }}>
            When you choose Jogal Women&apos;s Hospital, you choose compassionate, expert care that puts you and your baby first. We combine medical excellence with genuine warmth, making sure every patient feels like family.
          </p>
        </motion.div>

        {/* USP Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '80px',
        }}>
          {uspItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              style={{
                background: item.highlight ? 'var(--accent-soft)' : 'var(--surface)',
                border: item.highlight ? '2px solid var(--accent)' : '1px solid var(--border)',
                borderRadius: '16px',
                padding: '28px 24px',
                transition: 'all 0.3s ease',
                display: 'flex',
                gap: '16px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              className="usp-card"
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: item.highlight ? 'var(--accent)' : 'var(--soft-pink)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                color: item.highlight ? 'white' : 'var(--accent)',
              }}>
                {item.icon}
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '18px',
                  fontWeight: 500,
                  color: 'var(--text)',
                  marginBottom: '8px',
                  lineHeight: 1.3,
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar with Hospital Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginTop: '80px' }}
        >
          {/* Stats with Images */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginBottom: '48px',
          }}>
            {[
              { image: '/3D/Interior/1st Floor/MATERNITY ROOM1.png', stat: '25+', label: 'Years of Service', suffix: '' },
              { image: '/3D/Interior/Ground Floor/RECEPTION AREA(1).png', stat: '10000+', label: 'Happy Families', suffix: '' },
              { image: '/3D/Interior/1st Floor/suite room-2(1).png', stat: '50+', label: 'Beds', suffix: '' },
              { image: '/3D/Interior/2nd Floor/NICU/NICU VIEW 4 copy.png', stat: '12', label: 'NICU Beds', suffix: '' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: 'var(--surface)',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid var(--border)',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/10',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  marginBottom: '16px',
                }}>
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '36px',
                  color: 'var(--primary)',
                  fontWeight: 500,
                  lineHeight: 1,
                }}>{item.stat}</div>
                <div style={{
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  color: 'var(--muted)',
                  marginTop: '8px',
                }}>{item.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Large Stats Banner */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            padding: '56px',
            background: 'var(--primary)',
            borderRadius: '24px',
            alignItems: 'center',
          }}>
            {[
              { number: 'Level 3', label: 'NICU Rating' },
              { number: '3', label: 'Hospital Floors' },
              { number: '24/7', label: 'Emergency Care' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  color: 'white',
                  fontWeight: 400,
                  lineHeight: 1,
                }}>{item.number}</div>
                <div style={{
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  color: 'rgba(255,255,255,0.6)',
                  marginTop: '8px',
                }}>{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '64px' }}
        >
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '28px',
            color: 'var(--text)',
            fontWeight: 400,
            marginBottom: '12px',
          }}>
            Ready to Experience Quality Healthcare?
          </h3>
          <p style={{
            color: 'var(--text-secondary)',
            marginBottom: '28px',
            maxWidth: '500px',
            margin: '0 auto 28px',
            fontSize: '15px',
            lineHeight: 1.7,
          }}>
            Schedule a consultation with our specialists today and take the first step towards better health.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            <a
              href={`tel:${phone}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'var(--accent)',
                color: 'white',
                padding: '14px 28px',
                borderRadius: '10px',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.3s',
                boxShadow: '0 4px 16px rgba(232, 67, 147, 0.3)',
              }}
            >
              <FiPhone size={18} />
              Call: +91 {phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
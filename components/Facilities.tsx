'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiPhone, FiGrid, FiHome, FiActivity } from 'react-icons/fi'

const phone = '8866117255'

const facilities = [
  {
    title: 'Reception & Registration',
    description: 'Ground floor welcoming area with smooth patient registration process',
    image: '/3D/Interior/Ground Floor/RECEPTION AREA(1).png',
    location: 'Ground Floor'
  },
  {
    title: 'Consultation Rooms',
    description: 'Private OPD rooms for comfortable doctor consultations',
    image: '/3D/Interior/Ground Floor/OPD-1.png',
    location: 'Ground Floor'
  },
  {
    title: 'Maternity Rooms',
    description: 'Spacious, well-equipped rooms for expectant mothers',
    image: '/3D/Interior/1st Floor/MATERNITY ROOM1.png',
    location: 'First Floor'
  },
  {
    title: 'Suite Rooms',
    description: 'Premium patient rooms with modern amenities for recovery',
    image: '/3D/Interior/1st Floor/suite room-2(1).png',
    location: 'First Floor'
  },
  {
    title: 'Level 3 NICU',
    description: '12-bed state-of-the-art neonatal intensive care unit',
    image: '/3D/Interior/2nd Floor/NICU/NICU VIEW 4 copy.png',
    location: 'Second Floor'
  },
  {
    title: 'Hospital Elevator',
    description: 'Easy access between floors for patients and visitors',
    image: '/3D/Interior/LIFT/Lift 01.png',
    location: 'All Floors'
  }
]

const floorPlan = [
  {
    floor: 'Ground Floor',
    areas: ['Reception & Registration', 'OPD Consultation Rooms', 'Temple Area'],
    image: '/3D/Interior/Ground Floor/RECEPTION AREA(5).png'
  },
  {
    floor: 'First Floor',
    areas: ['Maternity Rooms', 'Suite Rooms', 'Patient Suites'],
    image: '/3D/Interior/1st Floor/MATERNITY ROOM2.png'
  },
  {
    floor: 'Second Floor',
    areas: ['Level 3 NICU (12 beds)', 'NICU Viewing Area'],
    image: '/3D/Interior/2nd Floor/Camera 01_001.png'
  }
]

export default function Facilities() {
  return (
    <section id="facilities" style={{ padding: '100px 5%', background: 'var(--background)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
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
            Hospital Infrastructure
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
            Modern Facilities Built for<br /><span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Women&apos;s Care</span>
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
          }}>
            Our hospital is designed with patient comfort and safety in mind, featuring modern infrastructure across all floors.
          </p>
        </motion.div>

        {/* Facilities Preview Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '80px',
        }}>
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              style={{
                background: 'var(--surface)',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              className="facility-card"
            >
              {/* Image */}
              <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden', background: 'var(--soft-blue)' }}>
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.5s' }}
                  className="facility-image"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'var(--accent)',
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 600,
                }}>
                  {facility.location}
                </div>
              </div>
              {/* Content */}
              <div style={{ padding: '20px 24px' }}>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '20px',
                  color: 'var(--text)',
                  fontWeight: 500,
                  marginBottom: '8px',
                }}>{facility.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floor Plan Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '64px' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '28px',
              color: 'var(--text)',
              fontWeight: 400,
            }}>
              Multi-Floor <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Infrastructure</span>
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '8px' }}>Explore our hospital layout across all floors</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {floorPlan.map((floor, index) => (
              <motion.div
                key={floor.floor}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  display: 'flex',
                  background: 'var(--surface)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
                className="floor-card"
              >
                {/* Floor Image */}
                <div style={{ position: 'relative', width: '140px', flexShrink: 0, background: 'var(--soft-blue)' }}>
                  <Image
                    src={floor.image}
                    alt={`${floor.floor} - Hospital Floor`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="140px"
                  />
                </div>
                {/* Floor Info */}
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <FiHome size={16} color="var(--accent)" />
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', color: 'var(--text)', fontWeight: 500 }}>{floor.floor}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {floor.areas.map((area) => (
                      <div key={area} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--text-secondary)' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            marginBottom: '64px',
            padding: '48px',
            background: 'var(--primary)',
            borderRadius: '24px',
          }}
        >
          {[
            { number: '3', label: 'Hospital Floors' },
            { number: '50+', label: 'Patient Beds' },
            { number: '12', label: 'NICU Beds' },
            { number: 'Level 3', label: 'NICU Rating' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '48px',
                color: 'var(--accent)',
                fontWeight: 400,
                lineHeight: 1,
              }}>{stat.number}</div>
              <div style={{
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                color: 'rgba(255,255,255,0.6)',
                marginTop: '8px',
              }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center' }}
        >
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '28px',
            color: 'var(--text)',
            fontWeight: 400,
            marginBottom: '12px',
          }}>
            See Our Facilities <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Firsthand</span>
          </h3>
          <p style={{
            color: 'var(--text-secondary)',
            marginBottom: '28px',
            maxWidth: '500px',
            margin: '0 auto 28px',
            fontSize: '15px',
            lineHeight: 1.7,
          }}>
            Schedule a hospital visit to explore our modern infrastructure and meet our caring team.
          </p>
          <a href={`tel:${phone}`} style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: 'var(--accent)',
            color: 'white',
            padding: '14px 32px',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.3s',
            boxShadow: '0 4px 16px rgba(232, 67, 147, 0.3)',
          }}>
            <FiPhone size={18} />
            Schedule a Visit: +91 {phone}
          </a>
        </motion.div>
      </div>

      <style>{`
        .facility-card:hover .facility-image {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  )
}
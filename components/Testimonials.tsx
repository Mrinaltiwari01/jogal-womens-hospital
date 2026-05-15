'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiInstagram, FiHeart } from 'react-icons/fi'

const phone = '8866117255'

// Using baby delivery stories from Instagram as testimonials
const testimonialStories = [
  {
    title: 'Happy Delivery Story',
    description: 'A beautiful journey of motherhood at Jogal Hospital - families sharing their joy',
    image: '/3D/Jogal Hospital photos/067A8166.JPG',
    url: 'https://www.instagram.com/reel/DV_BFE6idbn/',
    category: 'Baby Delivery'
  },
  {
    title: 'NICU Success Story',
    description: 'Premature baby graduates from our Level 3 NICU - a testament to our care',
    image: '/3D/Jogal Hospital photos/067A8227.JPG',
    url: 'https://www.instagram.com/reel/DVBLBO2DEI_/',
    category: 'NICU Care'
  },
  {
    title: 'New Beginnings',
    description: 'Celebrating new life with joyful families - the reason we do what we do',
    image: '/3D/Jogal Hospital photos/067A8319.JPG',
    url: 'https://www.instagram.com/reel/DU205PCDAC8/',
    category: 'Maternity'
  },
]

export default function Testimonials() {
  return (
    <section style={{ padding: '100px 5%', background: 'var(--surface)' }}>
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
            Patient Stories
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
            Real Experiences from <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Our Patients</span>
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
          }}>
            Every family&apos;s journey is unique. Hear from the families who trusted us with their care. Watch their stories on our Instagram.
          </p>
        </motion.div>

        {/* Patient Stories Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '64px',
        }}>
          {testimonialStories.map((story, index) => (
            <motion.a
              key={story.title}
              href={story.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                overflow: 'hidden',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'block',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                e.currentTarget.style.borderColor = 'var(--accent)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden', background: 'var(--soft-pink)' }}>
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                {/* Instagram Badge */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                  padding: '8px 12px',
                  borderRadius: '20px',
                }}>
                  <FiInstagram size={14} color="white" />
                  <span style={{ fontSize: '10px', color: 'white', fontWeight: 600 }}>Watch</span>
                </div>
              </div>
              {/* Content */}
              <div style={{ padding: '24px' }}>
                <div style={{
                  fontSize: '10px',
                  color: 'var(--accent)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}>
                  <FiHeart size={12} />
                  {story.category}
                </div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '20px',
                  color: 'var(--text)',
                  fontWeight: 500,
                  marginBottom: '8px',
                }}>
                  {story.title}
                </h3>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}>
                  {story.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            padding: '48px',
            background: 'var(--primary)',
            borderRadius: '24px',
          }}
        >
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '28px',
            color: 'white',
            fontWeight: 400,
            marginBottom: '12px',
          }}>
            Share Your Experience
          </h3>
          <p style={{
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '28px',
            maxWidth: '500px',
            margin: '0 auto 28px',
          }}>
            Had a positive experience at Jogal Women&apos;s Hospital? We&apos;d love to hear your story.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            <a href={`tel:${phone}`} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--accent)',
              color: 'white',
              padding: '14px 28px',
              borderRadius: '10px',
              fontSize: '12px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.3s',
              boxShadow: '0 4px 16px rgba(232, 67, 147, 0.3)',
            }}>
              Call: +91 {phone}
            </a>
            <a
              href="https://www.instagram.com/jogal_womens_hospital_bhuj"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                color: 'white',
                padding: '14px 28px',
                borderRadius: '10px',
                fontSize: '12px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.3s',
              }}
            >
              <FiInstagram size={16} />
              Follow Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
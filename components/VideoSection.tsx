'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiPlay, FiInstagram, FiArrowRight } from 'react-icons/fi'

const phone = '8866117255'

const videoCategories = [
  { id: 'all', label: 'All' },
  { id: 'deven', label: 'Dr. Deven Jogal' },
  { id: 'hetal', label: 'Dr. Hetal Jogal' },
  { id: 'vivek', label: 'Dr. Vivek Dholakiya' },
  { id: 'dipika', label: 'Dr. Dipika Thacker' },
  { id: 'babies', label: 'Baby Stories' },
]

const videos = [
  {
    id: 1,
    title: "Women's Health Tips",
    description: 'Expert advice on maintaining women\'s health at every stage of life',
    category: 'hetal',
    doctor: 'Dr. Hetal Jogal',
    thumbnail: '/assets/devensir-solo.jpg',
    url: 'https://www.instagram.com/reel/DXhTqp1jMx3/',
  },
  {
    id: 2,
    title: 'Antenatal Care Guide',
    description: 'Essential tips for a healthy pregnancy journey',
    category: 'hetal',
    doctor: 'Dr. Hetal Jogal',
    thumbnail: '/assets/devensir-solo.jpg',
    url: 'https://www.instagram.com/reel/DVikcALEe8r/',
  },
  {
    id: 3,
    title: 'Postnatal Recovery Tips',
    description: 'Expert guidance for a smooth postpartum recovery',
    category: 'hetal',
    doctor: 'Dr. Hetal Jogal',
    thumbnail: '/assets/devensir-solo.jpg',
    url: 'https://www.instagram.com/reel/DUbCYqRjE5G/',
  },
  {
    id: 4,
    title: 'Advanced Laparoscopic Surgery',
    description: 'Understanding minimally invasive gynecological procedures',
    category: 'deven',
    doctor: 'Dr. Deven Jogal',
    thumbnail: '/assets/devensir-solo.jpg',
    url: 'https://www.instagram.com/reel/DWJy6JLiMk2/',
  },
  {
    id: 5,
    title: 'Endometriosis Awareness',
    description: 'What every woman should know about endometriosis',
    category: 'deven',
    doctor: 'Dr. Deven Jogal',
    thumbnail: '/assets/devensir-solo.jpg',
    url: 'https://www.instagram.com/reel/DV85HdVCYI7/',
  },
  {
    id: 6,
    title: 'High-Risk Pregnancy Care',
    description: 'Expert management of complex pregnancies',
    category: 'deven',
    doctor: 'Dr. Deven Jogal',
    thumbnail: '/assets/devensir-solo.jpg',
    url: 'https://www.instagram.com/reel/DVvsYa9CWbK/',
  },
  {
    id: 7,
    title: 'Happy Delivery Story',
    description: 'A beautiful journey of motherhood at Jogal Hospital',
    category: 'babies',
    doctor: 'Our Team',
    thumbnail: '/assets/WhatsApp-Image-2024-04-16-at-12.14.22-724x1024.jpeg',
    url: 'https://www.instagram.com/reel/DV_BFE6idbn/',
  },
  {
    id: 8,
    title: 'Baby Welcome Moment',
    description: 'Celebrating new life with joyful families',
    category: 'babies',
    doctor: 'Our Team',
    thumbnail: '/assets/WhatsApp-Image-2024-04-16-at-12.14.22-724x1024.jpeg',
    url: 'https://www.instagram.com/reel/DU205PCDAC8/',
  },
  {
    id: 9,
    title: 'NICU Success Story',
    description: 'Premature baby graduates from our Level 3 NICU',
    category: 'babies',
    doctor: 'Our Team',
    thumbnail: '/assets/WhatsApp-Image-2024-04-16-at-12.14.22-724x1024.jpeg',
    url: 'https://www.instagram.com/reel/DVBLBO2DEI_/',
  },
  {
    id: 10,
    title: 'Newborn Care Basics',
    description: 'Essential tips for new parents from our pediatrician',
    category: 'vivek',
    doctor: 'Dr. Vivek Dholakiya',
    thumbnail: '/assets/devensir-solo.jpg',
    url: 'https://www.instagram.com/reel/DU_Ij2KiWb6/',
  },
  {
    id: 11,
    title: 'Pediatric Health & Immunisation',
    description: 'Keeping your child healthy with proper immunisation',
    category: 'vivek',
    doctor: 'Dr. Vivek Dholakiya',
    thumbnail: '/assets/devensir-solo.jpg',
    url: 'https://www.instagram.com/reel/DVgX7a7CeES/',
  },
  {
    id: 12,
    title: 'NICU Care Excellence',
    description: 'Inside our state-of-the-art Level 3 NICU facility',
    category: 'vivek',
    doctor: 'Dr. Vivek Dholakiya',
    thumbnail: '/assets/devensir-solo.jpg',
    url: 'https://www.instagram.com/reel/DVoLC3tEo_V/',
  },
  {
    id: 13,
    title: 'IVF Journey Explained',
    description: 'Understanding the IVF process step by step',
    category: 'dipika',
    doctor: 'Dr. Dipika Thacker',
    thumbnail: '/assets/dr-dipika-solo-768x1024.jpeg',
    url: 'https://www.instagram.com/reel/DVi5MjnDKJg/',
  },
  {
    id: 14,
    title: 'Fertility Treatment Options',
    description: 'Exploring different fertility treatment possibilities',
    category: 'dipika',
    doctor: 'Dr. Dipika Thacker',
    thumbnail: '/assets/dr-dipika-solo-768x1024.jpeg',
    url: 'https://www.instagram.com/reel/DU58T8QDEmU/',
  },
  {
    id: 15,
    title: 'IUI Treatment Guide',
    description: 'What to expect during IUI treatment',
    category: 'dipika',
    doctor: 'Dr. Dipika Thacker',
    thumbnail: '/assets/dr-dipika-solo-768x1024.jpeg',
    url: 'https://www.instagram.com/reel/DTxutVWjN1e/',
  },
]

export default function VideoSection() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredVideos = activeCategory === 'all'
    ? videos
    : videos.filter(v => v.category === activeCategory)

  return (
    <section id="videos" style={{ padding: '100px 5%', background: 'var(--surface)' }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.02,
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}
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
            Videos & Patient Stories
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
            Expert Guidance & <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Patient Stories</span>
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
          }}>
            Watch videos from our doctors and hear heartwarming stories from families who trusted us with their care.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          {videoCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '10px 20px',
                background: activeCategory === cat.id ? 'var(--accent)' : 'var(--surface)',
                color: activeCategory === cat.id ? 'white' : 'var(--text-secondary)',
                border: '1px solid',
                borderColor: activeCategory === cat.id ? 'var(--accent)' : 'var(--border)',
                borderRadius: '24px',
                fontSize: '12px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat.id) {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.color = 'var(--accent)'
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat.id) {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text-secondary)'
                }
              }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Video Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {filteredVideos.map((video, index) => (
            <motion.a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
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
              {/* Video Thumbnail */}
              <div style={{
                position: 'relative',
                aspectRatio: '16/10',
                overflow: 'hidden',
                background: 'var(--soft-blue)',
              }}>
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Play Button Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(30, 58, 95, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.3s',
                }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                    transition: 'transform 0.3s',
                  }}>
                    <FiPlay size={24} color="var(--accent)" style={{ marginLeft: '3px' }} />
                  </div>
                </div>
                {/* Instagram Badge */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                  padding: '6px 10px',
                  borderRadius: '16px',
                }}>
                  <FiInstagram size={12} color="white" />
                  <span style={{ fontSize: '10px', color: 'white', fontWeight: 600 }}>Reel</span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '16px' }}>
                <div style={{
                  fontSize: '10px',
                  color: 'var(--accent)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '6px',
                }}>
                  {video.doctor}
                </div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '16px',
                  color: 'var(--text)',
                  fontWeight: 500,
                  marginBottom: '6px',
                  lineHeight: 1.3,
                }}>
                  {video.title}
                </h3>
                <p style={{
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                }}>
                  {video.description}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginTop: '56px',
            textAlign: 'center',
            padding: '48px',
            background: 'var(--surface)',
            borderRadius: '24px',
            border: '1px solid var(--border)',
          }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
            marginBottom: '20px',
          }}>
            <FiInstagram size={28} color="white" />
          </div>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '28px',
            color: 'var(--text)',
            fontWeight: 400,
            marginBottom: '8px',
          }}>
            Follow Us on Instagram
          </h3>
          <p style={{
            color: 'var(--text-secondary)',
            marginBottom: '24px',
            maxWidth: '500px',
            margin: '0 auto 24px',
          }}>
            Stay updated with health tips, hospital updates, and patient stories on our Instagram page.
          </p>
          <a
            href="https://www.instagram.com/jogal_womens_hospital_bhuj"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
              color: 'white',
              padding: '14px 32px',
              borderRadius: '10px',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.3s',
              boxShadow: '0 4px 16px rgba(220, 39, 67, 0.3)',
            }}
          >
            <FiInstagram size={18} />
            Follow @jogal_womens_hospital_bhuj
            <FiArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
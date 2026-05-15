'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn, FiInstagram } from 'react-icons/fi'

const phone = '8866117255'

const galleryCategories = [
  { id: 'all', label: 'All Photos' },
  { id: 'exterior', label: 'Exterior' },
  { id: 'reception', label: 'Reception' },
  { id: 'rooms', label: 'Patient Rooms' },
  { id: 'nicu', label: 'NICU' },
  { id: 'opd', label: 'OPD' }
]

const galleryImages: Record<string, Array<{ src: string; alt: string; caption: string; category: string }>> = {
  all: [
    { src: '/3D/Exterior/Exterior Building Facade.png', alt: 'Jogal Women Hospital Building - Bhuj', caption: 'Hospital Exterior', category: 'Exterior' },
    { src: '/3D/Exterior/Jogal Exterior Passage Area.png', alt: 'Jogal Women Hospital Passage Area', caption: 'Hospital Passage', category: 'Exterior' },
    { src: '/3D/Interior/Ground Floor/RECEPTION AREA(1).png', alt: 'Jogal Women Hospital Reception Area', caption: 'Reception Area', category: 'Reception' },
    { src: '/3D/Interior/Ground Floor/RECEPTION AREA(2).png', alt: 'Jogal Women Hospital Reception', caption: 'Reception Desk', category: 'Reception' },
    { src: '/3D/Interior/Ground Floor/RECEPTION AREA(5).png', alt: 'Hospital Reception', caption: 'Reception', category: 'Reception' },
    { src: '/3D/Interior/Ground Floor/OPD-1.png', alt: 'OPD Consultation Room', caption: 'OPD Room 1', category: 'OPD' },
    { src: '/3D/Interior/Ground Floor/OPD-1(1).png', alt: 'OPD Consultation', caption: 'OPD Consultation', category: 'OPD' },
    { src: '/3D/Interior/Ground Floor/OPD-2(1).png', alt: 'OPD Room 2', caption: 'OPD Room 2', category: 'OPD' },
    { src: '/3D/Interior/Ground Floor/OPD-2(2).png', alt: 'OPD Interior', caption: 'OPD Interior', category: 'OPD' },
    { src: '/3D/Interior/Ground Floor/OPD-3(1).png', alt: 'OPD Room 3', caption: 'OPD Room 3', category: 'OPD' },
    { src: '/3D/Interior/Ground Floor/OPD-3(2).png', alt: 'OPD Area', caption: 'OPD Area', category: 'OPD' },
    { src: '/3D/Interior/1st Floor/suite room-2(1).png', alt: 'Suite Room - First Floor', caption: 'Suite Room', category: 'Rooms' },
    { src: '/3D/Interior/1st Floor/suite room-2(2).png', alt: 'Hospital Suite Room', caption: 'Suite Room', category: 'Rooms' },
    { src: '/3D/Interior/1st Floor/suite room-2(4).png', alt: 'Patient Suite', caption: 'Patient Suite', category: 'Rooms' },
    { src: '/3D/Interior/1st Floor/suite room-2(5).png', alt: 'Hospital Suite', caption: 'Hospital Suite', category: 'Rooms' },
    { src: '/3D/Interior/1st Floor/suite room-2(7).png', alt: 'First Floor Suite', caption: 'First Floor Suite', category: 'Rooms' },
    { src: '/3D/Interior/1st Floor/MATERNITY ROOM1.png', alt: 'Maternity Room', caption: 'Maternity Room', category: 'Rooms' },
    { src: '/3D/Interior/1st Floor/MATERNITY ROOM1 20-11-2025 18_20_36_272.png', alt: 'Maternity Care Room', caption: 'Maternity Care Room', category: 'Rooms' },
    { src: '/3D/Interior/1st Floor/MATERNITY ROOM2.png', alt: 'Maternity Room View 2', caption: 'Maternity Room', category: 'Rooms' },
    { src: '/3D/Interior/1st Floor/MATERNITY ROOM3.png', alt: 'Maternity Suite', caption: 'Maternity Suite', category: 'Rooms' },
    { src: '/3D/Interior/1st Floor/MATERNITY ROOM4.png', alt: 'Maternity Care Suite', caption: 'Maternity Care Suite', category: 'Rooms' },
    { src: '/3D/Interior/2nd Floor/NICU/NICU VIEW 4 copy.png', alt: 'Level 3 NICU - 12 Bed Unit', caption: 'Level 3 NICU', category: 'NICU' },
    { src: '/3D/Interior/2nd Floor/NICU/NICU VIEW 5 copy.png', alt: 'Neonatal Intensive Care Unit', caption: 'NICU View', category: 'NICU' },
    { src: '/3D/Interior/2nd Floor/Camera 01_001.png', alt: 'Hospital Floor - Second Floor', caption: 'Second Floor', category: 'NICU' },
    { src: '/3D/Interior/2nd Floor/Camera 02_001.png', alt: 'Hospital Floor View', caption: 'Floor View', category: 'NICU' },
    { src: '/3D/Interior/2nd Floor/Camera 03_001.png', alt: 'Hospital Corridor', caption: 'Hospital Corridor', category: 'NICU' },
    { src: '/3D/Interior/LIFT/Lift 01.png', alt: 'Hospital Elevator - Lift Facility', caption: 'Hospital Lift', category: 'Facilities' },
    { src: '/3D/Interior/Ground Floor/temple.png', alt: 'Hospital Temple Area', caption: 'Temple Area', category: 'Facilities' },
  ],
  exterior: [
    { src: '/3D/Exterior/Exterior Building Facade.png', alt: 'Jogal Women Hospital Building - Bhuj', caption: 'Hospital Building', category: 'Exterior' },
    { src: '/3D/Exterior/Jogal Exterior Passage Area.png', alt: 'Hospital Passage Area', caption: 'Passage Area', category: 'Exterior' },
  ],
  reception: [
    { src: '/3D/Interior/Ground Floor/RECEPTION AREA(1).png', alt: 'Hospital Reception Area', caption: 'Reception Area', category: 'Reception' },
    { src: '/3D/Interior/Ground Floor/RECEPTION AREA(2).png', alt: 'Hospital Reception', caption: 'Reception Desk', category: 'Reception' },
    { src: '/3D/Interior/Ground Floor/RECEPTION AREA(5).png', alt: 'Reception', caption: 'Reception', category: 'Reception' },
    { src: '/3D/Interior/Ground Floor/temple.png', alt: 'Hospital Temple', caption: 'Temple Area', category: 'Reception' },
  ],
  rooms: [
    { src: '/3D/Interior/1st Floor/suite room-2(1).png', alt: 'Suite Room', caption: 'Suite Room', category: 'Rooms' },
    { src: '/3D/Interior/1st Floor/suite room-2(2).png', alt: 'Hospital Suite', caption: 'Hospital Suite', category: 'Rooms' },
    { src: '/3D/Interior/1st Floor/suite room-2(4).png', alt: 'Patient Suite', caption: 'Patient Suite', category: 'Rooms' },
    { src: '/3D/Interior/1st Floor/suite room-2(5).png', alt: 'Suite', caption: 'Suite', category: 'Rooms' },
    { src: '/3D/Interior/1st Floor/suite room-2(7).png', alt: 'First Floor Suite', caption: 'First Floor Suite', category: 'Rooms' },
    { src: '/3D/Interior/1st Floor/MATERNITY ROOM1.png', alt: 'Maternity Room', caption: 'Maternity Room', category: 'Rooms' },
    { src: '/3D/Interior/1st Floor/MATERNITY ROOM1 20-11-2025 18_20_36_272.png', alt: 'Maternity Care', caption: 'Maternity Care', category: 'Rooms' },
    { src: '/3D/Interior/1st Floor/MATERNITY ROOM2.png', alt: 'Maternity Room', caption: 'Maternity Room', category: 'Rooms' },
    { src: '/3D/Interior/1st Floor/MATERNITY ROOM3.png', alt: 'Maternity Suite', caption: 'Maternity Suite', category: 'Rooms' },
    { src: '/3D/Interior/1st Floor/MATERNITY ROOM4.png', alt: 'Maternity Care Suite', caption: 'Maternity Care Suite', category: 'Rooms' },
  ],
  nicu: [
    { src: '/3D/Interior/2nd Floor/NICU/NICU VIEW 4 copy.png', alt: 'Level 3 NICU - 12 Bed', caption: 'Level 3 NICU', category: 'NICU' },
    { src: '/3D/Interior/2nd Floor/NICU/NICU VIEW 5 copy.png', alt: 'NICU', caption: 'NICU View', category: 'NICU' },
    { src: '/3D/Interior/2nd Floor/Camera 01_001.png', alt: 'Hospital Floor', caption: 'Second Floor', category: 'NICU' },
    { src: '/3D/Interior/2nd Floor/Camera 02_001.png', alt: 'Floor View', caption: 'Floor View', category: 'NICU' },
    { src: '/3D/Interior/2nd Floor/Camera 03_001.png', alt: 'Corridor', caption: 'Hospital Corridor', category: 'NICU' },
  ],
  opd: [
    { src: '/3D/Interior/Ground Floor/OPD-1.png', alt: 'OPD Room 1', caption: 'OPD Room 1', category: 'OPD' },
    { src: '/3D/Interior/Ground Floor/OPD-1(1).png', alt: 'OPD Consultation', caption: 'OPD Consultation', category: 'OPD' },
    { src: '/3D/Interior/Ground Floor/OPD-1(2).png', alt: 'OPD Room', caption: 'OPD Room', category: 'OPD' },
    { src: '/3D/Interior/Ground Floor/OPD-2(1).png', alt: 'OPD Room 2', caption: 'OPD Room 2', category: 'OPD' },
    { src: '/3D/Interior/Ground Floor/OPD-2(2).png', alt: 'OPD Interior', caption: 'OPD Interior', category: 'OPD' },
    { src: '/3D/Interior/Ground Floor/OPD-3(1).png', alt: 'OPD Room 3', caption: 'OPD Room 3', category: 'OPD' },
    { src: '/3D/Interior/Ground Floor/OPD-3(2).png', alt: 'OPD Area', caption: 'OPD Area', category: 'OPD' },
  ]
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const currentImages = galleryImages[activeCategory] || []

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length)
  }

  return (
    <section id="gallery" style={{ padding: '100px 5%', background: 'var(--background)' }}>
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
            Our Gallery
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
            A Look Inside <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Jogal</span> Women&apos;s Hospital
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
          }}>
            Explore our modern facilities designed for comfort, care, and advanced medical treatment.
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
            marginBottom: '48px',
          }}
        >
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '12px 24px',
                background: activeCategory === cat.id ? 'var(--primary)' : 'var(--surface)',
                color: activeCategory === cat.id ? 'white' : 'var(--text-secondary)',
                border: '1px solid',
                borderColor: activeCategory === cat.id ? 'var(--primary)' : 'var(--border)',
                borderRadius: '12px',
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

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {currentImages.map((image, index) => (
              <motion.div
                key={image.src + index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  aspectRatio: '4/3',
                  background: 'var(--soft-blue)',
                  border: '1px solid var(--border)',
                }}
                onClick={() => openLightbox(index)}
                className="gallery-card"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  className="gallery-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(30, 58, 95, 0.9) 0%, rgba(30, 58, 95, 0.3) 50%, transparent 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                }} className="gallery-overlay" />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(30, 58, 95, 0.4)',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                }} className="zoom-icon">
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 20px rgba(232, 67, 147, 0.4)',
                  }}>
                    <FiZoomIn size={20} color="white" />
                  </div>
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '20px',
                  transform: 'translateY(10px)',
                  opacity: 0,
                  transition: 'all 0.3s',
                }} className="gallery-info">
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '18px',
                    color: 'white',
                    marginBottom: '4px',
                  }}>{image.caption}</div>
                  <div style={{
                    fontSize: '10px',
                    color: 'var(--accent-light)',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                  }}>{image.category}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '64px' }}
        >
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '14px' }}>
            Want to see our hospital in person? Schedule a visit.
          </p>
          <a href={`tel:${phone}`} style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'var(--accent)',
            color: 'white',
            padding: '14px 32px',
            borderRadius: '10px',
            fontSize: '13px',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.3s',
            boxShadow: '0 4px 16px rgba(232, 67, 147, 0.3)',
          }}>
            Schedule a Visit
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1000,
              background: 'rgba(0, 0, 0, 0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'var(--surface)',
                border: 'none',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              <FiX size={24} color="var(--text)" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              style={{
                position: 'absolute',
                left: '24px',
                background: 'var(--surface)',
                border: 'none',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              <FiChevronLeft size={32} color="var(--text)" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              style={{
                position: 'absolute',
                right: '24px',
                background: 'var(--surface)',
                border: 'none',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              <FiChevronRight size={32} color="var(--text)" />
            </button>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '90vw', maxHeight: '85vh', position: 'relative' }}
            >
              <div style={{ position: 'relative', width: '70vw', height: '70vh' }}>
                <Image
                  src={currentImages[currentImageIndex]?.src}
                  alt={currentImages[currentImageIndex]?.alt}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div style={{ textAlign: 'center', marginTop: '24px' }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '24px',
                  color: 'white',
                  marginBottom: '8px',
                }}>
                  {currentImages[currentImageIndex]?.caption}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: 'var(--accent-light)',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}>
                  {currentImages[currentImageIndex]?.category}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-card:hover .gallery-image {
          transform: scale(1.08);
        }
        .gallery-card:hover .gallery-overlay {
          opacity: 1;
        }
        .gallery-card:hover .gallery-info {
          transform: translateY(0);
          opacity: 1;
        }
        .gallery-card:hover .zoom-icon {
          opacity: 1;
        }
      `}</style>
    </section>
  )
}
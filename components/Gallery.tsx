'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from 'react-icons/fi'

const phone = '8866117255'

const galleryImages = [
  { src: '/assets/JWH_Logo_final_new.png', alt: 'Jogal Women Hospital Logo', caption: 'Hospital Logo' },
  { src: '/assets/devensir-solo.jpg', alt: 'Dr. Deven Jogal', caption: 'Dr. Deven Jogal' },
  { src: '/assets/dr-dipika-solo-768x1024.jpeg', alt: 'Dr. Dipika Thacker', caption: 'Dr. Dipika Thacker' },
  { src: '/assets/WhatsApp-Image-2024-04-16-at-12.14.22-724x1024.jpeg', alt: 'Hospital Team', caption: 'Our Team' },
  { src: '/assets/footer-logo.png', alt: 'Footer Logo', caption: 'Hospital Logo' },
  { src: '/assets/GEE-logo-01-1-1.png', alt: 'GEE Logo', caption: 'Partner Logo' },
]

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
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
            Meet Our <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Team</span>
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
          }}>
            Our experienced team of doctors dedicated to providing the best care for women and children.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {galleryImages.map((image, index) => (
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
                  src={galleryImages[currentImageIndex]?.src}
                  alt={galleryImages[currentImageIndex]?.alt}
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
                  {galleryImages[currentImageIndex]?.caption}
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
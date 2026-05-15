'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiPhone, FiMessageCircle, FiArrowRight, FiInstagram } from 'react-icons/fi'

const phone = '8866117255'

const doctors = [
  {
    name: 'Dr. Deven Jogal',
    designation: 'Director',
    specialty: 'Gynae Laparoscopy & Endometriosis Surgeon',
    expertise: ['Laparoscopy', 'Endometriosis', 'High-Risk Obstetrics', 'Infertility & IVF Surgery', 'Hysteroscopy'],
    description: 'Advanced Gynec Laparoscopic Surgeon specializing in complex endometriosis procedures and fertility-enhancing surgeries.',
    image: '/assets/Deven jogal.jpeg',
    instagramReels: 'https://www.instagram.com/reel/DWJy6JLiMk2/',
    available: true,
  },
  {
    name: 'Dr. Hetal Jogal',
    designation: "Women's Health",
    specialty: 'Physiotherapist | Nutrition & Holistic Health Coach',
    expertise: ["Women's Wellness", 'Physiotherapy', 'Antenatal Care', 'Postnatal Care', 'Nutrition & Holistic Health'],
    description: "Dedicated to women's wellness through physiotherapy, nutrition guidance, and holistic health practices.",
    image: '/assets/Hetal jogal.jpeg',
    instagramReels: 'https://www.instagram.com/reel/DXhTqp1jMx3/',
    available: true,
  },
  {
    name: 'Dr. Dipika Thacker',
    designation: 'Infertility & IVF Specialist',
    specialty: 'IVF | IUI | ICSI | Fertility Counselling',
    expertise: ['Infertility', 'IVF', 'IUI', 'ICSI', 'Fertility Counselling', 'Reproductive Care'],
    description: 'Expert in comprehensive fertility treatments including IVF, ICSI, and personalized fertility counselling.',
    image: '/assets/Deepika thacker .jpeg',
    instagramReels: 'https://www.instagram.com/reel/DVi5MjnDKJg/',
    available: true,
  },
  {
    name: 'Dr. Vivek Dholakiya',
    designation: 'Pediatrician & Neonatologist',
    specialty: 'Level 3 NICU | Newborn Care | Pediatric Emergency',
    expertise: ['Pediatrics', 'Neonatology', 'Level 3 NICU', 'Newborn Care', 'Pediatric Emergency', 'Immunisation'],
    description: 'Specialist in newborn and pediatric care with expertise in Level 3 NICU management and pediatric emergencies.',
    image: '/assets/Vivek dholakiya.jpeg',
    instagramReels: 'https://www.instagram.com/reel/DU_Ij2KiWb6/',
    available: true,
  },
]

export default function Doctors() {
  return (
    <section id="doctors" style={{ padding: '100px 5%', background: 'var(--background)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 64px' }}
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
            Our Medical Experts
            <span style={{ width: '24px', height: '2px', background: 'var(--accent)' }} />
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(34px, 4vw, 52px)',
            fontWeight: 400,
            color: 'var(--text)',
            lineHeight: 1.15,
            marginBottom: '16px',
          }}>
            Meet Our <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Specialist</span> Team
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
          }}>
            Experienced specialists dedicated to providing personalized, compassionate care for women and children across Kutch.
          </p>
        </motion.div>

        {/* Doctor Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '28px',
        }}>
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                e.currentTarget.style.borderColor = 'var(--accent)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
              className="doctor-card"
            >
              {/* Image Container */}
              <div style={{
                position: 'relative',
                height: '280px',
                overflow: 'hidden',
                background: 'var(--soft-pink)',
              }}>
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'top',
                    transition: 'transform 0.5s ease',
                  }}
                  className="doctor-image"
                />
                {/* Gradient Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(30, 58, 95, 0.3) 0%, transparent 60%)',
                }} />

                {/* Designation Badge */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'var(--surface)',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  boxShadow: 'var(--shadow-md)',
                }}>
                  <span style={{
                    fontSize: '10px',
                    color: 'var(--primary)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}>
                    {doctor.designation}
                  </span>
                </div>

                {/* Instagram Reel Button */}
                {doctor.instagramReels && (
                  <a
                    href={doctor.instagramReels}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                      padding: '8px 12px',
                      borderRadius: '20px',
                      textDecoration: 'none',
                      boxShadow: 'var(--shadow-md)',
                    }}
                  >
                    <FiInstagram size={14} color="white" />
                    <span style={{ fontSize: '10px', color: 'white', fontWeight: 600 }}>Watch</span>
                  </a>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '22px',
                  color: 'var(--text)',
                  fontWeight: 500,
                  marginBottom: '4px',
                  lineHeight: 1.3,
                }}>
                  {doctor.name}
                </h3>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--accent)',
                  fontWeight: 500,
                  marginBottom: '12px',
                }}>
                  {doctor.specialty}
                </p>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '16px',
                }}>
                  {doctor.description}
                </p>

                {/* Expertise Tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  marginBottom: '20px',
                }}>
                  {doctor.expertise.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: 'var(--soft-pink)',
                        color: 'var(--accent)',
                        padding: '4px 10px',
                        borderRadius: '12px',
                        fontSize: '10px',
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                  {doctor.expertise.length > 3 && (
                    <span
                      style={{
                        background: 'var(--soft-blue)',
                        color: 'var(--primary)',
                        padding: '4px 10px',
                        borderRadius: '12px',
                        fontSize: '10px',
                        fontWeight: 500,
                      }}
                    >
                      +{doctor.expertise.length - 3}
                    </span>
                  )}
                </div>

                {/* CTAs */}
                <div style={{
                  display: 'flex',
                  gap: '10px',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border)',
                }}>
                  <a
                    href={`tel:${phone}`}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      background: 'var(--accent)',
                      color: 'white',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                  >
                    <FiPhone size={14} />
                    Book
                  </a>
                  <a
                    href="https://wa.me/918866117255"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      background: '#25D366',
                      color: 'white',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                  >
                    <FiMessageCircle size={14} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginTop: '48px',
          }}
        >
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Need an appointment with our specialists?
          </p>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'var(--primary)',
              color: 'white',
              padding: '14px 32px',
              borderRadius: '10px',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.3s',
            }}
          >
            Request Appointment
            <FiArrowRight size={16} />
          </a>
        </motion.div>
      </div>

      <style>{`
        .doctor-card:hover .doctor-image {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  )
}
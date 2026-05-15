'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiPhone, FiCheckCircle, FiArrowRight } from 'react-icons/fi'

const phone = '8866117255'

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 5%', background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '80px',
          alignItems: 'center'
        }}>
          {/* Left - Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            {/* Main Card with Real Hospital Interior */}
            <div style={{
              background: 'var(--primary)',
              padding: '48px',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, var(--accent), var(--accent-light))',
              }} />

              {/* Real Hospital Interior Image */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                width: '45%',
                overflow: 'hidden',
              }}>
                <Image
                  src="/3D/Interior/Ground Floor/RECEPTION AREA(1).png"
                  alt="Jogal Women's Hospital Reception"
                  fill
                  style={{ objectFit: 'cover', opacity: 0.4 }}
                />
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '32px',
                  fontWeight: 400,
                  color: 'white',
                  marginBottom: '16px',
                  lineHeight: 1.2,
                }}>
                  Your Health,<br />
                  <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Our Priority</span>
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '14px',
                  lineHeight: 1.8,
                  marginBottom: '32px',
                  maxWidth: '85%',
                }}>
                  A regional mother-baby-women&apos;s specialty hospital for Kutch, offering advanced maternity care, Level 3 NICU, fertility services, and comprehensive women&apos;s healthcare under one roof.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    'Level 3 NICU with 12-bed capacity',
                    'IVF & Fertility Center',
                    'Advanced Laparoscopic Surgery',
                    '24/7 Emergency Care',
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      color: 'rgba(255,255,255,0.85)',
                      fontSize: '13px',
                    }}>
                      <FiCheckCircle size={16} color="var(--accent)" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Doctor Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '12px',
              marginTop: '24px',
            }}>
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                padding: '16px 12px',
                borderRadius: '16px',
                textAlign: 'center',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-md)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto 10px',
                  position: 'relative',
                  border: '2px solid var(--soft-pink)',
                }}>
                  <Image
                    src="/setup/Deven jogal.jpeg"
                    alt="Dr. Deven Jogal"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'var(--text)',
                  marginBottom: '2px',
                }}>
                  Dr. Deven Jogal
                </div>
                <div style={{
                  color: 'var(--accent)',
                  fontSize: '9px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontWeight: 600,
                }}>
                  Director
                </div>
              </div>
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                padding: '16px 12px',
                borderRadius: '16px',
                textAlign: 'center',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-md)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto 10px',
                  position: 'relative',
                  border: '2px solid var(--soft-pink)',
                }}>
                  <Image
                    src="/setup/Hetal jogal.jpeg"
                    alt="Dr. Hetal Jogal"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'var(--text)',
                  marginBottom: '2px',
                }}>
                  Dr. Hetal Jogal
                </div>
                <div style={{
                  color: 'var(--accent)',
                  fontSize: '9px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontWeight: 600,
                }}>
                  Physiotherapist
                </div>
              </div>
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                padding: '16px 12px',
                borderRadius: '16px',
                textAlign: 'center',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-md)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto 10px',
                  position: 'relative',
                  border: '2px solid var(--soft-pink)',
                }}>
                  <Image
                    src="/setup/Deepika thacker .jpeg"
                    alt="Dr. Dipika Thacker"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'var(--text)',
                  marginBottom: '2px',
                }}>
                  Dr. Dipika Thacker
                </div>
                <div style={{
                  color: 'var(--accent)',
                  fontSize: '9px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontWeight: 600,
                }}>
                  IVF Specialist
                </div>
              </div>
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                padding: '16px 12px',
                borderRadius: '16px',
                textAlign: 'center',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-md)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto 10px',
                  position: 'relative',
                  border: '2px solid var(--soft-pink)',
                }}>
                  <Image
                    src="/setup/Vivek dholakiya.jpeg"
                    alt="Dr. Vivek Dholakiya"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'var(--text)',
                  marginBottom: '2px',
                }}>
                  Dr. Vivek Dholakiya
                </div>
                <div style={{
                  color: 'var(--accent)',
                  fontSize: '9px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontWeight: 600,
                }}>
                  Neonatologist
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
              About Our Hospital
            </div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(34px, 4vw, 48px)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: 'var(--text)',
              marginBottom: '24px',
            }}>
              Compassionate Care,<br />
              <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Exceptional Results</span>
            </h2>

            <p style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              lineHeight: 1.9,
              marginBottom: '20px',
            }}>
              Jogal Women&apos;s Hospital has been a trusted name in women&apos;s healthcare in Bhuj and across Kutch for over two decades. We are dedicated to providing personalized, high-quality care for women at every stage of life.
            </p>

            <p style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              lineHeight: 1.9,
              marginBottom: '24px',
            }}>
              Our hospital serves as a one-stop destination for obstetric care, fertility treatments, gynecological services, Level 3 NICU for newborns, and women&apos;s wellness programs. With experienced doctors and modern facilities, we ensure the best possible outcomes for every patient.
            </p>

            {/* Specialties Quick Links */}
            <div style={{
              marginBottom: '32px',
              padding: '24px',
              background: 'var(--surface)',
              borderRadius: '16px',
              border: '1px solid var(--border)',
            }}>
              <h4 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '18px',
                color: 'var(--text)',
                marginBottom: '16px',
                fontWeight: 500,
              }}>
                Our Core Specialties
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Obstetrics', 'IVF & Fertility', 'NICU', 'Gynecology', 'Laparoscopic Surgery', 'Women\'s Wellness'].map(spec => (
                  <span key={spec} style={{
                    padding: '6px 14px',
                    background: 'var(--soft-pink)',
                    borderRadius: '20px',
                    fontSize: '12px',
                    color: 'var(--accent)',
                    fontWeight: 500,
                  }}>
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a href={`tel:${phone}`} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--accent)',
                color: 'white',
                padding: '14px 28px',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '10px',
                transition: 'all 0.3s',
                boxShadow: '0 4px 16px rgba(232, 67, 147, 0.3)',
              }}>
                <FiPhone size={16} />
                Book Appointment
              </a>
              <Link href="#services" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--surface)',
                color: 'var(--text)',
                padding: '14px 28px',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                transition: 'all 0.3s',
              }}>
                View Services
                <FiArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
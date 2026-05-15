'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiMessageCircle, FiNavigation } from 'react-icons/fi'

const phone = '8866117255'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    service: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      alert('Thank you for your message! We will contact you shortly.')
      setFormData({ name: '', phone: '', email: '', message: '', service: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section id="contact" style={{ padding: '100px 5%', background: 'var(--background)' }}>
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
            Contact Us
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
            Book Your <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Appointment</span>
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
          }}>
            Ready to take the first step? Contact us today for consultations, appointments, or any queries.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '48px',
          alignItems: 'start'
        }}>
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '24px',
              color: 'var(--text)',
              fontWeight: 500,
              marginBottom: '24px'
            }}>
              Get In Touch
            </h3>

            {/* Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {/* Address */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                padding: '20px 0',
                borderBottom: '1px solid var(--border)',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'var(--soft-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <FiMapPin style={{ color: 'var(--primary)' }} size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '6px', fontWeight: 600 }}>Address</div>
                  <div style={{ fontSize: '14px', color: 'var(--text)', fontWeight: 400, lineHeight: 1.6 }}>
                    Shiv Nagar, Besides KSKV Kachchh University,<br />
                    Opp. Chanakya Academy, Mundra Road,<br />
                    Bhuj - Kutch, Gujarat, India
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                padding: '20px 0',
                borderBottom: '1px solid var(--border)',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'var(--soft-pink)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <FiPhone style={{ color: 'var(--accent)' }} size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '6px', fontWeight: 600 }}>Phone</div>
                  <a href={`tel:${phone}`} style={{ fontSize: '18px', color: 'var(--text)', fontWeight: 600, textDecoration: 'none' }}>+91 {phone}</a>
                </div>
              </div>

              {/* Email */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                padding: '20px 0',
                borderBottom: '1px solid var(--border)',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'var(--soft-lavender)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <FiMail style={{ color: '#8250c0' }} size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '6px', fontWeight: 600 }}>Email</div>
                  <a href="mailto:admin@jogal.com" style={{ fontSize: '14px', color: 'var(--text)', fontWeight: 400, textDecoration: 'none' }}>admin@jogal.com</a>
                </div>
              </div>

              {/* Hours */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                padding: '20px 0',
                borderBottom: '1px solid var(--border)',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'var(--soft-pink)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <FiClock style={{ color: 'var(--accent)' }} size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '6px', fontWeight: 600 }}>Hours</div>
                  <div style={{ fontSize: '14px', color: 'var(--text)', fontWeight: 600 }}>24/7 Emergency Care</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>OPD: 9:00 AM - 8:00 PM</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '32px' }}>
              <a href={`tel:${phone}`} style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                background: 'var(--accent)',
                color: 'white',
                padding: '14px',
                borderRadius: '10px',
                fontSize: '13px',
                textTransform: 'uppercase',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.3s',
                boxShadow: '0 4px 12px rgba(232, 67, 147, 0.3)',
              }}>
                <FiPhone size={16} />
                Call Now
              </a>
              <a href="https://wa.me/918866117255" target="_blank" rel="noopener noreferrer" style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                background: '#25D366',
                color: 'white',
                padding: '14px',
                borderRadius: '10px',
                fontSize: '13px',
                textTransform: 'uppercase',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.3s',
                boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
              }}>
                <FiMessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>

            {/* Map Section */}
            <div style={{ marginTop: '32px' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                background: 'var(--surface)',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
              }}>
                {/* Hospital Exterior Image */}
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <Image
                    src="/3D/Exterior/Exterior Building Facade.png"
                    alt="Jogal Women's Hospital - Bhuj"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '8px',
                    background: 'rgba(30, 58, 95, 0.9)',
                    padding: '4px 10px',
                    borderRadius: '8px',
                  }}>
                    <span style={{ fontSize: '10px', color: 'white', fontWeight: 500 }}>Jogal Women&apos;s Hospital</span>
                  </div>
                </div>
                {/* Map */}
                <div style={{ position: 'relative', minHeight: '150px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.5!2d69.6!3d23.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEyJzAwLjAiTiA2OcKwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                    style={{ width: '100%', height: '100%', minHeight: '150px', border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Jogal Women's Hospital Location"
                  />
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Shiv+Nagar,+Mundra+Road,+Bhuj,+Kutch"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '12px',
                  padding: '12px',
                  background: 'var(--primary)',
                  color: 'white',
                  borderRadius: '10px',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                }}
              >
                <FiNavigation size={14} />
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'var(--surface)',
              padding: '40px',
              borderRadius: '20px',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '28px',
              color: 'var(--text)',
              marginBottom: '8px',
              fontWeight: 400
            }}>
              Request Appointment
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '28px' }}>
              Fill in the form below and we&apos;ll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 500 }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      background: 'var(--background)',
                      border: '1px solid var(--border)',
                      borderRadius: '10px',
                      fontSize: '14px',
                      color: 'var(--text)',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                    }}
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 500 }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      background: 'var(--background)',
                      border: '1px solid var(--border)',
                      borderRadius: '10px',
                      fontSize: '14px',
                      color: 'var(--text)',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                    }}
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 500 }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      background: 'var(--background)',
                      border: '1px solid var(--border)',
                      borderRadius: '10px',
                      fontSize: '14px',
                      color: 'var(--text)',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                    }}
                    placeholder="Your email (optional)"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 500 }}>
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      background: 'var(--background)',
                      border: '1px solid var(--border)',
                      borderRadius: '10px',
                      fontSize: '14px',
                      color: 'var(--text)',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                    }}
                  >
                    <option value="">Select a service</option>
                    <option value="obstetrics">Obstetrics & Maternity</option>
                    <option value="ivf">IVF & Fertility</option>
                    <option value="nicu">Pediatrics & NICU</option>
                    <option value="gynecology">Gynecology</option>
                    <option value="surgery">Laparoscopic Surgery</option>
                    <option value="wellness">Women&apos;s Wellness</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 500 }}>
                  Your Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    background: 'var(--background)',
                    border: '1px solid var(--border)',
                    borderRadius: '10px',
                    fontSize: '14px',
                    color: 'var(--text)',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    resize: 'vertical',
                  }}
                  placeholder="Tell us about your health concern..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '16px',
                  background: isSubmitting ? 'var(--muted)' : 'var(--accent)',
                  color: 'white',
                  border: 'none',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  borderRadius: '10px',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 16px rgba(232, 67, 147, 0.3)',
                }}
              >
                <FiSend size={16} />
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>

              <p style={{
                fontSize: '11px',
                color: 'var(--muted)',
                textAlign: 'center',
                marginTop: '8px',
                lineHeight: 1.6,
              }}>
                Your information is secure and will only be used to contact you for your appointment.
                <br />
                For urgent matters, call us directly at +91 {phone}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
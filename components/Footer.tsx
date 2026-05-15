'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FiMapPin, FiPhone, FiMail, FiInstagram, FiFacebook, FiMessageCircle, FiHeart } from 'react-icons/fi'

export default function Footer() {
  const phone = '8866117255'
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--primary)', color: 'rgba(255,255,255,0.7)' }}>
      {/* Emergency Strip */}
      <div style={{
        background: 'var(--accent)',
        padding: '20px 5%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: 'white',
        }}>
          <FiHeart size={16} />
          <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>
            24/7 Emergency Care
          </span>
          <FiHeart size={16} />
        </div>
        <a href={`tel:${phone}`} style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '28px',
          color: 'white',
          fontWeight: 600,
          textDecoration: 'none',
        }}>
          +91 {phone}
        </a>
      </div>

      {/* Main Footer */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '64px 5%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px' }}>
          {/* Brand Column */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', textDecoration: 'none' }}>
              <Image
                src="/assets/JWH_Logo_22082025-01.jpg (3).jpeg"
                alt="Jogal Women's Hospital Logo"
                width={48}
                height={48}
                style={{ borderRadius: '12px', objectFit: 'contain' }}
              />
              <div style={{ color: 'white', lineHeight: 1.2 }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', fontWeight: 600 }}>Jogal Women&apos;s Hospital</div>
                <div style={{ color: 'var(--accent-light)', fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 500 }}>Mother-Baby-Women&apos;s Specialty</div>
              </div>
            </Link>
            <p style={{
              fontSize: '14px',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '24px',
            }}>
              Providing comprehensive women&apos;s healthcare with compassion and excellence. Your trust is our priority.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href="https://www.instagram.com/jogal_womens_hospital_bhuj"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                <FiInstagram size={18} />
              </a>
              <a
                href="https://wa.me/918866117255"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#25D366'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                <FiMessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '18px',
              color: 'white',
              marginBottom: '24px',
              fontWeight: 500,
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '#about' },
                { label: 'Our Services', href: '#services' },
                { label: 'Our Experts', href: '#doctors' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Contact Us', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '18px',
              color: 'white',
              marginBottom: '24px',
              fontWeight: 500,
            }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Obstetrics & Maternity', href: '#services' },
                { label: 'IVF & Fertility', href: '#ivf' },
                { label: 'Gynecology', href: '#services' },
                { label: 'Laparoscopic Surgery', href: '#services' },
                { label: 'Level 3 NICU', href: '#services' },
                { label: 'Women&apos;s Wellness', href: '#services' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '18px',
              color: 'white',
              marginBottom: '24px',
              fontWeight: 500,
            }}>
              Contact Us
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <FiMapPin style={{ color: 'var(--accent)', marginTop: '4px', flexShrink: 0 }} />
                <span style={{ fontSize: '14px', lineHeight: 1.6 }}>
                  Shiv Nagar, Besides KSKV Kachchh University,<br />
                  Opp. Chanakya Academy, Mundra Road,<br />
                  Bhuj - Kutch, Gujarat
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <FiPhone style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <a href={`tel:${phone}`} style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                >
                  +91 {phone}
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <FiMail style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <a href="mailto:admin@jogal.com" style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                >
                  admin@jogal.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '24px 5%', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', letterSpacing: 'wider' }}>
          &copy; {currentYear} Jogal Women&apos;s Hospital. All rights reserved. Made with <FiHeart size={12} style={{ display: 'inline', color: 'var(--accent)' }} /> in Bhuj
        </p>
      </div>
    </footer>
  )
}
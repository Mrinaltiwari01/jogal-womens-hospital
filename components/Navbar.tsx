'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu, FiX, FiPhone, FiInstagram, FiFacebook, FiMessageCircle } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

const phone = '8866117255'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Experts', href: '#doctors' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Videos', href: '#videos' },
  { label: 'Contact', href: '#contact' },
]

const specialties = [
  { label: 'Maternity & High-Risk Obstetrics', href: '#services' },
  { label: 'IVF & Fertility', href: '#ivf' },
  { label: 'Gynecology & Laparoscopy', href: '#services' },
  { label: 'Endometriosis Care', href: '#services' },
  { label: 'Pediatrics & NICU', href: '#services' },
  { label: 'Physiotherapy & Women\'s Wellness', href: '#services' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showSpecialties, setShowSpecialties] = useState(false)

  return (
    <>
      {/* Top Bar */}
      <div style={{
        background: 'var(--primary)',
        padding: '8px 5%',
        display: 'none'
      }}
      className="md:block">
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.5px' }}>
            Your Trusted Women&apos;s Healthcare Partner in Bhuj, Kutch
          </span>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href={`tel:${phone}`} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'white', textDecoration: 'none', fontSize: '12px' }}>
              <FiPhone size={13} />
              <span>+91 {phone}</span>
            </a>
            <a href="https://wa.me/918866117255" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'white', textDecoration: 'none', fontSize: '12px' }}>
              <FiMessageCircle size={13} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'var(--surface)',
        borderBottom: '1px solid var(--border)',
        boxShadow: 'var(--shadow-sm)',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '72px' }}>
            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <Image
                src="/assets/JWH_Logo_22082025-01.jpg (3).jpeg"
                alt="Jogal Women's Hospital Logo"
                width={48}
                height={48}
                style={{ borderRadius: '12px', objectFit: 'contain' }}
              />
              <div style={{ lineHeight: 1.2 }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', fontWeight: 600, color: 'var(--text)', letterSpacing: '0.3px' }}>Jogal Women's Hospital</div>
                <div style={{ fontSize: '9px', color: 'var(--accent)', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 500 }}>Mother-Baby-Women's Specialty</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div style={{ display: 'none' }}
                 className="lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    padding: '8px 4px',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: 500,
                    transition: 'color 0.2s',
                    borderBottom: '2px solid transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent)'
                    e.currentTarget.style.borderBottomColor = 'var(--accent)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)'
                    e.currentTarget.style.borderBottomColor = 'transparent'
                  }}
                >
                  {link.label}
                </Link>
              ))}

              {/* Specialties Dropdown */}
              <div
                style={{ position: 'relative' }}
                onMouseEnter={() => setShowSpecialties(true)}
                onMouseLeave={() => setShowSpecialties(false)}
              >
                <button
                  style={{
                    padding: '8px 4px',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-secondary)',
                    fontSize: '13px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  Specialties
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginTop: '2px' }}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {showSpecialties && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginTop: '8px',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '8px',
                    minWidth: '240px',
                    boxShadow: 'var(--shadow-lg)',
                  }}>
                    {specialties.map((spec) => (
                      <Link
                        key={spec.label}
                        href={spec.href}
                        style={{
                          display: 'block',
                          padding: '10px 16px',
                          color: 'var(--text-secondary)',
                          textDecoration: 'none',
                          fontSize: '13px',
                          borderRadius: '8px',
                          transition: 'all 0.2s',
                        }}
                        onClick={() => setShowSpecialties(false)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'var(--soft-pink)'
                          e.currentTarget.style.color = 'var(--accent)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent'
                          e.currentTarget.style.color = 'var(--text-secondary)'
                        }}
                      >
                        {spec.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* CTA */}
              <a
                href={`tel:${phone}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'var(--accent)',
                  color: 'white',
                  padding: '10px 20px',
                  fontSize: '12px',
                  fontWeight: 600,
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 12px rgba(232, 67, 147, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(232, 67, 147, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(232, 67, 147, 0.3)'
                }}
              >
                <FiPhone size={14} />
                Book Appointment
              </a>
            </div>

            {/* Mobile Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                  display: 'flex',
                  padding: '8px',
                  background: 'var(--soft-pink)',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
                aria-label="Toggle menu"
              >
                {isOpen ? <FiX size={20} color="var(--accent)" /> : <FiMenu size={20} color="var(--primary)" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div style={{
            background: 'var(--surface)',
            borderTop: '1px solid var(--border)',
            padding: '16px 5% 24px',
          }}
          className="lg:hidden">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    padding: '14px 0',
                    color: 'var(--text)',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: 500,
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a
                  href={`tel:${phone}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: 'var(--accent)',
                    color: 'white',
                    padding: '14px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  <FiPhone size={16} />
                  Call Now: +91 {phone}
                </a>
                <a
                  href="https://wa.me/918866117255"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: '#25D366',
                    color: 'white',
                    padding: '14px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  <FiMessageCircle size={16} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
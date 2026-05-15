'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPhone, FiMessageCircle, FiArrowRight } from 'react-icons/fi'

const phone = '8866117255'

const serviceCategories = [
  {
    id: 'obstetrics',
    title: 'Obstetrics & Maternity',
    icon: '👶',
    description: 'Complete pregnancy care from conception to delivery and beyond. Our obstetrics team provides personalized care for every expecting mother.',
    doctors: ['Dr. Deven Jogal'],
    color: 'var(--soft-blue)',
    services: [
      { name: 'Pre-Pregnancy Counselling', desc: 'Comprehensive health evaluation before conception' },
      { name: 'Pregnancy Confirmation', desc: 'Early pregnancy verification and localization' },
      { name: 'Dating & Growth USGs', desc: 'Monitoring baby\'s development through pregnancy' },
      { name: 'Managing High-Risk Pregnancies', desc: 'Specialized care for complicated pregnancies' },
      { name: 'Vaginal Deliveries', desc: 'Natural birth with expert midwifery support' },
      { name: 'Caesarean Sections', desc: 'Safe C-section delivery options' },
      { name: 'Postpartum Mother & Child Care', desc: 'Comprehensive postnatal support' },
    ]
  },
  {
    id: 'ivf',
    title: 'IVF & Fertility',
    icon: '🧬',
    description: 'Advanced fertility treatments with high success rates, guided by experienced specialists who understand the emotional journey.',
    doctors: ['Dr. Deven Jogal', 'Dr. Dipika Thacker'],
    color: 'var(--soft-pink)',
    services: [
      { name: 'Infertility Workup', desc: 'Comprehensive diagnosis of fertility issues' },
      { name: 'Ovulation Induction', desc: 'Medication-based follicle development' },
      { name: 'Intrauterine Insemination (IUI)', desc: 'Timed artificial insemination' },
      { name: 'IVF (In Vitro Fertilization)', desc: 'Full IVF treatment cycle' },
      { name: 'ICSI', desc: 'Intracytoplasmic sperm injection' },
      { name: 'TESA', desc: 'Testicular sperm extraction' },
      { name: 'Fertility Counselling', desc: 'Emotional support through your journey' },
    ]
  },
  {
    id: 'pediatrics',
    title: 'Pediatrics & NICU',
    icon: '🏥',
    description: 'Level 3 NICU with round-the-clock care for newborns. Expert pediatric services in a kid-friendly environment.',
    doctors: ['Dr. Vivek Dholakiya'],
    color: 'var(--soft-lavender)',
    services: [
      { name: 'Level 3 NICU', desc: 'Highest level neonatal intensive care' },
      { name: 'Ventilator Support', desc: 'Advanced respiratory support for newborns' },
      { name: 'Phototherapy', desc: 'Treatment for neonatal jaundice' },
      { name: 'Complete Newborn Screening', desc: 'Metabolic and genetic screening' },
      { name: 'ROP Screening', desc: 'Retinopathy of prematurity assessment' },
      { name: 'Pediatric Immunisation', desc: 'Complete immunization services' },
      { name: '24/7 Pediatric Emergencies', desc: 'Round-the-clock children\'s emergency care' },
    ]
  },
  {
    id: 'gynecology',
    title: 'Gynecology & Laparoscopy',
    icon: '🔬',
    description: 'Expert care for all gynecological conditions with advanced diagnostic and minimally invasive surgical options.',
    doctors: ['Dr. Deven Jogal'],
    color: 'var(--soft-pink)',
    services: [
      { name: 'Laparoscopic Surgery', desc: 'Minimally invasive procedures' },
      { name: 'Total Laparoscopic Hysterectomy', desc: 'Advanced laparoscopic uterus removal' },
      { name: 'Myomectomy', desc: 'Fibroid removal surgery' },
      { name: 'Endometriosis Treatment', desc: 'Medical and surgical management' },
      { name: 'Hysteroscopy', desc: 'Diagnostic and therapeutic uterine procedures' },
      { name: 'Ovarian Cyst Removal', desc: 'Laparoscopic cystectomy' },
      { name: 'PCOS Management', desc: 'Comprehensive polycystic ovary care' },
    ]
  },
  {
    id: 'endometriosis',
    title: 'Endometriosis Care',
    icon: '💜',
    description: 'Specialized treatment for endometriosis including complex cases involving bladder, bowel, and ureteric endometriosis.',
    doctors: ['Dr. Deven Jogal'],
    color: 'var(--soft-lavender)',
    services: [
      { name: 'Adenomyosis Treatment', desc: 'Medical and surgical options' },
      { name: 'Chocolate Cyst Management', desc: 'Ovarian endometrioma treatment' },
      { name: 'Bladder Endometriosis', desc: 'Specialized surgical care' },
      { name: 'Bowel Endometriosis', desc: 'Multidisciplinary approach' },
      { name: 'Redo Surgery for Endometriosis', desc: 'Complex revision surgeries' },
      { name: 'Fertility Enhancing Surgery', desc: 'Improving natural conception chances' },
    ]
  },
  {
    id: 'wellness',
    title: 'Physiotherapy & Wellness',
    icon: '🌿',
    description: 'Holistic healthcare focusing on nutrition, exercise, and physiotherapy for women at every life stage.',
    doctors: ['Dr. Hetal Jogal'],
    color: 'var(--soft-blue)',
    services: [
      { name: 'Antenatal Physiotherapy', desc: 'Safe fitness during pregnancy' },
      { name: 'Postnatal Physiotherapy', desc: 'Recovery-focused rehabilitation' },
      { name: 'Post-Operative Physiotherapy', desc: 'Rehabilitation after surgery' },
      { name: 'Pregnancy Diet & Nutrition', desc: 'Expert dietary guidance' },
      { name: 'Anti-Inflammatory Diet (Endometriosis)', desc: 'Dietary management' },
      { name: 'Women\'s Wellness Checkups', desc: 'Annual health screenings' },
      { name: 'Vaccination Services', desc: 'HPV and women\'s health vaccines' },
    ]
  },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState('obstetrics')

  const currentService = serviceCategories.find(s => s.id === activeTab) || serviceCategories[0]

  return (
    <section id="services" style={{ padding: '100px 5%', background: 'var(--background)' }}>
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
            Our Specialties
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
            Comprehensive <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Women&apos;s</span> Healthcare
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
          }}>
            From routine checkups to advanced treatments, we provide complete healthcare solutions for women in Kutch under one roof.
          </p>
        </motion.div>

        {/* Service Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            marginBottom: '48px',
          }}
        >
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                padding: '12px 20px',
                background: activeTab === cat.id ? 'var(--primary)' : 'var(--surface)',
                color: activeTab === cat.id ? 'white' : 'var(--text-secondary)',
                border: '1px solid',
                borderColor: activeTab === cat.id ? 'var(--primary)' : 'var(--border)',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
              onMouseEnter={(e) => {
                if (activeTab !== cat.id) {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.color = 'var(--accent)'
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== cat.id) {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text-secondary)'
                }
              }}
            >
              <span style={{ fontSize: '18px' }}>{cat.icon}</span>
              {cat.title}
            </button>
          ))}
        </motion.div>

        {/* Service Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Service Header */}
            <div style={{
              background: 'var(--surface)',
              borderRadius: '20px',
              padding: '40px 48px',
              marginBottom: '32px',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
            }}>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '24px'
              }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '48px' }}>{currentService.icon}</span>
                    <h3 style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '32px',
                      color: 'var(--text)',
                      fontWeight: 400,
                    }}>
                      {currentService.title}
                    </h3>
                  </div>
                  <p style={{
                    fontSize: '15px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.8,
                    maxWidth: '600px',
                  }}>
                    {currentService.description}
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  minWidth: '200px',
                  padding: '20px',
                  background: 'var(--soft-pink)',
                  borderRadius: '12px',
                }}>
                  <div style={{ fontSize: '10px', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, marginBottom: '4px' }}>Our Specialists</div>
                  {currentService.doctors.map(doc => (
                    <div key={doc} style={{ fontSize: '13px', color: 'var(--text)', fontWeight: 500 }}>{doc}</div>
                  ))}
                </div>
              </div>
              {/* CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '28px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
                <a href={`tel:${phone}`} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'var(--accent)',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  fontSize: '12px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 12px rgba(232, 67, 147, 0.3)',
                }}>
                  <FiPhone size={16} />
                  Book Appointment
                </a>
                <a href="https://wa.me/918866117255" target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#25D366',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  fontSize: '12px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                }}>
                  <FiMessageCircle size={16} />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Services List */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '16px',
            }}>
              {currentService.services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '20px 24px',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: 'var(--accent)',
                      marginTop: '6px',
                      flexShrink: 0,
                    }} />
                    <div>
                      <h4 style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '17px',
                        color: 'var(--text)',
                        fontWeight: 500,
                        marginBottom: '4px',
                      }}>
                        {service.name}
                      </h4>
                      <p style={{
                        fontSize: '13px',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                      }}>
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* View All Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '64px' }}
        >
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Need a service not listed here? Contact us for more information.
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
              boxShadow: '0 4px 16px rgba(30, 58, 95, 0.3)',
            }}
          >
            Contact Us
            <FiArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
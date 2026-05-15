import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Jogal Women\'s Hospital | Women Hospital in Bhuj | Maternity Hospital Kutch | IVF Centre Bhuj',
  description: 'Jogal Women\'s Hospital is a leading mother-baby-women\'s specialty hospital in Bhuj, Kutch. Advanced maternity care, Level 3 NICU, IVF & fertility, gynecology, and laparoscopic surgery. Call +91 8866117255.',
  keywords: 'women hospital bhuj, maternity hospital kutch, ivf centre bhuj, nicu hospital kutch, gynecologist bhuj, pregnancy care hospital bhuj, laparoscopic surgery bhuj, fertility hospital kutch, women health hospital, best hospital bhuj',
  authors: [{ name: 'Jogal Women\'s Hospital' }],
  openGraph: {
    title: 'Jogal Women\'s Hospital | Women Hospital in Bhuj | Maternity Hospital Kutch',
    description: 'Leading mother-baby-women\'s specialty hospital for Kutch. Advanced maternity care, Level 3 NICU, IVF & fertility services in Bhuj.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Jogal Women\'s Hospital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jogal Women\'s Hospital - Women Hospital in Bhuj',
    description: 'Mother-baby-women\'s specialty hospital in Bhuj, Kutch with Level 3 NICU, IVF, and advanced gynecological services.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') ||
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Jost', sans-serif" }}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
import '../styles/globals.css'

export const metadata = {
  title: 'Shwetav De — AI Developer & Full Stack Engineer',
  description: 'Portfolio of Shwetav De — AI Developer, Python Programmer, Full Stack Developer & Machine Learning Enthusiast based in Kolkata, India.',
  keywords: 'Shwetav De, AI Developer, Python, Full Stack, Machine Learning, Portfolio',
  openGraph: {
    title: 'Shwetav De — AI Developer',
    description: 'AI Developer · Python Programmer · Full Stack Developer · ML Enthusiast',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --font-display: 'Orbitron', sans-serif;
            --font-mono: 'Space Mono', monospace;
            --font-body: 'Inter', sans-serif;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}

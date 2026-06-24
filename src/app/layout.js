import './globals.css';
// import { Inter } from 'next/font/google';
import { Playfair_Display, DM_Sans } from 'next/font/google'
import Header from './components/Header';
import Footer from './components/Footer';
import LandingLoader from './components/LandingLoader';
import ThreeBackground from './components/ThreeBackground';

// const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const dmSans   = DM_Sans({ subsets: ['latin'], variable: '--font-dm' })

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my professional web development portfolio',
  icons: {
    icon: '/image.png',
    shortcut: '/image.png',
    apple: '/image.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme') || 'dark';
                  if (savedTheme === 'light') {
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body className="bg-black text-slate-100 flex flex-col min-h-screen relative overflow-x-hidden">
        
        {/* Advanced Landing Loader */}
        <LandingLoader />

        {/* Three.js Animated Background — fixed canvas, always visible while scrolling */}
        <ThreeBackground />

        {/* Foreground Content Stack */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Global Header */}
          <Header />
          
          {/* Main Content Area */}
          <main className="flex-grow">
            {children}
          </main>
          
          {/* Global Footer */}
          <Footer />
        </div>

      </body>
    </html>
  );
}
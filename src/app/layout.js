import './globals.css';
// import { Inter } from 'next/font/google';
import { Playfair_Display, DM_Sans } from 'next/font/google'
import Header from './components/Header';
import Footer from './components/Footer';
import LandingLoader from './components/LandingLoader';

// const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const dmSans   = DM_Sans({ subsets: ['latin'], variable: '--font-dm' })

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my professional web development portfolio',
  icons: {
    icon: '/home-img.png',
    shortcut: '/home-img.png',
    apple: '/home-img.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-slate-100 flex flex-col min-h-screen relative overflow-x-hidden">
        
        {/* Advanced Landing Loader */}
        <LandingLoader />

        {/* Animated Background Ambient Glowing Orbs */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden min-h-full">
          <div className="bg-glow-orb orb-blue absolute top-[5%] left-[-15%]" />
          <div className="bg-glow-orb orb-purple absolute top-[30%] right-[-15%]" />
          <div className="bg-glow-orb orb-blue absolute top-[60%] left-[10%]" />
          <div className="bg-glow-orb orb-purple absolute bottom-[10%] right-[5%]" />
        </div>

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
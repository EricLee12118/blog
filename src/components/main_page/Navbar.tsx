'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoonStar, Sun, Menu } from 'lucide-react'; 
import { useTheme } from '@/providers/ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); 
  // const [brightness, setBrightness] = useState(100);
  const brightness = 100; 
  const [scrolled, setScrolled] = useState(false);
  const overlayOpacity = (100 - brightness) / 100;

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
      `}</style>

      <div 
        className="fixed inset-0 bg-black pointer-events-none z-[9999] transition-opacity duration-300"
        style={{ opacity: overlayOpacity }}
      />
      
      <header className={`sticky top-0 z-50 w-full border-b border-border/30 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 flex h-16 items-center justify-between">
          <div>
            <Link 
              href="/" 
              className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text hover:scale-105 transition-transform"
              style={{ fontFamily: 'Audiowide, cursive' }}
            >
              Li, Xinlei
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'Profile', 'Project', 'Working', 'Hobby'].map((item, index) => (
              <Link 
                key={index}
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                className={`text-sm md:text-base uppercase tracking-wider hover:text-primary transition-colors ${index === 0 ? '' : 'text-muted-foreground'}`}
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
              >
                {item}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">            
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5 text-primary" />
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {scrolled && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed right-6 bottom-6 z-40 flex flex-col gap-3"
          >
            {/* Theme Toggle Button */}
            <div className="bg-background/90 backdrop-blur-md rounded-full shadow-lg border border-primary/20 p-2">
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="Toggle Theme" 
                className="h-10 w-10" 
                onClick={toggleTheme}
              >
                <motion.div
                  animate={{ rotate: theme === 'dark' ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {theme === 'light' ? (
                    <Sun className="h-6 w-6 text-primary" />
                  ) : (
                    <MoonStar className="h-6 w-6 text-primary" />
                  )}
                </motion.div>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
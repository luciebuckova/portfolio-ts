'use client';
import { useState, createContext } from 'react';
import useWindowSize from '@/utils/useWindowSize';
import Cursor from '@/components/Cursor';
import ScrollToTopOnRefresh from '@/utils/scrollToTopOnRefresh';
import DefaultLayout from '@/layouts/DefaultLayout';
import Hero from '@/layouts/Hero';
import About from '@/layouts/About';
import Projects from '@/layouts/Projects';
import Contact from '@/layouts/Contact';

// Dark mode toggling using createContext
type Mode = 'dark' | '';

export const ModeContext = createContext<() => void>(() => {});

export default function Home({ font }: { font: string }) {
  const [mode, setMode] = useState<Mode>('dark');
  const { width } = useWindowSize();
  const isLargeScreen = width > 768;

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'dark' ? '' : 'dark'));
  };

  return (
    <ModeContext.Provider value={toggleMode}>
      <html lang="cs_CZ" className={mode}>
        <body
          className={`${font} bg-neutral-50 bg-[url('/ssscribble.svg')] bg-cover bg-center bg-no-repeat text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50`}>
          <ScrollToTopOnRefresh />
          <DefaultLayout>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </DefaultLayout>
          {/* Animated cursor visible only on large screens */}
          {isLargeScreen && <Cursor />}
        </body>
      </html>
    </ModeContext.Provider>
  );
}

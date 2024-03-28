'use client';
import { useState, createContext } from 'react';
import UseWindowSize from '@/components/UseWindowSize';
import Cursor from '@/components/Cursor';
import DefaultLayout from '@/layouts/DefaultLayout';
import Hero from '@/layouts/Hero';
import About from '@/layouts/About';
import Projects from '@/layouts/Projects';
import Contact from '@/layouts/Contact';
import ScrollToTopOnRefresh from '@/components/ScrollToTopOnRefresh';

type Mode = 'dark' | '';

interface AppProps {
  font: string;
}

export const ModeContext = createContext<() => void>(() => {});

export default function Home({ font }: AppProps) {
  const [mode, setMode] = useState<Mode>('dark');
  const { width } = UseWindowSize();
  const isLargeScreen = width > 768;

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'dark' ? '' : 'dark'));
  };

  return (
    <ModeContext.Provider value={toggleMode}>
      <html lang="cs" className={mode}>
        <body
          className={`${font} bg-neutral-50 bg-[url('/ssscribble.svg')] bg-cover bg-center bg-no-repeat text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50`}>
          <ScrollToTopOnRefresh />
          <DefaultLayout>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </DefaultLayout>
          {/*  {isLargeScreen && <Cursor />} */}
        </body>
      </html>
    </ModeContext.Provider>
  );
}

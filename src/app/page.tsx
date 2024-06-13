'use client';
import { useState, createContext } from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import Hero from '@/layouts/Hero';
import FloatingIcon from '@/components/FloatingIcon';

type Mode = 'dark' | '';

interface AppProps {
  font: string;
}

export const ModeContext = createContext<() => void>(() => {});

export default function Home({ font }: AppProps) {
  const [mode, setMode] = useState<Mode>('dark');

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'dark' ? '' : 'dark'));
  };

  return (
    <ModeContext.Provider value={toggleMode}>
      <html lang="cs" className={mode}>
        <body
          className={`${font} bg-neutral-50 bg-[url('/ssscribble.svg')] bg-cover bg-center bg-no-repeat text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50 h-screen overflow-hidden`}>
          <FloatingIcon />
          <DefaultLayout>
            <Hero />
          </DefaultLayout>
        </body>
      </html>
    </ModeContext.Provider>
  );
}

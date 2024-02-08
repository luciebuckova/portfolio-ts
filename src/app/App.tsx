'use client';
import { useState, ReactNode, createContext } from 'react';

type Mode = 'dark' | '';

interface AppProps {
  children: ReactNode;
  font: string;
}

export const ModeContext = createContext<() => void>(() => {});

export default function App({ children, font }: AppProps) {
  const [mode, setMode] = useState<Mode>('dark');

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'dark' ? '' : 'dark'));
  };

  return (
    <ModeContext.Provider value={toggleMode}>
      <html lang="cs_CZ" className={mode}>
        <body
          className={`${font} bg-neutral-50 bg-[url('/ssscribble.svg')] bg-cover bg-center bg-no-repeat text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50`}>
          {children}
        </body>
      </html>
    </ModeContext.Provider>
  );
}

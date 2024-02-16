import { useState, useEffect } from 'react';
import Menu from './Menu';
import Hamburger from './Hamburger';
import { IconMenuDeep } from '@tabler/icons-react';
import UseWindowSize from './UseWindowSize';

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const { width } = UseWindowSize();
  const isSmallScreen = width <= 768;

  return (
    <header>
      {isSmallScreen ? (
        <div>
          <button
            className="absolute right-8 top-8 z-20 flex items-center justify-center rounded-md border border-neutral-500 bg-neutral-50 p-2 duration-300 hover:scale-105 hover:text-teal-400 dark:bg-neutral-950 dark:hover:text-teal-400"
            onClick={() => setShowNav(true)}>
            <IconMenuDeep size={24} stroke={1} />
          </button>
          {showNav && <Hamburger setShowNav={setShowNav} />}
        </div>
      ) : (
        <Menu />
      )}
    </header>
  );
}

import { ReactElement } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { IconX } from '@tabler/icons-react';
import UseSwitchesCustom from '@/utils/useSwitchesCustom';

interface HamburgerProps {
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Hamburger({
  setShowNav,
}: HamburgerProps): ReactElement {
  function closeMenu() {
    setShowNav(false);
  }

  return (
    <nav className="fixed right-0 top-0 z-30 flex h-full w-64 items-start justify-center bg-gradient-to-b from-teal-100 to-purple-100 px-6 pt-24 text-center text-xl font-light dark:from-teal-950 dark:to-purple-950">
      <button
        className="absolute right-8 top-8 duration-300 hover:scale-95 hover:text-teal-400"
        onClick={closeMenu}>
        <IconX size={40} stroke={1} />
      </button>
      <ul className="flex flex-col gap-6">
        <li>
          <UseSwitchesCustom />
        </li>
        <li className="group cursor-pointer">
          <ScrollLink
            activeClass="active"
            spy={true}
            to="hero"
            smooth={true}
            duration={800}
            onClick={closeMenu}>
            Úvod
          </ScrollLink>
          <div className="mx-2 mt-2 border-b-2  border-teal-400 opacity-0 duration-500 group-hover:opacity-100"></div>
        </li>
        <li className="group cursor-pointer">
          <ScrollLink
            activeClass="active"
            spy={true}
            to="about"
            smooth={true}
            duration={800}
            onClick={closeMenu}>
            O mně
          </ScrollLink>
          <div className="mx-2 mt-2 border-b-2  border-teal-400 opacity-0 duration-500 group-hover:opacity-100"></div>
        </li>
        <li className="group cursor-pointer">
          <ScrollLink
            activeClass="active"
            spy={true}
            to="projects"
            smooth={true}
            duration={800}
            onClick={closeMenu}>
            Projekty
          </ScrollLink>
          <div className="mx-2 mt-2 border-b-2  border-teal-400 opacity-0 duration-500 group-hover:opacity-100"></div>
        </li>
        <li className="group cursor-pointer">
          <ScrollLink
            activeClass="active"
            spy={true}
            to="contact"
            smooth={true}
            duration={800}
            onClick={closeMenu}>
            Kontakt
          </ScrollLink>
          <div className="mx-2 mt-2 border-b-2  border-teal-400 opacity-0 duration-500 group-hover:opacity-100"></div>
        </li>
      </ul>
    </nav>
  );
}

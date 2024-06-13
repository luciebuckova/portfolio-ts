import { IconBrandLinkedin } from '@tabler/icons-react';

const date = new Date();
const year: number = date.getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="fixed left-0 right-0 bottom-0 z-50 py-4 flex flex-col items-center justify-between gap-6 pb-8 text-center">
      <ul className="flex items-center gap-4">
        <li className="duration-300 hover:scale-110 hover:text-teal-400">
          <a
            href="https://www.linkedin.com/in/luciebuckova/"
            aria-label="LinkedIn">
            <IconBrandLinkedin size={28} stroke={1} />
          </a>
        </li>
      </ul>
      <div>
        <span>&copy; 2023 - {year} Lucie Bučková</span>
      </div>
    </footer>
  );
};

export default Footer;

import UseSwitchesCustom from '@/components/UseSwitchesCustom';

const Menu: React.FC = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 py-4">
      <ul className="mx-auto flex max-w-7xl items-center justify-center gap-6">
        <li>
          <UseSwitchesCustom />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

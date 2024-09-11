import './BurgerMenu.scss';
import Navigation from './Navigation';

interface BurgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function BurgerMenu({ isOpen, toggleMenu }: BurgerMenuProps) {
  return (
    <div className={`burger-menu-modal ${!isOpen ? 'hidden' : ''}`}>
      <h1>BURGER MENU</h1>
      <Navigation toggleMenu={toggleMenu} />
    </div>
  );
}

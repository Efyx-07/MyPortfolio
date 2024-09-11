import './BurgerMenu.scss';
import Navigation from './Navigation';

interface BurgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function BurgerMenu({ isOpen, toggleMenu }: BurgerMenuProps) {
  return (
    <div className={`burger-menu-modal ${!isOpen ? 'hidden' : ''}`}>
      <Navigation toggleMenu={toggleMenu} />
    </div>
  );
}

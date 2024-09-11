import './BurgerMenu.scss';

interface BurgerMenuProps {
  isOpen: boolean;
}

export default function BurgerMenu({ isOpen }: BurgerMenuProps) {
  return (
    <div className={`burger-menu-modal ${!isOpen ? 'hidden' : ''}`}>
      <h1>BURGER MENU</h1>
    </div>
  );
}

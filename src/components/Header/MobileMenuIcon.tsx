import { h1 } from 'framer-motion/client';

interface MobileMenuIconProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function MobileMenuIcon({
  isOpen,
  toggleMenu,
}: MobileMenuIconProps) {
  return (
    <div className="mobile-menu-icon" onClick={toggleMenu}>
      {isOpen ? <h1>X</h1> : <h1>O</h1>}
    </div>
  );
}

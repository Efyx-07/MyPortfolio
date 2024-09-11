import { Icon } from '@iconify/react';
import './MobileMenuIcon.scss';

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
      {isOpen ? (
        <Icon icon="line-md:menu-to-close-transition" />
      ) : (
        <Icon icon="material-symbols:menu" />
      )}
    </div>
  );
}

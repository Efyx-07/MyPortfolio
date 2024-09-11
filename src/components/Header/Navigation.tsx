import { useRouter, usePathname } from 'next/navigation';
import './Navigation.scss';

interface NavigationProps {
  toggleMenu?: () => void;
}

export default function Navigation({ toggleMenu }: NavigationProps) {
  const router = useRouter();
  const pathName = usePathname();

  interface Navitem {
    name: string;
    pathName: string;
    onClick: () => void;
  }

  const navItems: Navitem[] = [
    {
      name: 'Blog',
      pathName: '/blog',
      onClick: () => {
        router.push('/blog');
        if (toggleMenu) toggleMenu();
      },
    },
  ];
  return (
    <nav>
      {navItems.map((navItem) => (
        <p
          className={`nav-item ${pathName === navItem.pathName ? 'active' : ''}`}
          key={navItem.name}
          onClick={navItem.onClick}
        >
          {navItem.name}
        </p>
      ))}
    </nav>
  );
}

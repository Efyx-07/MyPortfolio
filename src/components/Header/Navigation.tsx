import { useRouter } from 'next/navigation';

interface NavigationProps {
  toggleMenu: () => void;
}

export default function Navigation({ toggleMenu }: NavigationProps) {
  const router = useRouter();

  interface Navitem {
    name: string;
    onClick: () => void;
  }

  const navItems: Navitem[] = [
    {
      name: 'Portfolio',
      onClick: () => {
        router.push('/blog'), toggleMenu();
      },
    },
    {
      name: 'Blog',
      onClick: () => {
        router.push('/blog'), toggleMenu();
      },
    },
  ];
  return (
    <nav>
      {navItems.map((navItem) => (
        <p className="navItem" key={navItem.name} onClick={navItem.onClick}>
          {navItem.name}
        </p>
      ))}
    </nav>
  );
}

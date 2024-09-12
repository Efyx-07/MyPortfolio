import { useRouter } from 'next/navigation';
import Image from 'next/image';
import './SiteName.scss';

interface SiteNameProps {
  toggleMenu: () => void;
}

export default function SiteName({ toggleMenu }: SiteNameProps) {
  const router = useRouter();

  const navToHomePageAndCloseMenu = (): void => {
    router.push('/');
    toggleMenu();
  };

  return (
    <div
      className="siteName-logo-container"
      onClick={navToHomePageAndCloseMenu}
    >
      <div className="logo-container">
        <Image
          className="logo"
          src="/images/decoration/logo.png"
          width={500}
          height={500}
          alt="fxsavary.com"
          priority
        />
      </div>
      <p className="site-name">
        <span>FX</span>Savary.dev
      </p>
    </div>
  );
}

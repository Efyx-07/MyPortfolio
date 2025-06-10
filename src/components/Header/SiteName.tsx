import { useRouter } from 'next/navigation';
import Image from 'next/image';
import './SiteName.scss';

export default function SiteName() {
  const router = useRouter();

  return (
    <div className="siteName-logo-container" onClick={() => router.push('/')}>
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

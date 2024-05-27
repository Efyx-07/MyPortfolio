"use client"

import HeroSection from './components/HeroSection';
import '../assets/sass/pages-common-style.scss';

export default function Home() {
  return (
    <div className='page'>
      <div className="content">
        <HeroSection />
      </div>
    </div>
  );
}

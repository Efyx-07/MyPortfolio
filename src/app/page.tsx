"use client"

import { useEffect, useState } from 'react';
import LoadingPage from '@/components/LoadingPage';
import HeroSection from '@/components/HeroSection';
import ProjectSection from '@/components/ProjectSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import '../assets/sass/pages-common-style.scss';

export default function Home() {

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 500);
  }, [isLoaded]);

  return (
    <div className='page'>
      <div className="content">
        {isLoaded ? 
          (
            <>
              <HeroSection />
              <SkillsSection />
              <ProjectSection />
              <ContactSection />
            </>
          )
          :
          <><LoadingPage/></>
        }
      </div>
    </div>
  );
}

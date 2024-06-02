"use client"

import useAppInit from './hooks/useAppInit';
import LoadingPage from './components/LoadingPage';
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import '../assets/sass/pages-common-style.scss';

export default function Home() {

  const allDataLoaded: boolean = useAppInit();

  return (
    <div className='page'>
      <div className="content">
        {allDataLoaded ? 
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

"use client"

import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import SkillsSection from './components/SkillsSection';
import '../assets/sass/pages-common-style.scss';

export default function Home() {
  return (
    <div className='page'>
      <div className="content">
        <HeroSection />
        <ProjectSection />
        <SkillsSection />
      </div>
    </div>
  );
}

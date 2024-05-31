"use client"
import { useState, useEffect } from 'react';
import { useContacts, useProjects, useSkills } from './hooks';
import LoadingPage from './components/LoadingPage';
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import '../assets/sass/pages-common-style.scss';

export default function Home() {

  const [contactsLoaded, setContactsLoaded] = useState<boolean>(false);
  const [projectsLoaded, setProjectsLoaded] = useState<boolean>(false);
  const [skillsLoaded, setSkillsLoaded] = useState<boolean>(false);

  const contacts = useContacts();
  const projects = useProjects();
  const skills = useSkills();

  useEffect(() => {
    if (contacts.length > 0) {
      setContactsLoaded(true);
    }
  }, [contacts]);

  useEffect(() => {
    if (projects.length > 0) {
      setProjectsLoaded(true);
    }
  }, [projects]);

  useEffect(() => {
    if (skills.length > 0) {
      setSkillsLoaded(true);
    }
  }, [skills]);

  const allDataLoaded = contactsLoaded && projectsLoaded && skillsLoaded;

  return (
    <div className='page'>
      <div className="content">
        {allDataLoaded ? 
          (
            <>
              <HeroSection />
              <ProjectSection />
              <SkillsSection />
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

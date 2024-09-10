import { motion } from 'framer-motion';
import { cardVariants } from '@/framer-motion/cardVariants';
import { Project } from '@/types';
import ProjectCard from './ProjectCard';
import SectionTitle from '../Reusables/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import { fetchProjects } from '@/services';
import '../../assets/sass/sections-common-style.scss';
import '../../assets/sass/dynamic-section.scss';

export default function ProjectSection() {
  const { data: projects = [] } = useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });

  return (
    <section className="project-section dynamic-section ">
      <div className="content">
        <SectionTitle title="Mes projets récents" />
        <div className="dynamic-cards-container">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="project-card"
            >
              <ProjectCard key={project.id} project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

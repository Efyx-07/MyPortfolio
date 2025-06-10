import { motion } from 'framer-motion';
import { cardVariants } from '@/framer-motion/cardVariants';
import { Skill } from '@/types';
import SkillCard from './SkillCard';
import SectionTitle from '../Reusables/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import fetchSkills from '@/services/fetchSkills';
import '../../assets/sass/sections-common-style.scss';
import './SkillSection.scss';

export default function SkillsSection() {
  const { data: skills = [] } = useQuery<Skill[]>({
    queryKey: ['skills'],
    queryFn: fetchSkills,
  });

  return (
    <section className="skills-section">
      <div className="content">
        <SectionTitle title="Mes skills" />
        <div className="skillCards-container">
          {skills.map((skill: Skill, index: number) => (
            <motion.div
              key={skill.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

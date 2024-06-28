import { motion } from "framer-motion";
import { cardVariants } from "@/framer-motion/cardVariants";
import { Skill } from "@/types";
import useSkills from "@/hooks/useSkills";
import SkillCard from "./SkillCard";
import SectionTitle from "../Reusables/SectionTitle";
import '../../assets/sass/sections-common-style.scss';
import './SkillSection.scss';
    
export default function SkillsSection() {
    
    const skills: Skill[] = useSkills();
    
    return (
        <section className="skills-section">
            <div className="content">
                <SectionTitle title="Mes skills" />
                <div className="skillCards-container">
                    {skills.map((skill, index) => (
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
    )
}
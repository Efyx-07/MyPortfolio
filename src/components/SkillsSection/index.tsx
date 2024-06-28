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
                    {skills.map(skill => (
                        <SkillCard key={skill.title} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    )
}
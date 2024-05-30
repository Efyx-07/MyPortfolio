import { Skill } from "@/app/types/skillType";
import { Icon } from '@iconify/react';
import './SkillCard.scss';

interface SkillCardProps {
    skill: Skill;
}

export default function SkillCard({skill}: SkillCardProps) {
    return (
        <div className="skill-card">
            <div className="stackIcons-container">
                {skill.stacks.map(stack => (
                    <Icon key={stack.name} icon= {stack.icon} />
                ))}
            </div>
            <div className="skillTitle-container">
                {/* <Icon icon={skill.icon} /> */}
                <p>{skill.title}</p>
            </div>
            <p className="text">{skill.text}</p>
        </div>
    )
}
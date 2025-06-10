import { Project } from '@/types';
//import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '../Reusables/Button';

//import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  //const router = useRouter();
  /*const [isLoading, setIsLoading] = useState(false);

  const navToProjectPage = (): void => {
    setIsLoading(true);
    router.push(`/project/${project.slug}`);
  };*/

  return (
    <>
      <div className="image-container">
        <Image
          className="img"
          src={`/images/projects/${project.image.source}`}
          width={1000}
          height={1000}
          alt={project.image.alt}
          priority
        />
      </div>
      <div className="project-description">
        <div className="text-container">
          <div className="stacks-container">
            {project.stacks.map((stack) => (
              <p key={stack.name} className="stack">
                {stack.name}
              </p>
            ))}
          </div>
          <p className="title">{project.title}</p>
          <p className="description">{project.description}</p>
        </div>
        <div className="project-card-buttons-container">
          {project.buttons.map((button) => (
            <Button
              key={button.name}
              className={
                button.name === 'Code' ? 'button' : 'cta-button button'
              }
              isDisabled={button.link === ''}
              name={button.name}
              link={button.link}
              icon={button.icon}
              target="_blank"
              rel="noopener noreferrer"
            />
          ))}
        </div>
      </div>
    </>
  );
}

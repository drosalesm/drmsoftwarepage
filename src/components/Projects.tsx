import Reveal from './Reveal';
import { useTranslation } from '@/hooks/useTranslation';

type ProjectType = {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
};

const Projects = () => {
  const { translations } = useTranslation();

  if (!translations.projects) {
    return null;
  }

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <Reveal>
          <h2 className="section-title">{translations.projects.name}</h2>
          <p className="section-subtitle">{translations.projects.subtitle}</p>
        </Reveal>
        
        <div className="projects-grid">
          {(translations.projects.list as ProjectType[]).map((project: ProjectType, index: number) => (
            <Reveal key={index}>
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-card-link"
              >
                {/* 1. The .project-card is now the main container for our new structure */}
                <div className="project-card">
                  
                  {/* 2. The new "header" section for text content */}
                  <div className="project-content">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                  </div>
                  
                  {/* 3. A dedicated container for the image */}
                  <div className="project-image-container">
                    <img src={project.imageUrl} alt={project.title} />
                  </div>

                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
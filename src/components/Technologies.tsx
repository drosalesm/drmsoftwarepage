import Reveal from './Reveal';
import { useTranslation } from '@/hooks/useTranslation';
import TechnologyCard from '@/components/TechnologyCard'; // 1. Import our new component

// Define the type to match the full JSON structure for a technology
type TechDataType = {
  name: string;
  icon: string;
  description: string;
};

const Technologies = () => {
  const { translations } = useTranslation();

  if (!translations.technologies || !translations.techDesc) {
    return null;
  }

  return (
    <section id="technologies" className="features">
      <Reveal>
        <h2 className="section-title">{translations.techDesc.text}</h2>
        <p className="section-subtitle">{translations.techDesc.description}</p>
      </Reveal>
      
      <div className="features-grid">
        {/* 2. Loop through the data and render a TechnologyCard for each item */}
        {(translations.technologies as TechDataType[]).map((tech: TechDataType, index: number) => (
          <Reveal key={index}>
            {/* 3. Pass the entire 'tech' object as a prop */}
            <TechnologyCard tech={tech} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
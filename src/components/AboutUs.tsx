import Reveal from './Reveal';
import { useTranslation } from '@/hooks/useTranslation';

type FounderType = {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
};

const AboutUs = () => {
  const { translations } = useTranslation();

  // Safety check to prevent errors.
  if (!translations.founder) {
    return null;
  }

  const founder: FounderType = translations.founder;

  return (
    <section id="about-us" className="about-us">
      <div className="about-us-container">
        <Reveal>
          {/* 1. Main section title and subtitle now come directly from the founder object */}
          <h2 className="section-title">{founder.role}</h2>
          <p className="section-subtitle">{founder.name}</p>
        </Reveal>

        <div className="about-us-grid">
          <div className="about-us-content">
            <Reveal>
              {/* 2. The main content is now just the founder's description */}
              <p className="founder-description">{founder.description}</p>
            </Reveal>
          </div>
          <div className="founder-image-container">
            <Reveal>
              {/* 3. The founder's image */}
              <img src={founder.imageUrl} alt={`Photo of ${founder.name}`} className="founder-image" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
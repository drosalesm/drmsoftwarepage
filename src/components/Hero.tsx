import { useTranslation } from '@/hooks/useTranslation';

const USA_FLAG_URL = '/flags/us.png';
const HONDURAS_FLAG_URL = '/flags/hn.png';

const Hero = () => {
  const { translations, changeLanguage, currentLanguage } = useTranslation();

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        {/* 1. The h1 title has been removed. */}
        
        <img 
          src={translations.hero.imageUrl}
          alt="DRM Software Solutions Company Logo" 
          className="hero-logo-large" 
        />
        <p>{translations.hero.subtitle}</p>

        <div className="hero-language-selector">
          <button 
            onClick={() => changeLanguage('en')} 
            className={currentLanguage === 'en' ? 'active' : ''}
            aria-label="View site in English"
          >
            <img src={USA_FLAG_URL} alt="USA Flag" />
          </button>
          <button 
            onClick={() => changeLanguage('es')} 
            className={currentLanguage === 'es' ? 'active' : ''}
            aria-label="Ver sitio en Español"
          >
            <img src={HONDURAS_FLAG_URL} alt="Honduras Flag" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
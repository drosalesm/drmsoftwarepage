import Reveal from './Reveal';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { FaDesktop, FaShoppingCart, FaServer, FaCogs } from 'react-icons/fa'; // Added FaCogs for fallback

// 1. Define the type for a single service object.
// This tells TypeScript what properties to expect.
type ServiceType = {
  title: string;
  description: string;
  price: string;
};

// This array maps icons to your services in the order they appear in the JSON.
const serviceIcons = [FaDesktop, FaShoppingCart, FaServer];

const Services = () => {
  const { translations } = useTranslation();

  // A safety check in case translations haven't loaded yet.
  if (!translations.services || !translations.servicetext) {
    return null; 
  }

  return (
    <section id="services" className="services">
      <div className="services-container">
        <Reveal>
          <h2 className="section-title">{translations.servicetext.name}</h2>
          <p className="section-subtitle">{translations.servicetext.subtitle}</p>
        </Reveal>
        
        <div className="services-grid">
          {/* 2. Tell the .map() function to expect our 'ServiceType'. */}
          {(translations.services as ServiceType[]).map((service: ServiceType, index: number) => {
            const Icon = serviceIcons[index] || FaCogs; // Fallback icon
            return (
              <Reveal key={index}>
                <Link to={`/service/${index}`} className="service-item-link">
                  <div className="service-item">
                    <div className="service-icon"><Icon /></div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="service-price-tag">{service.price}</div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
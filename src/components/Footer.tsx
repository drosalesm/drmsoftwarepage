import React from 'react'; // 1. Import React for using its types
import { Link } from 'react-scroll';
import { useTranslation } from '@/hooks/useTranslation';
import { FaWhatsapp, FaLinkedin,  FaLink,FaYoutube } from 'react-icons/fa';

// 2. Define a type for a single social link object to match your JSON structure.
type SocialLink = {
  name: string;
  url: string;
  imageUrl: string; // Even if not used here, it's good practice to include it.
};

// 3. Type the icon map. The value is a valid React component type.
const socialIconMap: { [key: string]: React.ElementType } = {
  'WhatsApp': FaWhatsapp,
  'LinkedIn': FaLinkedin,
  'YouTube': FaYoutube,

};

const Footer = () => {
  const { translations } = useTranslation();
  const currentYear = new Date().getFullYear();

  if (!translations.SocialNetworks || !translations.hero) {
    return null;
  }

  return (
    <footer>
      <div className="footer-container">
        
        <div className="social-icons">
          {/* 4. Apply the type to the array. This resolves the error for the 'social' parameter. */}
          {(translations.SocialNetworks.list as SocialLink[]).map((social: SocialLink) => {
            const Icon = socialIconMap[social.name] || FaLink;
            
            return (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={social.name}
              >
                <Icon />
              </a>
            );
          })}
        </div>

        <div className="footer-center">
          <p>{translations.hero.title} © {currentYear}</p>
        </div>

        <div className="footer-logo">
          <Link to="home" spy={true} smooth={true} offset={-70} duration={500} title="Back to Top">
            <img src="/logo/logoTransp.png" alt="DRM Logo" className="footer-logo-image" />
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Modal from './Modal';
import { useTranslation } from '@/hooks/useTranslation';
import { 
  FaHome, FaCogs, FaBuilding, FaMicrochip, FaFolderOpen, 
  FaBars, FaTimes, FaWhatsapp, FaLinkedin 
} from 'react-icons/fa';

type NavTextItem = {
  id: string;
  text: string;
};

const navItems = [
  { to: 'home', icon: FaHome },
  { to: 'services', icon: FaCogs },
  { to: 'projects', icon: FaFolderOpen },  
  { to: 'technologies', icon: FaMicrochip },
  { to: 'about-us', icon: FaBuilding },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { translations } = useTranslation();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  if (!translations.hero || !translations.hero.navText) {
    return null;
  }

  return (
    <>
      <header>
        <nav>
          <RouterLink to="/" className="logo" title="Back to Home">
            <img src="/logo/logoTransp.png" alt="DRM Software Solutions Logo" className="logo-image" />
          </RouterLink>
          
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => {
              const navTextItem = (translations.hero.navText as NavTextItem[]).find(
                (textItem) => textItem.id === item.to
              );

              return (
                <li key={item.to}>
                  <ScrollLink 
                    to={item.to} 
                    spy={true} 
                    smooth={true} 
                    offset={-70} 
                    duration={500} 
                    className="nav-link-item" 
                    onClick={closeMenu}
                    hashSpy={true} // <-- THIS IS THE CORRECT PROP NAME
                  >
                    <item.icon />
                    <span>{navTextItem ? navTextItem.text : item.to}</span>
                  </ScrollLink>
                </li>
              );
            })}
          </ul>

          <button className="cta-button" onClick={() => setIsModalOpen(true)}>
            {translations.hero.btnText}
          </button>
          
          <div className="menu-toggle-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </nav>
      </header>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="modal-title">{translations.SocialNetworks.contact}</h2>
        <p className="modal-subtitle">{translations.SocialNetworks.subtitleContact}</p>
        <div className="modal-social-links">
          <a href={translations.SocialNetworks.list[0]?.url} target="_blank" rel="noopener noreferrer" className="modal-social-link whatsapp">
            <FaWhatsapp />
          </a>
          <a href={translations.SocialNetworks.list[1]?.url} target="_blank" rel="noopener noreferrer" className="modal-social-link linkedin">
            <FaLinkedin />
          </a>
        </div>
      </Modal>
    </>
  );
};

export default Header;
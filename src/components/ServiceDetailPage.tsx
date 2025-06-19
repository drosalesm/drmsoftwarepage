import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import ImageModal from './ImageModal';
import { FaWhatsapp, FaArrowLeft, FaDesktop, FaShoppingCart, FaServer, FaCogs } from 'react-icons/fa';

type PageTypeItem = { title: string; };
type GalleryImageItem = { url: string; Title: string; };
type SocialNetworkLink = { name: string; url: string; };
type ServiceDetail = { title: string; price: string; pagetypeList: PageTypeItem[]; imgGalery: GalleryImageItem[]; };
const serviceIcons = [FaDesktop, FaShoppingCart, FaServer];

const ServiceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { translations } = useTranslation();
  const navigate = useNavigate();

  const service = id ? (translations.services?.[Number(id)] as ServiceDetail) : undefined;
  const Icon = id ? serviceIcons[Number(id)] || FaCogs : FaCogs;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');
  const [modalAltText, setModalAltText] = useState('');

  useEffect(() => {
    if (service && service.imgGalery.length > 1) {
      timerRef.current = window.setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % service.imgGalery.length);
      }, 3000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [service]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleThumbnailClick = (index: number) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setCurrentImageIndex(index);
  };

  const handleOpenModal = (image: GalleryImageItem) => {
    setModalImageUrl(image.url);
    setModalAltText(image.Title);
    setIsModalOpen(true);
  };
  
  // THIS FUNCTION NAVIGATES AND PASSES THE SCROLL INSTRUCTION
  const handleBackToServices = () => {
    navigate('/', { state: { scrollTo: 'services' } });
  };

  if (!translations.services) return <div className="service-detail-page"></div>;
  
  if (!service) {
    return (
      <div className="service-detail-page not-found">
        <h2>{translations.servicetext.notFoundTitle}</h2>
        <p>{translations.servicetext.notFoundSubtitle}</p>
        <Link to="/" className="btn-secondary">{translations.servicetext.btnText}</Link>
      </div>
    );
  }
  
  const selectedImage = service.imgGalery[currentImageIndex];

  return (
    <>
      <div className="service-detail-page">
        {/* THE FIX: This is now a <button> that calls our navigation function */}
        <button 
          onClick={handleBackToServices} 
          className="back-link"
          style={{cursor: 'pointer', border: 'none', background: 'transparent', zIndex: 1000, position: 'relative', fontSize: '18px'}}
        >
          <FaArrowLeft /> {translations.servicetext.btnText}
        </button>
        
        <div className="service-detail-wrapper">
          <div className="service-detail-header">
            <div className="service-icon"><Icon /></div>
            <h1>{service.title}</h1>
          </div>
          <div className="service-detail-grid">
            <div className="service-detail-features">
              <h3>{translations.servicetext.featuresTitle}</h3>
              <div className="service-detail-categories">
                {service.pagetypeList.map((item) => (
                  <span key={item.title} className="category-tag">{item.title}</span>
                ))}
              </div>
            </div>
            <div className="service-detail-pricing">
              <h3>{translations.servicetext.pricingTitle}</h3>
              <div className="price-tag">{service.price}</div>
            </div>
          </div>
          
          {service.imgGalery.length > 0 && (
            <div className="service-detail-gallery">
              <h3>{translations.servicetext.galleryTitle}</h3>
              <div className="gallery-main-image" onClick={() => handleOpenModal(selectedImage)} style={{cursor: 'pointer'}}>
                <img key={selectedImage?.url} src={selectedImage?.url} alt={selectedImage?.Title} />
              </div>
              <div className="gallery-thumbnails">
                {service.imgGalery.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={image.Title}
                    className={currentImageIndex === index ? 'active' : ''}
                    onClick={() => handleThumbnailClick(index)}
                  />
                ))}
              </div>
            </div>
          )}
          
          <div className="contact-button-container">
            <a style={{cursor: 'pointer', border: 'none', zIndex: 1000, position: 'relative', fontSize: '15px'}} href={(translations.SocialNetworks.list as SocialNetworkLink[]).find(net => net.name === 'WhatsApp')?.url} target="_blank" rel="noopener noreferrer" className="service-detail-contact-button">
              <FaWhatsapp /> {translations.servicetext.discussButton}
            </a>
          </div>
        </div>
      </div>

      <ImageModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        imageUrl={modalImageUrl}
        altText={modalAltText}
      />
    </>
  );
};

export default ServiceDetailPage;


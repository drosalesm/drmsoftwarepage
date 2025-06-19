import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  altText: string;
}

const ImageModal = ({ isOpen, onClose, imageUrl, altText }: ImageModalProps) => {
  // If the modal is not open, render nothing.
  if (!isOpen) {
    return null;
  }

  // Prevents the modal from closing when the image itself is clicked.
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    // The overlay will close the modal when clicked.
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={handleContentClick}>
        <button className="image-modal-close-button" onClick={onClose} aria-label="Close image view">
          <FaTimes />
        </button>
        <img src={imageUrl} alt={altText} className="image-modal-image" />
      </div>
    </div>
  );
};

export default ImageModal;
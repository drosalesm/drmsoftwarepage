import React, { ReactNode } from 'react';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleModalContentClick}>
        <button className="modal-close-button" onClick={onClose} aria-label="Close modal">
          <FaTimes />
        </button>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
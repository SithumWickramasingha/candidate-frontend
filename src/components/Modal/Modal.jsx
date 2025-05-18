import React from "react";
import "./Modal.css";
import { X } from 'lucide-react';

const Modal = ({isOpen, onClose, children}) => {
  if (!isOpen) return null;
  return(
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
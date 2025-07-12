// src/components/Modal.jsx
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeButton} onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff8f2',                 // Matches help section
    padding: '2rem',
    borderRadius: '12px',
    border: '1px solid #f2e6dc',                // Matches help section border
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    width: '90%',
    maxWidth: '600px',
    maxHeight: '85vh',
    overflowY: 'auto',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#ffe5b4',                // Matches help toggle button
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    fontSize: '1rem',
    padding: '0.4rem 0.8rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Modal;

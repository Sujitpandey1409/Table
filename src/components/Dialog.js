// components/Dialog.js
import React from 'react';
import './Dialog.css';

const Dialog = ({ visible, onClose, children }) => {
  if (!visible) return null;

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="dialog-content">{children}</div>
      </div>
    </div>
  );
};

export default Dialog;

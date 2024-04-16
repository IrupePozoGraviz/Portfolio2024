import React from 'react';
import { useModal } from './modalContext';
import '../css/buttons.css'

export const ContactButton = ({ style, children }) => {
  const { openModal } = useModal();

  const handleClick = () => {
    console.log('Button clicked, opening modal...');
    openModal();
  };

  // Hantera tangentbordsinteraktioner
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      openModal();
    }
  };

  return (
    <button
      className="contactButton"
      type="button"
      style={style}
      onClick={handleClick}
      onKeyDown={handleKeyPress}
      aria-label={children ? children.toString() : 'Kontakta Happier soul'}
      tabIndex={0} // Garanterar att knappen är fokuserbar
    >
      {children || 'Kontakta mig'}
    </button>
  );
};

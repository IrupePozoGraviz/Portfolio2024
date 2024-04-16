import React, { useEffect, useRef } from 'react';
import { useClient } from 'next';
import { useModal } from '@/components/modalContext';
import ContactForm from '@/components/contactForm';
import styles from '@/styles/modal.module.css';

const ContactModal = () => {
  useClient();
  const { isModalOpen, closeModal } = useModal();
  const modalRef = useRef(null);

  useEffect(() => {
    if (isModalOpen) {
      modalRef.current.focus();
      const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          closeModal();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isModalOpen, closeModal]);

  if (!isModalOpen) return null;

  return (
    <div
      className={styles.modal}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
      ref={modalRef}
      tabIndex="-1"
    >
      <div className={styles.modalContent}>
        <button
          type="button"
          className={styles.close}
          onClick={closeModal}
          aria-label="StÃĪng"
        >
          &times;
        </button>
        <p id="modalDescription" className={styles.visuallyHidden}>
          DialogfÃķnster fÃķr att kontakta Separationscoach. Tryck Escape fÃķr att stÃĪnga.
        </p>
        <div className={styles.modalBody}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;


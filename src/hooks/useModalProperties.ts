import { useEffect } from 'react';

function useModalProperties(isOpen: boolean, closeModal: () => void) {
  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === 'Escape' && isOpen) {
        closeModal();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeydown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [isOpen, closeModal]);

  // useEffect(() => {
  //   const scrollY = window.scrollY;
  //   const originalStyles = {
  //     position: document.body.style.position,
  //     top: document.body.style.top,
  //     width: document.body.style.width,
  //     overflowY: document.body.style.overflowY
  //   };

  //   if (isOpen) {
  //     document.body.style.overflowY = 'scroll';
  //     document.body.style.position = 'fixed';
  //     document.body.style.width = '100%';
  //     document.body.style.top = `-${scrollY}px`;

  //     return () => {
  //       document.body.style.position = originalStyles.position;
  //       document.body.style.top = originalStyles.top;
  //       document.body.style.width = originalStyles.width;
  //       document.body.style.overflowY = originalStyles.overflowY;
  //       window.scrollTo(0, scrollY);
  //     };
  //   }
  // }, [isOpen]);
}

export default useModalProperties;

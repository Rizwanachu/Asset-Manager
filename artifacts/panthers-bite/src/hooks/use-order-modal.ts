import { useState, useCallback } from 'react';

// A simple hook to manage the order modal state across the app
// In a larger app, this might be a Context, but for a single page
// passing it down or using an event emitter is fine. We'll use a simple
// singleton pattern via custom event for easy cross-component triggering
// without prop drilling in this specific one-page structure.

export const OPEN_ORDER_MODAL_EVENT = 'panthers-bite-open-order-modal';

export function useOrderModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
    // Lock body scroll
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    // Unlock body scroll
    document.body.style.overflow = 'unset';
  }, []);

  return {
    isOpen,
    openModal,
    closeModal
  };
}

export function triggerOrderModal() {
  window.dispatchEvent(new Event(OPEN_ORDER_MODAL_EVENT));
}

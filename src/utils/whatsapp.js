import { CONTACT_INFO } from '../constants/data';

export const openWhatsApp = (message = '') => {
  const defaultText = message || 'Hello ScholarBridge! I would like to inquire about your academic services.';
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(defaultText)}`;
  window.open(whatsappUrl, '_blank');
};

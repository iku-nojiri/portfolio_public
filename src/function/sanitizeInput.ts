import DOMPurify from 'dompurify';

export const sanitizeInput = (text: string) => {
  return DOMPurify.sanitize(text);
};

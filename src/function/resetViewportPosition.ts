export const resetViewportPosition = (): void => {
  window.scrollTo({ top: 0, behavior: 'instant' });
};

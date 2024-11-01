export const scrollWithOffset = (el: HTMLElement | null, offsetSize: number): void => {
  const yOffset = offsetSize;
  const y = el ? el.getBoundingClientRect().top + window.scrollY - yOffset : 0;
  window.scrollTo({ top: y, behavior: 'smooth' });
};

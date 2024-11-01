export const transitionToHome = (): void => {
  const isHomePage: boolean = location.pathname === '/';
  isHomePage ? window.scrollTo({ top: 0, behavior: 'smooth' }) : window.scrollTo({ top: 0, behavior: 'instant' });
};

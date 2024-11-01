import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from './views/uis/layouts/header/Header';
import { Main } from './views/uis/layouts/main/Main';
import { Footer } from './views/uis/layouts/footer/Footer';
import { HomePage } from './views/pages/HomePage';
import { WorksPage } from './views/pages/WorksPage';
import { SkillsPage } from './views/pages/SkillsPage';
import { AboutPage } from './views/pages/AboutPage';
import { ContactPage } from './views/pages/contact/ContactPage';
import { SuccessPage } from './views/pages/contact/SuccessPage';
import { FailedPage } from './views/pages/contact/FailedPage';
import { NotFoundPage } from './views/pages/NotFoundPage';
import './App.css';

export const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/works' element={<WorksPage />} />
            <Route path='/skills' element={<SkillsPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/contact/success/' element={<SuccessPage />} />
            <Route path='/contact/failed' element={<FailedPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
};

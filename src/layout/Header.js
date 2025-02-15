// src/layout/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';
import '../scss/layout/_header.scss';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <div className="logo">
        <Link to="/">{t('header.logo')}</Link>
      </div>
      <nav className="nav-links">
        <Link to="/about">{t('header.about')}</Link>
        <Link to="/projects">{t('header.projects')}</Link>
        <Link to="/contact">{t('header.contact')}</Link>
      </nav>
      <div className="language-switcher">
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;

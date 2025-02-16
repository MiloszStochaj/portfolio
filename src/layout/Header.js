// src/layout/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header__container">
          {/* Logo */}
          <div className="header__logo">
            <Link to="/">
              {t('header.logo')}
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="header__nav">
            <ul>
              <li className="header__nav-item">
                <Link to="/" onClick={closeMenu}>{t('header.home')}</Link>
              </li>
              <li className="header__nav-item">
                <Link to="/about" onClick={closeMenu}>{t('header.about')}</Link>
              </li>
              <li className="header__nav-item">
                <Link to="/projects" onClick={closeMenu}>{t('header.projects')}</Link>
              </li>
              <li className="header__nav-item">
                <Link to="/contact" onClick={closeMenu}>{t('header.contact')}</Link>
              </li>
            </ul>
          </nav>
        </div>

        <LanguageSwitcher />

        {/* Hamburger */}
        <button className="header__menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </header>

      {/* Mobile Menu */}
      <div className={`header__mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        {/* Ikona Zamknięcia */}
        <button className="header__close-menu" onClick={closeMenu}>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </button>

        <ul className="header__mobile-nav">
          <h3 className="header__nav-header gradient-text">{t('header.menu')}</h3>
          <li className="header__nav-item">
              <Link to="/" onClick={closeMenu}>{t('header.home')}</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/about" onClick={closeMenu}>{t('header.about')}</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/projects" onClick={closeMenu}>{t('header.projects')}</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/contact" onClick={closeMenu}>{t('header.contact')}</Link>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      <div
        className={`header__overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default Header;

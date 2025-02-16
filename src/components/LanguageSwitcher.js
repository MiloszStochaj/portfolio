// src/components/LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div 
      className="dropdown" 
      onMouseEnter={(e) => e.currentTarget.classList.add('open')} 
      onMouseLeave={(e) => e.currentTarget.classList.remove('open')}
    >
      <button className="dropdown-toggle">
        {currentLanguage === 'en' ? 'English' : 'Polski'}
        <span className="arrow"></span>
      </button>
      <ul className="dropdown-menu">
        <li onClick={() => handleLanguageChange('en')}>English</li>
        <li onClick={() => handleLanguageChange('pl')}>Polski</li>
      </ul>
    </div>
  );
}

export default LanguageSwitcher;

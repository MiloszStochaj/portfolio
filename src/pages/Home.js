import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import myPhoto from '../assets/myPhoto.jpg';

function Home() {
  const { t } = useTranslation();

  return (
    <section className="section__hero">
      <div className="section__hero-container">
        <div className="section__hero-image">
          <img src={myPhoto} alt="Miłosz Stochaj" />
        </div>
        <div className="section__hero-content">
          <h6 className="section__hero-title gradient-text">{t('home.title')}</h6>
          <h1 className="section__hero-name">{t('home.name')}</h1>
          <h4 className="section__hero-description">
            {t('home.description')}
          </h4>
          <Link to="/projects" className="btn btn-white">
            {t('home.portfolioButton')}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;

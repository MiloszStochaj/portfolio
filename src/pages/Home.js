import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faReact, faHtml5, faSass, faFigma, faWordpress, faGithub, faGitAlt, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import myPhoto from '../assets/myPhoto-2.jpg';
import occludent from '../assets/occludent.png';
import academy from '../assets/academy.png';
import woodsigner from '../assets/woodsigner.png';

function Home() {
  const { t } = useTranslation();
  const sliderRef = useRef(null);

  const techStack = [
    { icon: faAngular, name: 'Angular', className: 'angular' },
    { icon: faReact, name: 'React', className: 'react' },
    { icon: faDatabase, name: 'GraphQL', className: 'graphql' },
    { icon: faCode, name: 'Rest API', className: 'restapi' },
    { icon: faSass, name: 'SCSS', className: 'scss' },
    { icon: faHtml5, name: 'HTML', className: 'html' },
    { icon: faFigma, name: 'Figma', className: 'figma' },
    { icon: faWordpress, name: 'WordPress', className: 'wordpress' },
    { icon: faCode, name: 'PHP', className: 'php' },
    { icon: faGithub, name: 'GitHub', className: 'github' },
    { icon: faGitAlt, name: 'Git', className: 'git' },
    { icon: faJsSquare, name: 'JavaScript', className: 'javascript' },
  ];

  const settings = {
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 5,
    speed: 500,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
  };

  return (
    <section className="section__home">

      {/* Hero Section */}
      <section className="section__hero">
        <div className="icon-background"></div>
        <div className="section__hero-container">
          <div className="section__hero-image">
            <img src={myPhoto} alt="Miłosz Stochaj" />
          </div>
          <div className="section__hero-content">
            <h6 className="section__hero-title gradient-text">{t('home.title')}</h6>
            <h1 className="section__hero-name">{t('home.name')}</h1>
            <p className="section__hero-description">{t('home.description')}</p>
            <Link to="/projects" className="btn btn-white">
              {t('home.portfolioButton')}
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Carousel */}
      <section className="section__techstack">
        <div className="section__techstack-header">
          <h6 className="section__techstack-title gradient-text">{t('home.techStackHeader')}</h6>
          <h1 className="section__techstack-desc">{t('home.techStackTitle')}</h1>
          <p className="section__techstack-desc">{t('home.techStackDescription')}</p>
        </div>

        <div className="slider-controls">
          <button
            className="slider-prev"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="2x" />
          </button>
          <button
            className="slider-next"
            onClick={() => sliderRef.current.slickNext()}
          >
            <FontAwesomeIcon icon={faChevronRight} size="2x" />
          </button>
        </div>

        <Slider ref={sliderRef} {...settings} className="section__techstack-grid">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-card">
              <FontAwesomeIcon 
                icon={tech.icon} 
                size="4x" 
                className={`tech-icon ${tech.className}`} 
              />
              <p>{tech.name}</p>
            </div>
          ))}
        </Slider>
      </section>

      {/* Projects Section */}
      <section className="section__projects">
        <div className="section__projects-header">
          <h6 className="section__projects-title gradient-text">{t('home.projectsTitle')}</h6>
          <h1 className="section__projects-desc">{t('home.projectsHeader')}</h1>
          <p className="section__projects-desc">{t('home.projectsDescription')}</p>
        </div>
        <Link to="/projects" className="btn btn-white">{t('home.viewMore')}</Link>
        
        <div className="section__projects-list">
          <div className="project-card">
            <img src={occludent} alt="Project 1" className="project-image" />
            <h3 className="project-title">Occludent - sklep stomatologiczny</h3>
            <Link to="https://occludent.pl/" className="btn btn-underline">{t('home.viewProject')}</Link>
          </div>
          <div className="project-card">
            <img src={woodsigner} alt="Project 2" className="project-image" />
            <h3 className="project-title">Woodsigner - sklep z meblami</h3>
            <Link to="https://woodsigner.eu/" className="btn btn-underline">{t('home.viewProject')}</Link>
          </div>
          <div className="project-card">
            <img src={academy} alt="Project 3" className="project-image" />
            <h3 className="project-title">Akademia Bausch - strona z kursami</h3>
            <Link to="https://akademiabausch.pl/" className="btn btn-underline">{t('home.viewProject')}</Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;

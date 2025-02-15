// Projects.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('projects.title')}</h1>
      <p>{t('projects.description')}</p>
    </div>
  );
}

export default Projects;

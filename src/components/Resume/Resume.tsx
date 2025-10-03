import useLanguage from '../../hooks/useLanguage';
import Section from '../Section/Section';
import './Resume.css';

const resumeTranslation = {
  es: {
    resumeTitle: 'Resumen',
    resume:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente exercitationem minima debitis neque nesciunt voluptate repellendus excepturi, ad, aut cum hic facilis voluptatum expedita distinctio ab eos, necessitatibus sunt delectus!\nLorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat a debitis beatae nihil odio, in vel incidunt harum dolor, est, laboriosam quaerat perspiciatis enim. Laborum vero fuga doloremque delectus quae?'
  },
  en: {
    resumeTitle: 'Resume',
    resume:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat a debitis beatae nihil odio, in vel incidunt harum dolor, est, laboriosam quaerat perspiciatis enim. Laborum vero fuga doloremque delectus quae?\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente exercitationem minima debitis neque nesciunt voluptate repellendus excepturi, ad, aut cum hic facilis voluptatum expedita distinctio ab eos, necessitatibus sunt delectus!'
  }
};

const Resume = () => {
  const { language } = useLanguage();

  return (
    <Section title={resumeTranslation[language].resumeTitle}>
      <p>{resumeTranslation[language].resume}</p>
    </Section>
  );
};

export default Resume;

import Section from '../components/Section';
import resumeData from '../data/resume.json';
import { useSettings } from '../hooks/useSettings';

const resume = resumeData;

const resumeTranslation = {
  es: {
    title: 'Resumen'
  },
  en: {
    title: 'Resume'
  }
};

const Resume = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <main className="z-10 min-h-screen border-x border-slate-300 bg-white px-6 pt-40 pb-20 shadow-sm xl:mx-20 xl:px-15 xl:pt-46">
      <Section title={resumeTranslation[language].title}>
        <p className="text-md m-4 rounded-sm border-l-4 border-slate-700 bg-slate-200 p-4 text-justify font-medium whitespace-pre-line">
          {resume[language].intro}
        </p>
        <p className="my-2 px-4 text-justify whitespace-pre-line">{resume[language].resume}</p>
      </Section>
    </main>
  );
};

export default Resume;

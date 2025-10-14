import resumeData from '../data/resume.json';
import useSettings from '../hooks/useSettings';

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
    <main className="z-10 mx-20 min-h-screen border-x border-blue-300 bg-white px-20 pt-50 pb-20 shadow-sm">
      <section>
        <h2 className="text-2xl font-bold uppercase">{resumeTranslation[language].title}</h2>
        <hr className="my-2" />
        <p className="text-md my-4 border-l-4 border-blue-800 bg-blue-100 px-6 py-4 text-justify font-medium text-blue-800">
          {resume[language].intro}
        </p>
        <p className="text-justify whitespace-pre-line">{resume[language].resume}</p>
      </section>
    </main>
  );
};

export default Resume;

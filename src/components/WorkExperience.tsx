import workExperienceData from '../data/workExperience.json';
import { useSettings } from '../hooks/useSettings';
import Separator from './Separator';
import Section from './Section';
import React from 'react';

const workExperience = workExperienceData.reverse();

const workExperienceTranslation = {
  es: {
    workExperienceTitle: 'Experiencia Laboral'
  },
  en: {
    workExperienceTitle: 'Work Experience'
  }
};

const WorkExperience = () => {
  const { settings } = useSettings();
  const { language } = settings;

  // const [modalId, setModalId] = useState<number | null>(null);

  // useEffect(() => {
  //   function handleKeydown(event: KeyboardEvent) {
  //     if (event.key === 'Escape' && modalId) {
  //       setModalId(null);
  //     }
  //   }

  //   if (modalId) {
  //     document.addEventListener('keydown', handleKeydown);
  //   }

  //   return () => {
  //     document.removeEventListener('keydown', handleKeydown);
  //   };
  // }, [modalId]);

  return (
    <Section title={workExperienceTranslation[language].workExperienceTitle}>
      {workExperience.map((work) => (
        <React.Fragment key={work.id}>
          {/* {modalId === work.id && (
            <div
              className="fixed inset-0 z-40 flex h-screen items-center justify-center bg-slate-900/80"
              onClick={() => setModalId(null)}
            >
              <div
                onClick={(event) => event.stopPropagation()}
                className="rounded-sm border-slate-300 bg-white px-10 py-4 shadow-sm"
              >
                <ul className="mt-1 ml-4 list-disc">
                  {work[language].subjects?.map((subj) => (
                    <li
                      className="text-lg font-medium"
                      key={`${subj.slice(0, 2)}-${work.id}`}
                    >
                      {subj}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )} */}
          <div className="my-4 flex flex-col gap-4 px-4 hover:rounded-sm hover:bg-slate-50 xl:flex-row">
            <div className="flex flex-col xl:w-1/4">
              <h3 className="text-lg/6 font-semibold">{work[language].location}</h3>
              <span className="font-medium">{work[language].city}</span>
            </div>
            <Separator />
            <div className="flex flex-col xl:w-3/4">
              <h3 className="text-lg/6 font-bold">{work[language].name}</h3>
              {/* {work[language].subjects && (
                <span
                  onClick={() => setModalId(work.id)}
                  className="cursor-pointer font-medium text-blue-800 underline transition-colors hover:text-blue-600"
                >
                  Ver asignaturas impartidas
                </span>
              )} */}
              <ul className="mt-1 ml-4 list-disc">
                {work[language].description.map((desc) => (
                  <li key={`${desc}-${work.id}`}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="my-2 border-slate-300 xl:hidden" />
        </React.Fragment>
      ))}
    </Section>
  );
};

export default WorkExperience;

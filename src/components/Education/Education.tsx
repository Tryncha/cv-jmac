// import { useState } from 'react';
import educationData from '../../data/education.json';
import graduatesData from '../../data/graduates.json';
import otherEducationData from '../../data/otherEducation.json';
import useSettings from '../../hooks/useSettings';
import './Education.css';
// import useModalProperties from '../../hooks/useModalProperties';

const education = educationData.reverse();
const graduates = graduatesData.reverse();
const otherEducation = otherEducationData;

const educationTranslation = {
  es: {
    educationTitle: 'Educación',
    graduatesTitle: 'Diplomados'
  },
  en: {
    educationTitle: 'Education',
    graduatesTitle: 'Graduates'
  }
};

// interface EducationModalProps {
//   isOpen: boolean;
//   closeModal: () => void;
// }

// const EducationModal = ({ isOpen, closeModal }: EducationModalProps) => {
//   useModalProperties(isOpen, closeModal);

//   if (!isOpen) return null;

//   return (
//     <div
//       className="EducationModal-container"
//       onClick={closeModal}
//     >
//       <article
//         className="EducationModal"
//         onClick={(event) => event.stopPropagation()}
//       >
//         <button onClick={closeModal}>Close</button>
//         {otherEducation.map((edu) => (
//           <div
//             key={edu.id}
//             className="Education-item"
//           >
//             <div className="Education-mainInfo">
//               <h3>{edu.name}</h3>
//               <h4>{edu.institution}</h4>
//               <span>{edu.city}</span>
//             </div>
//             <div className="Education-dateInfo">
//               <h3>{edu.date}</h3>
//             </div>
//           </div>
//         ))}
//       </article>
//     </div>
//   );
// };

const Education = () => {
  const { settings } = useSettings();
  const { language } = settings;

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // function openModal() {
  //   setIsModalOpen(true);
  // }

  // function closeModal() {
  //   setIsModalOpen(false);
  // }

  return (
    <>
      {/* <EducationModal
        isOpen={isModalOpen}
        closeModal={closeModal}
      /> */}
      <article className="Education">
        <section className="Education-main">
          <h2 className="u-vitaeSubtitle">{educationTranslation[language].educationTitle}</h2>
          <hr />
          {education.map((edu) => (
            <div
              key={edu.id}
              className="Education-item"
            >
              <div className="Education-mainInfo">
                <h3>{edu[language].degreeTitle}</h3>
                <h4>{edu[language].institution}</h4>
                <span>{edu[language].city}</span>
              </div>
              <div className="Education-awards">
                <span>{edu[language].award}</span>
              </div>
              <div className="Education-dateInfo">
                <h3>{edu.date}</h3>
              </div>
            </div>
          ))}
        </section>
        <section className="Education-graduates">
          <h2 className="u-vitaeSubtitle">{educationTranslation[language].graduatesTitle}</h2>
          <hr />
          {graduates.map((grd) => (
            <div
              key={grd.id}
              className="Education-item"
            >
              <div className="Education-mainInfo">
                <h3>{grd[language].graduateTitle}</h3>
                <h4>{grd[language].institution}</h4>
                <span>{grd[language].city}</span>
              </div>
              <div className="Education-dateInfo">
                <h3>{grd[language].date}</h3>
                <span>{grd[language].duration}</span>
              </div>
            </div>
          ))}
          {/* <hr />
          <button onClick={openModal}>
            <h2 className="u-vitaeSubtitle">Other Education</h2>
          </button> */}
        </section>
      </article>
      <details>
        <summary className="u-vitaeSubtitle">Other Studies</summary>
        <hr />
        {otherEducation.map((edu) => (
          <>
            <div
              key={edu.id}
              className="Education-item"
            >
              <div className="Education-mainInfo">
                <h3>{edu.name}</h3>
                <h4>{edu.institution}</h4>
                <span>{edu.city}</span>
              </div>

              <div className="Education-dateInfo">
                <h3>{edu.date}</h3>
                <span>{edu.duration}</span>
              </div>
            </div>
          </>
        ))}
      </details>
    </>
  );
};

export default Education;

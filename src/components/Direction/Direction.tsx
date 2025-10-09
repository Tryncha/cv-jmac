import teachingActivityData from '../../data/teachingActivity.json';
import useSettings from '../../hooks/useSettings';
import Separator from '../WorkExperience/Separator/Separator';
import './Direction.css';

const teachingActivity = teachingActivityData.reverse();

const Direction = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <section className="WorkExperience">
      <h2 className="u-vitaeSubtitle">Dirección de tesis y/o trabajos de fin de estudios</h2>
      <hr />
      {teachingActivity.map((act) => (
        <div
          key={act.id}
          className="WorkExperience-work"
        >
          <div className="WorkExperience-workMainInfo">
            <h3>{act[language].institution}</h3>
            <span>{act[language].city}</span>
            <span>{act[language].date}</span>
          </div>
          <Separator />
          <div className="WorkExperience-workDescription">
            <h3>{act[language].name}</h3>
            <h4>{act.student}</h4>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Direction;

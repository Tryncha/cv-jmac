import previousJobs from './previousJobs.json';
import './PreviousJobs.css';

const JobCard = ({ date, duration, location, job }) => {
  return (
    <div className="JobCard">
      <div className="JobCard-info">
        <span className="JobCard-date">{date}</span>
        <span className="JobCard-duration">{duration}</span>
      </div>
      <div className="JobCard-info">
        <span className="JobCard-location">{location}</span>
        <span className="JobCard-job">{job}</span>
      </div>
    </div>
  );
};

const PreviousJobs = () => {
  return (
    <div className="PreviousJobs">
      <h2 className="PreviousJobs-title">Trabajos anteriores</h2>
      <div className="PreviousJobs-jobCards">
        {previousJobs.map((prevJob) => (
          <JobCard
            key={prevJob.id}
            date={prevJob.date}
            duration={prevJob.duration}
            location={prevJob.location}
            job={prevJob.job}
          />
        ))}
      </div>
    </div>
  );
};

export default PreviousJobs;

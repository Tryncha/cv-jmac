import './CurrentJob.css';
import currentJob from './currentJob.json';

const CurrentJob = () => {
  return (
    <>
      <section className="CurrentJobInfo">
        <h2 className="CurrentJobInfo-title">Situación Profesional Actual</h2>

        <h3>Ciudad entidad empleadora</h3>
        <p>{currentJob.city}</p>

        <h3>Entidad empleadora</h3>
        <p>{currentJob.location}</p>

        <h3>Departamento</h3>
        <p>{currentJob.department}</p>

        <h3>Resumen de la actividad profesional</h3>
        <p>{currentJob.resume}</p>

        {/* <h3>Funciones desempeñadas</h3>
        <p>{currentJob.functions}</p> */}
      </section>
    </>
  );
};

export default CurrentJob;

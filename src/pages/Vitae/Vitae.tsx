import About from '../../components/About/About';
import Studies from '../../components/Studies/Studies';
import WorkExperience from '../../components/WorkExperience/WorkExperience';
import Direction from '../../components/Direction/Direction';
import './Vitae.css';
import Separator from '../../components/Separator/Separator';

const Vitae = () => {
  return (
    <main className="Vitae">
      <About />
      <Studies />
      <WorkExperience />
      <Direction />
      <section>
        <h2>Participaciones como jurado evaluador</h2>
        <hr />
        <div className="my-8 flex h-30 gap-5">
          <div className="flex w-1/4 flex-col gap-0.5">
            <h3>Universidad Nacional de Colombia</h3>
            <span>Manizales, Colombia</span>
            <span>Dic 17, 2019</span>
          </div>
          <Separator />
          <div className="flex w-3/4 flex-col gap-0.5">
            <span>Maestría en Ingeniería - Ingeniería Química</span>
            <h3>
              Biorrefinerias basadas en la conversión catalítica de biomasa para la producción de compuestos fenólicos a
              partir de residuos de "Eucalyptus grandis" y "Calendula officinalis"
            </h3>
            <h4>Estudiante: Jhonny Alejandro Poveda Giraldo</h4>
            <h4>Director: Carlos Ariel Cardona Alzate</h4>
            <h4>Rpresentante del Comité Asesor: Ramiro Betancourt Grajales</h4>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Vitae;

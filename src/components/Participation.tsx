import useSettings from '../hooks/useSettings';
import Separator from './Separator/Separator';

const participationTranslation = {
  es: {
    title: 'Participaciones como Miembro de Comité de Tesis'
  },
  en: {
    title: 'Participation as Thesis Committee Member'
  }
};

const Participation = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <section>
      <h2>{participationTranslation[language].title}</h2>
      <hr />
      <div className="my-6 flex h-40 gap-5">
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
          <h4>Representante del Comité Asesor: Ramiro Betancourt Grajales</h4>
        </div>
      </div>
    </section>
  );
};

export default Participation;

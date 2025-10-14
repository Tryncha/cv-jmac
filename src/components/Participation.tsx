import { useSettings } from '../hooks/useSettings';
import Separator from './Separator';
import Section from './Section';

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
    <Section title={participationTranslation[language].title}>
      <div className="flex px-4 py-2 hover:rounded-sm hover:bg-slate-50">
        <div className="flex w-1/4 flex-col">
          <h3 className="text-lg/6 font-bold">Universidad Nacional de Colombia</h3>
          <span className="font-medium">Manizales, Colombia</span>
          <span className="font-medium">Dic 17, 2019</span>
        </div>
        <Separator />
        <div className="flex w-3/4 flex-col px-4">
          <span className="font-medium">Maestría en Ingeniería - Ingeniería Química</span>
          <h3 className="text-lg/6 font-bold">
            Biorrefinerias basadas en la conversión catalítica de biomasa para la producción de compuestos fenólicos a
            partir de residuos de "Eucalyptus grandis" y "Calendula officinalis"
          </h3>
          <span className="font-medium">Estudiante: Jhonny Alejandro Poveda Giraldo</span>
          <span className="font-medium">Director: Carlos Ariel Cardona Alzate</span>
          <span className="font-medium">Representante del Comité Asesor: Ramiro Betancourt Grajales</span>
        </div>
      </div>
    </Section>
  );
};

export default Participation;

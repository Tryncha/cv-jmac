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
      <div className="my-4 flex flex-col gap-4 px-4 hover:rounded-sm hover:bg-slate-50 xl:flex-row">
        <div className="flex flex-col xl:w-1/4">
          <h3 className="text-lg/6 font-semibold">Universidad Nacional de Colombia (UNAL)</h3>
          <span className="font-medium">Manizales, Colombia</span>
        </div>
        <Separator />
        <div className="flex flex-col xl:w-3/4">
          <h3 className="text-lg/6 font-semibold">
            Biorrefinerias basadas en la conversión catalítica de biomasa para la producción de compuestos fenólicos a
            partir de residuos de "Eucalyptus grandis" y "Calendula officinalis"
          </h3>
          <span className="font-medium">Estudiante: Jhonny Alejandro Poveda Giraldo</span>
          <span className="font-medium">Director: Carlos Ariel Cardona Alzate</span>
          <span className="font-medium">Maestría en Ingeniería - Ingeniería Química</span>
        </div>
      </div>
      <hr className="my-2 border-slate-300 xl:hidden" />
    </Section>
  );
};

export default Participation;

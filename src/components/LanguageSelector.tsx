import useSettings from '../hooks/useSettings';
import type { Language } from '../types';

interface LanguageButtonProps {
  languageOption: Language;
}

const LanguageButton = ({ languageOption }: LanguageButtonProps) => {
  const { changeLanguage } = useSettings();

  return (
    <button
      className="z-30 flex cursor-pointer gap-1 border-slate-300 px-2 py-1 font-semibold uppercase"
      onClick={() => changeLanguage(languageOption)}
    >
      <img
        src={`icons/languages/${languageOption}.png`}
        width={16}
        height={16}
      />
      {languageOption}
    </button>
  );
};

const LanguageSelector = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <div className="relative flex rounded-xl border-2 border-slate-300 bg-slate-300">
      <div
        className={`${
          language === 'es'
            ? 'absolute top-0 left-0 h-full w-1/2 rounded-xl border border-slate-300 bg-slate-50/40'
            : 'absolute top-0 left-[50%] h-full w-1/2 rounded-xl border border-slate-300 bg-slate-50/40'
        } z-20 transition-all`}
      />
      <LanguageButton languageOption="es" />
      <LanguageButton languageOption="en" />
    </div>
  );
};

export default LanguageSelector;

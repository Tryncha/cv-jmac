import { useSettings } from '../hooks/useSettings';
import aboutInfoData from '../data/aboutInfo.json';
import contactData from '../data/contact.json';
import { useState } from 'react';
import {
  BlueSkyIcon,
  CopyIcon,
  CVLacIcon,
  LinkedInIcon,
  OrcidIcon,
  ResearchGateIcon,
  ScholarIcon,
  ScopusIcon,
  XIcon
} from '../components/Icons';

const aboutInfo = aboutInfoData;
const contact = contactData;

const contactTranslation = {
  es: {
    sendMailTitle: 'Enviar un correo',
    mainLinksTitle: 'Enlaces de interés'
  },
  en: {
    sendMailTitle: 'Send mail',
    mainLinksTitle: 'Links of interest'
  }
};

interface InstitutionMailProps {
  institutionName: string;
  institutionLogo: string;
  address: string;
}

const InstitutionMail = ({ institutionName, institutionLogo, address }: InstitutionMailProps) => {
  const { settings } = useSettings();
  const { language } = settings;

  const [isCopying, setIsCopying] = useState(false);

  const EMAIL_SUBJECTS = {
    es: 'Consulta',
    en: 'Consultation'
  };

  async function copyEmail(email: string) {
    if (isCopying) return null;

    try {
      await navigator.clipboard.writeText(email);
      setIsCopying(true);
      setTimeout(() => {
        setIsCopying(false);
      }, 4000);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error('Unknown error:', error);
      }
    }
  }

  return (
    <div className="my-8 flex flex-col items-center gap-4 hover:rounded-sm hover:bg-slate-50 2xl:flex-row">
      <img
        src={institutionLogo}
        alt={institutionName}
        width={200}
        height={100}
        className="aspect-video object-contain"
      />
      <div className="font-medium 2xl:w-100">
        <h3 className="text-lg 2xl:text-nowrap">{institutionName}</h3>
        <div className="flex items-center justify-center 2xl:justify-normal">
          <a
            // href={`mailto:${address}?Subject=${EMAIL_SUBJECT}`}
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${address}&su=${EMAIL_SUBJECTS[language]}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-blue-800 underline transition-colors hover:text-blue-600"
          >
            {address}
          </a>
          <div className="relative hidden xl:block">
            {isCopying && (
              <div className="animate-fade-out pointer-events-none absolute left-9 inline rounded-sm bg-slate-600 px-3 text-center text-nowrap text-slate-50">
                <div className="absolute top-1 -left-1 size-3 rotate-45 bg-slate-600" />
                ¡Dirección copiada!
              </div>
            )}
            <button
              onClick={() => copyEmail(address)}
              className="mx-2 cursor-pointer align-middle"
            >
              <CopyIcon size="16" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const socialIcons = [
  <XIcon size="70" />,
  <LinkedInIcon size="70" />,
  <BlueSkyIcon size="70" />,
  <ScholarIcon size="70" />,
  <CVLacIcon size="70" />,
  <ResearchGateIcon size="70" />,
  <ScopusIcon size="70" />,
  <OrcidIcon size="70" />
];

const Contact = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <main className="z-10 flex min-h-screen flex-col gap-12 border-x border-slate-300 bg-white pt-4 pb-18 shadow-sm sm:px-4 sm:pt-28 md:pt-36 xl:mx-12 xl:px-24 xl:pt-28 2xl:flex-row">
      <section className="flex-2">
        <h2 className="px-4 text-center text-2xl font-bold uppercase md:text-left">
          {contactTranslation[language].sendMailTitle}
        </h2>
        <hr className="my-2 border-slate-300" />
        {aboutInfo[language].email.map((email) => (
          <InstitutionMail
            key={email.id}
            institutionName={email.institutionName}
            institutionLogo={email.institutionLogo}
            address={email.address}
          />
        ))}
      </section>
      <section className="flex-1">
        <h2 className="px-4 text-center text-2xl font-bold uppercase md:text-left">
          {contactTranslation[language].mainLinksTitle}
        </h2>
        <hr className="my-2 border-slate-300" />
        <div className="grid grid-cols-2">
          {contact.map((cont) => (
            <a
              key={cont.id}
              className="flex flex-col items-center gap-4 py-2 hover:rounded-sm hover:bg-slate-50"
              href={cont.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {socialIcons[cont.id]}
              <span className="text-lg font-semibold text-blue-800 underline transition-colors hover:text-blue-600">
                {cont.name}
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Contact;

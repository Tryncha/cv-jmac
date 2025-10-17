import { useSettings } from '../hooks/useSettings';
import aboutInfoData from '../data/aboutInfo.json';
import contactData from '../data/contact.json';
import React, { useState } from 'react';
import { CopyIcon } from '../components/Icons';

const aboutInfo = aboutInfoData;
const contact = contactData;

const contactTranslation = {
  es: {
    sendMailTitle: 'Enviar un correo',
    mainLinksTitle: 'Enlaces'
  },
  en: {
    sendMailTitle: 'Send mail',
    mainLinksTitle: 'Links'
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
    <div className="my-8 flex items-center">
      <img
        src={institutionLogo}
        alt={institutionName}
        width={200}
        height={100}
        className="aspect-video object-contain"
      />
      <div className="w-100 font-medium">
        <h3 className="text-lg text-nowrap">{institutionName}</h3>
        <div className="flex items-center">
          <a
            // href={`mailto:${address}?Subject=${EMAIL_SUBJECT}`}
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${address}&su=${EMAIL_SUBJECTS[language]}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-blue-800 underline transition-colors hover:text-blue-600"
          >
            {address}
          </a>
          <div className="relative">
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

const Contact = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <main className="main-page">
      <section className="flex-1">
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
      <section>
        <h2 className="px-4 text-center text-2xl font-bold uppercase md:text-left">
          {contactTranslation[language].mainLinksTitle}
        </h2>
        <hr className="my-2 border-slate-300" />
        {contact.map((cont) => (
          <React.Fragment key={cont.id}>
            <div className="mx-4 flex">
              <div className="w-40 font-medium">{cont.name}: </div>
              <a
                href={cont.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-800 underline transition-colors hover:text-blue-600"
              >
                {cont.link}
              </a>
            </div>
            <hr className="my-2 border-slate-300" />
          </React.Fragment>
        ))}
      </section>
    </main>
  );
};

export default Contact;

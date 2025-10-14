import useSettings from '../hooks/useSettings';
import aboutInfoData from '../data/aboutInfo.json';
import contactData from '../data/contact.json';
import Section from '../components/Section';

const aboutInfo = aboutInfoData;
const contact = contactData;

const contactTranslation = {
  es: {
    sendMailTitle: 'Enviar un correo',
    mainLinksTitle: 'Enlaces principales'
  },
  en: {
    sendMailTitle: 'Send mail',
    mainLinksTitle: 'Main Links'
  }
};

const Contact = () => {
  const { settings } = useSettings();
  const { language } = settings;

  const EMAIL_SUBJECT = 'Consulta';

  return (
    <main className="z-10 flex min-h-screen flex-col gap-5 border-x border-slate-300 bg-white px-6 pt-40 pb-15 shadow-sm xl:mx-20 xl:px-15 xl:pt-46">
      <Section title={contactTranslation[language].sendMailTitle}>
        {aboutInfo[language].email.map((email) => (
          <>
            <div
              key={email.id}
              className="mx-4 flex"
            >
              <div className="w-100 font-medium">{email.institutionName}: </div>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email.address}&su=${EMAIL_SUBJECT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 underline transition-colors hover:text-blue-600"
              >
                {email.address}
              </a>
            </div>
            <hr className="my-2 border-slate-300" />
          </>
        ))}
      </Section>
      <Section title={contactTranslation[language].mainLinksTitle}>
        {contact.map((cont) => (
          <>
            <div
              key={cont.id}
              className="mx-4 flex"
            >
              <div className="w-100 font-medium">{cont.name}: </div>
              <a
                href={cont.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 underline transition-colors hover:text-blue-600"
              >
                {cont.link}
              </a>
            </div>
            <hr className="my-2 border-slate-300" />
          </>
        ))}
      </Section>
    </main>
  );
};

export default Contact;

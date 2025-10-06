import useSettings from '../../hooks/useSettings';
import './Contact.css';
import aboutInfoData from '../../data/aboutInfo.json';

const aboutInfo = aboutInfoData;

const contactTranslation = {
  es: {
    mailTitle: 'Enviar un correo'
  },
  en: {
    mailTitle: 'Send mail'
  }
};

const Contact = () => {
  const { settings } = useSettings();
  const { language } = settings;

  const EMAIL_SUBJECT = 'Consulta';

  return (
    <main className="Contact">
      <section>
        <h2 className="u-vitaeSubtitle">{contactTranslation[language].mailTitle}</h2>
        <hr />
        {aboutInfo[language].email.map((email) => (
          <div
            key={email.id}
            className="u-emailInfo"
          >
            <strong>{email.institutionName}: </strong>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email.address}&su=${EMAIL_SUBJECT}`}
              target="_blank"
            >
              {email.address}
            </a>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Contact;

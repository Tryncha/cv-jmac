import useSettings from '../../hooks/useSettings';
import './Contact.css';
import aboutInfoData from '../../data/aboutInfo.json';
import contactData from '../../data/contact.json';

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
    <main className="Contact">
      <section>
        <h2 className="u-vitaeSubtitle">{contactTranslation[language].sendMailTitle}</h2>
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
      <section>
        <h2 className="u-vitaeSubtitle">{contactTranslation[language].mainLinksTitle}</h2>
        <hr />
        {contact.map((cont) => (
          <div
            key={cont.id}
            className="u-emailInfo"
          >
            <strong>{cont.name}: </strong>
            <a
              href={cont.link}
              target="_blank"
            >
              {cont.link}
            </a>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Contact;

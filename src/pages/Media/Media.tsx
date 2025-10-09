import podcastsData from '../../data/podcasts.json';
import useSettings from '../../hooks/useSettings';
import './Media.css';

const podcasts = podcastsData;

const mediaTranslation = {
  es: {
    podcastsTitle: 'Escucha el último podcast',
    availableLanguages: 'Solo disponible en ',
    citationNote: 'Original episode from'
  },
  en: {
    podcastsTitle: 'Listen to the latest podcast',
    availableLanguages: 'Only available in '
  }
};

const Media = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <main className="Media">
      <section>
        <h2>{mediaTranslation[language].podcastsTitle}</h2>
        <hr />
        {podcasts.map((pod) => (
          <>
            <span>
              {pod[language].date} - {pod[language].duration} | {mediaTranslation[language].availableLanguages}
              {pod[language].languages.join(', ')}
            </span>
            <h3>{pod['es'].title}</h3>
            <p>{pod['es'].description}</p>
            <audio
              controls
              controlsList="nodownload"
              src={pod.audioSrc}
            ></audio>
            {language === 'es' ? (
              <div className="u-citationNote">
                <span>
                  Episodio original de <span className="u-italicText">"Investiga que no es poco"</span>.
                </span>
                <span>
                  Disponible en{' '}
                  <a
                    href="https://open.spotify.com/episode/3S1HDJ3DtMTN0dXYFVWEUm?si=71f03fd5375a4052"
                    target="_blank"
                  >
                    Spotify
                  </a>
                  .
                </span>
                <span>&copy; Castilla-La Mancha Media, 2025. Todos los derechos reservados.</span>
              </div>
            ) : (
              <div className="u-citationNote">
                <span>
                  Original episode from <span className="u-italicText">"Investiga que no es poco"</span>.
                </span>
                <span>
                  Available on{' '}
                  <a
                    href="https://open.spotify.com/episode/3S1HDJ3DtMTN0dXYFVWEUm?si=71f03fd5375a4052"
                    target="_blank"
                  >
                    Spotify
                  </a>
                  .
                </span>
                <span>&copy; Castilla-La Mancha Media, 2025. All rights reserved.</span>
              </div>
            )}
          </>
        ))}
      </section>
      <section>
        <h2>Vermú de nanociencia 2021: Materiales 3DOM e impresión 3D para Descontaminación ambiental</h2>
        <hr />
        <p>
          Materiales 3DOM e impresión 3D para Descontaminación ambiental por Jhon Mauricio Aguirre Cortes Ingeniero e
          investigador en ciencia y tecnología de materiales. Con experiencia en la síntesis y caracterización de
          nanoestructuras. Formulación y ejecución de proyectos. Docente.
        </p>
        <iframe
          id="video"
          width="600"
          height="315"
          src="https://www.youtube.com/embed/GjyXu3OyeBI"
          title="Dark Souls Dialogue - Hollow Merchant (Male)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
    </main>
  );
};

export default Media;

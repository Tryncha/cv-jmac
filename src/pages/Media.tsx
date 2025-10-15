import React from 'react';
import Section from '../components/Section';
import podcastsData from '../data/podcasts.json';
import { useSettings } from '../hooks/useSettings';

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
    <main className="z-10 flex min-h-screen flex-col gap-4 border-x border-slate-300 bg-white pt-4 pb-18 shadow-sm sm:px-4 sm:pt-28 xl:mx-20 xl:px-16">
      <Section
        title={`${mediaTranslation[language].podcastsTitle} (${mediaTranslation[language].availableLanguages} español)`}
      >
        {podcasts.map((pod) => (
          <React.Fragment key={pod.id}>
            <span className="my-2 px-4 text-justify whitespace-pre-line">
              {pod[language].date} - {pod[language].duration}
            </span>
            <h3 className="px-4 text-lg/6 font-bold">{pod[language].title}</h3>
            <p className="px-4 font-medium">{pod[language].description}</p>
            <audio
              controls
              controlsList="nodownload"
              className="my-4 w-full px-4"
            >
              <source
                src={pod.audioSrc}
                type="audio/mp3"
              />
            </audio>
            {language === 'es' ? (
              <div className="m-4 flex flex-col border-l-4 border-slate-700 bg-slate-200 p-4 text-sm font-medium">
                <span>
                  Episodio original de <span className="u-italicText">"Investiga que no es poco"</span>.
                </span>
                <span>
                  Disponible en{' '}
                  <a
                    href="https://open.spotify.com/episode/3S1HDJ3DtMTN0dXYFVWEUm?si=71f03fd5375a4052"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 underline transition-colors hover:text-blue-600"
                  >
                    Spotify
                  </a>
                  .
                </span>
                <span>&copy; Castilla-La Mancha Media, 2025. Todos los derechos reservados.</span>
              </div>
            ) : (
              <div className="m-4 flex flex-col border-l-4 border-slate-700 bg-slate-200 p-4 text-sm font-medium">
                <span>
                  Original episode from <span className="u-italicText">"Investiga que no es poco"</span>.
                </span>
                <span>
                  Available on{' '}
                  <a
                    href="https://open.spotify.com/episode/3S1HDJ3DtMTN0dXYFVWEUm?si=71f03fd5375a4052"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 underline transition-colors hover:text-blue-600"
                  >
                    Spotify
                  </a>
                  .
                </span>
                <span>&copy; Castilla-La Mancha Media, 2025. All rights reserved.</span>
              </div>
            )}
          </React.Fragment>
        ))}
      </Section>
      <Section title="Videos">
        <div className="flex">
          <div className="ml-4 w-1/2">
            <h3 className="text-lg/6 font-bold">
              Vermú de nanociencia 2021: Materiales 3DOM e impresión 3D para Descontaminación ambiental
            </h3>
            <p className="my-2 text-justify whitespace-pre-line">
              Materiales 3DOM e impresión 3D para Descontaminación ambiental por Jhon Mauricio Aguirre Cortes Ingeniero
              e investigador en ciencia y tecnología de materiales. Con experiencia en la síntesis y caracterización de
              nanoestructuras. Formulación y ejecución de proyectos. Docente.
            </p>
            <span className="font-medium">
              Enlace Original:{' '}
              <a
                href="https://www.youtube.com/watch?v=GjyXu3OyeBI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 underline transition-colors hover:text-blue-600"
              >
                https://www.youtube.com/watch?v=GjyXu3OyeBI
              </a>
            </span>
          </div>
          <div className="mr-4 flex w-1/2 justify-center">
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
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Media;

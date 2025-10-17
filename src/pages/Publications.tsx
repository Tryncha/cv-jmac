import React, { useState } from 'react';
import Section from '../components/Section';
import articlesData from '../data/articles.json';
import { useSettings } from '../hooks/useSettings';
import { useModalProperties } from '../hooks/useModalProperties';

import podcastsData from '../data/podcasts.json';

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

const articles = articlesData.reverse();

interface Impact {
  jm?: string;
  sjr?: string;
  jcr?: string;
}

interface ArticleProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  abstract: string;
  journal: string;
  authors: string[];
  date: string;
  doi: string;
  impact?: Impact;
}

const journals = {
  jm: 'Journal Metrics',
  sjr: 'Scimago Journal Ranking',
  jcr: 'Journal Citation Reports'
};

const Article = ({ imgSrc, imgAlt, title, abstract, journal, authors, date, doi, impact }: ArticleProps) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  useModalProperties(isImageOpen, () => setIsImageOpen(false));

  const MAX_LENGTH = 700;
  const BASE_DOI_URL = 'https://doi.org';

  return (
    <>
      {isImageOpen && (
        <div
          className="fixed inset-0 z-40 flex h-screen items-center justify-center bg-slate-900/80"
          onClick={() => setIsImageOpen(false)}
        >
          <div onClick={(event) => event.stopPropagation()}>
            <img
              src={imgSrc}
              alt={imgAlt}
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>
      )}
      <article className="mt-2 flex gap-8 px-8 py-4 hover:rounded-sm hover:bg-slate-50">
        <div
          onClick={() => setIsImageOpen(true)}
          className="w-100 flex-shrink-0 transition-transform hover:scale-105"
        >
          <img
            src={imgSrc}
            alt={imgAlt}
            draggable={false}
            className="h-60 w-full cursor-pointer border border-slate-200 bg-white object-cover p-4 shadow-sm"
          />
        </div>
        <div className="flex w-3/4 flex-col justify-center px-4">
          <div className="flex items-center justify-between gap-20">
            <div className="flex flex-col">
              <span className="font-medium">{date}</span>
              <a
                href={`${BASE_DOI_URL}/${doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg/6 font-bold text-blue-800 underline transition-colors hover:text-blue-600"
              >
                {title}
              </a>

              <span className="font-bold">{authors.join(', ')}</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-medium text-nowrap">{journal}</span>
              {impact &&
                (Object.entries(impact) as [keyof Impact, string][]).map(([key, impValue]) => (
                  <a
                    key={key}
                    href={impValue}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nowrap text-gray-600 underline transition-colors hover:text-gray-900"
                  >
                    {journals[key]}
                  </a>
                ))}
            </div>
          </div>
          <p className="my-4 text-justify">
            {abstract.length > MAX_LENGTH ? `${abstract.slice(0, MAX_LENGTH)}...` : abstract}
          </p>
          <span className="font-medium">
            DOI:{' '}
            <a
              href={`${BASE_DOI_URL}/${doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 underline transition-colors hover:text-blue-600"
            >
              {doi}
            </a>
          </span>
        </div>
      </article>
      <hr className="my-2 border-slate-300" />
    </>
  );
};

const Articles = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <section>
      {articles.map((art) => (
        <Article
          key={art.id}
          imgSrc={art.imgSrc}
          imgAlt={art.imgAlt}
          title={art[language].title}
          abstract={art[language].abstract}
          journal={art.journal}
          authors={art.contributors}
          date={art[language].date}
          doi={art.doi}
          impact={art.impact}
        />
      ))}
    </section>
  );
};

const Media = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <>
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
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Section>
    </>
  );
};

interface TabButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}

const TabButton = ({ children, isActive, onClick }: TabButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${isActive ? 'bg-slate-200' : 'bg-slate-100'} flex-1 cursor-pointer border-slate-300 text-2xl font-bold uppercase first:border-r`}
    >
      {children}
    </button>
  );
};

const publicationsTranslation = {
  es: {
    articles: 'Artículos',
    media: 'Multimedia'
  },
  en: {
    articles: 'Articles',
    media: 'Media'
  }
};

const Publications = () => {
  const { settings } = useSettings();
  const { language } = settings;

  const [activeTab, setActiveTab] = useState<'articles' | 'media'>('articles');

  return (
    <main className="z-10 flex min-h-screen flex-col gap-4 border-x border-slate-300 bg-white pt-4 pb-18 shadow-sm sm:px-4 sm:pt-28 xl:mx-20 xl:px-16">
      <div className="flex justify-between rounded-sm border-b border-slate-300 py-2">
        <TabButton
          isActive={activeTab === 'articles'}
          onClick={() => setActiveTab('articles')}
        >
          {publicationsTranslation[language].articles}
        </TabButton>
        <TabButton
          isActive={activeTab === 'media'}
          onClick={() => setActiveTab('media')}
        >
          {publicationsTranslation[language].media}
        </TabButton>
      </div>
      {activeTab === 'articles' && <Articles />}
      {activeTab === 'media' && <Media />}
    </main>
  );
};

export default Publications;

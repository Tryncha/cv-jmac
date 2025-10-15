import { useState } from 'react';
import { CloseIcon, CopyIcon } from '../components/Icons';
import Section from '../components/Section';
import articlesData from '../data/articles.json';
import { useSettings } from '../hooks/useSettings';
import { useModalProperties } from '../hooks/useModalProperties';

const articles = articlesData.reverse();

const articlesTraslation = {
  es: {
    articlesTitle: 'Artículos destacados'
  },
  en: {
    articlesTitle: 'Featured articles'
  }
};

interface ArticleProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  abstract: string;
  journal: string;
  authors: string[];
  date: string;
  issn: string[];
  url: string;
}

const Article = ({ imgSrc, imgAlt, title, abstract, journal, authors, date, issn, url }: ArticleProps) => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useModalProperties(isImageOpen, () => setIsImageOpen(false));

  const MAX_LENGTH = 700;

  async function copyUrl() {
    if (isCopied) return null;

    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
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
    <>
      {isImageOpen && (
        <div
          className="fixed inset-0 z-40 flex h-screen items-center justify-center bg-slate-900/80"
          onClick={() => setIsImageOpen(false)}
        >
          <div className="absolute top-36 right-24 size-16 cursor-pointer hover:drop-shadow-xs hover:drop-shadow-white">
            <CloseIcon size="64" />
          </div>
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
        <div className="flex w-3/4 flex-col px-4">
          <span className="font-medium">{date}</span>
          <span className="font-medium">{journal}</span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg/6 font-bold text-blue-800 underline transition-colors hover:text-blue-600"
          >
            {title}
          </a>
          <span className="font-bold">{authors.join(', ')}</span>
          <p className="my-4">{abstract.length > MAX_LENGTH ? `${abstract.slice(0, MAX_LENGTH)}...` : abstract}</p>
          <span className="font-medium">ISSN: {issn.join(', ')}</span>
          <div className="flex items-center">
            <span className="font-medium">
              URL:{' '}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 underline transition-colors hover:text-blue-600"
              >
                {url}
              </a>
            </span>
            <div className="relative">
              {isCopied && (
                <div className="animate-fade-out pointer-events-none absolute left-9 inline rounded-sm bg-slate-600 px-3 text-center text-nowrap text-slate-50">
                  <div className="absolute top-1 -left-1 size-3 rotate-45 bg-slate-600" />
                  ¡Enlace copiado!
                </div>
              )}
              <button
                onClick={copyUrl}
                className="mx-2 cursor-pointer align-middle"
              >
                <CopyIcon size="16" />
              </button>
            </div>
          </div>
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
    <main className="z-10 flex min-h-screen flex-col gap-4 border-x border-slate-300 bg-white pt-4 pb-18 shadow-sm sm:px-4 sm:pt-28 xl:mx-20 xl:px-16">
      <Section title={articlesTraslation[language].articlesTitle}>
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
            issn={art.issn}
            url={art.url}
          />
        ))}
      </Section>
    </main>
  );
};

export default Articles;

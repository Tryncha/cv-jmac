import { useState } from 'react';
import { CopyIcon } from '../components/Icons';
import Section from '../components/Section';
import articlesData from '../data/articles.json';
import useSettings from '../hooks/useSettings';

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
  const [isCopied, setIsCopied] = useState(false);

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
      <article className="mt-2 flex gap-8 px-8 py-4 hover:rounded-sm hover:bg-slate-50">
        <div className="w-96 flex-shrink-0">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="h-72 w-full border border-slate-200 bg-white object-cover p-4 shadow-sm"
          />
        </div>
        <div className="flex w-3/4 flex-col px-4">
          <span className="font-medium">{date}</span>
          <span className="font-medium">{journal}</span>
          <a
            href={url}
            target="_blank"
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

const articles = articlesData.reverse();

const articlesTraslation = {
  es: {
    articlesTitle: 'Artículos destacados'
  },
  en: {
    articlesTitle: 'Featured articles'
  }
};

const Articles = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <main className="z-10 flex min-h-screen flex-col gap-5 border-x border-slate-300 bg-white px-6 pt-40 pb-15 shadow-sm xl:mx-20 xl:px-15 xl:pt-46">
      <Section title={articlesTraslation[language].articlesTitle}>
        {articles.map((art) => (
          <Article
            key={art.id}
            imgSrc={`images/articles/${art.id}.jpg`}
            imgAlt="Article Art"
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

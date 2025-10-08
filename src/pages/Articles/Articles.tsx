import articlesData from '../../data/articles.json';
import useSettings from '../../hooks/useSettings';
import './Articles.css';

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
  const MAX_LENGTH = 500;

  return (
    <article className="Article">
      <img
        src={imgSrc}
        alt={imgAlt}
        width={400}
        height={250}
      />
      <div className="Article-info">
        <div className="Article-secondaryInfo">
          <span>{date}</span>
          <span>{journal}</span>
        </div>
        <a
          href={url}
          target="_blank"
        >
          <h2>{title}</h2>
        </a>
        <span className="Article-authors">{authors.join(', ')}</span>
        <p>{abstract.length > MAX_LENGTH ? `${abstract.slice(0, MAX_LENGTH)}...` : abstract}</p>
        <div className="Article-codes">
          <span>
            <strong>ISSN:</strong> {issn.join(', ')}
          </span>
        </div>
        <div>
          <strong>URL: </strong>
          <a
            href={url}
            target="_blank"
          >
            {url}
          </a>
          {/* <button>Copiar vínculo</button> */}
        </div>
      </div>
    </article>
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
    <main className="Articles">
      <section>
        <h2 className="u-vitaeSubtitle">{articlesTraslation[language].articlesTitle}</h2>
        <hr />
        <section className="Articles-container">
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
        </section>
      </section>
    </main>
  );
};

export default Articles;

import articlesData from '../../data/articles.json';
import useSettings from '../../hooks/useSettings';
import './Articles.css';
import Article from '../../components/Article/Article';

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
              doi={art.doi}
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

import articlesData from '../../data/articles.json';
import Section from '../../components/Section/Section';
import useSettings from '../../hooks/useSettings';
import './Home.css';
import Article from '../../components/Article/Article';

const articles = articlesData.reverse();

const homeTraslation = {
  es: {
    articlesTitle: 'Artículos destacados'
  },
  en: {
    articlesTitle: 'Featured articles'
  }
};

const Home = () => {
  const { settings } = useSettings();
  const { language } = settings;

  return (
    <main className="Home">
      <Section title={homeTraslation[language].articlesTitle}>
        <section className="Articles">
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
              issn={art.issn}
              url={art.url}
            />
          ))}
        </section>
      </Section>
    </main>
  );
};

export default Home;

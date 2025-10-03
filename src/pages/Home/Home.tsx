import articlesData from '../../data/articles.json';
import Article from '../../components/Article/Article';
import Section from '../../components/Section/Section';
import useLanguage from '../../hooks/useLanguage';
import './Home.css';

const articles = articlesData;

const homeTraslation = {
  es: {
    articlesTitle: 'Artículos destacados'
  },
  en: {
    articlesTitle: 'Featured articles'
  }
};

const Home = () => {
  const { language } = useLanguage();

  return (
    <main className="Home">
      {/* <Section title={homeTraslation[language].articlesTitle}>
        <div className="Articles">
          {articles.map((art) => (
            <Article
              key={art.id}
              imgSrc={art.imgSrc}
              imgAlt={art.imgAlt}
              title={art.title}
              resume={art.resume}
              date={art.date}
              category={art.category}
            />
          ))}
        </div>
      </Section> */}
    </main>
  );
};

export default Home;

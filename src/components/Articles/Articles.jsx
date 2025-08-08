import './Articles.css';
import articles from './articles.json';

const ArticleCard = ({ imgSrc, imgAlt, title, resume, date, category }) => {
  return (
    <div className="ArticleCard">
      <img className="ArticleCard-img" src={imgSrc} alt={imgAlt} />
      <h3 className="ArticleCard-title">{title}</h3>
      <p className="ArticleCard-resume">{resume}</p>
      <div className="ArticleCard-footer">
        <span className="ArticleCard-date">{date}</span>
        &#x2022;
        <span className="ArticleCard-category">{category}</span>
      </div>
    </div>
  );
};

const Articles = () => {
  return (
    <section className="Articles">
      <h2 className="Articles-title">Articles</h2>
      <div className="Articles-articleCards">
        {articles.map((art) => (
          <ArticleCard
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
    </section>
  );
};

export default Articles;

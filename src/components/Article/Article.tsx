import './Article.css';

interface ArticleProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  resume: string;
  date: string;
  category: string;
}

const Article = ({ imgSrc, imgAlt, title, resume, date, category }: ArticleProps) => {
  return (
    <div className="Article">
      <img
        className="Article-img"
        src={imgSrc}
        alt={imgAlt}
      />
      <h3 className="Article-title">{title}</h3>
      <p className="Article-resume">{resume}</p>
      <div className="Article-footer">
        <span className="Article-date">{date}</span>
        &#x2022;
        <span className="Article-category">{category}</span>
      </div>
    </div>
  );
};

export default Article;

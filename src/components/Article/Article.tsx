import './Article.css';

interface ArticleProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  abstract: string;
  journal: string;
  authors: string[];
  date: string;
  doi: string;
  issn: string[];
  url: string;
}

const Article = ({
  // imgSrc,
  //  imgAlt,
  title,
  abstract,
  journal,
  authors,
  date,
  doi,
  issn,
  url
}: ArticleProps) => {
  const MAX_LENGTH = 500;

  return (
    <article className="Article">
      {/* <img
        src={imgSrc}
        alt={imgAlt}
        height={300}
        loading="lazy"
      /> */}
      <div className="Article-info">
        <div className="Article-secondaryInfo">
          <span>{date}</span>
          <span>{journal}</span>
        </div>
        <h2>{title}</h2>
        <span className="Article-authors">{authors.join(', ')}</span>
        <p>{abstract.length > MAX_LENGTH ? `${abstract.slice(0, MAX_LENGTH)}...` : abstract}</p>
        <div className="Article-codes">
          <span>
            <strong>DOI:</strong> {doi}
          </span>
          <span>
            <strong>ISSN:</strong> {issn.join(', ')}
          </span>
        </div>
        <span>
          <strong>URL:</strong>{' '}
          <a
            href={url}
            target="_blank"
          >
            {url}
          </a>
        </span>
      </div>
    </article>
  );
};

export default Article;

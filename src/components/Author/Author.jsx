import './author.css';

function Author({authorImg,author, date}){
  return(
    <dl className="author-wrap">
      <dt className="a11y-hidden">Author</dt>
      <dd className="author"><img src={process.env.PUBLIC_URL + authorImg} alt="" />{author}</dd>
      <dt className="a11y-hidden">Created</dt>
      <dd className="created">{date}</dd>
    </dl>
  );
}

export default Author;
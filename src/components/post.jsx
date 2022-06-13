import Category from './Category';
import './post.css';

function Post({img, author, date, category, title, content}){
  return(
    <li>
      <a href="post-view.html" className="post">
        <article>
          <img src={img} alt="" />
          <div className="contents-wrap">
            <Category category={category}/>
            <h3>{title}</h3>
            <dl className="author-wrap">
              <dt className="a11y-hidden">Author</dt>
              <dd className="author"><img src="./images/profile.jpg" alt="" />{author}</dd>
              <dt className="a11y-hidden">Created</dt>
              <dd className="created">{date}</dd>
            </dl>
            <p className="post-description">
              {content}
            </p>
          </div>
        </article>
      </a>
    </li>
  );
}

export default Post;  
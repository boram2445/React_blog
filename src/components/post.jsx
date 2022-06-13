import Category from './Category';
import Author from './Author';
import './post.css';
import authorImg from '../assets/profile.jpg';
import {useNavigate} from 'react-router-dom';

function Post({img, author, date, category, title, content}){
  let navigate = useNavigate(); 
  return(
    <li className="post" onClick={()=>{navigate('/post')}}>
      <article>
        <img src={img} alt="" />
        <div className="contents-wrap">
          <Category category={category}/>
          <h3>{title}</h3>
          <Author authorImg={authorImg} author={author} date={date}/>
          <p className="post-description">
            {content}
          </p>
        </div>
      </article>
    </li>
  );
}

export default Post;  
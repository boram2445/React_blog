import Category from '../Category/Category';
import Author from '../Author/Author';
import './post.css';
import {useNavigate} from 'react-router-dom';

function Post({data}){
  let {id, thumbnail, category, title, contents, created, userName, profileImg} = data;
  let navigate = useNavigate(); 
  return(
    <li className="post" onClick={()=>{navigate(`/post/${id}`)}}>
      <article>
        <img src={thumbnail} alt="" />
        <div className="contents-wrap">
          <Category category={category}/>
          <h3>{title}</h3>
          <Author authorImg={profileImg} author={userName} date={created}/>
          <p className="post-description">
            {contents[0].text}
          </p>
        </div>
      </article>
    </li>
  );
}

export default Post;  
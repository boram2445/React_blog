import './posts.css';
import Post from '../Post/post';
import postData from '../../data';

function Posts(){
  return(
    <ul className="posts">
      {postData.map((value, index)=>{
        return(
          <Post key={index} img={value.img} author={value.author} date={value.date} category={value.category} title={value.title} content={value.content}/>
        );
      })}
    </ul>
  );
}

export default Posts;
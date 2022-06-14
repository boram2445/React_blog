import './posts.css';
import Post from '../Post/post';

function Posts({postData}){
  const sortData = [...postData].sort((a,b)=>{
    return a.id < b.id ? 1 : -1;
  })
  return(
    <ul className="posts">
      {sortData.map((value)=>{
        return(
          <Post key={value.id} data={value}/>
        );
      })}
    </ul>
  );
}

export default Posts;
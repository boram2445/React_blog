import './postWrap.css';
import Author from '../Author/Author';
import Category from '../Category/Category';

function postWrap({postData, navigate}){
  let {category, title, contents, created, userName, profileImg} = postData;
  return(
    <section className="wrap-box">
      <div className="inner">
        <Author authorImg={profileImg} author={userName} date={created}/>
        <Category category={category}/>
        <div className="title-wrap">
          <h2>{title}</h2>
          <button className="btn-like">Like</button>
        </div>
        <hr />
        <div className="view-contents">
          {contents.map((value)=>{
            return(<Content element={value.type} text={value.text} src={value.src}/>);
          })}
        </div>
        <div className="btn-group">
          <a className="btn-modify">
            <span className="a11y-hidden">modify</span>
          </a>
          <button type="button" className="btn-delete">
            <span className="a11y-hidden">delete</span>
          </button>
        </div>
        <a className="btn-back" onClick={()=>{navigate('/')}}>
          <span className="a11y-hidden">Back</span>
        </a>
      </div>
    </section>
  );
}

function Content({element, text='', src=''}){
  if(element === 'p'){
    return(
      <p>{text}</p>
    );
  } else if(element === 'img'){
    return(
      <img src={src}/>
    );
  }
}

export default postWrap;
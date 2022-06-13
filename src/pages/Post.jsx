import './post.css';
import PostWrap from '../components/postWrap';

function Post(){
  return(
    <>
      <div className="banner" >
        {/* style="background-image: url(./images/post-background6.jpg)" */}
        <div className="max-width">
          <div className="banner-contents">
            <p className="today">May <em>25</em> Wednesday</p>
          </div>
        </div>
      </div>
      <div className="view">
        <div className="max-width">
          <PostWrap/>
        </div>
      </div>
    </>
  );
}

export default Post; 
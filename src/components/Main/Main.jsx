import './main.css';
import About from '../About/About';
import Posts from '../Posts/Posts';

function Main({postData, userData}){
  return(
    <main>
			<div className="max-width">
				<h2 className="a11y-hidden">Post</h2>
				<Posts postData={postData}></Posts>
        <About userData={userData}></About>
      </div>
		</main>
    );
}

export default Main; 
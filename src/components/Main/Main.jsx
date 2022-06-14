import './main.css';
import About from '../About/About';
import Posts from '../Posts/Posts';

function Main(){
  return(
    <main>
			<div className="max-width">
				<h2 className="a11y-hidden">Post</h2>
				<Posts></Posts>
        <About></About>
      </div>
		</main>
    );
}

export default Main; 
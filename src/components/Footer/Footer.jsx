import './footer.css';

function Footer(){
  return(
    <footer>
			<div className="max-width">
				<h2>©Weniv Corp.</h2>
				<button className="top-button" onClick={()=> {window.scrollTo(0, 0);}}>TOP</button>
			</div>
		</footer>
  );
}

export default Footer;
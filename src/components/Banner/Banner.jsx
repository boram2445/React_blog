import './banner.css';

function Banner({blogData}){
  return(
    <div className="banner">
			<div className="max-width">
				<div className="banner-contents">
					<p className="sub-text">{blogData.subTitle}</p>
					<p className="main-text">{blogData.mainTitle}</p>
					<p className="description">
						{blogData.description}
					</p>
				</div>
			</div>
		</div>
  );
}

export default Banner;
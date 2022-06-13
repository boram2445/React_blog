import './postWrap.css';
import Author from './Author';
import Category from '../components/Category';
import authorImg from '../assets/profile.jpg';

function postWrap(){
  return(
    <section className="wrap-box">
      <div className="inner">
        <Author authorImg={authorImg} author={'Chilli'} date={'2022.05.25'}/>
        <Category category={['Life', 'Style']}/>
        <div className="title-wrap">
          <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <button className="btn-like">Like</button>
        </div>
        <hr />
        <div className="view-contents">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
            facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
            dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
            nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
            cum incidunt repudiandae vel.
          </p>
          <img src="./images/post-background6.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
            facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
            dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
            nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
            cum incidunt repudiandae vel.
          </p>
        </div>
        <div className="btn-group">
          <a href="#" className="btn-modify">
            <span className="a11y-hidden">modify</span>
          </a>
          <button type="button" className="btn-delete">
            <span className="a11y-hidden">delete</span>
          </button>
        </div>
        <a href="./" className="btn-back">
          <span className="a11y-hidden">Back</span>
        </a>
      </div>
    </section>
  );
}

export default postWrap;
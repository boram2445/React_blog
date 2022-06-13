import './about.css';
import userImg from '../assets/profile.jpg';
import FacebookIcon from '../assets/Facebook.svg';
import TwitterIcon from '../assets/Twitter.svg';
import InstagramIcon from '../assets/Instagram.svg';
import GithubIcon from '../assets/Github.svg';

function About(){
  return(
    <aside className="about">
      <h2>About Me</h2>
      <img src={userImg} alt="" className="user-profile" />
      <p className="user-name">Chilli</p>
      <p className="user-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <h3>Categories</h3>
      <ul className="categories">
        <li><a href="#">Life</a></li>
        <li><a href="#">Style</a></li>
        <li><a href="#">Tech</a></li>
        <li><a href="#">Sport</a></li>
        <li><a href="#">Photo</a></li>
        <li><a href="#">Develop</a></li>
        <li><a href="#">Music</a></li>
      </ul>
      <h3>Follow</h3>
      <ul className="sns">
        <li>
          <a href="#">
            <img src={FacebookIcon} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={TwitterIcon} alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={InstagramIcon} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={GithubIcon} alt="GitHub" />
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default About; 
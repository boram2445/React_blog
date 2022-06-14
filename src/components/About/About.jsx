import './about.css';
import FacebookIcon from '../../assets/Facebook.svg';
import TwitterIcon from '../../assets/Twitter.svg';
import InstagramIcon from '../../assets/Instagram.svg';
import GithubIcon from '../../assets/Github.svg';

function About({userData}){
  let user1 = userData[0];
  return(
    <aside className="about">
      <h2>About Me</h2>
      <img src={user1.profileImg} alt="" className="user-profile" />
      <p className="user-name">{user1.name}</p>
      <p className="user-description">{user1.userInfo}</p>
      <h3>Categories</h3>
      <ul className="categories">
        {user1.category.map((value, index)=>{
          return(<li key={index}><a href="#">{value}</a></li>);
        })}
      </ul>
      <h3>Follow</h3>
      <ul className="sns">
        <li>
          <a href={user1.sns.Facebook} target="_blank">
            <img src={FacebookIcon} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href={user1.sns.Twitter} target="_blank">
            <img src={TwitterIcon} alt="Twitter" />
          </a>
        </li>
        <li>
          <a href={user1.sns.Instagram} target="_blank">
            <img src={InstagramIcon} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href={user1.sns.GitHub} target="_blank">
            <img src={GithubIcon} alt="GitHub" />
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default About; 
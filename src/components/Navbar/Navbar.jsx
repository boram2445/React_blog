import './navbar.css';
import Button from '../Button/Button';
import logo from '../../assets/Logo.svg';
import profileImg from '../../assets/profile.jpg';
import modifyIcon from '../../assets/icon-modify-white.svg';
import logoutIcon from '../../assets/icon-logout.svg';

function Navbar({navigate}){
  return(
    <header>
			<div className="max-width">
				<h1>
					<img src={logo} alt="My Blog" onClick={()=>{navigate('/React_blog/')}}/>
				</h1>
				<ul>
          {/* 로그인 */}
					<li class="profile-img">
						<img src={profileImg} alt="My Page" />
					</li>
					<li>
            <Button color={'blue'} icon={modifyIcon}>Write</Button>
					</li>
					<li>
            <Button color={'white'} icon={logoutIcon}>Logout</Button>
					</li>
				</ul>
			</div>
		</header>
  );
}

export default Navbar;
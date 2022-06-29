import "./navbar.css";
import Button from "../Button/Button";
import logo from "../../assets/Logo.svg";
import profileImg from "../../assets/profile.jpg";
import modifyIcon from "../../assets/icon-modify-white.svg";
import logoutIcon from "../../assets/icon-logout.svg";
import loginIcon from "../../assets/icon-login.svg";
import registerIcon from "../../assets/icon-register.svg";
import { useState } from "react";

function Navbar({ navigate }) {
  let [login, setLogin] = useState(false);
	function handleLogin(title){
		setLogin(!login);
	}
  return (
    <header>
      <div className="max-width">
        <h1>
          <img src={logo} alt="My Blog" onClick={() => {navigate("/React_blog/");}}/>
        </h1>
        <ul>
          {/* 로그인 */}
          {login === true 
					? <>
              <li class="profile-img">
                <img src={profileImg} alt="My Page" />
              </li>
              <li>
                <Button color={"blue"} icon={modifyIcon}>
                  Write
                </Button>
              </li>
              <li>
                <Button color={"white"} icon={logoutIcon} handleLogin={handleLogin}>
                  Logout
                </Button>
              </li>
            </>
          : <>
              <li>
                <Button color={"white"} icon={loginIcon} handleLogin={handleLogin}>
                  Login
                </Button>
              </li>
              <li>
                <Button color={"white"} icon={registerIcon}>
                  Register
                </Button>
              </li>
            </>
          }
        </ul>
      </div>
    </header>
  );
}

export default Navbar;

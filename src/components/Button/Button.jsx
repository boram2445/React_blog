import './button.css';

function Button({color='', icon, handleLogin, children}){
  return(
    <button className={`button ${color}`} onClick={()=>{handleLogin(children)}}>
      <img src={icon} alt="" />
      <span>{children}</span>
    </button>
  );
}

export default Button; 
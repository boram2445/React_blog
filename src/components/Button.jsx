import './button.css';

function Button({color='', icon, children}){
  return(
    <button class={`button ${color}`}>
      <img src={icon} alt="" />
      <span>{children}</span>
    </button>
  );
}

export default Button; 
import "./burgerMenu.css"
import {Link} from 'react-router-dom'

export default function BurgerMenu({menuOpen, closeMenu}){
    const user = false
    const className = (menuOpen) ? 'open' : ''
    
    return (
    <div className={`overlay ${menuOpen ? 'visible' : ''}`}>
      <div className={`burgerMenu overlay ${className}`}>
        {!user && <ul>
            <li><button className="LogoutRegistarButton">Registar</button></li>
            <li><button className="loginButton">Login</button></li>
        </ul> }
        {user && <ul>
            <li><Link className="link" to="/">Home</Link></li>
            <li><Link className="link" to="/">About</Link></li>
            <li><Link className="link" to="/">Contact</Link></li>
            <li><Link className="link" to="/wirte">Write</Link></li>
            <li><button className="LogoutRegistarButton"><Link className="link" to="/">Logout</Link></button></li>    
        </ul>}
      </div>
    </div>
    );
}
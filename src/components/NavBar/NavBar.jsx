import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { NavLink, Link } from "react-router-dom";
import logo from "../../logo.png"
const NavBar = () => {
    /*<li>
    <NavLink to={`/Categoria/3`}>Memorias</NavLink>
</li>*/
return (
    <>
        <header className='logo'>
    <nav className="nav-bar">
        <Link to={"/"}>
        <img href="" src={logo} className="logo-medidas" alt="" />
        </Link>
        <ul className="nav-item">
        <li>
            <NavLink to={`/Categoria/1`}>Procesadores</NavLink>
        </li>
            <li>
                <NavLink to={`/Categoria/2`}>Placas</NavLink>
            </li>

            <li>
                <NavLink to={`/Categoria/3`}>Memorias</NavLink>
            </li>
        </ul>
        <CartWidget/>
        
    </nav>
    
</header>

</>
)
}

export default NavBar
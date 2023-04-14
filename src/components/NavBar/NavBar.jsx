import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom";
//import logo from "./logo.jpg"

const NavBar = () => {
    return (
        <>
        <header className='logo'>
    <nav className="nav-bar">
        <Link>
        <img src="logo.png" alt="" />
        </Link>
        <ul className="nav-item">
        <li>
            <NavLink to={`/categoria/2`}>Procesadores</NavLink>
        </li>
            <li>
                <NavLink to={`/categoria/3`}>Placas</NavLink>
            </li>

            <li>
                <NavLink to={`/categoria/4`}>Mouse</NavLink>
            </li>

            <li>
                <NavLink to={`/categoria/5`}>Teclado</NavLink>
            </li>

        </ul>
        <CartWidget/>
        
    </nav>
    
</header>


<CartWidget/>
</>
    )
}


export default NavBar
import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget"
//import logo from "./logo.jpg"

function NavBar() {
    return (
        <>
        <header className='logo'>
    <nav className="nav-bar">
        <img src="logo.png" alt="" />
        <ul className="nav-item">
            <li>Procesadores</li>
            <li>Placas</li>
            <li>Mouse</li>
            <li>Teclado</li>
        </ul>
        
    </nav>
    
</header>


<CartWidget/>
</>
    )
}


export default NavBar